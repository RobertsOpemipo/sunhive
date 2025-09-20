import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-double-chart',
  standalone: true,
  imports: [BaseChartDirective, MatIconModule],
  templateUrl: './double-chart.html',
  styleUrls: ['./double-chart.css']
})
export class DoubleChart {
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    datasets: [
      {
        type: 'line',   
        data: [1200, 1400, 1600, 1550, 1700, 1800],
        label: 'Generation',
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#42A5F5'
      },
      {
        type: 'line',   
        data: [1000, 1250, 1400, 1450, 1500, 1600],
        label: 'Consumption',
        borderColor: '#66BB6A',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#66BB6A'
      },
    ]
  };

  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' }
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: false }
    }
  };
}
