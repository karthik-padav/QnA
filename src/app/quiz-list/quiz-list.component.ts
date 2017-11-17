import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {


  quizLangList: any[];
  constructor(private newService: MyDataService,
              private router: Router) { }

  ngOnInit() {
    this.newService.quizLangList().subscribe((data) => {this.quizLangList = data;console.log(this.quizLangList);});
  }

  goToQuiz(lang){
    this.router.navigate(['/quiz', lang]);
  }

}
