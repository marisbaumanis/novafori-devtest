import React, { useEffect, useState } from 'react';
import { ToDoItem } from '@my-app/common'
import './ToDoItemComponent.css';

export default function ToDoItemComponent(props: { item: ToDoItem, onItemClicked: (item: ToDoItem) => void }) {
    return (
        <div className="todoitem">
            <span>{props.item.description}</span>
            <button className={props.item.status == "Completed" ? "todoitem-completed" : "todoitem-pending"}
                onClick={e => props.onItemClicked(props.item)} />
        </div>
    );
}