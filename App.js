import { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import AddBookScreen from './src/screens/AddBookScreen';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [books, setBooks] = useState([]);

  function addBook(book) {
    setBooks((prev) => [...prev, book]);
    setScreen('home');
  }

  if (screen === 'add') {
    return <AddBookScreen onSave={addBook} goBack={() => setScreen('home')} />;
  }

  return (
    <HomeScreen
      books={books}
      goToAdd={() => setScreen('add')}
    />
  );
}
