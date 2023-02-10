import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes',
  templateUrl: './builtin-pipes.component.html',
  styleUrls: ['./builtin-pipes.component.css']
})
export class BuiltinPipesComponent implements OnInit {
  toDate: Date = new Date();
  msg: string= 'Welcome to Angular';
  num: number= 9542.14554;
  per: number= .7414;
  cur: number= 175;
  constructor() { }

  ngOnInit(): void {
  }

}
