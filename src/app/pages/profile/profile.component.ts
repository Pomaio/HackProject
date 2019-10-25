import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel', { static: true }) carousel: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const instances = M.Carousel.init(this.carousel.nativeElement, null);
  }
}
