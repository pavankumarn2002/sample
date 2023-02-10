import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
  data=[1,2,3,4,5]
  constructor(private dialogRef:MatDialogRef<DialogExampleComponent>) { }

  ngOnInit(): void {
  }
   closeDialog(){
    this.dialogRef.close(this.data);
   }
   val:any
   closeRadio(e:any){
    this.val=e.target.value
    this.dialogRef.close(this.val);
   }
}
