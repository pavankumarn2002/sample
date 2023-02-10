import { Component, OnInit,AfterContentInit, AfterContentChecked, } from '@angular/core';
import { SubjectService } from 'src/app/subject.service';
@Component({
  selector: 'app-behaviour-one',
  templateUrl: './behaviour-one.component.html',
  styleUrls: ['./behaviour-one.component.css']
})
export class BehaviourOneComponent implements OnInit ,AfterContentInit{
  subjectSend:any;
  constructor(private subjectService:SubjectService) { 

  }

  ngOnInit(): void {
  }
  modelChangeFn(e:any) {
    this. subjectSend = e; 
    this.subjectService.setPost(this.subjectSend);
    console.log(this.subjectSend)
  }
  ngAfterContentInit(){
    console.log("Behaviour ngAfterContentInit Parent component called.....");
  }
}
