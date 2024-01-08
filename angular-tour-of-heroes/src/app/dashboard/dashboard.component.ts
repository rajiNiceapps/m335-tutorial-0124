import { Component, inject, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { Hero } from '../../types/hero';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  heroService = inject(HeroService);

  heroes: Hero[] = [];

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
