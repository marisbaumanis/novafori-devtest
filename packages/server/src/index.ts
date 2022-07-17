import express, { Express } from 'express';
import cors from 'cors';
import { join } from 'path';
import configure from '../src/handlers';
const clientPath = '../../client/build';

const app = express();
app.use(cors());
const port = 8080; // default port to listen

// Serve static resources from the "public" folder (ex: when there are images to display)
app.use(express.static(join(__dirname, clientPath)));

configure(app);

// Serve the HTML page
app.get('*', (req: any, res: any) => {
    res.sendFile(join(__dirname, clientPath, 'index.html'));
});

// start the Express server
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});