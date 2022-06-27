import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }
  structuralDirectives() {
    this.router.navigate(['structural-directives'], { relativeTo: this.route });
  }
  attributeDirectives() {
    this.router.navigate(['attribute-directives'], { relativeTo: this.route });
  }
 customDirectives() {
    this.router.navigate(['custom-directives'], { relativeTo: this.route });
  }

}
