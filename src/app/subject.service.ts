import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  public subjectVar = new BehaviorSubject(null);
  constructor() {
  }
  setPost(post: any) {
    this.subjectVar.next(post);
  }

  getPosts() {
    return this.subjectVar;
  }
  subject$ = new Subject();
  ngOnInit() {
    this.subject$.subscribe(val => {
      console.log(val);
    });
    this.subject$.next("123");
  }
}
