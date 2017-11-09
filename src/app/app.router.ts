import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InterviewQComponent } from './interview-q/interview-q.component';
import { ApptiComponent } from './appti/appti.component';
import { HtmlAptiComponent } from './appti/html-apti/html-apti.component';
import { QnaComponent } from './interview-q/qna/qna.component';

export const router: Routes = [
    {path: '', redirectTo: 'interview-q', pathMatch: 'full'},
    {path: 'interview-q', component: InterviewQComponent},
    {path: 'appti', component: ApptiComponent},
    {path: 'appti/html-apti', component: HtmlAptiComponent},
    {path: 'interview-q/:name', component: QnaComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);