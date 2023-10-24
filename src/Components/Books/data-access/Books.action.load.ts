import { runInAction } from 'mobx'
import {booksStore} from './Books.store';
import {booksModel} from './Books.model';
import { BookAction } from './Books.action.abstract';

class LoadBooksAction extends BookAction {
  async execute() {
    const books = await this.model.getAll();

    runInAction(() => {
        this.store.books = books;
      }
    )
  }
}

export const loadBooksAction = new LoadBooksAction(booksStore, booksModel);