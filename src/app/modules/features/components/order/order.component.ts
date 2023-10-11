import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
orderFilter=[
  {value:'order_on_way',label:'Order on way'},
  {value:'delivered',label:'Delivered'},
  {value:'cancelled',label:'Cancelled'},
  {value:'returned',label:'Returned'},
];
products=[[1,1],[1,1]]

constructor(private router:Router){}

navigateTo(id:number)
{
  this.router.navigate(['order',id])
}
}
