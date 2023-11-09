import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel } from './invoice-list/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  private baseurl="http://localhost:3000/list"
  constructor(private http:HttpClient) { }
  savelist(formlist:DataModel){
    return this.http.post(`${this.baseurl}`,formlist);
  }
  getListItem(){
    return this.http.get(`${this.baseurl}`);
  }
  deleteList(id:number){
    return this.http.delete(`${this.baseurl}/${id}`)
  }
  getListItemById(id:number){
    return this.http.get(`${this.baseurl}/${id}`);
  }
  putListItem(id:number,editList:any){
    return this.http.put(`${this.baseurl}/${id}`,editList)
  }
 viewListData(id:number){
  return this.http.get(`${this.baseurl}/${id}`);
 }
}
