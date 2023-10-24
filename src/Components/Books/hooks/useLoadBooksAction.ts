import { useCallback, useEffect, useState } from "react";
import { loadBooksAction } from "../data-access/Books.action.load"

export const useLoadBooksAction = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExecuteLoad = useCallback(
    () => {
      setLoading(true);
      loadBooksAction
        .execute()
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

  useEffect(() => {
    handleExecuteLoad();
  }, [handleExecuteLoad]);

  return {
    isLoading,
    error
  }
}