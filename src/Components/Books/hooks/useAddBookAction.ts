import { useCallback, useState } from "react";
import { addBooksAction } from "../data-access/Books.action.add"
import { IBook } from "../data-access/Book.interface";

export const useAddBooksAction = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExecuteAdd = useCallback(
    (book: IBook) => {
      setLoading(true);
      addBooksAction
        .execute(book)
        .catch(error => {
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError('Some error occured');
          }
        })
        .finally(() => {
          setLoading(false);
        });
    },
    []
  );

  return {
    create: handleExecuteAdd,
    isLoading,
    error
  }
}