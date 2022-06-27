import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model: any = {
    userid: '',
    password: ''
  };
  showLoginWarningMessage: boolean = false;
  returnUrl: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    if (this.auth.validateUserTocken()) {
      //update your logic accordingly
      //this will trigger while user clicks on back button, 
      //before naviagting to login page
      alert('You will be logged out');
    }
    this.auth.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/doc/auth/dashboard';
  }

  login() {
    this.showLoginWarningMessage = false;
    console.log(this.model)
    if (this.auth.validateUserDetails(this.model)) {
      this.auth.setTocken();
      this.router.navigate([this.returnUrl]);
    } else {
      console.log('Invalid credentials');
      this.showLoginWarningMessage = true;
    }

  }
  register(){
    this.router.navigate(['/doc/auth/register']);
  }
}
