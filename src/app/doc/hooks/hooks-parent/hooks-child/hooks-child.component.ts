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
export class HooksChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() parentData: any;
  x1:any[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  constructor(private ex: ExternalService) {
    console.log("constructor Child component called.....");
    this.ex.load(
      "https://res.cloudinary.com/veraion9/raw/upload/v1658938994/i2/jq%28dynamic%29/doc.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658908893/i2/jq%28dynamic%29/cell.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658938953/i2/jq%28dynamic%29/index.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658909046/i2/jq%28dynamic%29/input.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658912742/i2/jq%28dynamic%29/slide.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658942369/i2/jq%28dynamic%29/tabs.js",
      
    )
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Child component called.....");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Child component called.....");
  }

  ngDoCheck() {
    console.log("ngDoCheck Child component called.....");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Child component called.....");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Child component called.....");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit Child component called.....");
    this.ex.load(
   
    );
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Child component called.....");
  }

  changeFromChild() {
    this.parentData -= 1;
  }



}
