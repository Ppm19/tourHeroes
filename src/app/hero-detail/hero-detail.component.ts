import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})

export class HeroDetailComponent {

  @Input() hero!: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.location.back());
  }
}
