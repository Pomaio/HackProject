import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { EducationNode, ForceDirectedGraph } from '../_models';
import { D3Service } from '../_services/d3.service';

@Directive({
  selector: '[appDraggableNode]'
})
export class DraggableDirective implements OnInit {
  @Input('appDraggableNode') draggableNode: EducationNode;
  @Input('appDraggableInGraph') draggableInGraph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef) {}

  ngOnInit() {
    this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
  }
}
