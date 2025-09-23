import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { Router } from '@angular/router';
import { Maintenance } from '../maintenance/maintenance';
import { ReportModal } from '../report-modal/report-modal';
import { ManageUsersComponent } from '../manage-users/manage-users';

Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface User {
  name: string;
  role: string;
  avatar: string;
  timestamp?: string;
}

@Component({
  selector: 'app-graph-group',
  standalone: true,
  templateUrl: './graph-group.html',
  imports: [CommonModule, MatIconModule],
  styleUrls: ['./graph-group.css']
})
export class GraphGroup implements AfterViewInit {
  @ViewChild('donutCanvas') donutCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;

  private donutChart!: Chart;
  private barChart!: Chart;

  systemEfficiency = 94.2;
  uptime = 99.8;
  loadFactor = 67;

  traffic = [
    { time: '00', value: 20 },
    { time: '04', value: 50 },
    { time: '08', value: 30 },
    { time: '12', value: 80 },
    { time: '14', value: 40 },
    { time: '16', value: 60 },
    { time: '18', value: 70 }
  ];


  recentUsers: User[] = [
    { name: 'Grace Wanjiku', role: 'Admin User', avatar: 'assets/avatars/woman.png' },
    { name: 'Joseph Kamau', role: 'Normal User', avatar: 'assets/avatars/man.png' },
    { name: 'Esther Maina', role: 'Normal User', avatar: 'assets/avatars/woman.png' }
  ];

  constructor(private dialog: MatDialog, private router: Router) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeCharts();
    }, 100);
  }

  private initializeCharts(): void {
    // Donut Chart Initialization
    if (this.donutCanvas?.nativeElement) {
      const donutCtx = this.donutCanvas.nativeElement.getContext('2d');
      if (donutCtx) {
        this.donutChart = new Chart(donutCtx, {
          type: 'doughnut',
          data: {
            labels: ['System Efficiency', 'Uptime', 'Load Factor'],
            datasets: [
              {
                data: [94.2, 99.8, 67],
                backgroundColor: ['#F97316', '#22C55E', '#2B6CEE'],
                borderWidth: 0,
                borderRadius: 4,
                spacing: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                backgroundColor: '#FFFFFF',
                titleColor: '#111827',
                bodyColor: '#6B7280',
                bodyFont: { size: 12 },
                titleFont: { size: 13, weight: 'bold' },
                padding: 12,
                borderColor: '#E5E7EB',
                borderWidth: 1,
                callbacks: {
                  label: (context) => `${context.label}: ${context.parsed}%`
                }
              }
            }
          }
        });
      }
    }

    // Bar Chart Initialization
    if (this.barCanvas?.nativeElement) {
      const barCtx = this.barCanvas.nativeElement.getContext('2d');
      if (barCtx) {
        const gradient = barCtx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#9333EA');
        gradient.addColorStop(1, '#9333EA22');

        this.barChart = new Chart(barCtx, {
          type: 'bar',
          data: {
            labels: ['00', '04', '08', '12', '14', '16', '18'],
            datasets: [{
              data: this.traffic.map(t => t.value),
              backgroundColor: gradient,
              borderRadius: 100,
              borderSkipped: false,
              barThickness: 8
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }
            },
            scales: {
              x: {
                display: true,
                grid: {
                  display: false
                },
                ticks: {
                  color: '#6B7280',
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
                display: false,
                beginAtZero: true
              }
            },
            layout: {
              padding: {
                top: 20,
                bottom: 10
              }
            }
          }
        });
      }
    }
  }

  ngOnDestroy(): void {
    if (this.donutChart) this.donutChart.destroy();
    if (this.barChart) this.barChart.destroy();
  }

  openMaintenanceModal(): void {
    this.dialog.open(Maintenance, {
      width: '900px', 
    });
  }

  openReportModal(): void {
    this.dialog.open(ReportModal, {
      width: '900px',
    });
  }

  navigateToManageUsers(): void {
    this.dialog.open(ManageUsersComponent, {
      width: '900px',
    });
  }
}