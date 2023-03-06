import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaritaBeneficioComponent } from './garita-beneficio/garita-beneficio.component';
import { LoginBeneficioComponent } from './login-beneficio/login-beneficio.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'garita',component:GaritaBeneficioComponent},
  {path:'login',component:LoginBeneficioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
