import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { PROJECTS } from '../../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }

  GetProjectById(id: number): Project {
    let project = PROJECTS.find(project => project.id === id);
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
  }
}
