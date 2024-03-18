import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';

import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
}
