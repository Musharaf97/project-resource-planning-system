import { Component, OnInit } from '@angular/core';
import { Assignment } from '../Assignment';
import { AssignmentService } from 'src/app/Services/Assignment-Service/assignment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-assignment',
  templateUrl: './update-assignment.component.html',
  styleUrls: ['./update-assignment.component.css']
})
export class UpdateAssignmentComponent implements OnInit {

  id: number;
  // tslint:disable-next-line: new-parens
  assignment: any;
  submitted = false;
  constructor(private router: Router, private _service: AssignmentService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: align
    this._service.getAssignmentById(this.id).subscribe(
      data => {
        console.log('data received');
        this.assignment = data;
      },
      error => console.log('Exception occured')
    );
  }

  gotoList() {
    // this.router.navigate(['/project/' + this.id]);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/assignment/' + this.id]);
    });
  }

  update() {
    this._service.updateAssignment(this.id, this.assignment)
      .subscribe(data => console.log(data), error => console.log(error));
    this.assignment = new Assignment();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.update();
  }

}
