import {booksStore} from './Books.store';
import {booksModel} from './Books.model';
import { BookAction } from './Books.action.abstract';
import { IBook } from './Book.interface';
import { loadBooksAction } from './Books.action.load';

class AddBookAction extends BookAction {
  async execute(book: IBook) {
    try {
      await this.model.createBook(book);
      await loadBooksAction.execute();
    } catch(e) {
      throw e;
    }
  }
}

export const addBooksAction = new AddBookAction(booksStore, booksModel);