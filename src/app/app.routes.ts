import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { DanceComponent } from './dance/dance.component';
import { CodeComponent } from './code/code.component';
import { ResumeCodeComponent } from './resume-code/resume-code.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'dance', component: DanceComponent, pathMatch: 'full' },
    { path: 'code', component: CodeComponent, pathMatch: 'full' },
    { path: 'portfolio', component: PortfolioComponent, pathMatch: 'full'},
    { path: 'resume-code', component: ResumeCodeComponent, pathMatch: 'full'},
    { path: 'contact', component: ContactComponent, pathMatch: 'full'},
    { path: '**', redirectTo: '' }
];
