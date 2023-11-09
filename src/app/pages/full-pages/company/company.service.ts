import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseurl = 'http://uat.factorized.io:7060/api/company'


  constructor(private http: HttpClient) { }
  login(payload) {
    return this.http.post('http://uat.factorized.io:7060/api/auth/signin', payload)
  }
  getCompanyList() {
    return this.http.get(`${this.baseurl}`)
  }
  getCompanyListById(id: number) {
    return this.http.get(`${this.baseurl}/${id}`)
  }
  private getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }
  private createAuthHeaders(): HttpHeaders {
    const token = this.getAccessToken();
    return new HttpHeaders().set('x-access-token', token);
  }
  updateCompanyList(id: number, updateCompany: any) {
    const headers = this.createAuthHeaders();
    return this.http.put(`${this.baseurl}/${id}`, updateCompany, { headers })
  }
  uploadfile(formData) {
    const token = this.getAccessToken();
    let headers = new HttpHeaders().set('directory' , 'itemmaster');
      // headers.append('x-access-token', token);
      // headers.append('directory', 'itemmaster');
    return this.http.post('http://uat.factorized.io:7060/api/upload', formData, { headers })
  }
}
