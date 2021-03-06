import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MapSkillsComponent } from './map-skills.component';
import { NodeVisualComponent } from './visuals/node-visual/node-visual.component';
import { LinkVisualComponent } from './visuals/link-visual/link-visual.component';
import { D3Service } from 'src/app/_services';
import {DraggableDirective, ZoomableDirective} from '../../_helpers';

@NgModule({
  declarations: [MapSkillsComponent, DraggableDirective, ZoomableDirective, NodeVisualComponent, LinkVisualComponent],
  imports: [CommonModule, MatTooltipModule, RouterModule],
  exports: [MapSkillsComponent],
  providers: [D3Service]
})
export class MapSkillsModule {}
