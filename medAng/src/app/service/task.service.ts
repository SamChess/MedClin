import { Injectable } from '@angular/core';
import { Headers, RequestOptions} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  headers:Headers = new Headers();
  options:any;

  constructor() {
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-With','XMLHttpRequest');

    this.options = new RequestOptions({headers:this.headers})
   }
}
