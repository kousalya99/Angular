import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { InvoicesService } from '../invoices.service';
import { DataModel } from '../invoice-list/invoice.model';
import { FormsModule,Validators,FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.scss']
})
export class InvoiceEditComponent implements OnInit {
  listId: number;
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
  constructor(
    private cdr : ChangeDetectorRef,
    private fb: FormBuilder,private router:Router,private route:ActivatedRoute,private invoiceservice:InvoicesService) { }

  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.listId=id;
    if(id){
      this.getListItemById(id);
      console.log(id)

    }
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
  getListItemById(id:number){
    this.invoiceservice.getListItemById(id).subscribe((data:DataModel)=>{
      this.invoiceForm.patchValue(data);
      data.items.forEach(item => {
        this.addItem(); 
        const lastIndex = this.item.length - 1;
        this.item.at(lastIndex).patchValue(item);
      });
      this.cdr.markForCheck();
    }) 
  }
  
  putListItem(){
    const editList=this.invoiceForm.value;
    if(this.listId){
      this.invoiceservice.putListItem(this.listId,editList).subscribe((data)=>{
        this.router.navigate(['pages/list-invoice']);
      })
    }
  }

  
}
