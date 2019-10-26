import { Component } from '@angular/core';
import { EducationNode, EducationLink } from 'src/app/_models';
import APP_CONFIG from 'src/app/app.config';
import { MAP_DEFAULT } from '../../_data/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  nodes: EducationNode[] = [];
  links: EducationLink[] = [];

  constructor() {
    const nodesTree = MAP_DEFAULT.nodes;
    const linksTree = MAP_DEFAULT.links;

    const N = APP_CONFIG.N;

    const getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 0; i < nodesTree.length; i++) {
      this.nodes.push(
        new EducationNode(
          i,
          nodesTree[i].r,
          nodesTree[i].fontSize,
          nodesTree[i].iamgeUrl,
          nodesTree[i].name,
          nodesTree[i].result,
          nodesTree[i].challengeId,
        )
      );
    }

    for (let i = 0; i < linksTree.length; i++) {
      /** increasing connections toll on connecting nodes */
      const sourceID = nodesTree.reduce((res, el, index) => {
        if (el.name === linksTree[i].source) {
          return index;
        }
        return res;
      }, 0);
      const targetID = nodesTree.reduce((res, el, index) => {
        if (el.name === linksTree[i].target) {
          return index;
        }
        return res;
      }, 0);

      /** connecting the nodes before starting the simulation */
      this.links.push(new EducationLink(sourceID, targetID));
    }
  }
}
