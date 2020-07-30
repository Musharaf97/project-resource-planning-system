import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../../Assignment/Assignment';

@Injectable({
  providedIn: 'root'
})

export class AssignmentService {

  constructor(private _http: HttpClient) { }

  getAssignmentByProjectId(id: number): Observable<any>{
    return this._http.get<any>('http://localhost:8081/assignments/project/' + id);
  }

  createAssignment(assignment: Assignment): Observable<any>{
    return this._http.post<any>('http://localhost:8081/assignresource', assignment);
  }

  getAllAssignments(){
    return this._http.get('http://localhost:8081/assignments');
  }

  getAssignmentById(id: number) {
    return this._http.get('http://localhost:8081/assignment/' + id);
  }

  updateAssignment(id: number, assignment: any): Observable<any> {
    return this._http.put<any>('http://localhost:8081/updateassignment/' + id, assignment );
  }


}
