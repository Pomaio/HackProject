import { Component, Input } from '@angular/core';
import { EducationNode } from 'src/app/_models';
import { Router } from '@angular/router';

@Component({
  selector: '[appNodeVisual]',
  template: `
    <svg:g
      [attr.transform]="'translate(' + node.x + ',' + node.y + ')'"
      (dblclick)="onDoubleClick($event)"
      [matTooltip]="node.name + '// Кликните два раза для перехода на урок.'"
    >
      <defs>
        <pattern [attr.id]="'pat' + node.id" [attr.x]="0" [attr.y]="0" width="100%" height="100%">
          <image
            xmlns:xlink="http://www.w3.org/1999/xlink"
            [attr.x]="node.r / 2"
            [attr.y]="node.r / 2"
            [attr.width]="node.r"
            [attr.height]="node.r"
            [attr.xlink:href]="node.imageUrl"
          ></image>
        </pattern>
      </defs>
      <svg:circle class="node" [attr.fill]="evaluateImageUrl()" cx="0" cy="0" [attr.r]="node.r"></svg:circle>

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

  evaluateImageUrl() {
    return `url('#pat${this.node.id}')`;
  }

  onDoubleClick(event: any) {
    event.stopPropagation();
    this.router.navigate(['/test/' + this.node.chalengeId]);
  }
}
