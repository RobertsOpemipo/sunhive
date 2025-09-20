import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './maintenance.html',
  styleUrls: ['./maintenance.css']
})
export class Maintenance {
  selectedEquipment: string = 'Water Pump';
  selectedMaintenanceType: string = '';
  selectedPriority: string = 'Medium';
  selectedDate: string = '';
  selectedTimeSlot: string = '9:00 AM';
  selectedTechnician: string = '';

  equipment = [
    { name: 'Water Pump', status: 'selected', description: 'Next service: 2 days' },
    { name: 'Generator', status: 'normal', description: 'Last serviced: 30 days ago' },
    { name: 'Solar Array', status: 'normal', description: 'Last serviced: 45 days ago' },
    { name: 'Cooling System', status: 'normal', description: 'Last serviced: 15 days ago' }
  ];

  maintenanceTypes = [
    { name: 'Preventive', icon: 'fas fa-shield-alt' },
    { name: 'Corrective', icon: 'fas fa-tools' },
    { name: 'Emergency', icon: 'fas fa-exclamation-triangle' },
    { name: 'Inspection', icon: 'fas fa-search' }
  ];

  priorities = [
    { name: 'Low', color: 'purple', description: 'Can be scheduled flexibly' },
    { name: 'Medium', color: 'orange', description: 'Schedule within 48 hours', selected: true },
    { name: 'High', color: 'red', description: 'Requires immediate attention' }
  ];

  timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'
  ];

  technicians = [
    { name: 'John Smith', specialization: 'Electrical Systems', rating: '4.9', availability: 'Available', selected: true },
    { name: 'Sarah Johnson', specialization: 'Mechanical Systems', rating: '4.7', availability: 'Available' },
    { name: 'Mike Rodriguez', specialization: 'HVAC Systems', rating: '4.8', availability: 'Available' }
  ];

  costBreakdown = {
    labour: 150.00,
    parts: 75.00,
    equipment: 25.00,
    total: 250.00
  };

  additionalNotes: string = '';

  constructor() { }

  selectEquipment(equipment: any) {
    this.selectedEquipment = equipment.name;
    this.equipment.forEach(eq => eq.status = eq.name === equipment.name ? 'selected' : 'normal');
  }

  selectMaintenanceType(type: string) {
    this.selectedMaintenanceType = type;
  }

  selectPriority(priority: any) {
    this.selectedPriority = priority.name;
    this.priorities.forEach(p => p.selected = p.name === priority.name);
  }

  selectTimeSlot(slot: string) {
    this.selectedTimeSlot = slot;
  }

  selectTechnician(tech: any) {
    this.selectedTechnician = tech.name;
    this.technicians.forEach(t => t.selected = t.name === tech.name);
  }

  onSubmit() {
    console.log('Scheduling maintenance...', {
      equipment: this.selectedEquipment,
      maintenanceType: this.selectedMaintenanceType,
      priority: this.selectedPriority,
      date: this.selectedDate,
      timeSlot: this.selectedTimeSlot,
      technician: this.selectedTechnician,
      notes: this.additionalNotes
    });
  }

  onCancel() {
    console.log('Maintenance scheduling cancelled');
  }
}