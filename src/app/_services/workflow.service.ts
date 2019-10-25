import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '.';
import {environment} from '../../environments/environment';
import {Role} from '../_models';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  private readonly WORKFLOW_EVENTS = environment.workflow;
  private userRoles$: Observable<Set<Role>>;

  constructor(private authService: AuthenticationService) {
    this.userRoles$ = this.authService.currentUser$.pipe(
      switchMap(user => {
        if (user) {
          return of(new Set<Role>(user.roles));
        } else {
          return of(new Set<Role>());
        }
      })
    );
  }

  public checkAuthorization(path: any): Observable<boolean> {
    return this.userRoles$.pipe(
      map(roles => this.doCheckAuthorization(path, roles))
    );
  }

  private doCheckAuthorization(path: string[], roles: Set<Role>): boolean {
    if (path.length) {
      const entry = this.findEntry(this.WORKFLOW_EVENTS, path);
      if (entry && entry['permittedRoles'] && roles.size) {
        return entry.permittedRoles.some(permittedRole =>
          roles.has(permittedRole)
        );
      }
      return false;
    }
    return false;
  }

  /**
   * Recursively find workflow-map entry based on the path strings
   */
  private findEntry(currentObject: any, keys: string[], index = 0) {
    const key = keys[index];
    if (currentObject[key] && index < keys.length - 1) {
      return this.findEntry(currentObject[key], keys, index + 1);
    } else if (currentObject[key] && index === keys.length - 1) {
      return currentObject[key];
    } else {
      return false;
    }
  }
}
