import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Project } from './Project';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/Project-Service/services.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;
  searchProjects = '';


  // tslint:disable-next-line: variable-name
  constructor(private http: HttpClient, private _service: ServicesService, private router: Router) {

    // this.searchProjects = 'Active';
   }

  ngOnInit() {
    this._service.getAllProjects()
      .subscribe((data) => this.projects = data);
  }

  reloadData() {
    this.projects = this.http.get('http://localhost:8081/projects');
  }

  goToAddProject() {
    this.router.navigate(['/addproject']);
  }

  goToViewProject(id: number){
    this.router.navigate(['/project', id]);
  }

}
