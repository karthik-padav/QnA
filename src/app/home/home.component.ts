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
  aptitudeList: any[];
  gkList: any[];
  constructor( private newService: MyDataService,
                private router: Router
              ) { }

  ngOnInit() {
    // QnA
    this.newService.interviewLangList().subscribe((data) => { this.interviewLangList = data });

    // Quiz
    this.newService.quizLangList().subscribe((data) => { this.quizLangList = data });

    // Aptitude
    this.newService.getAptitudeList().subscribe((data) => { this.aptitudeList = data });

    // Genaral knowledge
    this.newService.getGKList().subscribe((data) => {this.gkList = data})
  }

  goToQnA(lang){
    this.router.navigate(['/interview', lang]);
  }

  goToQuiz(lang){
    this.router.navigate(['/quiz', lang]);
  }

  goToAptitude(lang){
    this.router.navigate(['/aptitude', lang]);
  }

  goTogk(lang){
    this.router.navigate(['/GK', lang]);
  }
}
