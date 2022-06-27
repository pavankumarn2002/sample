import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/data-sharing.service';
@Component({
  selector: 'app-subject-two',
  templateUrl: './subject-two.component.html',
  styleUrls: ['./subject-two.component.css']
})
export class SubjectTwoComponent implements OnInit {

  ngOnInit(): void {
  }
  Component2Data: any = '';  
  
  
  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component2Data = res;  
    })  
  }  
  
  onSubmit(data:any) {  
    this.DataSharing.SharingData.next(data.value);  
  }
}
