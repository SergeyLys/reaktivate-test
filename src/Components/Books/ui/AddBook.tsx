import { memo } from "react";
import { IBook } from "../data-access/Book.interface";
import { useAddBooksAction } from "../hooks/useAddBookAction";

type Props = {
  bookDto: IBook;
}

const Component: React.FC<Props> = ({bookDto}) => {
  const {create, isLoading} = useAddBooksAction();
  
  return (
    <button onClick={() => create(bookDto)} disabled={isLoading}>Add book</button>
  )
}

export const AddBook = memo(Component);