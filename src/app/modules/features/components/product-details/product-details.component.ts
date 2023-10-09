import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
constructor(private router:Router)
{

}
ngOnInit()
{
  this.relatedProducts=menJeans;
}
handleAddToCart()
{
  this.router.navigate(['cart'])
}
}
