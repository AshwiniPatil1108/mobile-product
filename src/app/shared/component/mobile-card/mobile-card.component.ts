import { Component, OnInit } from '@angular/core';
import { mobileProducts } from '../../const/mobile';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent implements OnInit {
  mobileData = mobileProducts
  constructor() { }

  ngOnInit(): void {
  }

}
