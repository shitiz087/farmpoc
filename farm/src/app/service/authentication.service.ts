import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Promise } from 'q';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  hostUrl = 'http://139.59.40.169:9001/';


  constructor(private http: Http) { }

  setinfo(user) {
    console.log(user);
    localStorage.setItem('token', user['token']);
    localStorage.setItem('userid', user['userid	']);
    localStorage.setItem('valid', user['valid']);

}


  signIn(formName: string, user: any) {

    const headers = new Headers({ 'Content-Type': 'application/json'});
    return this.http.post(this.hostUrl + formName, JSON.stringify(user), { headers: headers })
        .map(response => {
            let result = response.json();
            this.setinfo(result.data);

        }

        )




}
 
   
}
