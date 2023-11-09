import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companyList :Company[]=[]
  constructor(private cdr : ChangeDetectorRef,private companyservice:CompanyService,private router:Router){
   
  }

  ngOnInit(): void {
    this.getCompanyLists()
  }

  getCompanyLists(){
    this.companyservice.getCompanyList().subscribe(
      (data:Company[])=>{
       this.companyList=data;
       this.cdr.markForCheck();
      }
    )
  }
  getCompanyListById(id:number){
    this.router.navigate(['/pages/companyedit',id])
  }
}
