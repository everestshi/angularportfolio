import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  project?: Project;
  currentImageIndex = 0; // Carousel current image index
  private autoScrollInterval?: number; // To hold the interval ID

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) { }

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.GetProjectById(id);
  }

  ngOnInit(): void {
    this.getProject();
    this.startAutoScroll();
  }

  startAutoScroll(): void {
    if (typeof window !== 'undefined') {
      this.autoScrollInterval = window.setInterval(() => {
        if (this.project?.images) {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
        }
      }, 3000); // Change image every 3000ms (3 seconds)
    }
  }

  goBack(): void {
    this.location.back();
  }
  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
  
}
