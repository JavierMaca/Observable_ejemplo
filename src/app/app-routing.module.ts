import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';


export const routes: Routes = [

  // {path: '', redirectTo: 'componente', pathMatch: 'full'},
  {path: '', component: NavbarComponent,
  children:
  [
    {
      path: '', loadChildren: () => import ('./components/components.module').then(m => m.ComponentsModule)
    },
  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
