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
      "https://res.cloudinary.com/veraion9/raw/upload/v1657016045/i2/jq%28new%29/index.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1657015996/i2/jq%28new%29/cell.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1657016090/i2/jq%28new%29/input.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1657016158/i2/jq%28new%29/slide.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1657016189/i2/jq%28new%29/tabs.js",
    );
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Child component called.....");
  }

  changeFromChild() {
    this.parentData -= 1;
  }



}
