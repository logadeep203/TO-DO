import React, { useState, useRef } from 'react';
import './index.css';

const AddItem = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
    handleFocus();
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <form className='addform' onSubmit={handleSubmit}>
      <input
        autoFocus
        id='additem'
        ref={inputRef}
        type='text'
        placeholder='Enter item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddItem;
