import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FinancingOption {
  months: number;
  monthlyPayment: number;
  totalAmount: number;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  price: number;
  rating: number;
  reviews: number;
  warranty: number;
  financingOptions: FinancingOption[];
  category: string;
  brand: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  selectedFinancingOption: number = 0;
  
  getStatusClass(): string {
    switch(this.product.status) {
      case 'In Stock': return 'in-stock';
      case 'Low Stock': return 'low-stock';
      case 'Out of Stock': return 'out-of-stock';
      default: return '';
    }
  }
  
  selectFinancingOption(index: number): void {
    this.selectedFinancingOption = index;
  }
}