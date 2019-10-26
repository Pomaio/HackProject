import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapSkillsModule } from 'src/app/components/map-skills/map-skills.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapSkillsModule]
})
export class MapModule {}
