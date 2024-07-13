import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {
  const API_URL = 'http://localhost:3000/items'; // Replace with your API endpoint
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [API_URL]);

  const addItem = async (message) => {
    const newItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      checked: false,
      message
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
      });
      if (!response.ok) {
        throw new Error('Failed to add item');
      }
      const addedItem = await response.json();
      setItems([...items, addedItem]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleCheck = async (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    const updatedItem = updatedItems.find(item => item.id === id);

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedItem)
      });
      if (!response.ok) {
        throw new Error('Failed to update item');
      }
      setItems(updatedItems);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="App">
      <Header title="To do list" />
      <div className="main-container">
        <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <AddItem addItem={addItem} />
      </div>
      <Footer length={items.length} />
    </div>
  );
}

Header.defaultProps = {
  title: "logadeep"
};

export default App;
