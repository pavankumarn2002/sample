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
  
  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component1Data = res;  
    })  
  }  
  
  onSubmit(data:any) {  
    this.DataSharing.SharingData.next(data.value);  
  }
}
