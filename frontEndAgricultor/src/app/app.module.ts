import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAgricultorComponent } from './login-agricultor/login-agricultor.component';
import { MenuAgricultorComponent } from './menu-agricultor/menu-agricultor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAgricultorComponent,
    MenuAgricultorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
