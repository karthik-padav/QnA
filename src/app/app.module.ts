import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { InterviewQComponent } from './interview-q/interview-q.component';
import { environment } from '../environments/environment';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuizSidebarComponent } from './quiz-list/quiz-sidebar/quiz-sidebar.component';
import { QnASidebarComponent } from './interview-q/qn-a-sidebar/qn-a-sidebar.component';
import { QnaComponent } from './interview-q/qna/qna.component';
import { QuizComponent } from './quiz-list/quiz/quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { AptitudeListComponent } from './aptitude-list/aptitude-list.component';
import { AptitudeComponent } from './aptitude-list/aptitude/aptitude.component';
import { AptitudeSidebarComponent } from './aptitude-list/aptitude-sidebar/aptitude-sidebar.component';
import { GkListComponent } from './gk-list/gk-list.component';
import { GkComponent } from './gk-list/gk/gk.component';
import { GkSidebarComponent } from './gk-list/gk-sidebar/gk-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewQComponent,
    QuizSidebarComponent,
    QnASidebarComponent,
    QnaComponent,
    QuizComponent,
    QuizListComponent,
    PuzzlesComponent,
    AptitudeListComponent,
    AptitudeComponent,
    AptitudeSidebarComponent,
    GkListComponent,
    GkComponent,
    GkSidebarComponent,
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
