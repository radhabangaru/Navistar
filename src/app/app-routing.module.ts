import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent,canActivate:[authGuard] },

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
