import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineStep {
  name: string;
  date: string;
  status: 'completed' | 'in-progress' | 'pending';
}
type StatusType = 'completed' | 'in-progress' | 'scheduled' | 'overdue';
@Component({
  selector: 'app-progress-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timeline-container">
      <div class="phase-badge">Phase {{ currentPhase }} of {{ totalPhases }}</div>
      <div class="timeline">
        <div class="timeline-line"></div>
        <div class="timeline-steps">
          <div class="timeline-step" *ngFor="let step of steps; let i = index">
            <div class="step-connector" [ngClass]="{'active': step.status !== 'pending'}"></div>
            <div class="step-icon" [ngClass]="step.status">
              <i [class]="getStepIcon(step.status)"></i>
            </div>
            <div class="step-content">
              <div class="step-name">{{ step.name }}</div>
              <div class="step-date">{{ step.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timeline-container {
      position: relative;
      padding: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .phase-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #f3e9ff;
      color: #9A3FEF;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .timeline {
      position: relative;
      padding: 20px 0;
    }
    
    .timeline-line {
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      height: 2px;
      background: #eee;
      z-index: 1;
    }
    
    .timeline-steps {
      display: flex;
      justify-content: space-between;
      position: relative;
      z-index: 2;
    }
    
    .timeline-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      position: relative;
    }
    
    .step-connector {
      width: 100%;
      height: 2px;
      background: #eee;
      position: absolute;
      top: 20px;
      left: -50%;
      z-index: 1;
    }
    
    .step-connector.active {
      background: #9A3FEF;
    }
    
    .timeline-step:first-child .step-connector {
      display: none;
    }
    
    .step-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
      position: relative;
      z-index: 2;
      color: #999;
    }
    
    .step-icon.completed {
      background: #E8F5E9;
      color: #2E7D32;
    }
    
    .step-icon.in-progress {
      background: #f3e9ff;
      color: #9A3FEF;
    }
    
    .step-content {
      text-align: center;
    }
    
    .step-name {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 4px;
    }
    
    .step-date {
      font-size: 12px;
      color: #666;
    }
  `]
})
export class ProgressTimelineComponent {
  @Input() steps: TimelineStep[] = [];
  @Input() currentPhase: number = 3;
  @Input() totalPhases: number = 5;
  
  getStepIcon(status: string): string {
    const icons = {
      'completed': 'fas fa-check',
      'in-progress': 'fas fa-tools',
      'pending': 'fas fa-flag'
    };
    return (status in icons) ? icons[status as keyof typeof icons] : status;
  }
}