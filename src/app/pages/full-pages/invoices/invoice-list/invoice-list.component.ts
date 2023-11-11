import { Component, OnInit , ChangeDetectorRef } from '@angular/core';

import { InvoicesService } from '../invoices.service';
import { DataModel } from './invoice.model';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';


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
  exportToExcel() {
    const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');

  const formattedDateTime = `Invoice-${year}${month}${day}-${hours}${minutes}`;
  const fileName = `${formattedDateTime}.xlsx`;
 
    const dataToExport = this.lists.map(item => {
      return {
        'Invoice No': item.invoiceNo,
        'Invoice Date': item.invoicedate,
        'Due Date': item.dueDate,
        'Balance Due': item.balanceAmount,
        'Seller Details': item.sellerDtls,
        'Buyer Details': item.buyerDtls
      };
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName);
  }
}
