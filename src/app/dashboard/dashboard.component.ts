import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, HeroSearchComponent]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => this.heroes = heroes.slice(1, 5));
  }
}
