import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';


@Component({
  selector: 'app-html-iqn-a',
  templateUrl: './html-iqn-a.component.html',
  styleUrls: ['./html-iqn-a.component.css']
})
export class HtmlIqnAComponent {

  htmlQnA: any[];
  constructor(private newService:MyDataService) { }
  
  ngOnInit() {
    // Html QnA Call
    this.newService.htmlQnAJson().subscribe((data) => {this.htmlQnA = data;})
  }

}
