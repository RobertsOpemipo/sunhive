import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { Maintenance } from '../../pages/maintenance/maintenance';
import { ReportModal } from '../../pages/report-modal/report-modal';

Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
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

  // Define your team property properly
  team: TeamMember[] = [
    { name: 'John Doe', role: 'Engineer', avatar: 'assets/avatars/woman.png' },
    { name: 'Jane Smith', role: 'Designer', avatar: 'assets/avatars/man.png' },
    { name: 'Mike Lee', role: 'Manager', avatar: 'assets/avatars/man2.png' }
  ];

  constructor(private dialog: MatDialog) { }

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
                data: [this.systemEfficiency, this.uptime, this.loadFactor],
                backgroundColor: ['#FAB615', '#18AA4E', '#2B6CEE'],
                borderWidth: 0,
                borderRadius: 4,
                spacing: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%',
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                callbacks: { label: (context) => context.parsed + '%' }
              }
            },
            animation: { animateRotate: true, duration: 1000 }
          }
        });
      }
    }

    // Bar Chart Initialization
    if (this.barCanvas?.nativeElement) {
      const barCtx = this.barCanvas.nativeElement.getContext('2d');
      if (barCtx) {
        this.barChart = new Chart(barCtx, {
          type: 'bar',
          data: {
            labels: this.traffic.map(t => t.time + ':00'),
            datasets: [{
              label: 'Traffic (kWh)',
              data: this.traffic.map(t => t.value),
              backgroundColor: '#2B6CEE',
              borderRadius: 8,
              barThickness: 'flex',
              maxBarThickness: 30
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#6c757d' } },
              y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.1)' }, ticks: { color: '#6c757d' } }
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
      width: '600px',
    });
  }
}