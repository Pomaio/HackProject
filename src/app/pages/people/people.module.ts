import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from './landing/landing.component';
import {PeopleComponent} from './people.component';
import {PeopleSkillsModule} from '../../components/people-skills/people-skills.module';

@NgModule({
  declarations: [PeopleComponent, LandingComponent],
  imports: [CommonModule, PeopleSkillsModule]
})
export class PeopleModule {}
