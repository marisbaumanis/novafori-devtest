import React, { useEffect, useState } from 'react';
import { ToDoItem } from '@my-app/common'
import ToDoItemComponent from '../todoitemcomponent/ToDoItemComponent';

export default function ToDoListComponent(props: { items: ToDoItem[], title: string }) {
    return (
        <div className="todolist">
            <h2>{ props.title }</h2>
            {props.items.map(item =>
                (<ToDoItemComponent key={item.key} item={item} />)
            )}
        </div>
    );
}