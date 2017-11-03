import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private http: Http) { }

  // Interview Questions
  // Html QnA
  htmlQnAJson(){
    return this.http.get('../assets/QnA/html.json')
    .map(response => response.json())
  }

  // Appti Questions
  // Html
  htmlApptiQnA(){
    return this.http.get('../assets/appti/html.json')
    .map(response => response.json())
  }

}
