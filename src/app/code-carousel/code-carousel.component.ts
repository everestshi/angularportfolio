import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-code-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-carousel.component.html',
  styleUrl: './code-carousel.component.scss',
})

export class CodeCarouselComponent implements OnInit {
  @Input() slides: any[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = true;
  @Input() autoPlaySpeed = 5000;
  currentSlide = 0;
  hidden = false;
  autoPlayInterval: any;

  constructor(private router: Router) { }

  next() {
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  ngOnInit() {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }

    // Method to navigate to project detail
    navigateToProjectDetail(project: any): void {
      console.log('Clicked project:', project);
      // Navigate to project detail page using project ID
      this.router.navigate(['/developer-portfolio', project.id]);
    }
}