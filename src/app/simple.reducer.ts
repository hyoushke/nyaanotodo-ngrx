import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action) {

  console.log(action.type, state);

  switch (action.type) {
      case 'SPANISHI':
        return state = 'Hola Munod';

      case 'JAPANESE':
        return state = 'Oha Mina San';

      case 'FRENCH':
          return state = 'Bonjour';

      default:
        return state = 'Hello World';
    }
}
