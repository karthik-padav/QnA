import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appti',
  templateUrl: './appti.component.html',
  styleUrls: ['./appti.component.css']
})
export class ApptiComponent implements OnInit {

  apptiLangList: any[];
  constructor(private newService: MyDataService,
              private router: Router) { }

  ngOnInit() {
    this.newService.quizLangList().subscribe((data) => {this.apptiLangList = data;console.log(this.apptiLangList);});
  }

  goToQuiz(lang){
    this.router.navigate(['/appti', lang]);
  }

}
