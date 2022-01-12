import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
})
export class SecurityAppModule { }
