import { Component, OnInit } from '@angular/core';
import { FormsModule,Validators,FormBuilder, FormArray } from '@angular/forms';
import { DataModel } from '../invoice-list/invoice.model';
import { Router,ActivatedRoute } from '@angular/router';
import { InvoicesService } from '../invoices.service';


@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.scss']
})
export class InvoiceCreateComponent implements OnInit {
  items: DataModel[] = [];
  invoiceForm= this.fb.group({
    id:[],
    invoiceNo: [''],
    invoicedate: [''],
    dueDate: [''],
    balanceAmount: [''],
    sellerDtls:[''],
    buyerDtls:[''],
    items: this.fb.array([]),
  });
  listId: number;
 
 
  constructor(private fb:FormBuilder,private invoiceservice:InvoicesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
 
  }
 
  get item() {
    return this.invoiceForm.controls['items'] as FormArray;
  }
  addItem() { 
    const InvioceItem=this.fb.group({
       itemNo: [''],
       productDescription: [''],
       hours: [''],
       totalAmount: [''],
     });
     this.item.push(InvioceItem)
   }
  savelist(){
    let formlist=this.invoiceForm.value;
    this.invoiceservice.savelist(formlist).subscribe(
      (data:DataModel)=>{
        this.invoiceForm.reset();
        this.router.navigate(['pages/list-invoice'])  
      }
    )
  
  }
  
}
