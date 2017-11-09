import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-q',
  templateUrl: './interview-q.component.html',
  styleUrls: ['./interview-q.component.css']
})
export class InterviewQComponent implements OnInit {

  interviewLangList: any[];
  constructor( private newService: MyDataService,
                private router: Router
              ) { }

  ngOnInit() {
    this.newService.interviewLangList().subscribe((data) => {this.interviewLangList = data});
  }

  goToQnA(lang){
    this.router.navigate(['/interview-q', lang]);
  }

}
