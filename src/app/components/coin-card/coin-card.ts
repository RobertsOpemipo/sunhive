import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-coin-card',
  imports: [CommonModule],
  standalone: true,

  templateUrl: './coin-card.html',
  styleUrl: './coin-card.css'
})
export class CoinCard implements AfterViewInit {
  @Input() coinName!: string;
  @Input() coinValue!: string;
  @Input() trend!: string; // "+3.45%" or "-2.13%"
  @Input() trendDirection!: 'up' | 'down';
  @Input() color!: string; // e.g. "bg-primary", "bg-warning"
  @Input() chartData!: number[];

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngAfterViewInit(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d')!;

    // ✅ Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, this.chartCanvas.nativeElement.height);
    if (this.trendDirection === 'up') {
      gradient.addColorStop(0, 'rgba(40, 167, 69, 0.4)'); // green near line
      gradient.addColorStop(1, 'rgba(40, 167, 69, 0)');   // transparent bottom
    } else {
      gradient.addColorStop(0, 'rgba(220, 53, 69, 0.4)'); // red near line
      gradient.addColorStop(1, 'rgba(220, 53, 69, 0)');   // transparent bottom
    }

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: this.chartData.map((_, i) => i + 1),
        datasets: [{
          data: this.chartData,
          borderColor: this.trendDirection === 'up' ? '#28a745' : '#dc3545',
          backgroundColor: gradient,   // ✅ use gradient here
          tension: 0.4,
          fill: true,                  // ✅ enable fill
          pointRadius: 0,              // smooth line without dots
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    };

    this.chart = new Chart(ctx, config);
  }

}
