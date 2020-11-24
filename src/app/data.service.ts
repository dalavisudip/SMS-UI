import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }




  
  getUsers() {
    return this._http.get('http://localhost:5000/get/available/DataSet');
  }

  
  insertdata(data){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'my-auth-token' }) };
    return this._http.post('http://localhost:5000/insertdata',data,httpOptions)
  }

  
}
