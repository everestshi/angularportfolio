import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../../models/project';


@Component({
  selector: 'app-code-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-carousel.component.html',
  styleUrl: './code-carousel.component.scss',
})

export class CodeCarouselComponent implements OnInit {
  //@Input() slides: any[] = [];
  indicatorsVisible = true;
  animationSpeed = 500;
  autoPlay = true;
  autoPlaySpeed = 5000;
  currentSlide = 0;
  hidden = false;
  autoPlayInterval: any;
  featuredProjects: Project[] = [];


  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.loadFeaturedProjects();
    if (this.autoPlay) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  loadFeaturedProjects(): void {
    this.featuredProjects = this.projectService.getProjects()
      .filter(project => project.featured === true);
  }

  startAutoScroll(): void {
    if (typeof window !== 'undefined') {
      this.autoPlayInterval = window.setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }

  stopAutoScroll(): void {
    clearInterval(this.autoPlayInterval);
  }

  next() {
    let currentSlide = (this.currentSlide + 1) % this.featuredProjects.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide =
      (this.currentSlide - 1 + this.featuredProjects.length) % this.featuredProjects.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    // First, make the current slide invisible
    this.hidden = true;
    
    // Wait for the opacity transition to finish before changing the slide
    setTimeout(() => {
      // Update the slide
      this.currentSlide = index;
      
      // Use a minimal timeout before making the slide visible again to ensure
      // the slide content is updated in the DOM
      setTimeout(() => {
        this.hidden = false;
      }, 10);
    }, this.animationSpeed);
  }

  navigateToProjectDetail(project: Project): void {
    // Navigate to project detail page using project ID
    this.router.navigate(['/developer-portfolio', project.id]);
  }
}