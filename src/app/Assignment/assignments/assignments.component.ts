import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/Services/Assignment-Service/assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  assignments: any;
  constructor(private service: AssignmentService, private router: Router) { }

  ngOnInit() {
    this.viewAssignments();
  }

  viewAssignments() {
    this.service.getAllAssignments()
      .subscribe((data) => this.assignments = data);
  }

  goToViewAssignment(id: number) {
    this.router.navigate(['/assignment', id]);
  }

  gotoList() {
    this.router.navigate(['/project']);
  }

}
