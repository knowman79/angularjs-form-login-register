import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotComponent } from './auth/forgot/forgot.component';

const routes: Routes = [
  {
    path:'Login',
    component: LoginComponent
  },
  {
    path:'Register',
    component : RegisterComponent
  },
  {
    path:'forgot',
    component:ForgotComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/Login'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
