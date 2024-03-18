import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume-code',
  standalone: true,
  imports: [],
  templateUrl: './resume-code.component.html',
  styleUrl: './resume-code.component.scss'
})
export class ResumeCodeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Everest Shi - Developer Resume');
  }
}
