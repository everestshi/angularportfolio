import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { Project } from '../../models/project';
import { ProjectService } from '../services/project.service';

import { Tag } from '../../models/tag';
import { TagService } from '../services/tag.service';

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
  isCollapsed: boolean = false;
  projects: Project[] = [];
  tags: Tag[] = [];
  tagFilters: Tag[] = [];
  tagSlugs: string[] = []; // Array to store tag slugs

  @ViewChild(FilterComponent) filterComponent!: FilterComponent;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private tagService: TagService,
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
        // Ensure that tags are populated before filtering
        this.tags = this.tagService.getTags();
        // Fetch corresponding Tag objects based on slugs and populate tagFilters array
        this.tagFilters = this.tags.filter(tag => this.tagSlugs.includes(tag.slug));
        this.applyFilters();
      }
    });
  }

  toggleFilter(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log('isCollapsed:', this.isCollapsed);
  }

  handleTagFilterChange(tagFilters: Tag[]): void {
    this.tagFilters = tagFilters;
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

  removeTagFilter(tag: Tag): void {
    // Remove the clicked tag from the tagFilters array
    this.tagFilters = this.tagFilters.filter(t => t !== tag);

    this.updateSelectedTags();
  
    // Update query parameters with the updated tag filters
    this.tagSlugs = this.tagFilters.map(t => t.slug);
    this.router.navigate([], { queryParams: { tags: this.tagSlugs.join(',') } });
    
    // Apply filters with the updated tag filters
    this.applyFilters();
  }
  

  clearFilters(): void {
    this.tagSlugs = [];
    this.router.navigate([], { relativeTo: this.route });
  }

  navigateToProjectDetail(project: Project): void {
    this.router.navigate(['/developer-portfolio', project.id]);
  }
  
  isLast(tag: Tag, array: Tag[]): boolean {
    return array.indexOf(tag) === array.length - 1;
  }

  updateSelectedTags(): void {
    if (this.filterComponent) {
      this.filterComponent.updateSelectedTags(this.tagFilters);
    }
  }
}
