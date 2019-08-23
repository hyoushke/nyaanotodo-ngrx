import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
   message: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title = 'Nyaantodo NGRX';

  public message$ = new Observable<string>();

  constructor(private store: Store<AppState>) {

    this.message$ = this.store.select('message');

  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }

  japaneseMessage() {
    this.store.dispatch({type: 'JAPANESE'});
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }




}
