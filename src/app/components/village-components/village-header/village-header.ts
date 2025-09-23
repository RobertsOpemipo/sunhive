import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-village-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="village-header">
      <div class="header-left">
        <h5 class="mb-0">Connected Villages</h5>
        <div class="filter-tabs">
          <button 
            class="tab-btn" 
            [class.active]="activeFilter==='All'"
            (click)="setFilter('All')">All Villages</button>
          <button 
            class="tab-btn" 
            [class.active]="activeFilter==='Active'"
            (click)="setFilter('Active')">Active</button>
          <button 
            class="tab-btn" 
            [class.active]="activeFilter==='Maintenance'"
            (click)="setFilter('Maintenance')">Maintenance</button>
          <button 
            class="tab-btn" 
            [class.active]="activeFilter==='Others'"
            (click)="setFilter('Others')">Others</button>
        </div>
      </div>
      <div class="header-right">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search villages..." (input)="onSearch($event)" />
        </div>
        <button class="btn btn-outline-secondary"><i class="fas fa-filter me-2"></i>Filter</button>
        <button class="btn btn-primary"><i class="fas fa-plus me-2"></i>New</button>
      </div>
    </div>
  `,
  styles: [`
    .village-header { 
      padding: 24px; 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      border-bottom: 1px solid #eee;
      flex-wrap: wrap;
      gap: 16px;
    }
    .header-left {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .filter-tabs { 
      display: flex; 
      gap: 12px;
      flex-wrap: wrap;
    }
    .tab-btn { 
      border: none; 
      background: none; 
      padding: 8px 16px; 
      border-radius: 20px; 
      color: #666; 
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .tab-btn:hover {
      background: rgba(154, 63, 239, 0.1);
    }
    .tab-btn.active { 
      background: #9A3FEF; 
      color: white; 
    }
    .header-right {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
    }
    .search-box { 
      display: flex; 
      align-items: center; 
      gap: 8px; 
      background: white; 
      border: 1px solid #ddd; 
      border-radius: 8px; 
      padding: 8px 16px; 
      width: 280px; 
    }
    .search-box input { 
      border: none; 
      outline: none; 
      width: 100%; 
    }
    .btn-primary { 
      background: #9A3FEF; 
      border-color: #9A3FEF; 
    }
    .btn-primary:hover { 
      background: #8034d1; 
      border-color: #8034d1; 
    }
    
    @media (max-width: 768px) {
      .village-header {
        flex-direction: column;
        align-items: flex-start;
      }
      .search-box {
        width: 100%;
      }
      .header-right {
        width: 100%;
      }
    }
  `]
})
export class VillageHeaderComponent {
  @Output() filterChanged = new EventEmitter<string>();
  @Output() searchChanged = new EventEmitter<string>();
  activeFilter = 'All';

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.filterChanged.emit(filter);
  }

  onSearch(event: any) {
    const searchValue = event.target.value.trim();
    this.searchChanged.emit(searchValue);
  }
}
