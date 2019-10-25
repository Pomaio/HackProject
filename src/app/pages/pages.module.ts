import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {PageRoutingModule} from './page-routing/page-routing.module';
import {PageRoutingComponent} from './page-routing/page-routing.component';
import {HeaderModule} from '../components/header/header.module';
import {FooterModule} from '../components/footer/footer.module';



@NgModule({
  declarations: [ProfileComponent, PageRoutingComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [PageRoutingComponent]
})
export class PagesModule { }
