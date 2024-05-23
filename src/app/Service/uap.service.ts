import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UapService {

  constructor(private http : HttpClient) { 

  }

  PostFile(formdata : any){
return this.http.post("http://localhost:8095/postalldata",formdata,{responseType:'text'})
  }

  PreRegister(data : any){
    return this.http.post("http://localhost:8095/auth/registeradmin",data,{responseType:'text'})
  }
}
