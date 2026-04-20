import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsageComponent } from './usage.component';
import { AuthGuard } from './guards/auth.guard';
import { WaterQualityMonitorComponent } from './comps/water-quality-monitor/water-quality-monitor.component';
import { WaterConservationGuideComponent } from './comps/water-conservation-guide/water-conservation-guide.component';
import { SanitationAccessTrackerComponent } from './comps/sanitation-access-tracker/sanitation-access-tracker.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'usage', component: UsageComponent, canActivate: [AuthGuard] },
	{ path: 'water-quality', component: WaterQualityMonitorComponent, canActivate: [AuthGuard] },
	{ path: 'water-conservation', component: WaterConservationGuideComponent, canActivate: [AuthGuard] },
	{ path: 'sanitation', component: SanitationAccessTrackerComponent, canActivate: [AuthGuard] },
	{ path: '**', redirectTo: '/dashboard' }
];
