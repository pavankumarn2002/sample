import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AtmServiceService } from 'src/app/atm-service.service';
import { AtmData } from 'src/app/atm-data';
import { AtmInnerService } from '../atm-inner.service';
@Component({
  selector: 'app-atm-transaction',
  templateUrl: './atm-transaction.component.html',
  styleUrls: ['./atm-transaction.component.css']
})
export class AtmTransactionComponent implements OnInit {
  currentDeposit!:number;
  currentWithdraw!:number;
  currentAccountNo!: any;
  currentName!: string;
  currentUserId!: any;
  currentDate!: any;
  form!: FormGroup;
  id!: number;
  data!: AtmData;
  postsSubscription: any;
  messages: any[] = []; currentBalance!: number;
  lastBalance!: number;
  constructor(
    public atm: AtmServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private inner: AtmInnerService,
  ) {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.atm.getElementById(this.id).subscribe(c => {
        this.data = c;
        this.currentAccountNo = this.data.accountNo
        this.currentName = this.data.name;
        this.currentUserId = this.data.userId;
        this.currentDate = new Date()
      })
    });
    this.inner.getPosts().subscribe((res: any) => {
      this.lastBalance=res;
      console.log( this.lastBalance)
    });
  
    /*this.id = this.route.snapshot.params['postId'];
    this.contactService.getElementById(this.id).subscribe((data: Crud)=>{
      this.post = data;
    });*/
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      accountNo: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required),
      deposit: new FormControl('', Validators.required),
      withdraw: new FormControl('', Validators.required),
      balance: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required)
    });
  }
  get f() {
    return this.form.controls;
  }
  addVal(a:any){
    const inputVal=a.target.value
    if(inputVal>0){
      this.currentBalance= Number(this.lastBalance)+Number(inputVal)
    }
  }
  subVal(a:any){
    const inputVal=a.target.value
    if(inputVal>0){
      if(inputVal<=this.lastBalance && inputVal>0){
        this.currentBalance= Number(this.lastBalance)-Number(inputVal);
      }else{
      }
    }
  }
  submits() {
    this.atm.create(this.form.value).subscribe((res: any) => {
      console.log('Post created successfully!');
      this.router.navigateByUrl('atm/atm-data');
    })
  }
}
