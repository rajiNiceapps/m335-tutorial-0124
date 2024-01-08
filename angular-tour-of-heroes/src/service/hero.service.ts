import { inject, Injectable } from '@angular/core';
import { Hero } from '../types/hero';
import { HEROES } from '../data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  messageService = inject(MessageService);

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
