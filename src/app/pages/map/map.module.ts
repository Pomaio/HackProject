import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapSkillsModule } from 'src/app/components/map-skills/map-skills.module';
import {LandingComponent} from './landing/landing.component';

@NgModule({
  declarations: [MapComponent, LandingComponent],
  imports: [CommonModule, MapSkillsModule]
})
export class MapModule {}
