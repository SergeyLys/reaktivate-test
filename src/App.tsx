import './App.css';
import { observer } from 'mobx-react';
import { IBook } from './Components/Books/data-access/Book.interface';
import { AddBook } from './Components/Books/ui/AddBook';
import { BooksList } from './Components/Books/ui/BooksList';
import { Tabs } from './ui/Tabs/Tabs';
import { booksStore } from './Components/Books/data-access/Books.store';

const TabsControls = observer(() => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', margin: 15}}>
      <Tabs.Tab label="all">All ({booksStore.booksAmount})</Tabs.Tab>
      <Tabs.Tab label="private">Private ({booksStore.privateBooksAmount})</Tabs.Tab>
    </div>
  );
});

const TabsContent = () => {
  return (
    <>
      <Tabs.Panel label="all">
        <AddBook bookDto={{
            id: 1914,
            ownerId: 2022,
            name: "The First World War",
            author: "People",
            isPrivate: false
          }}
        />
        <BooksList filterMethod={(book: IBook) => !!book} />
      </Tabs.Panel>
      <Tabs.Panel label="private">
        <AddBook bookDto={{
            id: 999,
            ownerId: 666,
            name: "The Private Book",
            author: "Some Author",
            isPrivate: true
          }}
        />
        <BooksList filterMethod={(book: IBook) => book.isPrivate} />
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