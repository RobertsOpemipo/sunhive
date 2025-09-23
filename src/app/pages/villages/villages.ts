import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { VillageHeaderComponent } from '../../components/village-components/village-header/village-header';
import { VillageCardComponent, VillageData } from '../../components/village-components/village-card/village-card';
import { StatsCardComponent } from '../../components/dashboard-components/stats-card/stats-card';

@Component({
  selector: 'app-villages',
  standalone: true,
  imports: [CommonModule, VillageHeaderComponent, VillageCardComponent, StatsCardComponent],
  templateUrl: './villages.html',
  styleUrl: './villages.css'
})
export class Villages {
  statsData = [
    {
      title: 'Total Villages',
      value: '6',
      color: '#4285F4',
      data: [4, 3, 5, 4, 5, 6, 5, 6]
    },
    {
      title: 'Total Consumption',
      value: '437 kWh',
      color: '#34A853',
      data: [300, 320, 380, 350, 390, 420, 400, 437]
    },
    {
      title: 'Total Revenue',
      value: '$7,845',
      color: '#EA4335',
      data: [5000, 5500, 6000, 6500, 7000, 7200, 7500, 7845]
    },
    {
      title: 'Active Services',
      value: '18',
      color: '#9A3FEF',
      data: [12, 14, 15, 16, 15, 17, 16, 18]
    }
  ];
  villages: VillageData[] = [
    {
      name: 'Senten Village',
      status: 'Active',
      totalPopulation: 950,
      energyUsage: '156 kWh',
      revenue: '$127.5K',
      resourceUtilization: {
        waterUsage: 65,
        electricity: 75,
        internet: 70,
        appliances: 45
      },
      lastUpdated: '1 hour ago'
    },
    {
      name: 'Muela Village',
      status: 'Active',
      totalPopulation: 458,
      energyUsage: '55 kWh',
      revenue: '$47.8K',
      resourceUtilization: {
        waterUsage: 45,
        electricity: 35,
        internet: 55,
        appliances: 25
      },
      lastUpdated: '2 hours ago'
    },
    {
      name: 'Mantiri Village',
      status: 'Maintenance',
      totalPopulation: 728,
      energyUsage: '92 kWh',
      revenue: '$98.13K',
      resourceUtilization: {
        waterUsage: 60,
        electricity: 85,
        internet: 65,
        appliances: 30
      },
      lastUpdated: '30 minutes ago'
    },
    {
      name: 'Antara Village',
      status: 'Active',
      totalPopulation: 1000,
      energyUsage: '150 kWh',
      revenue: '$130.75K',
      resourceUtilization: {
        waterUsage: 54,
        electricity: 52,
        internet: 2,
        appliances: 35
      },
      lastUpdated: '45 minutes ago'
    }
  ];
}