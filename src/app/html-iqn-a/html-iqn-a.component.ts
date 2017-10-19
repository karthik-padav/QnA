import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-html-iqn-a',
  templateUrl: './html-iqn-a.component.html',
  styleUrls: ['./html-iqn-a.component.css']
})
export class HtmlIqnAComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFireDatabase ) {
    this.items = af.list('/QnA');
    console.log(this.items);
   }

  ngOnInit() {
    console.log('html init');
    console.log(this.items);
  }

}
