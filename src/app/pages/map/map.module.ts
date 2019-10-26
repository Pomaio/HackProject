import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import {LandingComponent} from './landing/landing.component';
import {MapSkillsModule} from '../../components/map-skills/map-skills.module';

@NgModule({
  declarations: [MapComponent, LandingComponent],
  imports: [CommonModule, MapSkillsModule]
})
export class MapModule {}
