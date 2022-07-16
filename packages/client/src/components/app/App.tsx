import React, { useEffect, useState } from 'react';
import { ToDoItem } from '@my-app/common'

import './App.css';
import ToDoListComponent from '../ToDoListComponent/ToDoListComponent';
import AddItemDialog from '../AddItemDialog/AddItemDialog';

export default function App() {
    const emptyItems: ToDoItem[] = [];
    const [items, setItems] = useState(emptyItems);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const refreshItems = () => {
        fetch('/api/items', {
            method: "GET",
        })
            .then(resp => resp.json())
            .then(resp => setItems(resp))
            .catch(err => console.log(err))
    };
    useEffect(() => refreshItems());

    const createItem = (desc: string) => {
        fetch('/api/create', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description: desc })
        })
            .then(_ => refreshItems())
            .catch(err => console.log(err))
    }

  return (
        <div className="App">
          <button onClick={e => setShowAddDialog(true)}> Add New Task</button>
          {showAddDialog &&
              <AddItemDialog onCreateClicked={e => { createItem(e.target[0].value); setShowAddDialog(false); }}
                  onCancelClicked={() => setShowAddDialog(false)}
              />}
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
