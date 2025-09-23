import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

interface StatsData {
  title: string;
  value: string | number;
  color: string;
  data: number[];
}

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stats-card">
      <div class="stats-header">
        <div class="stats-title">{{ data.title }}</div>
        <div class="stats-value" [style.color]="data.color">{{ data.value }}</div>
      </div>
      <div class="stats-chart">
        <canvas [id]="'chart-' + data.title"></canvas>
      </div>
    </div>
  `,
  styles: [`
    .stats-card {
      background: white;
      border-radius: 12px;
      padding: 16px;
      height: 140px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    .stats-header {
      margin-bottom: 12px;
    }
    .stats-title {
      color: #666;
      font-size: 14px;
      margin-bottom: 4px;
    }
    .stats-value {
      font-size: 24px;
      font-weight: 600;
    }
    .stats-chart {
      height: 60px;
    }
  `]
})
export class StatsCardComponent {
  @Input() data!: StatsData;

  ngAfterViewInit() {
    this.createChart();
  }

  private createChart() {
    const canvas = document.getElementById('chart-' + this.data.title) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array(8).fill(''),
          datasets: [{
            data: this.data.data,
            borderColor: this.data.color,
            backgroundColor: `${this.data.color}10`,
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false
              }
            },
            y: {
              display: false,
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
  }
}