import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, interval } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  SharingData = new Subject();

  public subject3 = new BehaviorSubject<number>(0);
  products: any = [
    { name: "apples", price: 10, onStock: "Y" },
    { name: "bananas", price: 5, onStock: "Y" },
    { name: "tomatoes", price: 11, onStock: "Y" }
  ];
  constructor() {
   /*//COLD OBSERVABLE
    console.log('OBSERVABLES:');
    const observable$ = new Observable((observer) => {
      const interval$ = interval(1000);
      interval$.subscribe((value: number) => {
        observer.next(value);
      });
    });
    observable$.subscribe((value) => {
      console.log('Cold #1 - Received:', value);
    });

    setTimeout(() => {
      observable$.subscribe((value) => {
        console.log('Cold #2 - Received:', value);
      });
    }, 2500);
   //HOT OBSERVABLE
    const subject$ = new Subject();

    interval(1000).subscribe((value: number) => {
      subject$.next(value);
    });

    const observable1$ = new Observable((observer) => {
      subject$.subscribe((value:any) => {
        observer.next(value);
      });
    });

    observable1$.subscribe((value) => {
      console.log('Hot #1 - Received:', value);
    });

    setTimeout(() => {
      observable1$.subscribe((value) => {
        console.log('Hot #2 - Received:', value);
      });
    }, 2500);*/
  }
}
