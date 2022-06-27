import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-output',
  templateUrl: './at-output.component.html',
  styleUrls: ['./at-output.component.css']
})
export class AtOutputComponent implements OnInit {
  cData: any;
  constructor() { }

  ngOnInit(): void {
  }
  displayCounter(customer:any) {
    console.log(customer);
    this.cData=customer
  }
}
