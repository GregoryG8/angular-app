import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent],
  template: `
  <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {

  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
    // alert(`A ${this.username} le gusta jugar a ${gameName}`);
  }

  games = [
    {
      id: 1,
      name: 'Uncharted',
    },
    {
      id: 2,
      name: 'Horizon',
    },
    {
      id: 3,
      name: 'The last of us',
    },
  ];
}
