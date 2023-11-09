import { Component, OnInit } from '@angular/core';
import { DataModel } from '../invoice-list/invoice.model';
import { InvoicesService } from '../invoices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.scss']
})
export class InvoiceViewComponent implements OnInit {
  invoiceData: DataModel;
  viewId: number;
  constructor(private invoiceservice: InvoicesService, private route: ActivatedRoute) {
    this.viewId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.ViewListData(this.viewId);
  }

  ViewListData(id: number) {
    this.invoiceservice.viewListData(id).subscribe(
      (data: DataModel) => {
        this.invoiceData = data;
        console.log('invoiceData' , this.invoiceData)
      }
    )
  }
}
