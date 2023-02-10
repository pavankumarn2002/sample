import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  orderForm: any;
  items: any;
  thisIsMyForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.thisIsMyForm = new FormGroup({
      formArrayName: new FormArray([])
    })

    this.buildForm()
  }

  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    console.log(this.items)
    this.items.push(this.createItem());
  }



  //This Is For Form Array with data
  data = [
    { name: "one", type: "one" },
    { name: "two", type: "two" },
    { name: "three", type: "three" }
  ];
  buildForm() {
    const controlArray = this.thisIsMyForm.get('formArrayName') as FormArray;

    Object.keys(this.data).forEach((i) => {
      controlArray.push(
        this.formBuilder.group({
          name: new FormControl(),
          type: new FormControl()
        })
      )
    })

    console.log(controlArray.controls)
  }


  onSubmits() {
    // Here I would like to be able to access the values of the 'forms'
    console.log(this.thisIsMyForm.value)
  }
}
