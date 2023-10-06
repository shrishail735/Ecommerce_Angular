import { Component } from '@angular/core';
import { menJeans } from 'src/Data/Men/men_jeans';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
selectedOption:any
reviews=[1,1,1]
relatedProducts:any;
ngOnInit()
{
  this.relatedProducts=menJeans;
}
handleAddToCart()
{
  console.log(this.selectedOption)
}
}
