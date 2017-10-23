import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-apti',
  templateUrl: './html-apti.component.html',
  styleUrls: ['./html-apti.component.css']
})
export class HtmlAptiComponent implements OnInit {

  constructor() { }
  
  next(){
    console.log('next');
  }

  ngOnInit() {
  }

}
