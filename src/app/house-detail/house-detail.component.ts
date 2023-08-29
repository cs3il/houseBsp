import { Component, Input } from '@angular/core';
import { House } from '../house';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent {
  @Input() house?: House;
}
