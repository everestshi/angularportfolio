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
  @Input() animationSpeed = 300;
  @Input() autoPlay = true;
  @Input() autoPlaySpeed = 3000;
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
      }, 10); // You might not need this if Angular's change detection works as intended after updating `currentSlide`, but it's a useful trick in some scenarios.
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
      // Navigate to project detail page using project ID
      this.router.navigate(['/developer-portfolio', project.id]);
    }
}