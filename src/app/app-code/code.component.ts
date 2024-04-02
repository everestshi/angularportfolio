import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../services/project.service';
import { Project } from '../../models/project';
import { Location } from '@angular/common';


import { CodeCarouselComponent } from '../code-carousel/code-carousel.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CommonModule,
    CodeCarouselComponent,
    RouterOutlet],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CodeComponent implements OnInit{
  constructor(
    private titleService: Title, 
    private projectService: ProjectService,
    private location: Location
    ) {
    this.titleService.setTitle('Everest Shi - Code');
    this.projectService.getProjects();
  }

  projects: Project[] = [];
  featuredProjects: Project[] = [];

  slides: any[] = [{}];

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects(): void {
    this.projects = this.projectService.getProjects();
    this.featuredProjects = this.projects.filter((project) => project.featured === true);
  }

  goBack(): void {
    this.location.back();
  }

  pauseAutoPlay() {
    const carousel = document.querySelector('.slides') as HTMLElement;
    if (carousel) {
      carousel.classList.add('paused');
    }
  }

  resumeAutoPlay() {
    const carousel = document.querySelector('.slides') as HTMLElement;
    if (carousel) {
      carousel.classList.remove('paused');
    }
  }

  onMouseEnter() {
    this.pauseAutoPlay();
  }

  onMouseLeave() {
    this.resumeAutoPlay();
  }
}
