import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../projects/Project';
import { ServicesService } from 'src/app/Services/Project-Service/services.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  id: number;
  // tslint:disable-next-line: new-parens
  project = new Project;
  submitted = false;

  // tslint:disable-next-line: variable-name
  constructor( private router: Router, private _service: ServicesService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
     this.id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: align
    this._service.getProject(this.id).subscribe(
      data => {
        console.log('data received');
        this.project = data;
      },
      error => console.log('Exception occured')
    );
}

gotoList() {
  // this.router.navigate(['/project/' + this.id]);
  this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/project/' + this.id]);
});
}

update() {
  this._service.updateProject(this.id, this.project)
    .subscribe(data => console.log(data), error => console.log(error));
  this.project = new Project();
  this.gotoList();
}

onSubmit() {
  this.submitted = true;
  this.update();
}
}

