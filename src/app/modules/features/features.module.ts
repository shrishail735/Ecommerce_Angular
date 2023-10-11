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
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductReviewCardComponent } from './components/product-details/product-review-card/product-review-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddressFormComponent } from './components/checkout/address-form/address-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { OrderCardComponent } from './components/order/order-card/order-card.component';

@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductCardComponent,
    ProductSliderComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    OrderComponent,
    OrderDetailsComponent,
    PaymentSuccessComponent,
    ProductReviewCardComponent,
    AddressFormComponent,
    OrderCardComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule,
    FormsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
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
