import { Component, OnInit } from '@angular/core';
import { of, from } from "rxjs";
import { tap, map, filter } from "rxjs/operators";
const source = from([1, 2, 3, 4, 5]);
// const source = of(1, 2, 3, 4, 5);
source
  .pipe(
    map(val => val + 10),
    map(val => val + 10),
    map(val => val + 10),
    filter(val => val < 34),
    map(val => val + 10),
    map(val => console.log(val + 10))
  )
  .subscribe();
@Component({
  selector: 'app-pipe-method',
  templateUrl: './pipe-method.component.html',
  styleUrls: ['./pipe-method.component.css']
})
export class PipeMethodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
