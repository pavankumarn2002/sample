import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }
  dataBinding() {
    this.router.navigate(['data-binding'], { relativeTo: this.route });
  }
  directives() {
    this.router.navigate(['directives'], { relativeTo: this.route });
  }

}
