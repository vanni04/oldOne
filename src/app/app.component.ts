import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ GameService ]
})
export class AppComponent {
  title = 'My First Angular App';

  constructor(public gs: GameService){
    // this.gs.createGameBoard();
}

}
