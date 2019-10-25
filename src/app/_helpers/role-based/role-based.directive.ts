import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import {WorkflowService} from '../../_services/workflow.service';

@Directive({
  selector: '[appCanAccess]'
})
export class RoleBasedDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('appCanAccess') appCanAccess: string | string[];

  private permission$: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private workflowService: WorkflowService
  ) {}

  ngOnInit(): void {
    this.applyPermission();
  }

  private applyPermission(): void {
    this.permission$ = this.workflowService
      .checkAuthorization(this.appCanAccess)
      .subscribe(authorized => {
        if (authorized) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.permission$.unsubscribe();
  }
}
