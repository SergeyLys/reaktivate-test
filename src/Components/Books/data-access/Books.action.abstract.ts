import { action, makeObservable } from 'mobx'
import {IBooksStore} from './Books.store';
import {IBooksModel} from './Books.model';
import { IBook } from './Book.interface';

export abstract class BookAction {

  constructor(readonly store: IBooksStore, readonly model: IBooksModel) {
    makeObservable(this, {
      execute: action
    });
  }

  abstract execute(book?: IBook): void;
}