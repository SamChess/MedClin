import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NewsComponent } from './components/news/news.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const appRoutes: Routes =[
  {
    path:'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  }, 

  {
    path:'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },  

  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  }, 

  {
    path:'aboutus',
    component: AboutusComponent,
    canActivate: [AfterLoginService]
  }, 

  {
    path:'contactus',
    component: ContactusComponent,
    canActivate: [AfterLoginService]
  }, 

  {
    path:'news',
    component: NewsComponent,
    canActivate: [AfterLoginService]
  }, 
  
  {
    path:'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  }, 
  
  {
    path:'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },  

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
