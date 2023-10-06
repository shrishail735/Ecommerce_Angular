import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
   @Input() product:any
   @Input() index:any
   constructor(private router:Router)
   {}
   navigate()
   {
    this.router.navigate(['product-details',this.index])
   }
}
