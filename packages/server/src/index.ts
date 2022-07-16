import express from 'express';
import cors from 'cors';
import { join } from 'path';
import { ToDoItem } from '@my-app/common';
const clientPath = '../../client/build';
const app = express();
app.use(cors());
app.use(express.json());
const port = 8080; // default port to listen

// Serve static resources from the "public" folder (ex: when there are images to display)
app.use(express.static(join(__dirname, clientPath)));

let items: ToDoItem[] = [
    { key: "0", description: "Desc1", status: "Pending" },
    { key: "1", description: "Desc2", status: "Pending" },
    { key: "2", description: "Desc3", status: "Completed" }
];

app.get('/api/items', (req, res) => {
    res.send(items);
});

app.post('/api/create', (req, res) => {
    if (req.body && req.body.description) {
        const item = { key: items.length.toString(), description: req.body.description, status: "Pending" };
        items.push(item);
        res.status(200);
        res.send(item);
    }
    else res.sendStatus(405);
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
    else res.sendStatus(405);
})

// Serve the HTML page
app.get('*', (req: any, res: any) => {
    res.sendFile(join(__dirname, clientPath, 'index.html'));
});

// start the Express server
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});