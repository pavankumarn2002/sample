import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public loginToken = new BehaviorSubject(null);
  public subjectVar = new BehaviorSubject(null);
  constructor() {
  }
  setLoginToken(tokenLog: any) {
    this.loginToken.next(tokenLog);
    console.log(tokenLog)
  }

  getLoginToken() {
    return this.loginToken;
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
