import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { QuizSidebarComponent } from './../../quiz-sidebar/quiz-sidebar.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  activePath;
  constructor(private newService:MyDataService,
              private routeParams: ActivatedRoute) {
    this.routeParams.params
    .subscribe((params) => {
      this.activePath = params.name;
      this.getQuizQnA(this.activePath);
    })
  }
  quizQnA :any;
  currentQuestion = 0;
  randomQnALists :any[];
  numberOfQustions = 3;
  randomQnAList :any;
  apptiResult : any[];
  startQuizWrapper = true;
  quizWrapper = false;
  quizResultWrapper = false;
  totalMark = 0;
  totalSecondsDisplay = 0;
  totalMinutesDisplay = 0;
  totalHoursDisplay = 0;
  radioValue = false;
  
  ticks = 0;
  minutesDisplay: number = 0;
  hoursDisplay: number = 0;
  secondsDisplay: number = 0;
  sub: Subscription;

  ngOnInit() {
    this.getQuizQnA(this.activePath);
  }


  // Html ALL apti questions
  getQuizQnA(quizPage){
    this.currentQuestion = 0;
    this.numberOfQustions = 3;
    this.totalMark = 0;
    this.apptiResult = [];
    this.startQuizWrapper = true;
    this.quizWrapper = false;
    this.quizResultWrapper = false;
    this.randomQnAList = {
      answer : '',
      id : '',
      option1 : '',
      option2 : '',
      option3 : '',
      option4 : '',
      question : ''
    }
    this.randomQnALists = [];
    this.newService.quizQnA(quizPage).subscribe((data) => {
      this.quizQnA = data;
      console.log(this.quizQnA);
      // Html Selected Random question
      while( this.randomQnALists.length < this.numberOfQustions ) {
        let number = Math.floor(Math.random() * (this.numberOfQustions - 1 + 1)) + 1;
        if(this.quizQnA.qna[number]){
          this.randomQnALists.push(this.quizQnA.qna[number]);
          this.quizQnA.qna.splice(number ,1);
        }
      }
      console.log(this.randomQnALists);
    })
  }
   
    // Start Quiz
    displayQuiz(){
      this.startQuizWrapper = false;
      this.quizWrapper = true;
      this.randomQnAList = this.randomQnALists[0];
      console.log(this.randomQnAList);
      this.startTimer();
    }
  
    // Get Client answer and push to an array
    SubmitAnswer(QnA ,value){
      QnA.clientAnswer = value;
      if(value == QnA.answer){
        this.totalMark = this.totalMark + 1;
      }
      this.apptiResult.push(QnA);
      this.nextQuestion();
    }
  
    // Display next Question
    nextQuestion(){
      this.radioValue = false;
      this.currentQuestion = this.currentQuestion + 1;
      console.log(this.currentQuestion);
      if(this.currentQuestion >= this.numberOfQustions){
        console.log('results');
        this.displayResult();
      } else {
        this.randomQnAList = this.randomQnALists[this.currentQuestion];
        console.log(this.randomQnAList);
      }
    }
  
    displayResult(){
      this.startQuizWrapper = false;
      this.quizWrapper = false;
      this.quizResultWrapper = true;
      console.log(this.apptiResult);
      this.totalSecondsDisplay = this.secondsDisplay;
      this.totalMinutesDisplay = this.minutesDisplay;
      this.totalHoursDisplay = this.hoursDisplay;
    }
  
    // Timer
    private startTimer() {
      let timer = Observable.timer(1, 1000);
      this.sub = timer.subscribe(
        t => {
          this.ticks = t;
  
          this.secondsDisplay = this.getSeconds(this.ticks);
          this.minutesDisplay = this.getMinutes(this.ticks);
          this.hoursDisplay = this.getHours(this.ticks);
        }
      );
    }
  
    private getSeconds(ticks: number) {
      return this.pad(ticks % 60);
    }
  
    private getMinutes(ticks: number) {
      return this.pad((Math.floor(ticks / 60)) % 60);
    }
  
    private getHours(ticks: number) {
      return this.pad(Math.floor((ticks / 60) / 60));
    }
  
    private pad(digit: any) {
      return digit <= 9 ? '0' + digit : digit;
    }

}
