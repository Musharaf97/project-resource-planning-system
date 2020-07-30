import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResourceServiceService } from 'src/app/Services/Resource-Service/resource-service.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources: any;

  constructor(private http: HttpClient, private _service: ResourceServiceService, private router: Router) { }

  ngOnInit() {
    this._service.getAllResources()
    .subscribe((data) => this.resources = data);
  }

  reloadData(){
    this.resources = this._service.getAllResources;
  }

  goToAddResource() {
    this.router.navigate(['/addresource']);
  }

  goToViewResource(id: number){
    console.log('resourceId' + id);
    this.router.navigate(['/resource', id]);
  }

}
