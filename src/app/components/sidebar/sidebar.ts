import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import Tooltip from 'bootstrap/js/dist/tooltip';
import { NavigationService } from '../../services/navigation.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar implements AfterViewInit {
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {
    // Update navigation info on initial load
    this.navigationService.updateNavInfo(this.router.url);

    // Subscribe to router events to update navigation info
    this.router.events.subscribe((event) => {
      if (event.type === 1) { // NavigationEnd
        this.navigationService.updateNavInfo(this.router.url);
      }
    });
  }

  private initializeTooltips(): void {
    // Destroy existing tooltips
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach((el) => {
      const tooltip = Tooltip.getInstance(el);
      if (tooltip) {
        tooltip.dispose();
      }
    });

    // Initialize new tooltips
    const tooltipTriggerList = Array.from(tooltips);
    tooltipTriggerList.forEach((el) => {
      new Tooltip(el as HTMLElement);
    });
  }

  ngAfterViewInit(): void {
    this.initializeTooltips();
  }
}
