import { useMemo } from "react";
import { observer } from "mobx-react";
import { booksStore } from "../data-access/Books.store";
import { useLoadBooksAction } from "../hooks/useLoadBooksAction";
import { IBook } from "../data-access/Book.interface";

type Props = {
	filterMethod: (book: IBook) => boolean;
};

export const BooksList: React.FC<Props> = observer(({ filterMethod }) => {
	const { isLoading, error } = useLoadBooksAction();
	const list = useMemo(
		() => booksStore.books.filter(filterMethod),
		[booksStore.books, filterMethod]
	);

	if (isLoading) {
		return <p>Loading books...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<ul>
			{list.map((book) => (
				<li key={(book.id || 1) * Math.random()}>
					{book.author}: {book.name}
				</li>
			))}
		</ul>
	);
});
