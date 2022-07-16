import React, { useEffect, useState } from 'react';
import { ToDoItem } from '@my-app/common'
import './ToDoItemComponent.css';

export default function ToDoItemComponent(props : { item: ToDoItem }) {
    return (
        <div className="todoitem">
            <span>{props.item.description}</span>
            <button/>
        </div>
    );
}