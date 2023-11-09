import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompanyService } from '../../company/company.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uploadForm = this.fb.group({
    file: [''],
  });
  selectedFile: any;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  constructor(private fb: FormBuilder, private companyservice: CompanyService) { }
  ngOnInit(): void {
  }
  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.companyservice.uploadfile(formData).subscribe((data) => {
        console.log('File uploaded successfully:', data);

      })
    }
  }
}