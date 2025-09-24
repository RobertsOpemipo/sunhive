import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-village-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './village-header.html',
  styleUrls: ['./village-header.css']
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