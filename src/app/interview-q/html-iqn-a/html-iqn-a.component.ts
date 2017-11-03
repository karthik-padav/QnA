import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';


@Component({
  selector: 'app-html-iqn-a',
  templateUrl: './html-iqn-a.component.html',
  styleUrls: ['./html-iqn-a.component.css']
})
export class HtmlIqnAComponent {

 constructor (private newService: MyDataService){

  }

results: any;

  ngOnInit() {
  	this.newService.htmlQnAJson().subscribe(
  		data => {this.results = data['results'];}
  	)

  	console.log(this.results)
  }

}
