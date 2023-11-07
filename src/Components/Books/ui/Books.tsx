import { memo } from "react";
import { IBook } from "../data-access/Book.interface";
import { AddBook } from "./AddBook";
import { BooksList } from "./BooksList";

type Props = {
	bookDto: IBook;
	filterMethod: (book: IBook) => boolean;
};

const Books: React.FC<Props> = ({ bookDto, filterMethod }) => {
	return (
		<>
			<AddBook bookDto={bookDto} />
			<BooksList filterMethod={filterMethod} />
		</>
	);
};

export default memo(Books);
