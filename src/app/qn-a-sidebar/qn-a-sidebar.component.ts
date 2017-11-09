import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qn-a-sidebar',
  templateUrl: './qn-a-sidebar.component.html',
  styleUrls: ['./qn-a-sidebar.component.css']
})
export class QnASidebarComponent implements OnInit {
  activePath;
  constructor(
    private activatedRoute: ActivatedRoute) {
      this.activePath = activatedRoute.snapshot.url[activatedRoute.snapshot.url.length - 1].path;
      console.log(this.activePath);
  }

  ngOnInit() {
  }

}
