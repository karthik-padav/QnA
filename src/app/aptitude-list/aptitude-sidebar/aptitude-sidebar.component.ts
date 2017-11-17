import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aptitude-sidebar',
  templateUrl: './aptitude-sidebar.component.html',
  styleUrls: ['./aptitude-sidebar.component.css']
})
export class AptitudeSidebarComponent implements OnInit {
  aptitudeList;
  activePath;
  constructor(private dataService: MyDataService,
    private router: Router,
    private routeParams: ActivatedRoute) {
    this.dataService.getAptitudeList().subscribe((data) => { this.aptitudeList = data })

    // Get file name from url
    this.activePath = routeParams.snapshot.url[routeParams.snapshot.url.length - 1].path;
  }

  ngOnInit() {
  }
  
  goToAptitude(page){
    this.router.navigate(['/aptitude', page]);
    this.activePath = page;
  }

}
