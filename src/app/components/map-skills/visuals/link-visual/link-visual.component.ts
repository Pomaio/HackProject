import { Component, Input } from '@angular/core';
import { EducationLink } from 'src/app/_models';

@Component({
  selector: '[appLinkVisual]',
  template: `
    <svg:line
      class="link"
      [attr.x1]="link.source.x"
      [attr.y1]="link.source.y"
      [attr.x2]="link.target.x"
      [attr.y2]="link.target.y"
    ></svg:line>
  `,
  styleUrls: ['./link-visual.component.scss']
})
export class LinkVisualComponent {
  @Input('appLinkVisual') link: EducationLink;
}
