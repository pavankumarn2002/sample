import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  model = {
    text: null,
    number: null,
    select: null,
    checks: [
      {
        id: 'check-one',
        label: 'Check One',
        selected: false,
      },
      {
        id: 'check-two',
        label: 'Check Two',
        selected: false,
      },
      {
        id: 'check-three',
        label: 'Check Three',
        selected: false,
      },
    ],
    radio: null,
  };
  options = [
    {
      value: 1,
      label: 'Option One',
    },
    {
      value: 2,
      label: 'Option Two',
    },
    {
      value: 3,
      label: 'Option Three',
    },
  ];
  countryList = [
    {
      id: 1,
      name: 'India',
    },
    {
      id: 2,
      name: 'Us',
    },
    {
      id: 3,
      name: 'Uk',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {
    console.log("Full Address", this.model);
  }
  onSubmit(contactForm: any) {
    console.log(contactForm)
  }
}

