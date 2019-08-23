import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import * as PostActions from './post.actions';


interface AppState {
   post: Post;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title = 'Nyaantodo NGRX';

  public post = new Observable<Post>();
  public text: string;

  constructor(private store: Store<AppState>) {

    this.post = this.store.select('post');
  }


  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  upVote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downVote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  reset() {
    this.store.dispatch(new PostActions.Reset());
  }


}











/*

<div>
<strong>{{ message$ | async }}</strong>
</div>
<br />
<br />
<button (click)="spanishMessage()">Spanish</button>
<button (click)="japaneseMessage()">Japanese</button>
<button (click)="frenchMessage()">French</button>

--

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
*/
