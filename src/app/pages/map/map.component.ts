import { Component } from '@angular/core';
import { EducationNode, EducationLink } from 'src/app/_models';
import APP_CONFIG from 'src/app/app.config';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  nodes: EducationNode[] = [];
  links: EducationLink[] = [];

  constructor() {
    const N = APP_CONFIG.N;

    const getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new EducationNode(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new EducationLink(i, i * m));
      }
    }
  }
}
