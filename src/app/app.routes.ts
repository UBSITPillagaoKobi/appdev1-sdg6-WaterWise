import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SanitationAccessTrackerComponent } from './comps/sanitation-access-tracker/sanitation-access-tracker.component';
import { WaterConservationGuideComponent } from './comps/water-conservation-guide/water-conservation-guide.component';
import { WaterQualityMonitorComponent } from './comps/water-quality-monitor/water-quality-monitor.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { FacilityDetailComponent } from './comps/facility-detail/facility-detail'; 

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sanitation', component: SanitationAccessTrackerComponent },
  { path: 'water-conservation', component: WaterConservationGuideComponent },
  { path: 'water-quality', component: WaterQualityMonitorComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'facility/:id', component: FacilityDetailComponent }, 
  { path: '**', redirectTo: '/dashboard' }
];