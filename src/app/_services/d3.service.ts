import { Injectable, EventEmitter } from '@angular/core';
import { EducationNode, EducationLink, ForceDirectedGraph } from '../_models';
import * as d3 from 'd3';

@Injectable()
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
   * while maintaining the d3 simulations physics
   */
  constructor() {}

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement, containerElement) {
    let svg: any;
    let container: any;
    let zoomed: any;
    let zoom: any;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = () => {
      const transform = d3.event.transform;
      container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
    };

    const initialTransform = d3.zoomIdentity.translate(527, 187).scale(0.18);
    zoom = d3.zoom().on('zoom', zoomed);
    svg.call(zoom).call(zoom.transform, initialTransform);
  }

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(element, node: EducationNode, graph: ForceDirectedGraph) {
    const d3element = d3.select(element);

    function started() {
      /** Preventing propagation of dragstart to parent elements */
      d3.event.sourceEvent.stopPropagation();

      if (!d3.event.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }

      d3.event.on('drag', dragged).on('end', ended);

      function dragged() {
        node.fx = d3.event.x;
        node.fy = d3.event.y;
      }

      function ended() {
        if (!d3.event.active) {
          graph.simulation.alphaTarget(0);
        }

        node.fx = null;
        node.fy = null;
      }
    }

    d3element.call(d3.drag().on('start', started));
  }

  /** The interactable graph we will simulate in this article
   * This method does not interact with the document, purely physical calculations with d3
   */
  getForceDirectedGraph(nodes: EducationNode[], links: EducationLink[], options: { width; height }) {
    const sg = new ForceDirectedGraph(nodes, links, options);
    return sg;
  }
}
