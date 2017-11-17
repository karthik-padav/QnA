import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
activePath
data
constructor( private router: Router) {
  router.events.subscribe((data) => {
                                      this.data = data;
                                      let x = this.data.url.split("/");
                                      this.activePath = x[1];
                                    })
}

  ngOnInit(){  }
}
