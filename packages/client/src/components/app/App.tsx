import React, { useEffect, useState } from 'react';
import { ToDoItem } from '@my-app/common'

import './App.css';
import ToDoListComponent from '../todolistcomponent/ToDoListComponent';

export default function App() {
    const emptyItems: ToDoItem[] = [];
    const [items, setItems] = useState(emptyItems);

    useEffect(() => {
        fetch('/api/items', {
            method: "GET",
        })
            .then(resp => resp.json())
            .then(resp => setItems(resp))
            .catch(err => console.log(err))
    })
  return (
      <div className="App">
          <div className="lists-container">
              <div className="list-pending">
                  <ToDoListComponent title="Pending" items={items.filter(i=>i.status == "Pending")} />
            </div>
            <div className="list-completed">
                  <ToDoListComponent title="Completed" items={items.filter(i => i.status == "Completed")} />
                </div>
          </div>
    </div>
  );
}
