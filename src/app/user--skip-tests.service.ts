import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSkipTestsService {

  constructor(private http:HttpClient) { }


  public sendDataWithFile(data:any){
    return this.http.post("http://localhost:8081/saveDataWithExcellFile", data, {responseType:'json'});
  }
}
