import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { Crud } from 'src/app/crud';
@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

namesArr:any;
  posts: Crud[] = [];
  searchNames1: any;
  x1: any ;
  noData: string = '';
  constructor(public postService: CrudService) { 
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Crud[])=>{
      this.posts = data;
    })  
  }
  deletePost(id:number){
    this.postService.delete(id).subscribe((res:any) => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
         this.searchObj(this.searchNames1)
    })
  }
  searchObj(searchNames1: any){
    let fil = searchNames1;
    let fil_arr = this.posts.map((element:any) =>
      element.title.substr(0, fil.length)
    )
    if (Array.isArray(this.namesArr)) {
      for (let key of this.namesArr) {
        key.substr(0, fil.length)
      }
    }

    let count = 0
    this.x1 = [];
    fil_arr.forEach((values:any, i:any) => {

      if (fil.length > 0) {
        if (values != fil) {
          if (count < this.posts.length - 1) {
             this.noData = ' ';
          }
          else {
           this.noData = 'No Data Found';

          }
          count++
        }
        else {
          this.noData = ' ';
          this.x1.push(this.posts[i]);
        }
      }
      else {
        this.noData = 'Enter Valid Input';
      }
    })
  } 
}
