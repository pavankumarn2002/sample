import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Demo Project';
  name = "JavaScript";

  eventClick() {
    if (this.title == "Demo Project") {
      this.title = "Angular Project"
    } else {
      this.title = "Demo Project"
    }
  }
}
