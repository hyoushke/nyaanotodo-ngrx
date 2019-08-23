import { Component } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

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

  message$ = Observable<string>;

  constructor(private store: Store<AppState>){

    this.message$ = this.store.select('message');

  }



}
