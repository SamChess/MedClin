import { Component, OnInit,} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password:null

  };
  public error = null;


  constructor(private Jarwis:JarwisService,
    private Token:TokenService ) { }

  onSubmit(){
  this.Jarwis.login(this.form).subscribe(
    data => this.handleResponse(data),
    error => this.handleError(error)
  );
 
  }
  
  handleError(error){
    this.error = error.error.error;
  }

  handleResponse(data){
    this.Token.handle(data.access_token);

  }



  ngOnInit() {
  }

} 
