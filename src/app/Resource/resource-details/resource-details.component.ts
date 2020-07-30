import { Component, OnInit } from '@angular/core';
import { Resource } from '../Resource';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceServiceService } from 'src/app/Services/Resource-Service/resource-service.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  resource = new Resource();
  submitted = false;

  constructor(private router: Router, private _service: ResourceServiceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    const id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.getResource(id).subscribe(
      data => {
        console.log('data received');
        this.resource = data;
      },
      error => console.log('Exception occured')
    );
  }

  gotoList() {
    this.router.navigate(['/resources']);
  }

  deleteResource(id: number) {
    this._service.deleteResource(id).subscribe(
      data => {
        // tslint:disable-next-line: no-console
        console.debug('Deleted successfully');
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/resources']);
      });
      },
      error => console.log('Execption occured')
    // tslint:disable-next-line: semicolon
    )
  }

  goToEditResource(id: number){
    console.log('resource_id' + id);
    this.router.navigate(['/updateresource', id]);
  }



}
