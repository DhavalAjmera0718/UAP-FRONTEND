import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterfirstComponent } from './Component/registerfirst/registerfirst.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
    {path:'',redirectTo:'/registerfirst',pathMatch :'full'},
    {path:'register',component:RegisterComponent},
    {path:'registerfirst',component:RegisterfirstComponent},
    {path:'login',component:LoginComponent},
    {path:'dashborad',component:DashboardComponent},
    {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
