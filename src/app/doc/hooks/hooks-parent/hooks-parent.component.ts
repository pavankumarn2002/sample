import { 
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges
} from '@angular/core';
@Component({
  selector: 'app-hooks-parent',
  templateUrl: './hooks-parent.component.html',
  styleUrls: ['./hooks-parent.component.css']
})

export class HooksParentComponent implements  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  data = 0

  changeFromParent(){
    this.data += 1;
  }

  constructor() {
    console.log("constructor Parent component called.....");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Parent component called.....");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Parent component called.....");
  }

  ngDoCheck(){
    console.log("ngDoCheck Parent component called.....");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit Parent component called.....");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked Parent component called.....");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit Parent component called.....");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Parent component called.....");
  }
}