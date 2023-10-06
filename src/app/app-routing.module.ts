import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/features/components/home/home.component';
import { ProductsComponent } from './modules/features/components/products/products.component';
import { CartComponent } from './modules/features/components/cart/cart.component';
import { ProductDetailsComponent } from './modules/features/components/product-details/product-details.component';
import { CheckoutComponent } from './modules/features/components/checkout/checkout.component';
import { PaymentComponent } from './modules/features/components/payment/payment.component';
import { PaymentSuccessComponent } from './modules/features/components/payment-success/payment-success.component';
import { OrderComponent } from './modules/features/components/order/order.component';
import { OrderDetailsComponent } from './modules/features/components/order-details/order-details.component';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';

const routes: Routes = [
  {path:"admin", loadChildren:()=>import('./modules/admin/admin-routing.module').then(m=>AdminRoutingModule)}
,
  {path:"", component:HomeComponent},
  {path:"cart", component:CartComponent},
  {path:"product-details/:id",component:ProductDetailsComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"checkout/payment/:id",component:PaymentComponent},
  {path:"payment-success",component:PaymentSuccessComponent},
  {path:"account/orders",component:OrderComponent},
  {path:"order/:id",component:OrderDetailsComponent},
  {path:":section/:category/:type",component:ProductsComponent},
 {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
