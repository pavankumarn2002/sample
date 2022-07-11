import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { Crud } from 'src/app/crud';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  id!: number;
  post: Crud={
    id: 0,
    title: '',
    body: ''
  };
  constructor(private contactService: CrudService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('postId'));
      this.contactService.getElementById(this.id).subscribe(c => {
        this.post = c;
      })
    });

    /*this.id = this.route.snapshot.params['postId'];
    this.contactService.getElementById(this.id).subscribe((data: Crud)=>{
      this.post = data;
    });*/
  }

}
