import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }
  interpolation() {
    this.router.navigate(['interpolation'], { relativeTo: this.route });
  }
  propertyBinding() {
    this.router.navigate(['property-binding'], { relativeTo: this.route });
  }
  eventBinding() {
    this.router.navigate(['event-binding'], { relativeTo: this.route });
  }
  twoWayBinding() {
    this.router.navigate(['two-way-binding'], { relativeTo: this.route });
  }
 
}
