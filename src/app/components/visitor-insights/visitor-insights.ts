import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-visitor-insights',
  standalone: true,
  templateUrl: './visitor-insights.html',
  styleUrls: ['./visitor-insights.css']
})
export class VisitorInsights implements AfterViewInit {
  @ViewChild('visitorChart') visitorChart!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngAfterViewInit(): void {
    const ctx = this.visitorChart.nativeElement.getContext('2d')!;

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Loyal Customers',
            data: [120, 180, 200, 150, 220, 300, 280, 310, 290, 330, 360, 400],
            borderColor: '#9A3FEF',
            backgroundColor: 'rgba(154,63,239,0.1)',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'New Customers',
            data: [80, 120, 150, 130, 180, 200, 220, 210, 230, 250, 270, 290],
            borderColor: '#2B6CEE',
            backgroundColor: 'rgba(43,108,238,0.1)',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Unique Customers',
            data: [60, 100, 130, 90, 140, 170, 160, 190, 200, 220, 230, 250],
            borderColor: '#18AA4E',
            backgroundColor: 'rgba(24,170,78,0.1)',
            tension: 0.4,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: { usePointStyle: true, boxWidth: 10 }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(70, 78, 95, 0.04)' },
            ticks: { color: '#737476', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(70, 78, 95, 0.04)' },
            ticks: { color: '#737476', font: { size: 12 } }
          }
        }
      }
    };

    this.chart = new Chart(ctx, config);
  }
}
