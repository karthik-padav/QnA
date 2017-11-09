import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { InterviewQComponent } from './interview-q/interview-q.component';
import { ApptiComponent } from './appti/appti.component';
import { environment } from '../environments/environment';

// import { AngularFireModule } from 'angularfire2';
// // for AngularFireDatabase
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
// // for AngularFireAuth
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule }   from '@angular/forms';
import { HtmlAptiComponent } from './appti/html-apti/html-apti.component';
import { HttpModule } from '@angular/http';
import { QuizSidebarComponent } from './quiz-sidebar/quiz-sidebar.component';
import { CAptiComponent } from './appti/c-apti/c-apti.component';
import { QnASidebarComponent } from './qn-a-sidebar/qn-a-sidebar.component';
import { QnaComponent } from './interview-q/qna/qna.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewQComponent,
    ApptiComponent,
    HtmlAptiComponent,
    QuizSidebarComponent,
    CAptiComponent,
    QnASidebarComponent,
    QnaComponent,
    ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule
  ],
  providers: [
    MyDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
