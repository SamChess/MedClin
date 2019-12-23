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

const appRoutes: Routes =[
  {
    path:'login',
    component: LoginComponent
  }, 

  {
    path:'signup',
    component: SignupComponent
  },  

  {
    path:'profile',
    component: ProfileComponent
  }, 

  {
    path:'aboutus',
    component: AboutusComponent
  }, 

  {
    path:'contactus',
    component: ContactusComponent
  }, 

  {
    path:'news',
    component: NewsComponent
  }, 
  
  {
    path:'request-password-reset',
    component: RequestResetComponent
  }, 
  
  {
    path:'response-password-reset',
    component: ResponseResetComponent
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
