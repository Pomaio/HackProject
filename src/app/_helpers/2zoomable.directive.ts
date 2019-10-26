import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { D3Service } from '../_services/d3.service';

@Directive({
  selector: '[appZoomableOf2]'
})
export class ZoomableDirective2 implements OnInit {
  @Input('appZoomableOf2') ZoomableOf2: ElementRef;

  constructor(private d3Service: D3Service, private _element: ElementRef) {}

  ngOnInit() {
    this.d3Service.applyZoomableBehaviour(this.ZoomableOf2, this._element.nativeElement);
  }
}
