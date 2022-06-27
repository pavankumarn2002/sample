import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = "JavaScript";
  count = 0;

  eventClicked() {
    this.name = "Angular"
    this.count++
    if (this.count > 1) {
      this.count == 1
    }
  }
  doubleClicked() {
    if (this.count % 2 == 0) {
      this.name = "Angular"
    } else {
      this.name = "JavaScript"
    }
    this.count++
  }

}
