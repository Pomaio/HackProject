import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {PageRoutingModule} from './page-routing/page-routing.module';
import {PageRoutingComponent} from './page-routing/page-routing.component';
import {HeaderModule} from '../components/header/header.module';
import {FooterModule} from '../components/footer/footer.module';
import {TestComponent} from './test/test.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule, MatCheckboxModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule, MatRadioModule, MatPaginatorModule, MatProgressBarModule,
  MatStepperModule,
  MatTableModule
} from '@angular/material';
import {MapModule} from './map/map.module';
import {CarouselModule} from '../components/carousel/carousel.module';
import {RatingComponent} from './rating/rating.component';

@NgModule({
  declarations: [ProfileComponent, TestComponent, PageRoutingComponent, RatingComponent],
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
    MatRadioModule,
    PageRoutingModule,
    CarouselModule,
    MatTableModule,
    MatButtonToggleModule
  ],
  exports: [TestComponent]
})
export class PagesModule {
}
