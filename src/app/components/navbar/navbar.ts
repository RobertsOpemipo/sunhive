import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';
import { NavInfo, NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit, OnDestroy {
  currentNav!: NavInfo;
  private subscription: Subscription | undefined;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.subscription = this.navigationService.navInfo$.subscribe(
      navInfo => this.currentNav = navInfo
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
