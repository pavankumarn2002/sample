import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaining-pipes',
  templateUrl: './chaining-pipes.component.html',
  styleUrls: ['./chaining-pipes.component.css']
})
export class ChainingPipesComponent implements OnInit {
  toDate: Date = new Date();
  msg: string= 'Welcome to Angular';
  num: number= 9542.14554;
  per: number= .7414;
  cur: number= 175;
  constructor() { }

  ngOnInit(): void {
  }

}
