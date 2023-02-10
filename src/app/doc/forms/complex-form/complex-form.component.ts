import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent implements OnInit {
  companyForm!: FormGroup;
  isSubmitted:any;
  titleAlert: string = 'This field is required';
  post: any = '';
  phoneRegex: RegExp = /^((3[0-9])|(6[0-9])|(8[1-9])|(9[0-8]))[0-9]{6}$/;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    // init form
    this.createForm();
  }

  createForm() {

    this.companyForm = this.formBuilder.group({
      companyName: ['', Validators.required],

      // nested form group
      address: this.formBuilder.group({
        unit: ['', Validators.required],
        street: ['', Validators.required],
      }),

      // nested form array
      emails: new FormArray([
        this.formBuilder.control('', Validators.required),
        this.formBuilder.control('')
      ]),

      // nested form array with form group
      contacts: new FormArray([
        this.formBuilder.group({
          name: ['', Validators.required],
          phone: ['', [ Validators.required, Validators.pattern(this.phoneRegex)]],
        })
      ])
    });
  }

  onSubmit(post:any, isValid:any) {

    console.log(post)
    this.isSubmitted = true;

    if (!isValid)
      return;

    this.post = post;
  }

  // add new form group to contacts array
  addContactField(){
    let control = this.companyForm.get('contacts') as FormArray;
    control.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        phone: ['', [ Validators.required, Validators.pattern(this.phoneRegex)]],
      })
    )
  }

  // remove last index of contacts array 
  removeContactField() {
    let control = this.companyForm.get('contacts') as FormArray;
    control.removeAt(control.length - 1)
  }

  // form controls access for validation
  get companyName(){
    return this.companyForm.get('companyName');
  }

  get address(){
    return this.companyForm.get('address') as FormGroup;
  }

  get unit(){
    return this.address.get('unit');
  }

  get street(){
    return this.address.get('street');
  }

  get emails(){
    return this.companyForm.get('emails') as FormArray;
  }

  get contacts(){
    return this.companyForm.get('contacts') as FormArray;
  }

}
