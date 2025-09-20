import { Component } from '@angular/core';

@Component({
  selector: 'app-village-comparison',
  imports: [],
  templateUrl: './village-comparison.html',
  styleUrl: './village-comparison.css'
})
export class VillageComparison {
  barData = [
    { consumption: 65, generation: 65, storage: 65, label: '29' },
    { consumption: 65, generation: 52, storage: 36, label: '32' },
    { consumption: 54, generation: 52, storage: 40, label: '34' },
    { consumption: 65, generation: 65, storage: 65, label: '33' },
    { consumption: 54, generation: 52, storage: 40, label: '34' },
    { consumption: 50, generation: 65, storage: 65, label: '30' },
    { consumption: 65, generation: 65, storage: 65, label: '25' },
    { consumption: 50, generation: 65, storage: 65, label: '31' },
    { consumption: 46, generation: 33, storage: 51, label: '34' }
  ];
}
