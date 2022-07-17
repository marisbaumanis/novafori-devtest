import express from 'express';
import configure from '../src/handlers'
import { agent as _request } from "supertest"

const app = express();
configure(app);

const request = _request(app)

describe('REST API', () => {
    it('should be possible to create a new task', async () => {
        const { body: data } = await request.post('/api/create')
            .set('Content-type', 'application/json')
            .send({description: "Some Random Task"})
            .expect(201);
        expect(data).toBeDefined();
        expect(data.description).toBe("Some Random Task");
        expect(data.status).toBe("Pending");
    });

    it('should be possible to move a task from Pending to Completed', async () => {
        const { body: data } = await request.post('/api/update')
            .set('Content-type', 'application/json')
            .send({ key: "0", status: "Completed" })
            .expect(200);
        expect(data).toBeDefined();
        expect(data.key).toBe("0");
        expect(data.status).toBe("Completed");
    })

    it('should be possible to move a task from Completed to Pending', async () => {
        const { body: data } = await request.post('/api/update')
            .set('Content-type', 'application/json')
            .send({ key: "0", status: "Pending" })
            .expect(200);
        expect(data).toBeDefined();
        expect(data.key).toBe("0");
        expect(data.status).toBe("Pending");
    })

    it('should be possible to retrieve a list of tasks', async () => {
        const { body: data } = await request.get('/api/items')
            .expect(200);
        expect(data).toEqual(expect.arrayContaining([{ key: "0", status: "Pending", description: "Some Random Task" }]));
    })
});