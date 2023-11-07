import "./App.css";
import { observer } from "mobx-react";
import { IBook } from "./Components/Books/data-access/Book.interface";
import { Tabs } from "./ui/Tabs/Tabs";
import { booksStore } from "./Components/Books/data-access/Books.store";
import { Suspense, lazy, useCallback, useMemo } from "react";

const Books = lazy(() => import("./Components/Books/ui/Books"));

const TabsControls = observer(() => {
	return (
		<div style={{ display: "flex", justifyContent: "center", margin: 15 }}>
			<Tabs.Tab label="all">All ({booksStore.booksAmount})</Tabs.Tab>
			<Tabs.Tab label="private">
				Private ({booksStore.privateBooksAmount})
			</Tabs.Tab>
		</div>
	);
});

const TabsContent = () => {
	const publicBookDTO = useMemo(
		() => ({
			id: 1914,
			ownerId: 2022,
			name: "The First World War",
			author: "People",
			isPrivate: false,
		}),
		[]
	);

	const privateBookDTO = useMemo(
		() => ({
			id: 999,
			ownerId: 666,
			name: "The Private Book",
			author: "Some Author",
			isPrivate: true,
		}),
		[]
	);

	const filterPrivateBooks = useCallback((book: IBook) => book.isPrivate, []);

	const filterAllBooks = useCallback((book: IBook) => !!book, []);

	return (
		<>
			<Tabs.Panel label="all">
				<Suspense fallback={<p>Loading...</p>}>
					<Books bookDto={publicBookDTO} filterMethod={filterAllBooks} />
				</Suspense>
			</Tabs.Panel>
			<Tabs.Panel label="private">
				<Suspense fallback={<p>Loading...</p>}>
					<Books bookDto={privateBookDTO} filterMethod={filterPrivateBooks} />
				</Suspense>
			</Tabs.Panel>
		</>
	);
};

export default function App() {
	return (
		<div className="App">
			<Tabs>
				<TabsControls />
				<TabsContent />
			</Tabs>
		</div>
	);
}
