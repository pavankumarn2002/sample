import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AppErrorComponent } from './app-error/app-error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './doc/authentication/service/auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'doc', loadChildren: () => import('./doc/doc.module').then(m => m.DocModule)},
  { path: 'atm', loadChildren: () => import('./atm/atm.module').then(m => m.AtmModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component:DashboardComponent,canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path:'**', component:AppErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }