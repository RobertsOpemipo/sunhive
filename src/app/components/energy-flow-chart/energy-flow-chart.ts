import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-energy-flow-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './energy-flow-chart.html',
  styleUrls: ['./energy-flow-chart.css']
})
export class EnergyFlowChart {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '00:00', '03:00', '06:00', '09:00', '12:00',
      '15:00', '18:00', '21:00', '24:00'
    ],
    datasets: [
      {
        data: [20, 40, 80, 200, 300, 280, 150, 50, 30], // generation
        label: 'Generation',
        borderColor: '#18AA4E',
        backgroundColor: 'rgba(24, 170, 78, 0.2)',
        pointBackgroundColor: '#18AA4E',
        fill: true,
        tension: 0.4
      },
      {
        data: [40, 60, 100, 250, 320, 300, 200, 100, 60], // consumption
        label: 'Consumption',
        borderColor: '#9A3FEF',
        backgroundColor: 'rgba(154, 63, 239, 0.2)',
        pointBackgroundColor: '#9A3FEF',
        fill: true,
        tension: 0.4
      },
      {
        data: [10, 20, 40, 80, 150, 200, 180, 120, 90], // storage
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
        position: 'bottom', // Changed from 'top' to 'bottom'
        labels: {
          color: '#2E2E2F',
          font: {
            size: 14,
            family: "'Inter', sans-serif"
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(46, 46, 47, 0.9)',
        titleFont: {
          size: 14,
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 13,
          family: "'Inter', sans-serif"
        },
        padding: 12,
        boxPadding: 6
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#737476',
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          }
        },
        grid: {
          color: 'rgba(70, 78, 95, 0.08)'
        },
        title: {
          display: true,
          text: 'Time of Day',
          color: '#2E2E2F',
          font: {
            size: 14,
            family: "'Inter', sans-serif",
            weight: 500
          },
          padding: { top: 10, bottom: 10 }
        }
      },
      y: {
        ticks: {
          color: '#737476',
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          }
        },
        grid: {
          color: 'rgba(70, 78, 95, 0.08)'
        },
        title: {
          display: true,
          text: 'Energy (kWh)',
          color: '#2E2E2F',
          font: {
            size: 14,
            family: "'Inter', sans-serif",
            weight: 500
          },
          padding: { top: 10, bottom: 10 }
        }
      }
    }
  };
}