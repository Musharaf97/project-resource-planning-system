import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from '../Resource';
import { ResourceServiceService } from 'src/app/Services/Resource-Service/resource-service.service';


@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {

  resource: Resource = new Resource();
  submitted = false;

  constructor(private _route: Router, private _service: ResourceServiceService ) { }

  ngOnInit(): void {
  }

  newResource(): void {
    this.submitted = false;
    this.resource = new Resource();
  }

  save() {
    this._service.createResource(this.resource)
      .subscribe(data => console.log(data), error => console.log(error));
    this.resource = new Resource();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {
    // this.router.navigate(['/project/' + this.id]);
    this._route.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._route.navigate(['/resources']);
  });
  }


}
