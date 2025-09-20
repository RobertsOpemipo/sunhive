// reports-modal.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.html',
  imports: [CommonModule,FormsModule],
  styleUrls: ['./report-modal.css']
})
export class ReportModal implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() modalClose = new EventEmitter<void>();
  @Output() reportGenerated = new EventEmitter<any>();

  // Selected values
  selectedReportType: string = 'energy';
  selectedTimePeriod: string = 'last-30-days';
  selectedExportFormat: string = 'excel';
  selectedDeliveryMethod: string = 'instant';
  selectedFilters: string[] = [];
  fromDate: string = '';
  toDate: string = '';

  // Data arrays
  reportTypes = [
    {
      id: 'energy',
      name: 'Energy Report',
      description: 'Generate report on energy consumption and efficiency metrics',
      icon: 'fas fa-bolt'
    },
    {
      id: 'water',
      name: 'Water Report',
      description: 'Generate report on water usage and conservation data',
      icon: 'fas fa-tint'
    },
    {
      id: 'user-activity',
      name: 'User Activity Report',
      description: 'Generate report on user activities and system interactions',
      icon: 'fas fa-users'
    },
    {
      id: 'financial',
      name: 'Financial Report',
      description: 'Generate report on financial transactions and budgets',
      icon: 'fas fa-chart-line'
    },
    {
      id: 'village-overview',
      name: 'Village Overview',
      description: 'Generate comprehensive village performance overview',
      icon: 'fas fa-home'
    }
  ];

  timePeriods = [
    { value: 'last-30-days', label: 'Last 30 Days' },
    { value: 'last-quarter', label: 'Last Quarter' },
    { value: 'last-6-months', label: 'Last 6 Months' },
    { value: 'last-year', label: 'Last Year' },
    { value: 'custom', label: 'Custom Range' }
  ];

  dataFilters = [
    { id: 'village-kamau', label: 'Village Kamau' },
    { id: 'village-eldoret', label: 'Village Eldoret' },
    { id: 'village-nakuru', label: 'Village Nakuru' },
    { id: 'peak-hours', label: 'Peak hour only' },
    { id: 'include-alerts', label: 'Include Alerts' }
  ];

  exportFormats = [
    {
      id: 'pdf',
      name: 'PDF',
      description: 'Portable document format for easy sharing and printing',
      icon: 'fas fa-file-pdf'
    },
    {
      id: 'excel',
      name: 'Excel',
      description: 'Microsoft Excel format for data analysis and manipulation',
      icon: 'fas fa-file-excel'
    },
    {
      id: 'csv',
      name: 'CSV',
      description: 'Comma-separated values format for data import/export',
      icon: 'fas fa-file-csv'
    }
  ];

  deliveryMethods = [
    {
      id: 'instant',
      name: 'Instant Download',
      description: 'Generate and download immediately to your device',
      icon: 'fas fa-download'
    },
    {
      id: 'email',
      name: 'Send to email',
      description: 'Send reports to your email address via secure links',
      icon: 'fas fa-envelope'
    },
    {
      id: 'schedule',
      name: 'Schedule Report',
      description: 'Set up automatic report generation and delivery',
      icon: 'fas fa-clock'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize default filters
    this.selectedFilters = ['village-kamau'];

    // Set default date range (last 30 days)
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    this.fromDate = this.formatDate(thirtyDaysAgo);
    this.toDate = this.formatDate(today);
  }

  // Selection methods
  selectReportType(reportId: string): void {
    this.selectedReportType = reportId;
  }

  selectTimePeriod(period: string): void {
    this.selectedTimePeriod = period;

    // Auto-set date ranges for predefined periods
    if (period !== 'custom') {
      this.setDateRangeForPeriod(period);
    }
  }

  selectExportFormat(formatId: string): void {
    this.selectedExportFormat = formatId;
  }

  selectDeliveryMethod(methodId: string): void {
    this.selectedDeliveryMethod = methodId;
  }

  toggleFilter(filterId: string): void {
    const index = this.selectedFilters.indexOf(filterId);
    if (index > -1) {
      this.selectedFilters.splice(index, 1);
    } else {
      this.selectedFilters.push(filterId);
    }
  }

  isFilterSelected(filterId: string): boolean {
    return this.selectedFilters.includes(filterId);
  }

  // Utility methods
  private setDateRangeForPeriod(period: string): void {
    const today = new Date();
    let startDate = new Date();

    switch (period) {
      case 'last-30-days':
        startDate.setDate(today.getDate() - 30);
        break;
      case 'last-quarter':
        startDate.setMonth(today.getMonth() - 3);
        break;
      case 'last-6-months':
        startDate.setMonth(today.getMonth() - 6);
        break;
      case 'last-year':
        startDate.setFullYear(today.getFullYear() - 1);
        break;
      default:
        startDate.setDate(today.getDate() - 30);
    }

    this.fromDate = this.formatDate(startDate);
    this.toDate = this.formatDate(today);
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  // Event handlers
  onCancel(): void {
    this.modalClose.emit();
  }

  onGenerateReport(): void {
    const reportConfig = {
      reportType: this.selectedReportType,
      timePeriod: this.selectedTimePeriod,
      dateRange: {
        from: this.fromDate,
        to: this.toDate
      },
      filters: this.selectedFilters,
      exportFormat: this.selectedExportFormat,
      deliveryMethod: this.selectedDeliveryMethod,
      generatedAt: new Date().toISOString()
    };

    console.log('Generating report with config:', reportConfig);
    this.reportGenerated.emit(reportConfig);
  }

  // Validation
  isFormValid(): boolean {
    return !!(
      this.selectedReportType &&
      this.selectedTimePeriod &&
      this.selectedExportFormat &&
      this.selectedDeliveryMethod &&
      this.fromDate &&
      this.toDate
    );
  }

  // Get selected report details
  getSelectedReportName(): string {
    const report = this.reportTypes.find(r => r.id === this.selectedReportType);
    return report ? report.name : 'Report';
  }

  getSelectedFormatName(): string {
    const format = this.exportFormats.find(f => f.id === this.selectedExportFormat);
    return format ? format.name : 'Unknown';
  }

  getSelectedDeliveryName(): string {
    const method = this.deliveryMethods.find(m => m.id === this.selectedDeliveryMethod);
    return method ? method.name : 'Unknown';
  }

  // Reset form
  resetForm(): void {
    this.selectedReportType = 'energy';
    this.selectedTimePeriod = 'last-30-days';
    this.selectedExportFormat = 'excel';
    this.selectedDeliveryMethod = 'instant';
    this.selectedFilters = ['village-kamau'];

    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    this.fromDate = this.formatDate(thirtyDaysAgo);
    this.toDate = this.formatDate(today);
  }
}