import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { CommonModule, NgFor, NgStyle, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-alert-group',
  standalone: true,
  imports: [CommonModule, NgFor, NgStyle, NgClass, MatIconModule, MatButtonModule, BaseChartDirective],
  templateUrl: './alert-group.html',
  styleUrls: ['./alert-group.css']
})
export class AlertGroup implements AfterViewInit {
  // Alert charts references
  @ViewChildren('alertChart') alertChartRefs!: QueryList<ElementRef<HTMLCanvasElement>>;

  // Line chart data and options
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '00:00', '03:00', '06:00', '09:00', '12:00',
      '15:00', '18:00', '21:00', '24:00'
    ],
    datasets: [
      {
        data: [20, 40, 80, 200, 300, 280, 150, 50, 30],
        label: 'Generation',
        borderColor: '#18AA4E',
        backgroundColor: 'rgba(24, 170, 78, 0.2)',
        pointBackgroundColor: '#18AA4E',
        fill: true,
        tension: 0.4
      },
      {
        data: [40, 60, 100, 250, 320, 300, 200, 100, 60],
        label: 'Consumption',
        borderColor: '#9A3FEF',
        backgroundColor: 'rgba(154, 63, 239, 0.2)',
        pointBackgroundColor: '#9A3FEF',
        fill: true,
        tension: 0.4
      },
      {
        data: [10, 20, 40, 80, 150, 200, 180, 120, 90],
        label: 'Storage',
        borderColor: '#2B6CEE',
        backgroundColor: 'rgba(43, 108, 238, 0.2)',
        pointBackgroundColor: '#2B6CEE',
        fill: true,
        tension: 0.4
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#2E2E2F',
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          },
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(46, 46, 47, 0.9)',
        titleFont: {
          size: 12,
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 11,
          family: "'Inter', sans-serif"
        },
        padding: 10,
        boxPadding: 4
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#737476',
          font: {
            size: 10,
            family: "'Inter', sans-serif"
          }
        },
        grid: {
          display: false
        },
        title: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        },
        title: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 0
      },
      point: {
        radius: 4,
        hoverRadius: 6
      }
    }
  };

  alerts = [
    {
      date: '18 Apr 2025',
      location: 'Kamau Village',
      type: 'Normal',
      progress: 72,
      progressColor: '#18AA4E',
      statusClass: 'normal',
      canvasId: 'chart1'
    },
    {
      date: '12 Jul 2025',
      location: 'Eldoret Village',
      type: 'Normal',
      progress: 78,
      progressColor: '#18AA4E',
      statusClass: 'normal',
      canvasId: 'chart2'
    },
    {
      date: '18 Apr 2025',
      location: 'Mbale Village',
      type: 'Critical',
      progress: 42,
      progressColor: '#C41C1C',
      statusClass: 'critical',
      canvasId: 'chart3'
    },
    {
      date: '20 May 2025',
      location: 'Kisumu Village',
      type: 'Warning',
      progress: 92,
      progressColor: 'linear-gradient(102.57deg, #FAB615 21.74%, #F97E16 77.93%)',
      statusClass: 'warning',
      canvasId: 'chart4'
    }
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeAlertCharts();
    }, 100);
  }

  private initializeAlertCharts(): void {
    const canvasArray = this.alertChartRefs.toArray();

    canvasArray.forEach((canvasRef, index) => {
      if (canvasRef?.nativeElement && this.alerts[index]) {
        this.createAlertChart(canvasRef.nativeElement, index);
      }
    });
  }

  private createAlertChart(canvas: HTMLCanvasElement, index: number): void {
    const alert = this.alerts[index];
    const chartData = this.generateChartData(alert.type, index);

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
        datasets: [{
          label: `${alert.location} Status`,
          data: chartData,
          borderColor: this.getBorderColor(alert.type),
          backgroundColor: this.getBackgroundColor(alert.type),
          fill: true,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            bodyColor: '#fff'
          }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        },
        elements: {
          point: {
            backgroundColor: this.getBorderColor(alert.type),
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      }
    });
  }

  private generateChartData(type: string, index: number): number[] {
    switch (type) {
      case 'Normal': return [65, 70, 75, 72, 78, 80];
      case 'Critical': return [80, 65, 45, 35, 40, 42];
      case 'Warning': return [75, 82, 88, 85, 90, 92];
      default: return [60, 65, 70, 75, 80, 85];
    }
  }

  private getBorderColor(type: string): string {
    switch (type) {
      case 'Normal': return '#18AA4E';
      case 'Critical': return '#C41C1C';
      case 'Warning': return '#FAB615';
      default: return '#2B6CEE';
    }
  }

  private getBackgroundColor(type: string): string {
    switch (type) {
      case 'Normal': return 'rgba(24, 170, 78, 0.2)';
      case 'Critical': return 'rgba(196, 28, 28, 0.2)';
      case 'Warning': return 'rgba(250, 182, 21, 0.2)';
      default: return 'rgba(43, 108, 238, 0.2)';
    }
  }
}