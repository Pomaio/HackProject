import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PageRoutingModule } from './page-routing/page-routing.module';
import { PageRoutingComponent } from './page-routing/page-routing.component';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatStepperModule,
  MatTableModule
} from '@angular/material';
import { MapModule } from './map/map.module';
import { CarouselModule } from '../components/carousel/carousel.module';
import { RatingComponent } from './rating/rating.component';
import { TasksComponent } from './tasks/tasks.component';
import { ResultsComponent } from './results/results.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [ProfileComponent, TestComponent, PageRoutingComponent, RatingComponent, TasksComponent, ResultsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MapModule,
    MatPaginatorModule,
    MatRadioModule,
    PageRoutingModule,
    CarouselModule,
    MatTableModule,
    MatExpansionModule,
    MatProgressBarModule,
    LoginModule,
    MatButtonToggleModule,
    HomeModule
  ],
  exports: [TestComponent]
})
export class PagesModule { }
