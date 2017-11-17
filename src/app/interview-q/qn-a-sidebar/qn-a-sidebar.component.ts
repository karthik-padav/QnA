import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qn-a-sidebar',
  templateUrl: './qn-a-sidebar.component.html',
  styleUrls: ['./qn-a-sidebar.component.css']
})
export class QnASidebarComponent implements OnInit {
  interviewLangList;
  activePath;
  constructor(
    private routeParams: ActivatedRoute,
    private dataService: MyDataService,
    private router: Router) {
    this.dataService.interviewLangList().subscribe((data) => {this.interviewLangList = data});

    // Get file name from url
    this.activePath = routeParams.snapshot.url[routeParams.snapshot.url.length - 1].path;
}

  ngOnInit() {
  }
  
  goToQnA(lang){
    console.log(lang);
    this.router.navigate(['/interview-q',lang]);
    this.activePath = lang;
  }

}
