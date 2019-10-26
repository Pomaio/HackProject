import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel', { static: true }) carousel: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const instances = M.Carousel.init(this.carousel.nativeElement, null);
  }
}
