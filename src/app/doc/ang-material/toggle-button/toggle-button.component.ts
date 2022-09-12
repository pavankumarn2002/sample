import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fontStyleControl = new FormControl('');
  fontStyle?: string;
}
