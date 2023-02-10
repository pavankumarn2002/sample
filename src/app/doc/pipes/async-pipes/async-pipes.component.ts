import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
@Component({
  selector: 'app-async-pipes',
  templateUrl: './async-pipes.component.html',
  styleUrls: ['./async-pipes.component.css']
})
export class AsyncPipesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  obsValue = new Observable((observer) => {
    console.log("Observable starts")
    setTimeout(() => { observer.next("90000") }, 1000);
  }).pipe(shareReplay())
}
