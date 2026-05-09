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
  
  showerTime = signal(10);// Default 
  showersPerWeek = signal(7);// Default

  savingsResult = computed(() => {
    const currentUsage = this.showerTime() * this.showersPerWeek() * 2.1;
    const goalUsage = 5 * this.showersPerWeek() * 2.1; //5 minute shower ideal
    
    const savings = Math.round(currentUsage - goalUsage);
    
    //savings is 0 if they showered for more than 5
    return savings > 0 ? savings : 0; 
  });

  updateShowerTime(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.showerTime.set(Number(inputElement.value));
  }

  updateShowersPerWeek(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.showersPerWeek.set(Number(inputElement.value));
  }
}