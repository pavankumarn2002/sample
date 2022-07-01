import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/subject.service';
@Component({
  selector: 'app-behaviour-two',
  templateUrl: './behaviour-two.component.html',
  styleUrls: ['./behaviour-two.component.css']
})
export class BehaviourTwoComponent implements OnInit {
  subjectReceive: any;
  constructor(private subjectService: SubjectService) {
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
  }
  subReceive() {
    this.subjectService.getPosts().subscribe((res: any) => {
      this.subjectReceive = res;
    });
  }

}
