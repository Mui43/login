import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(public http:HttpClient) {

  }
  registerUser(data:any){
   return this.http.post('http://127.0.0.1/2-3/Project01/register.php', data);
  }

  loginUser(datalog:any){
    return this.http.post('http://127.0.0.1/2-3/Project01/login.php', datalog);
  }

  logoutUser(){
    return this.http.post('http://127.0.0.1/2-3/Project01/logout.php',{});
  }
}
