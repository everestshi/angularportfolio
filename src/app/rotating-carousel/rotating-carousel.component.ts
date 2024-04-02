import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-rotating-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rotating-carousel.component.html',
  styleUrl: './rotating-carousel.component.scss'
})
export class RotatingCarouselComponent implements OnInit{
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.getProjects();
  }
  
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }
}
