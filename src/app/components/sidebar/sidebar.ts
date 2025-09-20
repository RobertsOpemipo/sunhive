import { Component, AfterViewInit } from '@angular/core';
import Tooltip from 'bootstrap/js/dist/tooltip'; // ✅ correct import

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar implements AfterViewInit {

  ngAfterViewInit(): void {
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((el) => {
      new Tooltip(el as HTMLElement);
    });
  }
}
