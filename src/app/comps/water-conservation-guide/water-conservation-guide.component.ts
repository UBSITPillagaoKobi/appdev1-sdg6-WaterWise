import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-water-conservation-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './water-conservation-guide.component.html',
  styleUrls: ['./water-conservation-guide.component.css']
})
export class WaterConservationGuideComponent {
  
  showerTime = signal(10);
  showersPerWeek = signal(7);
  
  //check if user used the calcu
  hasChanges = false;

  savingsResult = computed(() => {
    const currentUsage = this.showerTime() * this.showersPerWeek() * 2.1;
    const goalUsage = 5 * this.showersPerWeek() * 2.1; 
    const savings = Math.round(currentUsage - goalUsage);
    return savings > 0 ? savings : 0; 
  });

  updateShowerTime(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.showerTime.set(Number(inputElement.value));
    this.hasChanges = true; //makr changed!
  }

  updateShowersPerWeek(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.showersPerWeek.set(Number(inputElement.value));
    this.hasChanges = true; // mark for changed
  }

  canDeactivate(): boolean {
    if (this.hasChanges) {
      return confirm('You have unsaved adjustments in your water savings calculator. Are you sure you want to leave this page?');
    }
    return true; //leave if they didn't touch anything
  }
}