import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {
    
  constructor() { }

  ngOnInit(): void {
  }
  @Output() valueChange = new EventEmitter();
  counter:any = 0;
  customer:any="This Is The Message from Child component"
  valueChanged() { // You can give any function name
      this.counter = this.counter + 1;
      this.valueChange.emit(this.customer);
  }
}
