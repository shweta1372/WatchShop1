import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Newuser} from './newuser';

const api="http://localhost:3030/db.json";

@Injectable({
  providedIn: 'root'
})
export class NewuserService {
  httpclient: any;


  // constructor(private http: HttpClient) { }
  // login(newuser:Newuser): Observable<Response>{
  //     const url = 'http://localhost:8080/angularphp/insert.php';
  //     const json = JSON.stringify({name: newuser.name,number: newuser.number,address: newuser.address,email: newuser.email,username: newuser.username,password:newuser.password,confirmpassword: newuser.confirmpassword});
  //     const headers: Headers = new Headers();
  //     headers.append('Content-Type', 'application/json; charset=UTF-8');
  //     return this.http.post(url, json, headers )
  //         .map(res => res.json());
  // }


  constructor(private http:HttpClient) { }

  saveData(data)
  {
    return this.httpclient.post(api,data)
  }
//   getNewuser()
//   {
//    return this.http.get<Newuser[]>('http://localhost:8080/angularphp/list.php');
//   }

//  insertUser(newuser:Newuser)
//   {
//      return this.http.post('http://localhost:8080/angularphp/insert.php' ,newuser);
//  }

}
