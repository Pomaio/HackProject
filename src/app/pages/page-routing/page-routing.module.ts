import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutingComponent } from './page-routing.component';
import { ProfileComponent } from '../profile/profile.component';
import { TestComponent } from '../test/test.component';
import { LandingComponent } from '../landing/landing.component';
import { MapComponent } from '../map/map.component';

const routes: Routes = [
  {
    path: '',
    component: PageRoutingComponent,
    children: [
      { path: 'landing', component: LandingComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'test', component: TestComponent },
      { path: 'map', component: MapComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}
