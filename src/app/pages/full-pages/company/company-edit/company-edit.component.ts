import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  companyDetailForm = this.fb.group({
    logo: [''],
    name: [''],
    address: [''],
    city: [''],
    state: [''],
    pincode: [''],
    contactno: [''],
    email: [''],
    panno: [''],
    web: [''],
    gstno: ['']


  });
  companyId: number;
  constructor(private fb: FormBuilder,private router:Router,private route: ActivatedRoute,private companyservice:CompanyService) { }

  ngOnInit(): void {
  let id=parseInt(this.route.snapshot.paramMap.get('id'))
  this.companyId=id;
  this.getCompanyListById(id)
  }
  getCompanyListById(id:number){
    this.companyservice.getCompanyListById(id).subscribe((data:Company)=>{
      this.companyDetailForm.patchValue(data);
    })
  }
  
 updateCompanyList(){
  const updateCompany=this.companyDetailForm.value;
  if(this.companyId){
    this.companyservice.updateCompanyList(this.companyId,updateCompany).subscribe((data)=>{
      this.router.navigate(['pages/companylist'])
    })
  }
 }
}
