import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductCardComponent } from './components/home/product-card/product-card.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { ProductsComponent } from './components/products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductCardComponent,
    ProductSliderComponent,
    ProductsComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    MainCarouselComponent,
    ProductCardComponent,
    ProductSliderComponent,
    ProductsComponent,
   
  ]
})
export class FeaturesModule { }
