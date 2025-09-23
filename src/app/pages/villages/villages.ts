import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
      name: 'Kamau Village',
      totalPopulation: 950,
      energyUsage: '156 kWh',
      revenue: '$137.5K',
      resourceUtilization: {
        waterUsage: 64,
        electricity: 78,
        internet: 70,
        appliances: 92
      },
      lastUpdated: '2 hours ago',
      status: 'Active'
    },
    {
      name: 'Mwangi Estate',
      totalPopulation: 1250,
      energyUsage: '210 kWh',
      revenue: '$182.3K',
      resourceUtilization: {
        waterUsage: 58,
        electricity: 82,
        internet: 65,
        appliances: 88
      },
      lastUpdated: '1 hour ago',
      status: 'Active'
    },
    {
      name: 'Ochieng Community',
      totalPopulation: 780,
      energyUsage: '132 kWh',
      revenue: '$98.6K',
      resourceUtilization: {
        waterUsage: 72,
        electricity: 65,
        internet: 80,
        appliances: 75
      },
      lastUpdated: '3 hours ago',
      status: 'Maintenance'
    },
    {
      name: 'Wanjiku Heights',
      totalPopulation: 1100,
      energyUsage: '185 kWh',
      revenue: '$156.2K',
      resourceUtilization: {
        waterUsage: 60,
        electricity: 75,
        internet: 68,
        appliances: 85
      },
      lastUpdated: '5 hours ago',
      status: 'Active'
    }
  ];

  filteredVillages: VillageData[] = this.villages;

  onFilterChange(filter: string) {
    if (filter === 'All') {
      this.filteredVillages = this.villages;
    } else {
      this.filteredVillages = this.villages.filter(village => 
        village.status === filter || 
        (filter === 'Others' && village.status !== 'Active' && village.status !== 'Maintenance')
      );
    }
  }

  onSearchChange(searchTerm: string) {
    if (!searchTerm) {
      this.filteredVillages = this.villages;
      return;
    }
    
    const term = searchTerm.toLowerCase();
    this.filteredVillages = this.villages.filter(village => 
      village.name.toLowerCase().includes(term)
    );
  }

  // Add to your Villages class
  pageSize = 4;
  currentPage = 0;
  
  get paginatedVillages() {
    const start = this.currentPage * this.pageSize;
    return this.filteredVillages.slice(start, start + this.pageSize);
  }
  
  nextPage() {
    if ((this.currentPage + 1) * this.pageSize < this.filteredVillages.length) {
      this.currentPage++;
    }
  }
  
  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}