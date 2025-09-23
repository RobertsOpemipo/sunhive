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
  @Output() searchChanged = new EventEmitter<string>();
  @Output() filterChanged = new EventEmitter<string>();
  
  searchTerm: string = '';
  activeFilter: string = 'All';
  
  filters = [
    { label: 'All', value: 'All' },
    { label: 'Appliances', value: 'Appliances' },
    { label: 'Energy', value: 'Energy' },
    { label: 'Heating', value: 'Heating' }
  ];
  
  onSearch(): void {
    this.searchChanged.emit(this.searchTerm);
  }
  
  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.filterChanged.emit(filter);
  }
}