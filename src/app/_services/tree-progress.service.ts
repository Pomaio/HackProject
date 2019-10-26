import { Injectable } from '@angular/core';
import { AuthenticationService } from '.';

interface UserProgress {
  finishedNodes: number[];
}

@Injectable({
  providedIn: 'root'
})
export class TreeProgressService {
  constructor(public auth: AuthenticationService) {}

  saveCurrentProgress(nodeId: number[]) {
    if (this.auth.currentUserValue) {
      const name = this.auth.currentUserValue.firstName;
      const test = JSON.parse(localStorage.getItem(name));
      const alreadyFinished = test ? test : [];
      nodeId.forEach(item => {
        if (!alreadyFinished.includes(item)) {
          alreadyFinished.push(item);
        }
      });
      localStorage.setItem(name, JSON.stringify(alreadyFinished));
    }
  }

  getCurrentProgress(): number[] {
    if (this.auth.currentUserValue) {
      const name = this.auth.currentUserValue.firstName;
      const test = JSON.parse(localStorage.getItem(name));
      const alreadyFinished = test ? test : [];
      return alreadyFinished;
    }
    return [];
  }
}
