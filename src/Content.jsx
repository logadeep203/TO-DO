import React from 'react';
import './index.css';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    
    <div className="main-container">
        
      <main className="content">
        <ul>
          {items.map((item) => (
            <li key={item.id} className="list-item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label>{item.message}</label>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Content;
