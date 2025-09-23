import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Chart, LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import { ChartConfiguration } from 'chart.js';

Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip);

interface Alert {
  name: string;
  status: 'Normal' | 'Warning' | 'Critical';
  date: string;
  progress: number;
}

@Component({
  selector: 'app-alert-group',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './alert-group.html',
  styleUrls: ['./alert-group.css']
})
export class AlertGroup implements OnInit, AfterViewInit {
  @ViewChild('profitChart') profitChart!: ElementRef<HTMLCanvasElement>;
  
  private chart!: Chart;
  selectedTimeRange: 'week' | 'month' | 'year' = 'month';

  alerts: Alert[] = [
    {
      name: 'Kamau Village',
      status: 'Normal',
      date: '18 Apr 2025',
      progress: 90
    },
    {
      name: 'Mbale Village',
      status: 'Critical',
      date: '18 Apr 2025',
      progress: 30
    },
    {
      name: 'Kisumu Village',
      status: 'Warning',
      date: '20 May 2025',
      progress: 60
    },
    {
      name: 'Eldoret Village',
      status: 'Normal',
      date: '12 Jul 2025',
      progress: 85
    }
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeChart();
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }

  getProgressClass(status: string): string {
    return `progress-${status.toLowerCase()}`;
  }

  setTimeRange(range: 'week' | 'month' | 'year') {
    this.selectedTimeRange = range;
    this.updateChartData(range);
  }

  private initializeChart() {
    const ctx = this.profitChart.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['00', '04', '08', '12', '14', '16', '18'],
        datasets: [{
          label: 'Net Profit',
          data: [8, 12, 28, 22, 30, 25, 35],
          borderColor: '#4CAF50',
          backgroundColor: function(context: any) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            if (!chartArea) {
              return 'rgba(76, 175, 80, 0.1)';
            }
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(76, 175, 80, 0)');
            gradient.addColorStop(1, 'rgba(76, 175, 80, 0.2)');
            return gradient;
          },
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
          pointHitRadius: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(33, 33, 33, 0.9)',
            padding: 12,
            titleFont: {
              size: 13,
              weight: 'bold',
              family: "'Inter', sans-serif"
            },
            bodyFont: {
              size: 12,
              family: "'Inter', sans-serif"
            },
            displayColors: false,
            callbacks: {
              title: function(items) {
                return items[0].label + ':00';
              },
              label: function(item) {
                return '$ ' + item.formattedValue;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#666',
              font: {
                size: 11,
                family: "'Inter', sans-serif"
              }
            },
            border: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#F0F0F0',
              lineWidth: 1,
              drawTicks: false
            },
            ticks: {
              maxTicksLimit: 5,
              padding: 10,
              color: '#666',
              font: {
                size: 11,
                family: "'Inter', sans-serif"
              },
              callback: function(value) {
                return '$ ' + value;
              }
            },
            border: {
              display: false
            }
          }
        }
      }
    });
  }

  private updateChartData(range: 'week' | 'month' | 'year') {
    if (!this.chart) return;

    // Update data based on time range
    let data;
    switch (range) {
      case 'week':
        data = [8, 12, 28, 22, 30, 25, 35];
        break;
      case 'month':
        data = [15, 25, 18, 35, 25, 40, 30];
        break;
      case 'year':
        data = [20, 35, 45, 30, 50, 45, 60];
        break;
    }

    this.chart.data.datasets[0].data = data;
    this.chart.update();
  }
}