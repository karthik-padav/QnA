import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InterviewQComponent } from './interview-q/interview-q.component';
import { ApptiComponent } from './appti/appti.component';
import { HtmlIqnAComponent } from './interview-q/html-iqn-a/html-iqn-a.component';
import { HtmlAptiComponent } from './appti/html-apti/html-apti.component';
import { CAptiComponent } from './appti/c-apti/c-apti.component';

export const router: Routes = [
    {path: '', redirectTo: 'interview-q', pathMatch: 'full'},
    {path: 'interview-q', component: InterviewQComponent},
    {path: 'appti', component: ApptiComponent},
    {path: 'interview-q/html-iqn-a', component: HtmlIqnAComponent},
    {path: 'appti/html-apti', component: HtmlAptiComponent},
    {path: 'appti/c-apti', component: CAptiComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);