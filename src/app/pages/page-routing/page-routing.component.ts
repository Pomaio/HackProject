import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {debounce, debounceTime, takeUntil, throttle, throttleTime, timeInterval} from 'rxjs/operators';

@Component({
  selector: 'app-page-routing',
  templateUrl: './page-routing.component.html'
})
export class PageRoutingComponent implements OnInit, OnDestroy {
  moveEvent$;
  countX = 0;
  countY = 0;
  destroy$ = new Subject();

  constructor() {
  }

  ngOnInit() {
    this.moveEvent$ = fromEvent(document, 'mousemove');
    this.moveEvent$.pipe(
      throttleTime(2),
      takeUntil(this.destroy$)
    ).subscribe((e) => {
      this.countX += e.movementX / 5;
      this.countY += e.movementY / 5;
      document.getElementById('page__container').style.backgroundPositionX = `${this.countX}px`;
      document.getElementById('page__container').style.backgroundPositionY = `${this.countY}px`;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
