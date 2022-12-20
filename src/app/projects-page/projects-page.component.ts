import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  to_Ehealth(){
    this.router.navigateByUrl('/projects/Ehealth');
  }
}
