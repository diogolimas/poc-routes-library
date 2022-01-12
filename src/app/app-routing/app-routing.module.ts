import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';


const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      { path: '', component: InicioComponent },
      {
        path: 'login',
        loadChildren: () => import(`security-app`).then( m => m.SecurityAppModule),    
      }
    
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
