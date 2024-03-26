import { Component, Input, HostListener } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
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
    private route: ActivatedRoute,
  ) {}

  toggleNav() {
    this.navVisible = !this.navVisible;
  }

  
}
