import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navigation-routs',
  templateUrl: './navigation-routs.component.html',
  styleUrls: ['./navigation-routs.component.css']
})
export class NavigationRoutsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    console.log(this.route)
  }
  ngOnInit(): void {
  }
  navigationOne() {
    this.router.navigate(['navigation-one'], { relativeTo: this.route });
  }
  navigationTwo() {
    this.router.navigate(['navigation-two'], { relativeTo: this.route });
  }
}
