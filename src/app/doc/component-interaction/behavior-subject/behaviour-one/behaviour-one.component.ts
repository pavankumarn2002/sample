import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/subject.service';
@Component({
  selector: 'app-behaviour-one',
  templateUrl: './behaviour-one.component.html',
  styleUrls: ['./behaviour-one.component.css']
})
export class BehaviourOneComponent implements OnInit {
  subjectSend:any="This The Message from Subject Send Component";
  constructor(private subjectService:SubjectService) { 
    this.subjectService.setPost(this.subjectSend);
  }

  ngOnInit(): void {
  }


}
