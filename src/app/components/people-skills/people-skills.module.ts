import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PeopleSkillsComponent } from './people-skills.component';
import { NodeVisualComponent } from './visuals/node-visual/node-visual.component';
import { LinkVisualComponent } from './visuals/link-visual/link-visual.component';
import { D3Service } from 'src/app/_services';
import {ZoomableDirective2} from '../../_helpers/2zoomable.directive';
import {DraggableDirective2} from '../../_helpers/2draggable.directive';

@NgModule({
  declarations: [PeopleSkillsComponent, NodeVisualComponent, ZoomableDirective2, DraggableDirective2,  LinkVisualComponent],
  imports: [CommonModule, MatTooltipModule, RouterModule],
  exports: [PeopleSkillsComponent],
  providers: [D3Service]
})
export class PeopleSkillsModule {}
