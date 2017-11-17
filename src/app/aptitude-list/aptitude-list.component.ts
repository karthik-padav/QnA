import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aptitude-list',
  templateUrl: './aptitude-list.component.html',
  styleUrls: ['./aptitude-list.component.css']
})
export class AptitudeListComponent implements OnInit {

  aptitudeList: any[];
  constructor(private newService: MyDataService,
              private router: Router) { }

  ngOnInit() {
    this.newService.getAptitudeList().subscribe((data) => {this.aptitudeList = data});
  }

  goToAptitude(lang){
    console.log(lang);
    this.router.navigate(['/aptitude', lang]);
  }

}
