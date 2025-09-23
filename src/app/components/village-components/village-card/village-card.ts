import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        <div class="d-flex justify-content-between mb-4">
          <div class="metric">
            <div class="metric-label">Total Residents</div>
            <div class="metric-value-container">
              <div class="metric-icon user-icon"><i class="fas fa-users"></i></div>
              <div class="metric-value">{{ data.totalPopulation }}</div>
            </div>
            <div class="metric-trend">+{{ getRandomTrend() }}% this week</div>
          </div>
          <div class="metric">
            <div class="metric-label">Energy Usage</div>
            <div class="metric-value-container">
              <div class="metric-icon energy-icon"><i class="fas fa-bolt"></i></div>
              <div class="metric-value">{{ data.energyUsage }}</div>
            </div>
            <div class="metric-trend">+{{ getRandomTrend() }}% this week</div>
          </div>
          <div class="metric">
            <div class="metric-label">Total Revenue</div>
            <div class="metric-value-container">
              <div class="metric-icon revenue-icon"><i class="fas fa-dollar-sign"></i></div>
              <div class="metric-value">{{ data.revenue }}</div>
            </div>
            <div class="metric-trend">+{{ getRandomTrend() }}% this week</div>
          </div>
        </div>

        <h6 class="resource-title">Resource Utilization</h6>
        
        <!-- Resource utilization -->
        <div class="resource-utilization">
          <div class="resource-item" *ngFor="let res of resources">
            <div class="resource-header">
              <div class="resource-label">
                <i [class]="res.icon"></i>
                <span>{{ res.label }}</span>
              </div>
              <span class="percentage">{{ res.value }}%</span>
            </div>
            <div class="progress">
              <div class="progress-bar" 
                   [class]="res.color"
                   [style.width.%]="res.value"></div>
            </div>
          </div>
        </div>

        <div class="card-footer mt-4">
          <button class="btn btn-view">
            <i class="fas fa-eye me-2"></i>View Details
          </button>
          <button class="btn btn-edit">
            <i class="fas fa-edit me-2"></i>Edit
          </button>
          <div class="updated-time">
            <i class="fas fa-clock me-1"></i>
            Updated {{ data.lastUpdated }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .village-card { 
      background: white; 
      border-radius: 12px; 
      padding: 24px; 
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      height: 100%;
    }
    .village-icon { 
      width: 32px; 
      height: 32px; 
      background: #f3e9ff; 
      border-radius: 8px; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      color: #9A3FEF; 
    }
    .status-badge { 
      padding: 4px 10px; 
      border-radius: 20px; 
      font-size: 12px; 
      font-weight: 500; 
    }
    .status-active { 
      background: #E8F5E9; 
      color: #2E7D32; 
    }
    .status-maintenance { 
      background: #FFF3E0; 
      color: #EF6C00; 
    }
    .status-inactive { 
      background: #FFEBEE; 
      color: #C62828; 
    }
    .metric { 
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .metric-label {
      font-size: 12px;
      color: #666;
      margin-bottom: 8px;
    }
    .metric-value-container {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
    }
    .metric-value { 
      font-size: 20px; 
      font-weight: 600; 
    }
    .metric-icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
    .user-icon {
      background-color: #e8f5e9;
      color: #2E7D32;
    }
    .energy-icon {
      background-color: #fff3e0;
      color: #EF6C00;
    }
    .revenue-icon {
      background-color: #e3f2fd;
      color: #1976D2;
    }
    .metric-trend {
      font-size: 11px;
      color: #2E7D32;
    }
    .resource-title {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 16px;
    }
    .resource-utilization {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .resource-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .resource-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .resource-label { 
      display: flex; 
      align-items: center; 
      gap: 8px; 
      font-size: 13px; 
    }
    .percentage {
      font-size: 13px;
      font-weight: 500;
    }
    .progress { 
      height: 8px; 
      background: #f5f5f5; 
      border-radius: 4px; 
      overflow: hidden; 
      width: 100%;
    }
    .progress-bar { 
      height: 100%; 
      border-radius: 4px;
    }
    .bg-primary { 
      background-color: #1976D2; 
    }
    .bg-warning { 
      background-color: #FF9800; 
    }
    .bg-success { 
      background-color: #4CAF50; 
    }
    .bg-purple { 
      background-color: #9A3FEF; 
    }
    .card-footer { 
      display: flex; 
      justify-content: flex-start; 
      align-items: center; 
      gap: 12px;
      margin-top: 20px;
      flex-wrap: wrap;
      position: relative;
    }
    .btn {
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 500;
      display: flex;
      align-items: center;
      cursor: pointer;
      border: none;
    }
    .btn-view {
      background: #f3e9ff;
      color: #9A3FEF;
    }
    .btn-edit {
      background: #f5f5f5;
      color: #666;
    }
    .updated-time {
      font-size: 12px;
      color: #666;
      position: absolute;
      right: 0;
    }
  `]
})
export class VillageCardComponent implements OnInit {
  @Input() data!: VillageData;
  resources: any[] = [];
  trendValues: {[key: string]: number} = {};
  
  ngOnInit() {
    // Pre-calculate values once instead of during every change detection cycle
    this.resources = [
      { label: 'Water Usage', value: this.data.resourceUtilization.waterUsage, icon: 'fas fa-tint text-primary', color: 'bg-primary' },
      { label: 'Electricity', value: this.data.resourceUtilization.electricity, icon: 'fas fa-bolt text-warning', color: 'bg-warning' },
      { label: 'Internet', value: this.data.resourceUtilization.internet, icon: 'fas fa-wifi text-success', color: 'bg-success' },
      { label: 'Appliances', value: this.data.resourceUtilization.appliances, icon: 'fas fa-tv text-purple', color: 'bg-purple' }
    ];
    
    // Pre-calculate random trends
    this.trendValues = {
      population: this.getRandomTrend(),
      energy: this.getRandomTrend(),
      revenue: this.getRandomTrend()
    };
  }

  getRandomTrend(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}
