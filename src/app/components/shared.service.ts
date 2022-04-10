import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5000/api";
  readonly PhotoUrl = "http://locahost:5000/api/Photos";

  constructor(private http: HttpClient) { }

  //Owner service
  getOwnerList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/owner');
  }

  getOwnerById(id: any) {
    return this.http.get<any>(this.APIUrl + '/owner' + id);
  }

  addOwner(owner: any) {
    return this.http.post<any>(this.APIUrl + '/owner', owner);
  }

  updateOwner(owner: any) {
    return this.http.put<any>(this.APIUrl + '/owner', owner);
  }

  deleteOwner(id: any) {
    return this.http.delete<any>(this.APIUrl + '/owner' + id);
  }
}