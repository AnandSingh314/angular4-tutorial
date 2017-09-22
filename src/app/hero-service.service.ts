import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroServiceService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
