import React, { useEffect, useState } from 'react';
import { ToDoItem } from '@my-app/common'
import ToDoItemComponent from '../ToDoItemComponent/ToDoItemComponent';

export default function ToDoListComponent(props: { items: ToDoItem[], title: string, onItemClicked: (item: ToDoItem) => void }) {
    return (
        <div className="todolist">
            <h2>{ props.title }</h2>
            {props.items.map(item =>
                (<ToDoItemComponent key={item.key} item={item} onItemClicked={props.onItemClicked} />)
            )}
        </div>
    );
}