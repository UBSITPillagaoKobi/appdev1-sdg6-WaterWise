import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-facility-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './facility-detail.html',
  styleUrls: ['./facility-detail.css']
})
export class FacilityDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  
  facilityId: number | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.facilityId = Number(params.get('id'));
    });
  }
}