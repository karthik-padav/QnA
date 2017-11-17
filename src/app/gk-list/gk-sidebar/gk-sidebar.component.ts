import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gk-sidebar',
  templateUrl: './gk-sidebar.component.html',
  styleUrls: ['./gk-sidebar.component.css']
})
export class GkSidebarComponent implements OnInit {
  gkList;
  activePath;
  constructor(
    private routeParams: ActivatedRoute,
    private dataService: MyDataService,
    private router: Router) {
    this.dataService.getGKList().subscribe((data) => {this.gkList = data;console.log(this.gkList)});

    // Get file name from url
    this.activePath = routeParams.snapshot.url[routeParams.snapshot.url.length - 1].path;
}

  ngOnInit() {
  }
  
  goToGK(lang){
    console.log(lang);
    this.router.navigate(['/GK',lang]);
    this.activePath = lang;
  }

}
