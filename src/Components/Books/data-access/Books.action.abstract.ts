import { action, makeObservable } from 'mobx'
import {IBooksStore} from './Books.store';
import {IBooksModel} from './Books.model';
import { IBook } from './Book.interface';

export abstract class BookAction {
  store: IBooksStore;
  model: IBooksModel;

  constructor(store: IBooksStore, model: IBooksModel) {
    this.store = store;
    this.model = model;
    
    makeObservable(this, {
      execute: action
    });
  }

  abstract execute(book?: IBook): void;
}