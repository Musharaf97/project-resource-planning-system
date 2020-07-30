import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/Project-Service/services.service';
import { MainTechnology } from '../MainTechnology';
import { MainTechnologyService } from 'src/app/Services/Maintechnology-Service/main-technology.service';

@Component({
  selector: 'app-add-maintechnology',
  templateUrl: './add-maintechnology.component.html',
  styleUrls: ['./add-maintechnology.component.css']
})
export class AddMaintechnologyComponent implements OnInit {

  mainTechnology: MainTechnology = new MainTechnology();
  submitted = false;

  constructor(private _route: Router, private _service: MainTechnologyService) { }

  ngOnInit() {
  }

  save() {
    this._service.addMainTechnology(this.mainTechnology)
      .subscribe(data => console.log(data), error => console.log(error));

  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {
    this._route.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this._route.navigate(['/maintechnologies']);
    });
  }
}
