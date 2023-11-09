import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });
  constructor(private loginservice: LoginService, private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit() {
    let userData = this.loginForm.value;
    this.loginservice.login(userData).subscribe(
      (response : any) => {
        const accessToken =   response.accessToken ; 
        localStorage.setItem('access_token', accessToken);
        this.router.navigate(['/pages']);
      },
    );
  }
}
