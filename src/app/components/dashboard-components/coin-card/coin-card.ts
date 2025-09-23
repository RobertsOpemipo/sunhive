import { Component, Input, AfterViewInit, ElementRef, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { CommonModule } from '@angular/common';

type ChartColors = {
  line: string;
  gradient: string[];
};

@Component({
  selector: 'app-coin-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './coin-card.html',
  styleUrl: './coin-card.css'
})
export class CoinCard implements AfterViewInit, OnDestroy {
  @Input() coinName!: string;
  @Input() coinValue!: string;
  @Input() trend!: string;
  @Input() trendDirection!: 'up' | 'down';
  @Input() color!: string;
  @Input() chartData!: number[];

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  private resizeTimeout: any;

  @HostListener('window:resize')
  onResize() {
    // Debounce resize event
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.updateChart();
    }, 250);
  }

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  }

  private getChartColor(): ChartColors {
    switch (this.color) {
      case 'bg-warning':
        return {
          line: '#F97316',
          gradient: ['rgba(249, 115, 22, 0.2)', 'rgba(249, 115, 22, 0)']
        };
      case 'bg-success':
        return {
          line: '#22C55E',
          gradient: ['rgba(34, 197, 94, 0.2)', 'rgba(34, 197, 94, 0)']
        };
      case 'bg-purple':
        return {
          line: '#9333EA',
          gradient: ['rgba(147, 51, 234, 0.2)', 'rgba(147, 51, 234, 0)']
        };
      default:
        return {
          line: '#9333EA',
          gradient: ['rgba(147, 51, 234, 0.2)', 'rgba(147, 51, 234, 0)']
        };
    }
  }

  private createChart(ctx: CanvasRenderingContext2D): Chart {
    const colors = this.getChartColor();
    const gradient = ctx.createLinearGradient(0, 0, 0, this.chartCanvas.nativeElement.height);
    gradient.addColorStop(0, colors.gradient[0]);
    gradient.addColorStop(1, colors.gradient[1]);

    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array(this.chartData.length).fill(''),
        datasets: [{
          data: this.chartData,
          borderColor: colors.line,
          backgroundColor: gradient,
          tension: 0.4,
          fill: true,
          pointRadius: 0,
          borderWidth: 1.5,
          cubicInterpolationMode: 'monotone'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: { 
            display: false,
            grid: { display: false }
          },
          y: { 
            display: false,
            grid: { display: false },
            min: Math.min(...this.chartData) * 0.95,
            max: Math.max(...this.chartData) * 1.05
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeInOutQuart'
        }
      }
    });
  }

  private initializeChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = this.createChart(ctx);
    }
  }

  private updateChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    this.initializeChart();
  }
}
