import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../projects/Project';
import { ServicesService } from 'src/app/Services/Project-Service/services.service';
import { RpsCommunicationService } from 'src/app/communication/project-emitter';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project = new Project();
  submitted = false;

  constructor(
    private router: Router,
    private service: ServicesService,
    private activatedRoute: ActivatedRoute,
    private rpsCommunicationService: RpsCommunicationService) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.getProject(id).subscribe(
      data => {
        console.log('data received');
        this.project = data;
      },
      error => console.log('Exception occured')
    );
  }

  gotoList() {
    this.router.navigate(['/project']);
  }

  goToEditProject(id: number) {
    console.log('project_id' + id);
    this.router.navigate(['/updateproject', id]);
  }

  goToAssignResource(project: number) {
    this.rpsCommunicationService.projectEmitter.emit(this.project);
    this.router.navigate(['/assignresource'], { queryParams: { id: project } });
  }
}
