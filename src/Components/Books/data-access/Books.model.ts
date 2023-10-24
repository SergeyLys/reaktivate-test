import Http from "../../../env/Http";
import { IBook } from "./Book.interface";

export interface IBooksModel {
  getAll: () => Promise<IBook[]>;
  createBook: (book: IBook) => Promise<IBook>;
}

class BooksModel implements IBooksModel {
  getAll = (): Promise<IBook[]> => Http.get<IBook[]>("/").catch(error => {throw error.message} );

  createBook = ({ id, ownerId, name, author, isPrivate }: IBook): Promise<IBook> =>
    Http.post<IBook>("/", { id, ownerId, name, author, isPrivate }).catch(error => {throw error.message} );
}

export const booksModel = new BooksModel();