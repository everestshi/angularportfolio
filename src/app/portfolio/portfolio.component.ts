import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { Project } from '../../models/project';
import { ProjectService } from '../services/project.service';

import { Tag } from '../../models/tag';

import { FilterComponent } from '../filter/filter.component';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{
  isCollapsed: boolean = true;
  projects: Project[] = [];
  tags: Tag[] = [];
  tagFilters: Tag[] = [];
  tagSlugs: string[] = []; // Array to store tag slugs


  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
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
    this.route.queryParams.subscribe(params => {
      if (params['tags']) {
        // Parse tag slugs from query parameters
        this.tagSlugs = params['tags'].split(',');
        this.applyFilters();
      }
    });
  }

  handleTagFilterChange(tagFilters: Tag[]): void {
    console.log(tagFilters);
    this.tagSlugs = tagFilters.map(tag => tag.slug);
    // Update query parameters with tag slugs
    this.router.navigate([], { queryParams: { tags: this.tagSlugs.join(',') } });
    this.applyFilters();
  }


  applyFilters(): void {
    if (this.tagSlugs.length > 0) {
      // Filter projects based on tag slugs
      this.projects = this.projectService.getProjects().filter(project =>
        this.tagSlugs.every(slug => project.tags.some(tag => tag.slug === slug))
      );
    } else {
      this.projects = this.projectService.getProjects();
    }
  }  

  clearFilters(): void {
    this.tagSlugs = [];
    this.router.navigate([], { relativeTo: this.route });
  }

  navigateToProjectDetail(project: Project): void {
    this.router.navigate(['/developer-portfolio', project.id]);
  }
  
}
