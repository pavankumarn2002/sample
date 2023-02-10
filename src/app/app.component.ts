import { Component } from '@angular/core';
import { DataSharingService } from './data-sharing.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { SubjectService } from './subject.service';
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
  returnUrl!: string;
  loginUrl!: string;
  tokenReceive!:any;

  constructor(private ex: ExternalService, private router: Router, private subjectService: SubjectService) {
    this.returnUrl = '/dashboard';
    this.loginUrl = '/login';
  }

  dash() {
    this.subjectService.getLoginToken().subscribe((res: any) => {
      this.tokenReceive = res;
    });
    if (this.tokenReceive == 1) {
      this.router.navigate([this.returnUrl]);
    } 
  }
  
  ngAfterViewInit() {
    console.log("ngAfterViewInit Child component called.....");
    this.ex.load(
      "https://res.cloudinary.com/veraion9/raw/upload/v1658938994/i2/jq%28dynamic%29/doc.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658908893/i2/jq%28dynamic%29/cell.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658938953/i2/jq%28dynamic%29/index.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658909046/i2/jq%28dynamic%29/input.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658912742/i2/jq%28dynamic%29/slide.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658942369/i2/jq%28dynamic%29/tabs.js"
    );
  }
}
