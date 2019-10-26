import { Component, Input } from '@angular/core';
import { EducationNode } from 'src/app/_models';
import { Router } from '@angular/router';

@Component({
  selector: '[appNodeVisual]',
  template: `
    <svg:g
      [attr.transform]="'translate(' + node.x + ',' + node.y + ')'"
      (dblclick)="onDoubleClick($event)"
      matTooltip="Кликните два раза для перехода на урок."
    >
      <svg:circle class="node" [attr.fill]="node.color" cx="0" cy="0" [attr.r]="node.r"></svg:circle>

      <svg:text class="node-name" [attr.font-size]="node.fontSize">
        {{ node.id }}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.scss']
})
export class NodeVisualComponent {
  @Input('appNodeVisual') node: EducationNode;

  constructor(public router: Router) {}

  onDoubleClick(event: any) {
    event.stopPropagation();
    this.router.navigate(['/test/' + this.node.chalengeId]);
  }
}
