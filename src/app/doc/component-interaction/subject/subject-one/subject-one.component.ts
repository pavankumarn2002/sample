import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/data-sharing.service';
@Component({
  selector: 'app-subject-one',
  templateUrl: './subject-one.component.html',
  styleUrls: ['./subject-one.component.css']
})
export class SubjectOneComponent implements OnInit {
  ngOnInit(): void {
  }
  Component1Data: any = '';  
  foo = 'Hello';
  bar = 'World';

  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component1Data = res;  
    })   
  }  
  
  onSubmit(data:any) {  
    this.DataSharing.SharingData.next(data.value);  
  }

  modelChangeFn(e:any) {
    this.bar = e;
    this.DataSharing.SharingData.next( this.bar); 
    
  }
}
