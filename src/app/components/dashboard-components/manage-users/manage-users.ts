import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastSeen: string;
  permission: string;
  avatar: string;
}

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.html',
  styleUrls: ['./manage-users.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ManageUsersComponent implements OnInit {
  stats = {
    totalMembers: 24,
    active: 18,
    online: 5
  };

  searchQuery: string = '';
  selectedFilter: string = 'All Members';
  filters = ['All Members', 'Active', 'Pending', 'Admin'];
  selectedUsers: number[] = [];

  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.co',
      role: 'Admin',
      status: 'Active',
      lastSeen: '2 mins ago',
      permission: 'Full Access',
      avatar: '/assets/avatars/man.png'
    },
    {
      id: 2,
      name: 'Sandra Miller',
      email: 'sandra.miller@company.co',
      role: 'Manager',
      status: 'Active',
      lastSeen: '1 hour ago',
      permission: 'Management',
      avatar: '/assets/avatars/woman.png'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.j@company.co',
      role: 'User',
      status: 'Inactive',
      lastSeen: '3 days ago',
      permission: 'Standard',
      avatar: '/assets/avatars/man2.png'
    },
    {
      id: 4,
      name: 'Emily Brown',
      email: 'emily.brown@company.co',
      role: 'User',
      status: 'Pending',
      lastSeen: 'Never',
      permission: 'Pending',
      avatar: '/assets/avatars/woman.png'
    },
    {
      id: 5,
      name: 'David Wilson',
      email: 'david.wilson@company.co',
      role: 'User',
      status: 'Active',
      lastSeen: '3 mins ago',
      permission: 'Read-only',
      avatar: '/assets/avatars/man.png'
    },
    {
      id: 6,
      name: 'Sarah Thompson',
      email: 'sarah.t@company.co',
      role: 'Manager',
      status: 'Active',
      lastSeen: '5 mins ago',
      permission: 'Management',
      avatar: '/assets/avatars/woman.png'
    },
    {
      id: 7,
      name: 'James Anderson',
      email: 'james.a@company.co',
      role: 'User',
      status: 'Active',
      lastSeen: '15 mins ago',
      permission: 'Standard',
      avatar: '/assets/avatars/man.png'
    },
    {
      id: 8,
      name: 'Lisa Chen',
      email: 'lisa.c@company.co',
      role: 'User',
      status: 'Active',
      lastSeen: '1 day ago',
      permission: 'Standard',
      avatar: '/assets/avatars/woman.png'
    },
    {
      id: 9,
      name: 'Robert Martinez',
      email: 'robert.m@company.co',
      role: 'Admin',
      status: 'Active',
      lastSeen: '30 mins ago',
      permission: 'Full Access',
      avatar: '/assets/avatars/man2.png'
    },
    {
      id: 10,
      name: 'Emma Davis',
      email: 'emma.d@company.co',
      role: 'User',
      status: 'Inactive',
      lastSeen: '5 days ago',
      permission: 'Read-only',
      avatar: '/assets/avatars/woman.png'
    },
    {
      id: 11,
      name: 'William Taylor',
      email: 'william.t@company.co',
      role: 'User',
      status: 'Pending',
      lastSeen: 'Never',
      permission: 'Pending',
      avatar: '/assets/avatars/man.png'
    },
    {
      id: 12,
      name: 'Olivia White',
      email: 'olivia.w@company.co',
      role: 'Manager',
      status: 'Active',
      lastSeen: '1 hour ago',
      permission: 'Management',
      avatar: '/assets/avatars/woman.png'
    },
    {
      id: 13,
      name: 'Daniel Lee',
      email: 'daniel.l@company.co',
      role: 'User',
      status: 'Active',
      lastSeen: '45 mins ago',
      permission: 'Standard',
      avatar: '/assets/avatars/man2.png'
    },
    {
      id: 14,
      name: 'Sophia Garcia',
      email: 'sophia.g@company.co',
      role: 'User',
      status: 'Active',
      lastSeen: '2 hours ago',
      permission: 'Standard',
      avatar: '/assets/avatars/woman.png'
    },
    {
      id: 15,
      name: 'Thomas Wright',
      email: 'thomas.w@company.co',
      role: 'User',
      status: 'Inactive',
      lastSeen: '1 week ago',
      permission: 'Read-only',
      avatar: '/assets/avatars/man.png'
    }
  ];

  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateFilteredUsers();
  }

  protected filteredUsers: User[] = [];
  protected readonly Math = Math;

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  get paginatedUsers(): User[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredUsers.slice(start, end);
  }

  private updateFilteredUsers(): void {
    let filtered = [...this.users];

    // Apply search filter
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
      );
    }

    // Apply status filter
    switch (this.selectedFilter) {
      case 'Active':
        filtered = filtered.filter(user => user.status === 'Active');
        break;
      case 'Pending':
        filtered = filtered.filter(user => user.status === 'Pending');
        break;
      case 'Admin':
        filtered = filtered.filter(user => user.role === 'Admin');
        break;
    }

    this.filteredUsers = filtered;
    this.currentPage = 1; // Reset to first page when filters change
    this.selectedUsers = []; // Clear selection when filters change
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  toggleUserSelection(userId: number): void {
    const index = this.selectedUsers.indexOf(userId);
    if (index === -1) {
      this.selectedUsers.push(userId);
    } else {
      this.selectedUsers.splice(index, 1);
    }
  }

  selectAllUsers(): void {
    if (this.selectedUsers.length === this.paginatedUsers.length) {
      this.selectedUsers = [];
    } else {
      this.selectedUsers = this.paginatedUsers.map(user => user.id);
    }
  }

  onSearchChange(): void {
    this.updateFilteredUsers();
  }

  onFilterChange(filter: string): void {
    this.selectedFilter = filter;
    this.updateFilteredUsers();
  }

  closeManageUsers(): void {
    this.router.navigate(['/dashboard']);
  }

  applyChanges(): void {
    console.log('Applying changes for users:', this.selectedUsers);
  }

  exportData(): void {
    console.log('Exporting data for users:', this.selectedUsers);
  }

  addUser(): void {
    console.log('Opening add user modal');
  }

  getRoleClass(role: string): string {
    switch (role.toLowerCase()) {
      case 'admin': return 'role-admin';
      case 'manager': return 'role-manager';
      case 'user': return 'role-user';
      default: return '';
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active': return 'status-active';
      case 'inactive': return 'status-inactive';
      case 'pending': return 'status-pending';
      default: return '';
    }
  }

  getPermissionClass(permission: string): string {
    switch (permission.toLowerCase()) {
      case 'full access': return 'permission-full';
      case 'management': return 'permission-management';
      case 'standard': return 'permission-standard';
      case 'read-only': return 'permission-readonly';
      case 'pending': return 'permission-pending';
      default: return '';
    }
  }
}