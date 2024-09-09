import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    // {
    //   id: 1,
    //   name: "Item 1",
    //   description: "This is item 1"
    // },
    // {
    //   id: 2,
    //   name: "Item 2",
    //   description: "This is item 2"
    // },
    // {
    //   id: 2,
    //   name: "Item 3",
    //   description: "This is item 3"
    // },
  ]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  const addItem = () => {
    if (name && description) {
      setItems([...items, { id: items.length + 1, name, description }]);
      setName("");
      setDescription("");
    }
  };

  // const editItem = () => {
  //   const itemToEdit = items.find((items) => items.id == itemToEdit);
  //   setName(itemToEdit.name);
  //   setDescription(itemToEdit.description);
  //   setEditId(itemToEdit);
  // };

  const updateItem = () => {
    setItems(
      items.map((items) =>
        items.id === editId ? { id: editId, name, description } : items
      )
    );
    setName("");
    setDescription("");
    setEditId(null);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>NOTES APPLICATION</h1>
      <div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

        {editId ? (
          <button onClick={updateItem}>Update Item</button>
        ) : (
          <button onClick={addItem}>Add Item</button>
        )}

      </div>


      <ul>
        {items.map((items) => (
          <li key={items.id}>
            <span>{items.name}: {items.description}</span>
            {/* <button onClick={() => editItem(items.id)}>Edit</button> */}
            <button onClick={() => deleteItem(items.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
