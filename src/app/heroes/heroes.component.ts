import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroService } from '../hero.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent implements OnInit {
  heroes!: Hero[];
  hero!: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.getHeroes();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id') ?? 1);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
