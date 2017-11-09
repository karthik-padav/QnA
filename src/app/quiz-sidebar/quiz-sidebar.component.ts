import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-sidebar',
  templateUrl: './quiz-sidebar.component.html',
  styleUrls: ['./quiz-sidebar.component.css']
})
export class QuizSidebarComponent implements OnInit {
  activePath;
  constructor(
    private activatedRoute: ActivatedRoute) {
      console.log(activatedRoute);
      this.activePath = activatedRoute.snapshot.url[activatedRoute.snapshot.url.length - 1].path;
  }

  ngOnInit() {
    console.log('sidebar init');

  }

}
