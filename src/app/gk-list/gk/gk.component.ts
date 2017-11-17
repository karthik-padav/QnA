import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MyDataService } from './../../my-data.service';

@Component({
  selector: 'app-gk',
  templateUrl: './gk.component.html',
  styleUrls: ['./gk.component.css']
})
export class GkComponent implements OnInit {
  activePath;
  gkQnA : any[];
  constructor(private routeParams: ActivatedRoute,
    private dataService: MyDataService) {

    this.routeParams.params
      .subscribe((params) => {
      this.activePath = params.name;
        this.getGK();
      })
  }

  ngOnInit() {
  }

  getGK(){
    console.log(this.activePath);
    this.dataService.getGK(this.activePath).subscribe((data) => {this.gkQnA = data;console.log(this.gkQnA);})
  }

}
