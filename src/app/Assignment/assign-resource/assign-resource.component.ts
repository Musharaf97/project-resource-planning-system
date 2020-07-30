import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceServiceService } from '../../Services/Resource-Service/resource-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Assignment } from '../Assignment';
import { Resource } from '../../Resource/Resource';
import { MainTechnology } from '../../Maintechnology/MainTechnology';
import { MainTechnologyService } from '../../Services/Maintechnology-Service/main-technology.service';
import { Project } from '../../Project/projects/Project';
import { ServicesService } from '../../Services/Project-Service/services.service';
import { AssignmentService } from '../../Services/Assignment-Service/assignment.service';
import { RpsCommunicationService } from '../../communication/project-emitter';


@Component({
  selector: 'app-assign-resource',
  templateUrl: './assign-resource.component.html',
  styleUrls: ['./assign-resource.component.css']
})
export class AssignResourceComponent implements OnInit {

  id: number;
  assignment: Assignment = new Assignment();
  resource: Resource;
  project: Project;
  mainTechnology: MainTechnology;
  submitted = false;

  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: max-line-length
  constructor(private _service: ResourceServiceService,
              private service: MainTechnologyService,
              private serv: ServicesService,
              private assignService: AssignmentService,
              private _route: Router,
              private route: ActivatedRoute,
              private rpsCommunicationService: RpsCommunicationService
  ) {
  }

  ngOnInit() {
    this.assignment.project = <Project>{};
    this.assignment.resource = <Resource>{};
    this.assignment.mainTechnology = <MainTechnology>{};

    this.route.queryParams.subscribe(params => {
      this.assignment.project.projectId = params['id'];
    });

    this.populateMaintechnology();
    this.populateResource();
    // this.populateProjects();
    this.populateProjectData();
  }

  save() {
    console.log(this.assignment);
    let project: Project = <Project>{};
    project.projectId = this.assignment.project.projectId;
    let resource: Resource = <Resource>{};
    resource.resourceId = this.assignment.resource.resourceId;
    let mainTechnology: MainTechnology = <MainTechnology>{};
    mainTechnology.mainTechnologyId = this.assignment.mainTechnology.mainTechnologyId;

    let assignment: Assignment = {
      assignmentId: 0,
      mainRole: null,
      startDate: null,
      endDate: null,
      allotment: 0,
      mainTechnology,
      project,
      resource,
    };
    this.assignService.createAssignment(this.assignment)
      .subscribe(data => console.log(data)
      , error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {
    // this.router.navigate(['/project/' + this.id]);
    this._route.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._route.navigate(['/assignments']);
    });
  }

  populateResource() {
    this.service.getAllMainTechnology().subscribe(
      data => {
        this.mainTechnology = data as MainTechnology;
      }
    );
  }

  populateMaintechnology() {
    this._service.getAllResources().subscribe(
      data => {
        this.resource = data as Resource;
      });
  }

  populateProjectData() {
    this.rpsCommunicationService.projectEmitter.subscribe(
      data => {
        this.project = data;
        console.log('project', this.project.projectId);
      });
  }

}
