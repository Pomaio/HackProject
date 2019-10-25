import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {PageRoutingModule} from './page-routing/page-routing.module';
import {PageRoutingComponent} from './page-routing/page-routing.component';
import {HeaderModule} from '../components/header/header.module';
import {FooterModule} from '../components/footer/footer.module';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule } from '@angular/material';




@NgModule({
  declarations: [ProfileComponent, TestComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[TestComponent]
})
export class PagesModule { }
