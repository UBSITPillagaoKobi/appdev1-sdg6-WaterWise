import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SanitationAccessTrackerComponent } from './comps/sanitation-access-tracker/sanitation-access-tracker.component';
import { WaterConservationGuideComponent } from './comps/water-conservation-guide/water-conservation-guide.component';
import { WaterQualityMonitorComponent } from './comps/water-quality-monitor/water-quality-monitor.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { FacilityDetailComponent } from './comps/facility-detail/facility-detail'; 
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/sanitation', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  
  { path: 'sanitation', component: SanitationAccessTrackerComponent, canActivate: [AuthGuard] },
  { path: 'water-conservation', component: WaterConservationGuideComponent, canActivate: [AuthGuard], canDeactivate: [unsavedChangesGuard] },
  { path: 'water-quality', component: WaterQualityMonitorComponent, canActivate: [AuthGuard] },
  { path: 'facility/:id', component: FacilityDetailComponent, canActivate: [AuthGuard] }, 
  
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/sanitation' }
];