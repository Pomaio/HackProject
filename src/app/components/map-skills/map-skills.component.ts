import {
  Component,
  Input,
  ChangeDetectorRef,
  HostListener,
  ChangeDetectionStrategy,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { D3Service } from 'src/app/_services';
import { ForceDirectedGraph, EducationNode, EducationLink } from 'src/app/_models';

@Component({
  selector: 'app-map-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
      <g [appZoomableOf]="svg">
        <g [appLinkVisual]="link" *ngFor="let link of links"></g>
        <g
          [appNodeVisual]="node"
          *ngFor="let node of nodes"
          [appDraggableNode]="node"
          [appDraggableInGraph]="graph"
        ></g>
      </g>
    </svg>
  `,
  styleUrls: ['./map-skills.component.scss']
})
export class MapSkillsComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes: EducationNode[];
  @Input('links') links: EducationLink[];
  graph: ForceDirectedGraph;
  _options: { width: number; height: number } = { width: 800, height: 600 };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }

  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);

    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe(d => {
      this.ref.markForCheck();
    });
  }

  get options() {
    return (this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
}
