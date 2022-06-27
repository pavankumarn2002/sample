import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model!: any;
  registerForm!: FormGroup;
  message!: string;
  returnUrl!: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/doc/auth/dashboard';
    this.authService.logout();
  }
  // convenience getter for easy access to form fields  
  get f() { return this.registerForm.controls; }
  register(){
    this.authService.create(this.registerForm.value).subscribe((res: any) => {
      console.log('Post created successfully!');
      this.router.navigateByUrl('/doc/auth/login');
    })
  }

}
