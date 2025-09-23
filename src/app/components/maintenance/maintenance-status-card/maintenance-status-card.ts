import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance-status-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="status-card" [ngClass]="'status-' + type">
      <div class="icon-container">
        <i [class]="icon"></i>
      </div>
      <div class="status-label">{{ label }}</div>
      <div class="status-count">{{ count }}</div>
      <div class="progress">
        <div class="progress-bar" [ngStyle]="{'width': progressWidth}"></div>
      </div>
    </div>
  `,
  styles: [`
    .status-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .icon-container {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
    }
    .status-label {
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
    }
    .status-count {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    .progress {
      height: 4px;
      background: #f0f0f0;
      border-radius: 2px;
      overflow: hidden;
    }
    .progress-bar {
      height: 100%;
      border-radius: 2px;
    }
    
    /* Status types */
    .status-completed .icon-container {
      background-color: #e8f5e9;
      color: #2E7D32;
    }
    .status-completed .progress-bar {
      background-color: #2E7D32;
    }
    
    .status-scheduled .icon-container {
      background-color: #f3e9ff;
      color: #9A3FEF;
    }
    .status-scheduled .progress-bar {
      background-color: #9A3FEF;
    }
    
    .status-in-progress .icon-container {
      background-color: #e3f2fd;
      color: #1976D2;
    }
    .status-in-progress .progress-bar {
      background-color: #1976D2;
    }
    
    .status-overdue .icon-container {
      background-color: #ffebee;
      color: #C62828;
    }
    .status-overdue .progress-bar {
      background-color: #C62828;
    }
  `]
})
export class MaintenanceStatusCardComponent {
  @Input() type: 'completed' | 'scheduled' | 'in-progress' | 'overdue' = 'completed';
  @Input() label: string = '';
  @Input() count: number = 0;
  @Input() total: number = 0;
  
  get icon(): string {
    const icons = {
      'completed': 'fas fa-check',
      'scheduled': 'fas fa-calendar',
      'in-progress': 'fas fa-spinner',
      'overdue': 'fas fa-exclamation-circle'
    };
    return icons[this.type];
  }
  
  get progressWidth(): string {
    if (this.total === 0) return '0%';
    return `${(this.count / this.total) * 100}%`;
  }
}