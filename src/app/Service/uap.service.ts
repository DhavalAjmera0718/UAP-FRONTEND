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

  loginAdmin(logindata :any){
    return this.http.post("http://localhost:8095/auth/login",logindata)
  }

  approveData(id:any){
    return this.http.post("http://localhost:8095/approvedById/"+id ,{responseType:'json'});
  }

  rejectDadta(id:any)
  {
    return this.http.get("http://localhost:8095/rejectById/"+ id, {responseType:'json'});
  }


  getAllAproveData(){
    return this.http.get("http://localhost:8095/getAllAcceptedData", {responseType:'json'});
  }

  getAllPendingData(){
    return this.http.get("http://localhost:8095/getAllPendingData", {responseType:'json'});
  }
}
