import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {PageRoutingModule} from './page-routing/page-routing.module';
import {PageRoutingComponent} from './page-routing/page-routing.component';
import {HeaderModule} from '../components/header/header.module';
import {FooterModule} from '../components/footer/footer.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ]})
export class PagesModule { }
