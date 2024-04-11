import { Component, Input, HostListener } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute, RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd, Event } from '@angular/router';
import { Location } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})

export class NavComponent {
  navVisible = false;

  constructor(
    private route: Router,
  ) {}

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    // Close the navbar if a router link is clicked and the navbar is open
    if (this.navVisible && event.target instanceof Element && event.target.matches('a[routerLink]')) {
      this.navVisible = false;
    }
  }

  ngOnInit() {
    // Subscribe to the NavigationEnd event
    this.route.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Close the navbar when a navigation occurs
        this.navVisible = false;
      }
    });
  }

  toggleNav() {
    this.navVisible = !this.navVisible;
  }

  
}
