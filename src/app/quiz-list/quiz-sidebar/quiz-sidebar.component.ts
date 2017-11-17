import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyDataService } from './../../my-data.service';

@Component({
  selector: 'app-quiz-sidebar',
  templateUrl: './quiz-sidebar.component.html',
  styleUrls: ['./quiz-sidebar.component.css']
})
export class QuizSidebarComponent implements OnInit {
  activePath;
  quizLangList;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: MyDataService,
    private router: Router) {
      this.dataService.quizLangList().subscribe((data) => {this.quizLangList = data;})
      this.activePath = activatedRoute.snapshot.url[activatedRoute.snapshot.url.length - 1].path;
  }

  ngOnInit() {
  }

  goToQuiz(lang){
    this.router.navigate(['/quiz',lang]);
    this.activePath = lang;
  }

}
