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
        data: [35, 32, 38, 35, 39, 37],
        label: 'Operating Cost',
        borderColor: '#9333EA',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointBackgroundColor: '#9333EA'
      },
      {
        data: [30, 28, 32, 30, 35, 33],
        label: 'Previous Period',
        borderColor: '#2563EB',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointBackgroundColor: '#2563EB'
      }
    ]
  };

  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#111827',
        bodyColor: '#6B7280',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': $' + context.parsed.y + 'K';
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
            family: 'Inter'
          }
        }
      },
      y: {
        display: false
      }
    }
  };
}
