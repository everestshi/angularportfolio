import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dance',
  standalone: true,
  imports: [],
  templateUrl: './dance.component.html',
  styleUrl: './dance.component.scss'
})
export class DanceComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Everest Shi - Dance');
  }
}
