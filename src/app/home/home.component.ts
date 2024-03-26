import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private titleService: Title, private elementRef: ElementRef, private renderer: Renderer2) {
    this.titleService.setTitle('Everest Shi - Home');
    this.setupMouseMoveListener();
  }

  setupMouseMoveListener() {
    this.renderer.listen(this.elementRef.nativeElement, 'mousemove', (event) => {
      this.moveImages(event.clientX);
    });
  }

  moveImages(mouseEvent: MouseEvent) {
    const container = this.elementRef.nativeElement.querySelector('.home-container');
    const containerWidth = container.offsetWidth;
    const mouseX = (event as MouseEvent).clientX - container.getBoundingClientRect().left;
    const percentage = (mouseX / containerWidth) * 100;
  
    const homeImg = document.getElementById('home-img') as HTMLImageElement;
    const dancerImg = document.getElementById('dancer-img') as HTMLImageElement;
    const coderImg = document.getElementById('coder-img') as HTMLImageElement;
    const dancerDesc = document.getElementById('home-dance') as HTMLElement;
    const coderDesc = document.getElementById('home-code') as HTMLElement;

  
    // Calculate translation value (adjust the multiplier as needed)
    const translation = -(percentage - 50) * 0.1; // Adjust 0.1 for smaller movement
  
    // Apply transform to homeImg
    homeImg.style.transform = `translateX(${translation}%)`;

     // Calculate distance from center in terms of percentage (max at 50%)
    const distanceFromCenter = Math.abs(50 - percentage);
    // Map this distance to opacity (0 at the edges, 1 at the center)
    const opacity = distanceFromCenter <= 30 ? 1 - (distanceFromCenter / 30) : 0;
    homeImg.style.opacity = `${opacity}`;


  // Apply opposite opacity and same translation to coderImg or dancerImg
  if (translation < 0) {
    // Mouse is on the right side, show coderImg more clearly
    coderImg.style.opacity = `${1 - opacity}`; // Opposite opacity
    coderImg.style.transform = `translateX(${translation}%)`; // Same translation
    dancerImg.style.opacity = '0';
    dancerImg.style.transform = `translateX(0)`;
    dancerDesc.style.opacity = `${opacity}`;
  } else if (translation > 0) {
    // Mouse is on the left side, show dancerImg more clearly
    dancerImg.style.opacity = `${1 - opacity}`; // Opposite opacity
    dancerImg.style.transform = `translateX(${translation}%)`; // Same translation
    coderImg.style.opacity = '0';
    coderImg.style.transform = `translateX(0)`;
    coderDesc.style.opacity = `${opacity}`;
  } else {
    // Mouse is near the center, reduce visibility of both coderImg and dancerImg
    coderImg.style.opacity = '0';
    dancerImg.style.opacity = '0';
  }
  }
  
  resetImages() {
    const homeImg = document.getElementById('home-img') as HTMLImageElement;
    const dancerImg = document.getElementById('dancer-img') as HTMLImageElement;
    const coderImg = document.getElementById('coder-img') as HTMLImageElement;
    const dancerDesc = document.getElementById('home-dance') as HTMLElement;
    const coderDesc = document.getElementById('home-code') as HTMLElement;
    homeImg.style.transform = `translateX(0)`;
    homeImg.style.opacity = '1';
    dancerImg.style.opacity = '0';
    dancerImg.style.transform = `translateX(0)`;
    coderImg.style.opacity = '0';
    coderImg.style.transform = `translateX(0)`;
    dancerDesc.style.opacity = '1';
    coderDesc.style.opacity = '1';
  }
  
}