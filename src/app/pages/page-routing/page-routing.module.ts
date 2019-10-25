import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageRoutingComponent} from './page-routing.component';
import {ProfileComponent} from '../profile/profile.component';
import { TestComponent } from '../test/test.component';


const routes: Routes = [
  {
    path: '',
    component: PageRoutingComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'test', component: TestComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}
