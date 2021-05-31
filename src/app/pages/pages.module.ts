import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PricingComponent } from './pricing/pricing.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HijoComponent } from '../pages/hijo/hijo.component';
import { RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';



@NgModule({
  declarations: [HomeComponent, PricingComponent, HijoComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
  ],
  exports: [
    HomeComponent,
    PricingComponent,
    HijoComponent,
    PagesRoutingModule
  ],
  providers:
   [
  ]
})
export class PagesModule { }
