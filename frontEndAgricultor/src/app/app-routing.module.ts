import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAgricultorComponent } from './login-agricultor/login-agricultor.component';
import { MenuAgricultorComponent } from './menu-agricultor/menu-agricultor.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'menu',component:MenuAgricultorComponent},
  {path:'login',component:LoginAgricultorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
