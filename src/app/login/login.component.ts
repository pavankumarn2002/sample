import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../subject.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model!: any;
  loginForm!: FormGroup;
  message!: string;
  returnUrl!: string;
  logInUrl!: string;
  tokenSend!:any;
  tokenS:any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private subjectService:SubjectService
  ) { 
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    this.  logInUrl = '/login';
    this.authService.logout();
  }
  // convenience getter for easy access to form fields  
  get f() { return this.loginForm.controls; }
  logArr:any[]=[];
  login() {
    // stop here if form is invalid  
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.authService.getAll().subscribe(x => {
        this.model = x;
       
        console.log(this.loginForm.value);
        for (let y of this.model) {
          if (this.f['userid'].value == y.userid && this.f['password'].value == y.password) {
            console.log("Login successful");
            //this.authService.authLogin(this.model);  
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('token', this.f['userid'].value);
            this.router.navigate([this.returnUrl]);
            this.tokenS=1
            this.logArr.push(this.tokenS)
          }
          else {
            this.message = "Please check your userid and password";
            this.tokenS=0
            this.logArr.push(this.tokenS)
          }
          for(let i=0;i<this.logArr.length;i++){
                 if(this.logArr[i]==1){
                  this.tokenSend=1
                 }
          }
          this.subjectService.setLoginToken(this.tokenSend);
        }
      })
    }
  }
  register(){
    this.router.navigate(['/register']);
  }
} 