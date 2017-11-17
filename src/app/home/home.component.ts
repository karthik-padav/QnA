import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  interviewLangList: any[];
  quizLangList: any[];
  constructor( private newService: MyDataService,
                private router: Router
              ) { }

  ngOnInit() {
    // QnA
    this.newService.interviewLangList().subscribe((data) => {this.interviewLangList = data});

    // Quiz
    this.newService.quizLangList().subscribe((data) => {this.quizLangList = data;console.log(this.quizLangList);});
  }

  goToQnA(lang){
    this.router.navigate(['/interview', lang]);
  }

  goToQuiz(lang){
    this.router.navigate(['/quiz', lang]);
  }
}
