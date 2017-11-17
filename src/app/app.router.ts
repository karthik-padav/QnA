import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InterviewQComponent } from './interview-q/interview-q.component';
import { QnaComponent } from './interview-q/qna/qna.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz-list/quiz/quiz.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { AptitudeListComponent } from './aptitude-list/aptitude-list.component';
import { AptitudeComponent } from './aptitude-list/aptitude/aptitude.component';
import { GkListComponent } from './gk-list/gk-list.component';
import { GkComponent } from './gk-list/gk/gk.component';

export const router: Routes = [
    {path: '', redirectTo: 'interview-q', pathMatch: 'full'},
    {path: 'interview-q', component: InterviewQComponent},
    {path: 'interview-q/:name', component: QnaComponent},
    {path: 'quiz', component: QuizListComponent},
    {path: 'quiz/:name', component: QuizComponent},
    {path: 'puzzles', component: PuzzlesComponent},
    {path: 'aptitude', component: AptitudeListComponent},
    {path: 'aptitude/:name', component: AptitudeComponent},
    {path: 'GK', component: GkListComponent},
    {path: 'GK/:name', component: GkComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);