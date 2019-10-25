import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutingComponent } from './page-routing.component';
import { ProfileComponent } from '../profile/profile.component';
import { TestComponent } from '../test/test.component';
<<<<<<< HEAD
import {LandingComponent} from '../landing/landing.component';

=======
import { MapComponent } from '../map/map.component';
>>>>>>> map skills ready

const routes: Routes = [
  {
    path: '',
    component: PageRoutingComponent,
    children: [
<<<<<<< HEAD
      {path: 'profile', component: ProfileComponent},
      {path: 'landing', component: LandingComponent},
      {path: 'test', component: TestComponent}
=======
      { path: 'profile', component: ProfileComponent },
      { path: 'test', component: TestComponent },
      { path: 'map', component: MapComponent }
>>>>>>> map skills ready
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}
