import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/data-sharing.service';
@Component({
  selector: 'app-subject-three',
  templateUrl: './subject-three.component.html',
  styleUrls: ['./subject-three.component.css']
})
export class SubjectThreeComponent implements OnInit {

  ngOnInit(): void {
  }
  
  Component3Data: any = '';  
  
  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component3Data = res;  
    })  
  }  
  
  onSubmit(data:any) {  
    this.DataSharing.SharingData.next(data.value);  
  } 
}
