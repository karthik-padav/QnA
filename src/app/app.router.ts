import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InterviewQComponent } from './interview-q/interview-q.component';
import { ApptiComponent } from './appti/appti.component';
import { HtmlIqnAComponent } from './html-iqn-a/html-iqn-a.component';

export const router: Routes = [
    {path: '', redirectTo: 'interview-q', pathMatch: 'full'},
    {path: 'interview-q', component: InterviewQComponent},
    {path: 'appti', component: ApptiComponent},
    {path: 'interview-q/html-iqn-a', component: HtmlIqnAComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);