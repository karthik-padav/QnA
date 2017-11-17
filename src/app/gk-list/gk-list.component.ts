import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gk-list',
  templateUrl: './gk-list.component.html',
  styleUrls: ['./gk-list.component.css']
})
export class GkListComponent implements OnInit {
  gkList: any[];
  constructor(private dataService :MyDataService,
              private router : Router) { }

  ngOnInit() {
    this.dataService.getGKList().subscribe((data) => {this.gkList = data})
  }

  goToGK(page){
    this.router.navigate(['/GK', page])
  }

}
