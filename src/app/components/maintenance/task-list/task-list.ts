import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MaintenanceTask {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  assignedTo: string;
  category: string;
  status: 'completed' | 'in-progress' | 'scheduled' | 'overdue';
  priority?: 'high' | 'medium' | 'low';
}
type StatusType = 'completed' | 'in-progress' | 'scheduled' | 'overdue';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="task-list-container">
      <div class="task-list-header">
        <h6 class="mb-0">{{ title }}</h6>
        <div class="task-actions">
          <button *ngIf="showFilter" class="btn-filter">
            <i class="fas fa-filter me-2"></i>Filter
          </button>
          <button *ngIf="showAddButton" class="btn-add">
            <i class="fas fa-plus me-2"></i>{{ addButtonText }}
          </button>
        </div>
      </div>
      
      <div class="task-filters" *ngIf="showStatusFilters">
        <button class="filter-btn" [class.active]="activeFilter === 'all'" (click)="setFilter('all')">
          All tasks
        </button>
        <button class="filter-btn" [class.active]="activeFilter === 'completed'" (click)="setFilter('completed')">
          Completed
        </button>
        <button class="filter-btn" [class.active]="activeFilter === 'in-progress'" (click)="setFilter('in-progress')">
          In-Progress
        </button>
        <button class="filter-btn" [class.active]="activeFilter === 'scheduled'" (click)="setFilter('scheduled')">
          Scheduled
        </button>
        <button class="filter-btn" [class.active]="activeFilter === 'overdue'" (click)="setFilter('overdue')">
          Overdue
        </button>
      </div>
      
      <div class="task-items">
        <div class="task-item" *ngFor="let task of filteredTasks" [ngClass]="'task-' + task.status">
          <div class="task-color-indicator"></div>
          <div class="task-content">
            <h6 class="task-title">{{ task.title }}</h6>
            <p class="task-description">{{ task.description }}</p>
            <div class="task-meta">
              <div class="meta-item">
                <i class="fas fa-calendar me-1"></i>
                <span>{{ task.date }}</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-user me-1"></i>
                <span>{{ task.assignedTo }}</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-tag me-1"></i>
                <span>{{ task.category }}</span>
              </div>
              <div class="meta-item" *ngIf="task.location">
                <i class="fas fa-map-marker-alt me-1"></i>
                <span>{{ task.location }}</span>
              </div>
            </div>
          </div>
          <div class="task-actions">
            <div class="status-badge" [ngClass]="'status-' + task.status">
              {{ getStatusLabel(task.status) }}
            </div>
            <div *ngIf="task.priority" class="priority-badge" [ngClass]="'priority-' + task.priority">
              {{ task.priority }} Priority
            </div>
          </div>
          <div class="task-footer">
            <button class="btn-view-details">View details</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .task-list-container {
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    
    .task-list-header {
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
    }
    
    .task-actions {
      display: flex;
      gap: 10px;
    }
    
    .btn-filter, .btn-add {
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 13px;
      display: flex;
      align-items: center;
      border: 1px solid #ddd;
      background: white;
      cursor: pointer;
    }
    
    .btn-add {
      background: #9A3FEF;
      color: white;
      border: none;
    }
    
    .task-filters {
      display: flex;
      padding: 12px 20px;
      gap: 10px;
      border-bottom: 1px solid #eee;
      flex-wrap: wrap;
    }
    
    .filter-btn {
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 13px;
      border: 1px solid #eee;
      background: white;
      cursor: pointer;
    }
    
    .filter-btn.active {
      background: #9A3FEF;
      color: white;
      border-color: #9A3FEF;
    }
    
    .task-items {
      padding: 0;
    }
    
    .task-item {
      display: flex;
      flex-direction: column;
      padding: 16px 20px;
      border-bottom: 1px solid #eee;
      position: relative;
    }
    
    .task-color-indicator {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
    }
    
    .task-completed .task-color-indicator {
      background-color: #4CAF50;
    }
    
    .task-in-progress .task-color-indicator {
      background-color: #2196F3;
    }
    
    .task-scheduled .task-color-indicator {
      background-color: #9A3FEF;
    }
    
    .task-overdue .task-color-indicator {
      background-color: #F44336;
    }
    
    .task-content {
      padding-left: 10px;
    }
    
    .task-title {
      margin-bottom: 6px;
      font-size: 15px;
    }
    
    .task-description {
      margin-bottom: 10px;
      font-size: 13px;
      color: #666;
    }
    
    .task-meta {
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
    
    .status-badge, .priority-badge {
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
      display: inline-block;
      margin-right: 8px;
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
    
    .task-footer {
      margin-top: 12px;
      display: flex;
      justify-content: flex-end;
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
export class TaskListComponent {
  @Input() tasks: MaintenanceTask[] = [];
  @Input() title: string = 'Maintenance Tasks';
  @Input() showFilter: boolean = true;
  @Input() showAddButton: boolean = true;
  @Input() showStatusFilters: boolean = true;
  @Input() addButtonText: string = 'New Task';
  
  activeFilter: string = 'all';
  
  get filteredTasks(): MaintenanceTask[] {
    if (this.activeFilter === 'all') {
      return this.tasks;
    }
    return this.tasks.filter(task => task.status === this.activeFilter);
  }
  
  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
  
  getStatusLabel(status: string): string {
    const labels = {
      'completed': 'Completed',
      'in-progress': 'In Progress',
      'scheduled': 'Scheduled',
      'overdue': 'Overdue'
    };
    return (status in labels) ? labels[status as StatusType] : status;
  }
}