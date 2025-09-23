import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  assignedTo: string;
  category: string;
  status: 'completed' | 'in-progress' | 'scheduled' | 'overdue';
  priority?: 'high' | 'medium' | 'low';
}

type StatusType = 'completed' | 'in-progress' | 'scheduled' | 'overdue';

@Component({
  selector: 'app-schedule-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="calendar-container">
      <div class="calendar-header">
        <h6 class="mb-0">{{ title }}</h6>
        <div class="calendar-actions">
          <button class="btn-nav" (click)="previousMonth()">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="current-month">{{ currentMonth }} {{ currentYear }}</div>
          <button class="btn-nav" (click)="nextMonth()">
            <i class="fas fa-chevron-right"></i>
          </button>
          <button class="btn-add" *ngIf="showAddButton">
            <i class="fas fa-plus me-2"></i>{{ addButtonText }}
          </button>
        </div>
      </div>
      
      <div class="calendar-events">
        <div class="event-item" *ngFor="let event of events">
          <div class="event-header">
            <div class="event-title">{{ event.title }}</div>
            <div class="status-badge" [ngClass]="'status-' + event.status">
              {{ getStatusLabel(event.status) }}
            </div>
          </div>
          <div class="event-meta">
            <div class="meta-item">
              <i class="fas fa-calendar me-1"></i>
              <span>{{ event.date }}</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-user me-1"></i>
              <span>{{ event.assignedTo }}</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-tag me-1"></i>
              <span>{{ event.category }}</span>
            </div>
            <div class="meta-item" *ngIf="event.location">
              <i class="fas fa-map-marker-alt me-1"></i>
              <span>{{ event.location }}</span>
            </div>
          </div>
          <div class="event-footer">
            <div *ngIf="event.priority" class="priority-badge" [ngClass]="'priority-' + event.priority">
              {{ event.priority }} Priority
            </div>
            <button class="btn-view-details">View details</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .calendar-container {
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    
    .calendar-header {
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
    }
    
    .calendar-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .btn-nav {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ddd;
      background: white;
      cursor: pointer;
    }
    
    .current-month {
      font-size: 14px;
      font-weight: 500;
      margin: 0 10px;
    }
    
    .btn-add {
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 13px;
      display: flex;
      align-items: center;
      background: #9A3FEF;
      color: white;
      border: none;
      cursor: pointer;
    }
    
    .calendar-events {
      padding: 16px 20px;
    }
    
    .event-item {
      padding: 16px;
      border: 1px solid #eee;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    
    .event-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    
    .event-title {
      font-weight: 500;
    }
    
    .event-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 12px;
    }
    
    .meta-item {
      font-size: 12px;
      color: #666;
      display: flex;
      align-items: center;
    }
    
    .event-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .status-badge, .priority-badge {
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
      display: inline-block;
    }
    
    .status-completed {
      background: #E8F5E9;
      color: #2E7D32;
    }
    
    .status-in-progress {
      background: #E3F2FD;
      color: #1976D2;
    }
    
    .status-scheduled {
      background: #F3E9FF;
      color: #9A3FEF;
    }
    
    .status-overdue {
      background: #FFEBEE;
      color: #C62828;
    }
    
    .priority-high {
      background: #FFEBEE;
      color: #C62828;
    }
    
    .priority-medium {
      background: #FFF3E0;
      color: #EF6C00;
    }
    
    .priority-low {
      background: #E8F5E9;
      color: #2E7D32;
    }
    
    .btn-view-details {
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      background: none;
      border: none;
      color: #9A3FEF;
      cursor: pointer;
    }
  `]
})
export class ScheduleCalendarComponent {
  @Input() events: CalendarEvent[] = [];
  @Input() title: string = 'Upcoming Schedule';
  @Input() showAddButton: boolean = true;
  @Input() addButtonText: string = 'Add Event';
  
  currentMonth: string = 'January';
  currentYear: number = 2025;
  
  getStatusLabel(status: StatusType | string): string {
    const labels: Record<StatusType, string> = {
      'completed': 'Completed',
      'in-progress': 'In Progress',
      'scheduled': 'Scheduled',
      'overdue': 'Overdue'
    };
    
    return (status in labels) ? labels[status as StatusType] : status;
  }
  
  previousMonth(): void {
    // Logic to navigate to previous month
  }
  
  nextMonth(): void {
    // Logic to navigate to next month
  }
}