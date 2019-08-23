import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[POST] Edit';
export const UPVOTE = '[POST] Upvote';
export const DOWNVOTE = '[POST] Downvote';
export const RESET = '[POST] Reset';

export class EditText implements Action {

  readonly type = EDIT_TEXT;



}
