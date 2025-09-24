import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css'
})
export class FilterBarComponent {
  // Backward compatible outputs
  @Output() searchChanged = new EventEmitter<string>();
  @Output() filterChanged = new EventEmitter<string>();

  // New outputs for the enhanced filter bar
  @Output() tabChanged = new EventEmitter<string>();
  @Output() categoryChanged = new EventEmitter<string>();
  @Output() statusChanged = new EventEmitter<string>();
  @Output() viewModeChanged = new EventEmitter<'grid' | 'list'>();

  // State
  searchTerm: string = '';
  activeTab: 'Appliances' | 'Supplier' | 'Financing' = 'Supplier';
  viewMode: 'grid' | 'list' = 'grid';

  // Dropdowns
  categories: string[] = ['All categories', 'Appliances', 'Energy', 'Heating'];
  statuses: string[] = ['All status', 'In Stock', 'Low Stock', 'Out of Stock'];
  selectedCategory: string = this.categories[0];
  selectedStatus: string = this.statuses[0];

  tabs: Array<{ label: string; value: 'Appliances' | 'Supplier' | 'Financing' }> = [
    { label: 'Appliances', value: 'Appliances' },
    { label: 'Supplier', value: 'Supplier' },
    { label: 'Financing', value: 'Financing' }
  ];

  get placeholder(): string {
    switch (this.activeTab) {
      case 'Supplier':
        return 'Search suppliers...';
      case 'Financing':
        return 'Search financing...';
      default:
        return 'Search appliances...';
    }
  }

  onSearch(): void {
    // Keep original event for backward compatibility
    this.searchChanged.emit(this.searchTerm);
  }

  setTab(tab: 'Appliances' | 'Supplier' | 'Financing'): void {
    this.activeTab = tab;
    this.tabChanged.emit(tab);
  }

  // Backward compatibility helper: map category dropdown to existing filterChanged
  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.categoryChanged.emit(category);
    this.filterChanged.emit(category === 'All categories' ? 'All' : category);
  }

  onStatusChange(status: string): void {
    this.selectedStatus = status;
    this.statusChanged.emit(status);
  }

  toggleView(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
    this.viewModeChanged.emit(mode);
  }
}