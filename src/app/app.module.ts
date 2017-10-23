import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { InterviewQComponent } from './interview-q/interview-q.component';
import { ApptiComponent } from './appti/appti.component';
import { HtmlIqnAComponent } from './interview-q/html-iqn-a/html-iqn-a.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule }   from '@angular/forms';
import { HtmlAptiComponent } from './appti/html-apti/html-apti.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewQComponent,
    ApptiComponent,
    HtmlIqnAComponent,
    HtmlAptiComponent
  ],
  imports: [
    BrowserModule,
    routes,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
