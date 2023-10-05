import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarContentComponent } from './components/navbar/navbar-content/navbar-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarContentComponent,
    FooterComponent,
    ProductCardComponent
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
    FooterComponent
  ]
})
export class SharedModule { }
