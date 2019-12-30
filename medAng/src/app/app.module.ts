import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material';
import {      
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,         
  MatDatepickerModule,          
  MatNativeDateModule,      
  MatRadioModule,           
  MatOptionModule,      
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher      
} from '@angular/material'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NewsComponent } from './components/news/news.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BodyComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ResponseResetComponent,
    RequestResetComponent,
    AboutusComponent,
    NewsComponent,
    ContactusComponent,

  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,    
    FormsModule,      
    ReactiveFormsModule,      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule, 
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
