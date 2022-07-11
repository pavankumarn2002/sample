import { Component } from '@angular/core';
import { DataSharingService } from './data-sharing.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { ExternalService } from './external.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = " ";
  /* Component2Data: any
   constructor(private dataShare: DataSharingService) {
     this.dataShare.SharingData.subscribe((res: any) => {
       this.Component2Data = res;
     })
 
     const observable1 = interval(400);
     const observable2 = interval(300);
      
     const subscription = observable1.subscribe(x => console.log('first: ' + x));
     const childSubscription = observable2.subscribe(x => console.log('second: ' + x));
      
     subscription.add(childSubscription);
      
     setTimeout(() => {
       // Unsubscribes BOTH subscription and childSubscription
       subscription.unsubscribe();
     }, 1000);
   }*/
   constructor(private ex: ExternalService) {}
   ngAfterViewInit() {
    console.log("ngAfterViewInit Child component called.....");
    this.ex.load(
      "http://i2frontend.cu.ma/Documentation/jq/doc.js",
      "http://i2frontend.cu.ma/Documentation/jq/index.js",
      "http://i2frontend.cu.ma/Documentation/jq/cell.js",
      "http://i2frontend.cu.ma/Documentation/jq/slide.js",
      "http://i2frontend.cu.ma/Documentation/jq/input.js",
      "http://i2frontend.cu.ma/Documentation/jq/tabs.js"
    );
  }
}
