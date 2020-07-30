import { Component, OnInit } from '@angular/core';
import { MainTechnologyService } from 'src/app/Services/Maintechnology-Service/main-technology.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-technology',
  templateUrl: './main-technology.component.html',
  styleUrls: ['./main-technology.component.css']
})
export class MainTechnologyComponent implements OnInit {

  mainTechnologies: any;
  constructor(private service: MainTechnologyService, private router: Router) { }

  ngOnInit(){
    this.service.getAllMainTechnology()
    .subscribe((data) => this.mainTechnologies = data);
  }

  goToAddMaintechnology(){
    this.router.navigate(['/addmaintechnology']);
  }

  delete(MaintechnologyId: number){

    this.service.deleteMainTechnology(MaintechnologyId)
    .subscribe((data) => this.mainTechnologies = data);
    this.router.navigate(['/maintechnologies']);
  }

}
