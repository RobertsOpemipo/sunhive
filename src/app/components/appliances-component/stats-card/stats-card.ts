import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appliance-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.css'
})
export class ApplianceStatsCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() color: string = 'blue';
}