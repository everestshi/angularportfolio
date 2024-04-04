import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../services/project.service';
import { Project } from '../../models/project';
import { Location } from '@angular/common';

import { Tag } from '../../models/tag';
import { TagService } from '../services/tag.service';

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
  tags: Tag[] = [];
  constructor(
    private titleService: Title, 
    private projectService: ProjectService,
    private tagService: TagService,
    private location: Location
    ) {
    this.titleService.setTitle('Everest Shi - Code');
    this.projectService.getProjects();
    this.tagService.getTags();
  }

  projects: Project[] = [];
  featuredProjects: Project[] = [];

  slides: any[] = [{}];

  ngOnInit(): void {
    this.getProjects();
    this.getTags();
  }

  getTags(): void {
    this.tags = this.tagService.getTags();
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
