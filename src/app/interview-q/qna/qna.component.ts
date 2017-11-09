import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MyDataService } from './../../my-data.service';

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent implements OnInit {
  QnAjson;
  activePath;
  paramsSubscription;
  constructor(private routeParams: ActivatedRoute,
              private dataService: MyDataService) {
      // Get file name from Route parameter
      this.routeParams.params
      .subscribe((params) => {
        this.activePath = params.name;
        this.getQnAjson();
      });

  }

  ngOnInit() {

  }
  
  // Get QnA json
  getQnAjson(){
      this.dataService.getQnA(this.activePath).subscribe((data) => {this.QnAjson = data;});
  }

}
