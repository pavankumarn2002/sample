import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-at-input',
  templateUrl: './at-input.component.html',
  styleUrls: ['./at-input.component.css']
})
export class AtInputComponent implements OnInit {
  parentMessage:string ="This Is The Message From Parent Component"  
  subjectReceive:any;
  constructor() { }

  ngOnInit(): void {
  }
}
