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
    return this.http.get('../assets/data/quiz/quizList.json')
    .map(response => response.json())
  }

  // Html QnA
  getQnA(page){
    return this.http.get('../assets/data/QnA/' + page + '.json')
    .map(response => response.json())
  }

  // Quiz Questions
  quizQnA(page){
    return this.http.get('../assets/data/quiz/' + page + '.json')
    .map(response => response.json())
  }

  // Puzzles JSON
  puzzles(){
    return this.http.get('../assets/data/puzzles/puzzles.json')
    .map(response => response.json())
  }

  // Aptitude list
  getAptitudeList(){
    return this.http.get('../assets/data/aptitude/aptitudeList.json')
    .map(response => response.json())
  }

  // Get Aptitude
  getAptitude(page){
    console.log(page);
    return this.http.get('../assets/data/aptitude/' + page + '.json')
    .map(response => response.json())
  }

  // Get GK List
  getGKList(){
    return this.http.get('../assets/data/gk/gkList.json')
    .map(response => response.json())
  }

  // Get GK
  getGK(page){
    return this.http.get('../assets/data/gk/' + page + '.json')
    .map(response => response.json())
  }

}
