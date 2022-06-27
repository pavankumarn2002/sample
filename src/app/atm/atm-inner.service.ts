import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AtmInnerService {

  public subjectVar = new BehaviorSubject(null);
  constructor() {

  }
  setPost(post: any) {
    this.subjectVar.next(post);
  }

  getPosts() {
    return this.subjectVar;
  }
}
