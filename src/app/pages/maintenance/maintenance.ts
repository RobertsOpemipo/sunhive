import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceStatusCardComponent } from '../../components/maintenance/maintenance-status-card/maintenance-status-card';
import { ProgressTimelineComponent, TimelineStep } from '../../components/maintenance/progress-timeline/progress-timeline';
import { TaskListComponent, MaintenanceTask } from '../../components/maintenance/task-list/task-list';
import { ScheduleCalendarComponent, CalendarEvent } from '../../components/maintenance/schedule-calendar/schedule-calendar';

@Component({
  selector: 'app-maintenance-page',
  standalone: true,
  imports: [
    CommonModule,
    MaintenanceStatusCardComponent,
    ProgressTimelineComponent,
    TaskListComponent,
    ScheduleCalendarComponent
  ],
  templateUrl: './maintenance.html',
  styleUrl: './maintenance.css'
})
export class MaintenancePage {
  timelineSteps: TimelineStep[] = [
    {
      name: 'Planning',
      date: 'Jan 15, 2025',
      status: 'completed'
    },
    {
      name: 'Preparation',
      date: 'Jan 22, 2025',
      status: 'completed'
    },
    {
      name: 'Execution',
      date: 'Jan 29, 2025',
      status: 'in-progress'
    },
    {
      name: 'Verification',
      date: 'Feb 5, 2025',
      status: 'pending'
    },
    {
      name: 'Completion',
      date: 'Feb 12, 2025',
      status: 'pending'
    }
  ];
  
  maintenanceTasks: MaintenanceTask[] = [
    {
      id: '1',
      title: 'Solar Panel Cleaning and Inspection',
      description: 'Regular routine cleaning of solar panels and inspection at Kamau Village',
      location: 'Kamau Village',
      date: 'Jan 20, 2025',
      assignedTo: 'David Mwai',
      category: 'Maintenance',
      status: 'in-progress',
      priority: 'high'
    },
    {
      id: '2',
      title: 'System Upgrade',
      description: 'Upgrade monitoring system and sensors - Eldoret Village',
      location: 'Eldoret Village',
      date: 'Jan 25, 2025',
      assignedTo: 'David Mwai',
      category: 'Technical',
      status: 'scheduled',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Solar Panel Cleaning and Inspection',
      description: 'Regular routine cleaning of solar panels and inspection at Nakuru Village',
      location: 'Nakuru Village',
      date: 'Jan 30, 2025',
      assignedTo: 'David Mwai',
      category: 'Maintenance',
      status: 'completed',
      priority: 'high'
    },
    {
      id: '4',
      title: 'System Upgrade',
      description: 'Upgrade monitoring system and sensors - Eldoret Village',
      location: 'Eldoret Village',
      date: 'Jan 20, 2025',
      assignedTo: 'David Mwai',
      category: 'Technical',
      status: 'completed',
      priority: 'medium'
    }
  ];
  
  upcomingEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Solar Panel Cleaning and Inspection',
      date: 'Jan 31, 2025',
      location: 'Kamau Village',
      assignedTo: 'David Mwai',
      category: 'Maintenance',
      status: 'scheduled',
      priority: 'high'
    },
    {
      id: '2',
      title: 'System Upgrade',
      date: 'Feb 5, 2025',
      location: 'Eldoret Village',
      assignedTo: 'Joseph Odera',
      category: 'Technical',
      status: 'in-progress',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Inverter Maintenance & Wiring Inspection',
      date: 'Feb 10, 2025',
      location: 'Kisumu, Nakuru',
      assignedTo: 'Team Lead: David Mwai',
      category: 'Maintenance',
      status: 'scheduled',
      priority: 'high'
    },
    {
      id: '4',
      title: 'Monthly Inspection',
      date: 'Feb 15, 2025',
      location: 'All Residents',
      assignedTo: 'Team Lead: Sarah Kimani',
      category: 'Maintenance',
      status: 'scheduled',
      priority: 'medium'
    }
  ];
}