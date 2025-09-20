import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Maintenance } from './pages/maintenance/maintenance'; 
import { ReportModal } from './pages/report-modal/report-modal';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: 'maintenance', component: Maintenance },
    { path: 'report', component: ReportModal },

    // Example placeholder
    // { path: 'users', component: UsersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })], 
    exports: [RouterModule],
})
export class AppRoutingModule { }