import express, { Express } from 'express';
import { ToDoItem } from '@my-app/common';

export default function configure(app: Express) {
    app.use(express.json());

    let items: ToDoItem[] = [];

    app.get('/api/items', (req, res) => {
        res.send(items);
    });

    app.post('/api/create', (req, res) => {
        if (req.body && req.body.description) {
            const item = { key: items.length.toString(), description: req.body.description, status: "Pending" };
            items.push(item);
            res.status(201);
            res.send(item);
        }
        else res.sendStatus(400);
    })

    app.post('/api/update', (req, res) => {
        if (req.body && req.body.key) {
            const item = items.find(i => i.key == req.body.key);
            if (item) {
                if (req.body.description) item.description = req.body.description;
                if (req.body.status) item.status = req.body.status;
            }
            res.status(200);
            res.send(item);
        }
        else res.sendStatus(400);
    })
};