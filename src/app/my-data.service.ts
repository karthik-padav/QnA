import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private http: Http) { }

  // Interview Questions
  // List of languages for Interview Questions
  interviewLangList(){
    return this.http.get('../assets/data/QnA/langList.json')
    .map(response => response.json())
  }
  // List of languages for Apti
  quizLangList(){
    return this.http.get('../assets/data/appti/apptiList.json')
    .map(response => response.json())
  }

  // Html QnA
  getQnA(page){
    return this.http.get('../assets/data/QnA/' + page + '.json')
    .map(response => response.json())
  }

  // Appti Questions
  quizQnA(page){
    return this.http.get('../assets/data/appti/' + page + '.json')
    .map(response => response.json())
  }

}
