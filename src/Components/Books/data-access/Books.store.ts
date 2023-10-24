import { computed, makeObservable, observable } from "mobx";
import { IBook } from "./Book.interface";


export interface IBooksStore {
  books: IBook[];
  booksAmount: number;
  privateBooksAmount: number;
}

class BooksStore implements IBooksStore {
  constructor() {
    makeObservable(this, {
      books: observable,
      booksAmount: computed,
      privateBooksAmount: computed,
    });
  }

  books: IBook[] = [];

  get booksAmount() {
    return this.books.length;
  }

  get privateBooksAmount() {
    return this.books.filter((book) => book.isPrivate).length;
  }
}

  export const booksStore = new BooksStore();