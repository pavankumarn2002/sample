import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Crud } from 'src/app/crud';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
 
  id!: number;
  post: Crud={
    id: 0,
    title: '',
    body: ''
  };
  form!: FormGroup;
  constructor(
    public postService:CrudService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Crud)=>{
      this.post = data;
    }); 
      
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe((res:Crud) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/doc/crud-operation/get-data');
    })
  }

}
