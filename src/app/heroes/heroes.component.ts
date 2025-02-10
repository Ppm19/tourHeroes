import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'heroes',
  standalone: true,
  imports: [FormsModule, CommonModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent implements OnInit {
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }


  ngOnInit() {
    console.log('HeroesComponent inicializado.');
  }

  selectedHero?: Hero;
    onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
