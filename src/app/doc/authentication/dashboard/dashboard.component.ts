import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData!: any
  constructor(private auth: AuthService, private route: Router) {
    this.getData()
  }
  logOut() {
    this.auth.logout();
    this.route.navigate(['/doc/auth/login']);
  }
  getData() {
    this.auth.getAll().subscribe(x => {
      this.userData = x;
    })
  }
  ngOnInit(): void {
  }
  deleteDetails(x: any) {
    this.auth.delete(x).subscribe((y: any) => {
      console.log('Post deleted successfully!');
      this.getData()
    })
  }
}
