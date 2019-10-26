import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSkillsComponent } from './map-skills.component';
import { DraggableDirective, ZoomableDirective } from 'src/app/_helpers';
import { NodeVisualComponent } from './visuals/node-visual/node-visual.component';
import { LinkVisualComponent } from './visuals/link-visual/link-visual.component';
import { D3Service } from 'src/app/_services';

@NgModule({
  declarations: [MapSkillsComponent, DraggableDirective, ZoomableDirective, NodeVisualComponent, LinkVisualComponent],
  imports: [CommonModule],
  exports: [MapSkillsComponent],
  providers: [D3Service]
})
export class MapSkillsModule {}
