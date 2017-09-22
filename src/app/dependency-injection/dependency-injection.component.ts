import { Hero } from './../hero';
import { HeroServiceService } from './../hero-service.service';
import { Engine } from './../engine';
import { Car } from './../car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'],
  providers: [HeroServiceService]
})
export class DependencyInjectionComponent implements OnInit {

  private cars: Car[];
  private heroes: Hero[];

  constructor(heroService: HeroServiceService) {
    this.cars = [
      new Car({ cylinders: 5 }, { make: 'yokohama' }),
      new Car({ cylinders: 8 }, { make: 'ceat' }),
      new Car({ cylinders: 5 }, { make: 'bridgstone' }),
      new Car({ cylinders: 6 }, { make: 'mrf' })
    ];

    this.heroes = heroService.getHeroes();
  }

  ngOnInit() {
    this.cars[0].description = 'hundai';
    this.cars[1].description = 'tayota';
    this.cars[2].description = 'maruti';
    this.cars[3].description = 'honda';

  }

}
