import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Demo Project';
  isDisabled = false;
  name = "JavaScript";
  path = "../assets/angular.png"
  check = true;
  checks = true;

  mains = {
    color: 'blue',
    backgroundColor: 'red',
    borderRadius: '0px',
    border: '1px solid blue'
  }

  subs = {
    color: 'red',
    backgroundColor: 'blue',
    borderRadius: '7px',
    border: '1px solid red'
  }
}
