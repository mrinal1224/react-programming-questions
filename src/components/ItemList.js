import React, { useState } from 'react';

function ItemList() {
  // Initialize state variables
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Event handler for adding a new item
  const addItem = () => {
    if (inputValue.trim() !== '') {
      // Generate a unique ID (for simplicity, you can use a timestamp)
      const id = Date.now().toString();

      // Create a new item object
      const newItem = { id, name: inputValue };

      // Update the items state with the new item
      setItems([...items, newItem]);

      // Clear the input field
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter item name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

export default ItemList;
