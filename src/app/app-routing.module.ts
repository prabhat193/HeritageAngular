import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Browser } from 'selenium-webdriver';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule,
FontAwesomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
