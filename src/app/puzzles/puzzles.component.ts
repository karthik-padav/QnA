import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';

@Component({
  selector: 'app-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.css']
})
export class PuzzlesComponent implements OnInit {
  puzzles: any[];
  constructor( private newService: MyDataService) { }

  ngOnInit() {
    this.newService.puzzles().subscribe((data) => {this.puzzles = data; console.log(data)})
  }

}
