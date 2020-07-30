import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignmentService } from 'src/app/Services/Assignment-Service/assignment.service';
import { Resource } from 'src/app/Resource/Resource';
import { Assignment } from '../Assignment';
import { MainTechnology } from 'src/app/Maintechnology/MainTechnology';
import { Project } from 'src/app/Project/projects/Project';


@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  assignment: any;
  resource: Resource;
  project: Project;
  mainTechnology: MainTechnology;

  constructor(
    private router: Router,
    private service: AssignmentService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.getAssignmentById(id).subscribe(
      data => {
        console.log(data);
        this.assignment = data;
      },
    );
  }

  goToEditAssignment(id: number) {
    this.router.navigate(['/updateassignment', id]);
  }

  gotoList() {
    this.router.navigate(['/assignment']);
  }

}
