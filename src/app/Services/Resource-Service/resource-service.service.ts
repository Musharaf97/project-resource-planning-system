import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../../Resource/Resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceServiceService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }


  getAllResources(){
    return this._http.get('http://localhost:8081/resources');
  }

  getResource(id: number): Observable<any> {
    return this._http.get<any>('http://localhost:8081/resource/' + id );
  }

  createResource( resource: Resource): Observable<any>{
    return this._http.post<any>('http://localhost:8081/addresource', resource);
  }

  deleteResource(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8081/deleteresourcebyid/' + id );
  }

  updateResource(id: number, resource: any): Observable<any> {
    return this._http.put<any>('http://localhost:8081/updateresource/' + id, resource );
  }



}
