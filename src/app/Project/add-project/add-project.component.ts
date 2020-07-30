import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../projects/Project';
import { ServicesService } from 'src/app/Services/Project-Service/services.service';



@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {


  project: Project = new Project();
  submitted = false;

  // tslint:disable-next-line: variable-name
  constructor(private _route: Router, private _service: ServicesService ) { }

  ngOnInit() {
  }

  newProject(): void {
    this.submitted = false;
    this.project = new Project();
  }

  save() {
    this._service.createProject(this.project)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.project = new Project();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {
    // this.router.navigate(['/project/' + this.id]);
    this._route.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._route.navigate(['/project']);
  });
  }
}
