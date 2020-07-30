import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from 'src/app/Project/projects/Project';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private _http: HttpClient) {}


  getAllProjects(){
    return this._http.get('http://localhost:8081/projects');
  }

  createProject( project: Project): Observable<any>{
    return this._http.post<any>('http://localhost:8081/addproject', project);
  }

  getProject(id: number): Observable<any> {
    return this._http.get<any>('http://localhost:8081/projects/' + id );
  }

  deleteProject(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8081/deleteProjectById/' + id );
  }

  updateProject(id: number, project: any): Observable<any> {
    return this._http.put<any>('http://localhost:8081/updateproject/' + id, project );
  }

}
