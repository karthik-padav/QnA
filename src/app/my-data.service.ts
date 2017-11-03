import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private http: Http) { }


  htmlQnAJson(){
  	return this.http.get('../assets/data/htmlQnA.json').map(
  	(response) => response.json()
  	)
  }

  success(){
  	return "Success";
  }

}
