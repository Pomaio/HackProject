import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  moveEvent$;
  countX = 0;
  countY = 0;
  destroy$ = new Subject();

  ngOnInit() {
    this.moveEvent$ = fromEvent(document.getElementById('page__container'), 'mousemove');
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
