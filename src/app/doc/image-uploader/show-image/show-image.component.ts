import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url = "../../assets/angular.png"
  onSelect(e: any) {
    if (e.target.files) {
      var reader = new FileReader;
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result
      }
    }
  }
}
