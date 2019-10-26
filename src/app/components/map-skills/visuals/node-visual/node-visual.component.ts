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
      <defs>
        <pattern id="pat" [attr.x]="-node.r" [attr.y]="-node.r" [attr.width]="node.r * 2" [attr.height]="node.r * 2">
          <image
            [attr.x]="-node.r"
            [attr.y]="-node.r"
            [attr.width]="node.r * 2"
            [attr.height]="node.r * 2"
            xlink:href="jupitier.svg"
          ></image>
        </pattern>
      </defs>
      <svg:circle class="node" fill="url('#pat')" cx="0" cy="0" [attr.r]="node.r"></svg:circle>

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
