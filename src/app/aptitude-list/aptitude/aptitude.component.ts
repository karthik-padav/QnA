import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MyDataService } from './../../my-data.service';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css']
})
export class AptitudeComponent implements OnInit {
  activePath;
  aptitudeQnA : any[];
  constructor(private routeParams: ActivatedRoute,
    private dataService: MyDataService) {

    this.routeParams.params
      .subscribe((params) => {
      this.activePath = params.name;
        this.getAptitude();
      })
  }

  ngOnInit() {
  }

  getAptitude(){
    console.log(this.activePath);
    this.dataService.getAptitude(this.activePath).subscribe((data) => {this.aptitudeQnA = data;console.log(this.aptitudeQnA);})
  }

}
