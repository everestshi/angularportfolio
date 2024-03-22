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
  
    // Calculate translation value (adjust the multiplier as needed)
    const translation = (percentage - 50) * 0.1; // Adjust 0.1 for smaller movement
  
    // Apply transform to homeImg
    homeImg.style.transform = `translateX(${translation}%)`;


  /*
    // Adjust display and opacity for dancerImg and coderImg
    if (translation > 0) {
      // Move to the right
      dancerImg.style.opacity = '1';
      dancerImg.style.display = 'block';
      homeImg.style.opacity = '0';
      homeImg.style.display = 'none';
    } else {
      // Move to the left
      coderImg.style.opacity = '1';
      coderImg.style.display = 'block';
      homeImg.style.opacity = '0';
      homeImg.style.display = 'none';
    }*/
  }
  
  resetImages() {
    const homeImg = document.getElementById('home-img') as HTMLImageElement;
    const dancerImg = document.getElementById('dancer-img') as HTMLImageElement;
    const coderImg = document.getElementById('coder-img') as HTMLImageElement;
    homeImg.style.transform = `translateX(0)`;
    /*dancerImg.style.opacity = '0';
    dancerImg.style.display = 'none';
    dancerImg.style.transform = `translateX(0)`;
    coderImg.style.opacity = '0';
    coderImg.style.display = 'none';
    coderImg.style.transform = `translateX(0)`;*/


    
  }
  
  
}