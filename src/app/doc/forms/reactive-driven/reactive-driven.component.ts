import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.css']
})
export class ReactiveDrivenComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    // let users = new FormArray([
    //   new FormControl(),
    //   new FormControl()
    // ])
    this.contactForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      isMarried: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      // users:new FormArray([
      //   new FormControl(),
      //   new FormControl()
      // ])
      users: new FormArray([
        this.fb.group({
          name: new FormControl(),
          age: new FormControl(),
          dept: new FormControl(),
        })
      ])
    })
  }
  get f() {
    return this.contactForm.controls;
  }
  getControls() {
    return (this.contactForm.get('users') as FormArray).controls;
  }
  getNew() {
    return (this.contactForm.get('users') as FormArray);
  }
  addNew() {
    let userArr = this.contactForm.get('users') as FormArray;
    let newArr = this.fb.group({
      name: "",
      age: "",
      dept: "",
    })
    userArr.push(newArr)
  }
  removeUser(i: any) {
    let arr = this.contactForm.get('users') as FormArray;
    arr.removeAt(i)
  }
  assignPrise(i: any) {
    let arr = this.contactForm.get('users') as FormArray;
    console.log(arr)
    if (arr.value[i].age > 55) {
      arr.value[i].dept = "Mech"
    } else {
      arr.value[i].dept = "Cse"
    }
  }
  onSubmit() {
    console.log(this.contactForm.value);
  }

}
