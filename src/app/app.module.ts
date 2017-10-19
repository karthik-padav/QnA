import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { InterviewQComponent } from './interview-q/interview-q.component';
import { ApptiComponent } from './appti/appti.component';
import { HtmlIqnAComponent } from './html-iqn-a/html-iqn-a.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    InterviewQComponent,
    ApptiComponent,
    HtmlIqnAComponent
  ],
  imports: [
    BrowserModule,
    routes,
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
