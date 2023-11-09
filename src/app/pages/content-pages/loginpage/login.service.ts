import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseurl='http://uat.factorized.io:7060/api/company'
  constructor(private http:HttpClient) { }
  login(payload){
    return this.http.post( 'http://uat.factorized.io:7060/api/auth/signin',payload)
  }
  getCompanyList(){
    return this.http.get(`${this.baseurl}`)
  }
  
}
