import { Component, OnInit , ChangeDetectorRef } from '@angular/core';

import { InvoicesService } from '../invoices.service';
import { DataModel } from './invoice.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
lists:DataModel[]=[]
  constructor(private cdr : ChangeDetectorRef,private invoiceservice:InvoicesService,private router:Router) { }

  ngOnInit(): void {
    this.getListItems()
  }

  getListItems(){
    this.invoiceservice.getListItem().subscribe(
      (data:DataModel[])=>{
        this.lists=data;
        this.cdr.markForCheck();
      }
    )
  }
  getListItemById(id:number){
    this.router.navigate(['/pages/edit-invoice',id])
  }
  deleteList(id:number){
    this.invoiceservice.deleteList(id).subscribe(
      data=>{
        this.getListItems()
      }
    )
  }
}
