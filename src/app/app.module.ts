import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaritaBeneficioComponent } from './garita-beneficio/garita-beneficio.component';
import { LoginBeneficioComponent } from './login-beneficio/login-beneficio.component';

@NgModule({
  declarations: [
    AppComponent,
    GaritaBeneficioComponent,
    LoginBeneficioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
