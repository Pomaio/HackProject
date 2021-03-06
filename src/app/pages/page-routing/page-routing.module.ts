import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutingComponent } from './page-routing.component';
import { ProfileComponent } from '../profile/profile.component';
import { TestComponent } from '../test/test.component';
import { LandingComponent } from '../map/landing/landing.component';
import { MapComponent } from '../map/map.component';
import { RatingComponent } from '../rating/rating.component';
import { TasksComponent } from '../tasks/tasks.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import {PeopleComponent} from '../people/people.component';

const routes: Routes = [
  {
    path: '',
    component: PageRoutingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'test/:id', component: TestComponent },
      { path: 'map', component: MapComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'rate', component: RatingComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
