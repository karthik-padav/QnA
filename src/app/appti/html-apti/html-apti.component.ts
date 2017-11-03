import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';

@Component({
  selector: 'app-html-apti',
  templateUrl: './html-apti.component.html',
  styleUrls: ['./html-apti.component.css']
})
export class HtmlAptiComponent implements OnInit {

  constructor(private newService:MyDataService) { }
  apptiQnA :any;
  clickCount :any;
  randomQnALists :any[];
  numberOfQustions :any;


  ngOnInit() {
    this.clickCount = 0;
    this.numberOfQustions = 10;
    this.randomQnALists = []


    // Html ALL apti questions
    this.newService.htmlApptiQnA().subscribe((data) => {
      this.apptiQnA = data;
      console.log(this.apptiQnA);
      // Html Selected Random question
      for (let i = 0; i < this.numberOfQustions; i++) {
        let number = Math.floor(Math.random() * (this.numberOfQustions - 1 + 1)) + 1;
          this.randomQnALists.push({name:number});
          console.log(this.randomQnALists);
      }
    })

  }

  next(){
    this.clickCount = this.clickCount + 1;
    // console.log(this.number);
    console.log(this.clickCount);
  }

}
