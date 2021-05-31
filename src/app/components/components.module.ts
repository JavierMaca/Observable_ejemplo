
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { PagesModule } from '../pages/pages.module';
import { DataService } from '../services/data.service';


@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,  // para poder usar el modulo de router, como por ejemplo routerLink
    PagesModule,
    ComponentsRoutingModule,
  ],
  exports: [
  ],
  providers:
   [
  ]
})
export class ComponentsModule { }
