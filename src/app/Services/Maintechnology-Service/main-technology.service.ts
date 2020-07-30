import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainTechnology } from 'src/app/Maintechnology/MainTechnology';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainTechnologyService {

  constructor(private _http: HttpClient) { }

  getAllMainTechnology() {
    return this._http.get('http://localhost:8081/maintechnology');
  }

  addMainTechnology(maintechnology: MainTechnology): Observable<any> {
    return this._http.post<any>('http://localhost:8081/addmaintechnology', maintechnology);
  }

  deleteMainTechnology(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8081/deletemaintechnology/' + id);
  }
}
