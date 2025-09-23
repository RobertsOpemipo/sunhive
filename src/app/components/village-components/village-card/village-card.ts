import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ResourceUtilization {
  waterUsage: number;
  electricity: number;
  internet: number;
  appliances: number;
}

export interface VillageData {
  name: string;
  totalPopulation: number;
  energyUsage: string;
  revenue: string;
  resourceUtilization: ResourceUtilization;
  lastUpdated: string;
  status: 'Active' | 'Inactive' | 'Maintenance';
}

@Component({
  selector: 'app-village-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="village-card">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div class="d-flex align-items-center gap-2">
            <div class="village-icon">
              <i class="fas fa-home"></i>
            </div>
            <h6 class="mb-0">{{ data.name }}</h6>
          </div>
          <span class="status-badge" [class]="'status-' + data.status.toLowerCase()">
            {{ data.status }}
          </span>
        </div>
      </div>

      <div class="card-metrics">
        <div class="d-flex justify-content-between mb-3">
          <div class="metric">
            <div class="metric-value">{{ data.totalPopulation }}</div>
            <div class="metric-icon"><i class="fas fa-users"></i></div>
          </div>
          <div class="metric">
            <div class="metric-value">{{ data.energyUsage }}</div>
            <div class="metric-icon"><i class="fas fa-bolt"></i></div>
          </div>
          <div class="metric">
            <div class="metric-value">{{ data.revenue }}</div>
            <div class="metric-icon"><i class="fas fa-dollar-sign"></i></div>
          </div>
        </div>

        <!-- Resource utilization -->
        <div class="resource-utilization">
          <div class="resource-item" *ngFor="let res of resources">
            <div class="resource-label">
              <i [class]="res.icon"></i>
              <span>{{ res.label }}</span>
            </div>
            <div class="progress-container">
              <div class="progress">
                <div class="progress-bar" 
                     [class]="res.color"
                     [style.width.%]="res.value"></div>
              </div>
              <span class="percentage">{{ res.value }}%</span>
            </div>
          </div>
        </div>

        <div class="card-footer mt-3">
          <small class="text-muted">
            <i class="fas fa-clock me-1"></i>
            Updated {{ data.lastUpdated }}
          </small>
          <button class="btn btn-link btn-sm text-purple">
            View Details <i class="fas fa-chevron-right ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .village-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
    .village-icon { width: 32px; height: 32px; background: #f3e9ff; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #9A3FEF; }
    .status-badge { padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
    .status-active { background: #E8F5E9; color: #2E7D32; }
    .status-maintenance { background: #FFF3E0; color: #EF6C00; }
    .status-inactive { background: #FFEBEE; color: #C62828; }
    .metric { text-align: center; }
    .metric-value { font-size: 18px; font-weight: 600; margin-bottom: 4px; }
    .resource-label { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 13px; }
    .progress-container { display: flex; align-items: center; gap: 10px; }
    .progress { flex: 1; height: 6px; background: #f5f5f5; border-radius: 3px; overflow: hidden; }
    .progress-bar { height: 100%; }
    .bg-purple { background-color: #9A3FEF; }
    .text-purple { color: #9A3FEF; }
    .card-footer { display: flex; justify-content: space-between; align-items: center; }
  `]
})
export class VillageCardComponent {
  @Input() data!: VillageData;

  get resources() {
    return [
      { label: 'Water Usage', value: this.data.resourceUtilization.waterUsage, icon: 'fas fa-tint text-primary', color: 'bg-primary' },
      { label: 'Electricity', value: this.data.resourceUtilization.electricity, icon: 'fas fa-bolt text-warning', color: 'bg-warning' },
      { label: 'Internet', value: this.data.resourceUtilization.internet, icon: 'fas fa-wifi text-success', color: 'bg-success' },
      { label: 'Appliances', value: this.data.resourceUtilization.appliances, icon: 'fas fa-tv text-purple', color: 'bg-purple' }
    ];
  }
}
