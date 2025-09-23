import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Maintenance } from './components/dashboard-components/maintenance/maintenance'; 
import { ReportModal } from './components/dashboard-components/report-modal/report-modal';
import { ManageUsersComponent } from './components/dashboard-components/manage-users/manage-users';
import { Villages } from './pages/villages/villages';
import { MaintenancePage } from './pages/maintenance/maintenance';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: 'villages', component: Villages },
    { path: 'maintenance-schedule', component: MaintenancePage },
    { path: 'report', component: ReportModal },
    { path: 'manage-users', component: ManageUsersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })], 
    exports: [RouterModule],
})
export class AppRoutingModule {}