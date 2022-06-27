import { Component, OnInit } from '@angular/core';
import { AtmData } from 'src/app/atm-data';
import { AtmServiceService } from 'src/app/atm-service.service';
import { AtmInnerService } from '../atm-inner.service';
@Component({
  selector: 'app-atm-data',
  templateUrl: './atm-data.component.html',
  styleUrls: ['./atm-data.component.css']
})
export class AtmDataComponent implements OnInit {
  atmData:AtmData[]=[]
  currentBalance!:number;
  constructor(private atm:AtmServiceService,private inner:AtmInnerService) { 
    this.atm.getAll().subscribe(element=>this.atmData=element);
    
  }
  ngOnInit(): void {
  }
  searchNames1: any;
  x1: any ;
  noData: string = '';
  searchObj(searchNames1: any){
    let fil = searchNames1;
    let fil_arr = this.atmData.map((element:any) =>
      element.accountNo.substr(0, fil.length)
    )

    let count = 0
    this.x1 = [];
    fil_arr.forEach((values:any, i:any) => {

      if (fil.length > 0) {
        if (values != fil) {
          if (count < this.atmData.length - 1) {
             this.noData = ' ';
          }
          else {
           this.noData = 'No Data Found';

          }
          count++
        }
        else {
          this.noData = ' ';
          this.x1.push(this.atmData[i]);
        }
      }
      else {
        this.noData = 'Enter Valid Input';
      }
    })
      this.currentBalance=this.x1[(this.x1.length-1)].balance
      this.inner.setPost(this.currentBalance);

  }
  deletePost(id:number){
    this.atm.delete(id).subscribe(res => {
         this.atmData = this.atmData.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  } 
}
