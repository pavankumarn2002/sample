import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  //For Ng Class & Ng Style Concept
  attrDr = true;
  attrDrs = true;
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
