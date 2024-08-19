import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import SearchBar from './components/searchbar';
import CreateCardButton from './components/CreateCardButton';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      fetchCards(); 
    } else {
      try {
        const response = await axios.get(`http://localhost:5000/api/cards/${searchQuery}`);
        setCards([response.data]);
      } catch (error) {
        console.error('Error fetching searched card:', error);
      }
    }
  };

  const handleCardCreated = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]); 
  };

  return (
    <div className="App">
      <div className="search-and-create-container">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          resetSearch={fetchCards}
        />
        <CreateCardButton onCardCreated={handleCardCreated} />
      </div>
      <CardList cards={cards} />
    </div>
  );
}

export default App;
