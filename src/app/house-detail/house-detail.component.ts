import { Component, Input } from '@angular/core';
import { House } from '../house';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent {
  @Input() house?: House;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private houseService: HouseService
  ) {}

  ngOnInit(): void {
    this.getHouse();
  }

  getHouse(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.houseService.getHouse(id)
      .subscribe(house => this.house = house);
  }

  goBack(): void {
    this.location.back();
  }
}
