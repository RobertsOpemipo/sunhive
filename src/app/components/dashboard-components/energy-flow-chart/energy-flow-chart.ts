import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

type ChartWeight = number | 'bold' | 'normal' | 'lighter' | 'bolder';

@Component({
  selector: 'app-energy-flow-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './energy-flow-chart.html',
  styleUrls: ['./energy-flow-chart.css']
})
export class EnergyFlowChart implements OnInit {
  ngOnInit(): void {
    // Initialize chart with default options
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '00:00', '04:00', '08:00', '12:00', '14:00',
      '16:00', '18:00', '20:00', '22:00', '24:00'
    ],
    datasets: [
      {
        data: [250, 350, 200, 180, 220, 300, 320, 300, 280, 250], // generation
        label: 'Generation',
        borderColor: '#9747FF',
        borderWidth: 2,
        pointBackgroundColor: '#9747FF',
        pointRadius: 0,
        pointHoverRadius: 4,
        fill: false,
        tension: 0.4
      },
      {
        data: [300, 280, 350, 400, 380, 360, 340, 380, 400, 380], // consumption
        label: 'Consumption',
        borderColor: '#2B6CEE',
        borderWidth: 2,
        pointBackgroundColor: '#2B6CEE',
        pointRadius: 0,
        pointHoverRadius: 4,
        fill: false,
        tension: 0.4
      },
      {
        data: [280, 320, 250, 220, 240, 260, 300, 280, 260, 240], // storage
        label: 'Storage',
        borderColor: '#22C55E',
        borderWidth: 2,
        pointBackgroundColor: '#22C55E',
        pointRadius: 0,
        pointHoverRadius: 4,
        fill: false,
        tension: 0.4
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          color: '#696C70',
          font: {
            size: 12,
            family: "'DM Sans', sans-serif",
            weight: 500
          },
          boxWidth: 8
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1D1E20',
        bodyColor: '#696C70',
        titleFont: {
          size: 13,
          family: "'DM Sans', sans-serif",
          weight: 600
        },
        bodyFont: {
          size: 12,
          family: "'DM Sans', sans-serif"
        },
        padding: 12,
        boxPadding: 6,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y + ' kWh';
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          color: '#696C70',
          font: {
            size: 11,
            family: "'DM Sans', sans-serif"
          },
          maxRotation: 0
        },
        border: {
          display: false
        }
      },
      y: {
        display: false,
        min: 0,
        max: 400,
        grid: {
          display: false
        }
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear'
      }
    }
  };
}