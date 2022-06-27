import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtmServiceService } from 'src/app/atm-service.service';
import { AtmData } from 'src/app/atm-data';
@Component({
  selector: 'app-atm-view',
  templateUrl: './atm-view.component.html',
  styleUrls: ['./atm-view.component.css']
})
export class AtmViewComponent implements OnInit {
 id!:number;
 data!:AtmData ;
 paramId!:number;
 paramUserId!:any;
 paramName!:string;
 paramDate!:any;
 paramDeposit!:number;
 paramWithdraw!:number;
 paramBalance!:number;
 paramLocation!:any;
  constructor(private atm:AtmServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.atm.getElementById(this.id).subscribe((c:AtmData) => {
        this.data = c;
        this.paramId=this.data.id;
        this.paramUserId=this.data.userId;
        this.paramName=this.data.name;
        this.paramDate=this.data.date;
        this.paramDeposit=this.data.deposit;
        this.paramWithdraw=this.data.withdraw;
        this.paramBalance=this.data.balance;
        this.paramLocation=this.data.location;
      })
    });

    /*this.id = this.route.snapshot.params['postId'];
    this.contactService.getElementById(this.id).subscribe((data: Crud)=>{
      this.post = data;
    });*/
  }

}
