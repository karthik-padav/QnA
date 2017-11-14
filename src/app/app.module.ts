import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { InterviewQComponent } from './interview-q/interview-q.component';
import { ApptiComponent } from './appti/appti.component';
import { environment } from '../environments/environment';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuizSidebarComponent } from './quiz-sidebar/quiz-sidebar.component';
import { QnASidebarComponent } from './qn-a-sidebar/qn-a-sidebar.component';
import { QnaComponent } from './interview-q/qna/qna.component';
import { QuizComponent } from './appti/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewQComponent,
    ApptiComponent,
    QuizSidebarComponent,
    QnASidebarComponent,
    QnaComponent,
    QuizComponent,
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
