import { Component, OnInit } from '@angular/core';
import { Resource } from '../Resource';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceServiceService } from 'src/app/Services/Resource-Service/resource-service.service';

@Component({
  selector: 'app-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrls: ['./update-resource.component.css']
})
export class UpdateResourceComponent implements OnInit {

  id: number;
  // tslint:disable-next-line: new-parens
  resource = new Resource;
  submitted = false;

  constructor(private router: Router, private _service: ResourceServiceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
     this.id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: align
    this._service.getResource(this.id).subscribe(
      data => {
        console.log('data received');
        this.resource = data;
      },
      error => console.log('Exception occured')
    );
}

gotoList() {
  // this.router.navigate(['/project/' + this.id]);
  this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/resource/' + this.id]);
});
}

update() {
  this._service.updateResource(this.id, this.resource)
    .subscribe(data => console.log(data), error => console.log(error));
  this.resource = new Resource();
  this.gotoList();
}

onSubmit() {
  this.submitted = true;
  this.update();
}

}
