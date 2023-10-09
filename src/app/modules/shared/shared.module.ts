import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarContentComponent } from './components/navbar/navbar-content/navbar-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarContentComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    
  ],
  exports:[
    NavbarComponent,
    NavbarContentComponent,
    ProductCardComponent,
    FooterComponent,
    StarRatingComponent,
    CartItemComponent
  ]
})
export class SharedModule { }
