import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NavInfo {
  icon: string;
  title: string;
  subtitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navInfoSubject = new BehaviorSubject<NavInfo>({
    icon: 'fa-solar-panel',
    title: 'Dashboard',
    subtitle: 'Monitor and manage connected village systems'
  });

  navInfo$ = this.navInfoSubject.asObservable();

  private readonly routeConfigs: { [key: string]: NavInfo } = {
    '/dashboard': {
      icon: 'fa-solar-panel',
      title: 'Dashboard',
      subtitle: 'Monitor and manage connected village systems'
    },
    '/villages': {
      icon: 'fa-city',
      title: 'Villages',
      subtitle: 'Manage and monitor village installations'
    },
    '/users': {
      icon: 'fa-users',
      title: 'Users',
      subtitle: 'Manage system users and permissions'
    },
    '/water': {
      icon: 'fa-tint',
      title: 'Water System',
      subtitle: 'Monitor water distribution and usage'
    },
    '/energy': {
      icon: 'fa-bolt',
      title: 'Energy Grid',
      subtitle: 'Track power generation and consumption'
    },
    '/appliances': {
      icon: 'fa-tv',
      title: 'Appliances',
      subtitle: 'Monitor connected devices and usage'
    },
    '/analytics': {
      icon: 'fa-chart-line',
      title: 'Analytics',
      subtitle: 'View system performance and insights'
    },
    '/notifications': {
      icon: 'fa-bell',
      title: 'Notifications',
      subtitle: 'System alerts and messages'
    },
    '/maintenance': {
      icon: 'fa-tools',
      title: 'Maintenance',
      subtitle: 'System maintenance and repairs'
    },
    '/settings': {
      icon: 'fa-cog',
      title: 'Settings',
      subtitle: 'Configure system preferences'
    }
  };

  updateNavInfo(route: string): void {
    const config = this.routeConfigs[route];
    if (config) {
      this.navInfoSubject.next(config);
    }
  }
}