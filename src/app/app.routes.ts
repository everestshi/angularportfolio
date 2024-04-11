import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { DanceComponent } from './dance/dance.component';
import { ResumeCodeComponent } from './resume-code/resume-code.component';
import { CodeComponent } from './app-code/code.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
    { path: 'dance', component: DanceComponent, pathMatch: 'full' },
    { path: 'code', component: CodeComponent, pathMatch: 'full' },
    { path: 'developer-portfolio', component: PortfolioComponent, pathMatch: 'full'},
    { path: 'developer-portfolio/:id', component: ProjectComponent},
    { path: 'developer-resume', component: ResumeCodeComponent, pathMatch: 'full'},
    { path: 'contact', component: ContactComponent, pathMatch: 'full'},
    { path: '**', redirectTo: '' }
];
