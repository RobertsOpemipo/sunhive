import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplianceStatsCardComponent } from '../../components/appliances-component/stats-card/stats-card';
import { FilterBarComponent } from '../../components/appliances-component/filter-bar/filter-bar';
import { ProductCardComponent, Product } from '../../components/appliances-component/product-card/product-card';
import { PaginationComponent } from '../../components/appliances-component/pagination/pagination';

@Component({
  selector: 'app-appliances',
  standalone: true,
  imports: [
    CommonModule,
    ApplianceStatsCardComponent,
    FilterBarComponent,
    ProductCardComponent,
    PaginationComponent
  ],
  templateUrl: './appliances.html',
  styleUrl: './appliances.css'
})
export class Appliances {
  statsData = [
    { title: 'Total Appliances', value: '6', color: 'blue' },
    { title: 'Villages', value: '4', color: 'green' },
    { title: 'Total Units', value: '580', color: 'orange' },
    { title: 'Total Revenue', value: '$81,600', color: 'red' }
  ];
  
  metricsData = [
    { title: 'Installations', value: '342', color: 'blue' },
    { title: 'Monthly Revenue', value: '$81,600', color: 'green' },
    { title: 'Efficiency Rate', value: '97.8%', color: 'orange' }
  ];
  
  products: Product[] = [
    {
      id: '1',
      title: 'Electric Bike E500',
      image: 'assets/appliances-image/bicyle.jpg',
      status: 'In Stock',
      price: 1299.99,
      rating: 4.8,
      reviews: 24,
      warranty: 2,
      category: 'Energy',
      brand: 'GreenTech',
      financingOptions: [
        { months: 12, monthlyPayment: 114.99, totalAmount: 1379.88 },
        { months: 24, monthlyPayment: 59.99, totalAmount: 1439.76 },
        { months: 36, monthlyPayment: 41.99, totalAmount: 1511.64 }
      ]
    },
    {
      id: '2',
      title: 'Induction Cooker',
      image: 'assets/appliances-image/bicyle.jpg',
      status: 'Low Stock',
      price: 349.99,
      rating: 4.5,
      reviews: 18,
      warranty: 3,
      category: 'Appliances',
      brand: 'EcoHome',
      financingOptions: [
        { months: 12, monthlyPayment: 30.99, totalAmount: 371.88 },
        { months: 24, monthlyPayment: 16.99, totalAmount: 407.76 },
        { months: 36, monthlyPayment: 11.99, totalAmount: 431.64 }
      ]
    },
    {
      id: '3',
      title: 'LED Smart TV 32',
      image: 'assets/appliances-image/bicyle.jpg',
      status: 'In Stock',
      price: 499.99,
      rating: 4.7,
      reviews: 32,
      warranty: 2,
      category: 'Appliances',
      brand: 'EcoTech',
      financingOptions: [
        { months: 12, monthlyPayment: 43.99, totalAmount: 527.88 },
        { months: 24, monthlyPayment: 22.99, totalAmount: 551.76 },
        { months: 36, monthlyPayment: 15.99, totalAmount: 575.64 }
      ]
    },
    {
      id: '4',
      title: 'Energy Efficient Ceiling Fan',
      image: 'assets/appliances-image/bicyle.jpg',
      status: 'In Stock',
      price: 199.99,
      rating: 4.6,
      reviews: 15,
      warranty: 2,
      category: 'Energy',
      brand: 'GreenTech',
      financingOptions: [
        { months: 12, monthlyPayment: 17.99, totalAmount: 215.88 },
        { months: 24, monthlyPayment: 9.99, totalAmount: 239.76 },
        { months: 36, monthlyPayment: 6.99, totalAmount: 251.64 }
      ]
    },
    {
      id: '5',
      title: 'Solar Powered Desk Lamp',
      image: 'assets/appliances-image/bicyle.jpg',
      status: 'In Stock',
      price: 79.99,
      rating: 4.4,
      reviews: 12,
      warranty: 1,
      category: 'Energy',
      brand: 'EcoTech',
      financingOptions: [
        { months: 12, monthlyPayment: 6.99, totalAmount: 83.88 },
        { months: 24, monthlyPayment: 3.99, totalAmount: 95.76 },
        { months: 36, monthlyPayment: 2.99, totalAmount: 107.64 }
      ]
    },
    {
      id: '6',
      title: 'Energy Star Refrigerator',
      image: 'assets/appliances-image/bicyle.jpg',
      status: 'Out of Stock',
      price: 899.99,
      rating: 4.9,
      reviews: 28,
      warranty: 5,
      category: 'Appliances',
      brand: 'EcoHome',
      financingOptions: [
        { months: 12, monthlyPayment: 79.99, totalAmount: 959.88 },
        { months: 24, monthlyPayment: 41.99, totalAmount: 1007.76 },
        { months: 36, monthlyPayment: 28.99, totalAmount: 1043.64 }
      ]
    },
    {
      id: '7',
      title: 'Smart Rice Cooker',
      image: 'assets/appliances-image/bicyle.jpg',
      status: 'In Stock',
      price: 149.99,
      rating: 4.7,
      reviews: 22,
      warranty: 2,
      category: 'Appliances',
      brand: 'GreenTech',
      financingOptions: [
        { months: 12, monthlyPayment: 13.99, totalAmount: 167.88 },
        { months: 24, monthlyPayment: 7.99, totalAmount: 191.76 },
        { months: 36, monthlyPayment: 5.99, totalAmount: 215.64 }
      ]
    },
    {
      id: '8',
      title: 'Solar Water Heater',
      image: 'assets/appliances-image/bicyle.jpg',
      status: 'In Stock',
      price: 599.99,
      rating: 4.8,
      reviews: 19,
      warranty: 3,
      category: 'Energy',
      brand: 'EcoTech',
      financingOptions: [
        { months: 12, monthlyPayment: 52.99, totalAmount: 635.88 },
        { months: 24, monthlyPayment: 27.99, totalAmount: 671.76 },
        { months: 36, monthlyPayment: 19.99, totalAmount: 719.64 }
      ]
    },
    {
      id: '9',
      title: 'Smart LED TV 43',
      image: 'assets/appliances-image/bicyle.jpg',
      status: 'In Stock',
      price: 699.99,
      rating: 4.9,
      reviews: 35,
      warranty: 3,
      category: 'Appliances',
      brand: 'EcoTech',
      financingOptions: [
        { months: 12, monthlyPayment: 61.99, totalAmount: 743.88 },
        { months: 24, monthlyPayment: 32.99, totalAmount: 791.76 },
        { months: 36, monthlyPayment: 22.99, totalAmount: 827.64 }
      ]
    }
  ];
  
  filteredProducts: Product[] = this.products;
  currentPage: number = 1;
  itemsPerPage: number = 6;
  
  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }
  
  get paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  onSearchChanged(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredProducts = this.products;
    } else {
      const term = searchTerm.toLowerCase();
      this.filteredProducts = this.products.filter(product => 
        product.title.toLowerCase().includes(term) || 
        product.brand.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    this.currentPage = 1;
  }
  
  onFilterChanged(filter: string): void {
    if (filter === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => 
        product.category === filter
      );
    }
    this.currentPage = 1;
  }
  
  onPageChanged(page: number): void {
    this.currentPage = page;
  }
}
