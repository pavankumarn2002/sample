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
import { ExternalService } from 'src/app/external.service';
@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.css']
})
export class HooksChildComponent implements  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() parentData: any;
  constructor(private ex: ExternalService) {
    console.log("constructor Child component called.....");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Child component called.....");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Child component called.....");
  }

  ngDoCheck(){
    console.log("ngDoCheck Child component called.....");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit Child component called.....");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked Child component called.....");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit Child component called.....");
    this.ex.load(
      "http://i2frontend.cu.ma/Documentation/jq/doc.js",
      "http://i2frontend.cu.ma/Documentation/jq/index.js",
      "http://i2frontend.cu.ma/Documentation/jq/cell.js",
      "http://i2frontend.cu.ma/Documentation/jq/slide.js",
      "http://i2frontend.cu.ma/Documentation/jq/input.js",
      "http://i2frontend.cu.ma/Documentation/jq/tabs.js"
    );
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Child component called.....");
  }

  changeFromChild(){
    this.parentData -= 1;
  }



}
