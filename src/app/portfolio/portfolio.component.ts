import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { Project } from '../../models/project';
import { ProjectService } from '../services/project.service';

import { Tag } from '../../models/tag';

import { FilterComponent } from '../filter/filter.component';
import { FilterService } from '../services/filter.service';

import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FilterComponent, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{
  isCollapsed: boolean = true;
  projects: Project[] = [];
  tags: Tag[] = [];
  tagFilters: Tag[] = [];

  constructor(
    private titleService: Title,
    private projectService: ProjectService,
    private filterService: FilterService
  ) {
    this.titleService.setTitle('Everest Shi - Developer Portfolio');
    this.getProjects();

  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  ngOnInit(): void {
    this.getProjects();
  }

  handleTagFilterChange(tagFilters: Tag[]): void {
    console.log('Tag Filters:', tagFilters); // Log the received tag filters
    this.tagFilters = tagFilters;
    this.applyFilters();
  }


applyFilters(): void {
  if (this.tagFilters.length > 0) {
    this.projects = this.projectService.getProjects().filter(project =>
      this.tagFilters.every(filterTag =>
        project.tags.some(tag => tag.id === filterTag.id)
      )
    );
  } else {
    this.projects = this.projectService.getProjects();
  }
}

  clearFilters(): void {
    this.filterService.clearFilters();
  }
}
