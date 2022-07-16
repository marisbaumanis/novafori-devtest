import express from 'express';
import cors from 'cors';
import { join } from 'path';

import { ToDoItem } from '@my-app/common';
const clientPath = '../../client/build';
const app = express();
app.use(cors());
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

// Serve the HTML page
app.get('*', (req: any, res: any) => {
    res.sendFile(join(__dirname, clientPath, 'index.html'));
});

// start the Express server
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}` );
});