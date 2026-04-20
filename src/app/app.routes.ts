import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsageComponent } from './usage.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'usage', component: UsageComponent },
	{ path: '**', redirectTo: '/dashboard' },
];
