const express = require('express');
const { PrismaClient, Prisma } = require('@prisma/client');
const cors = require('cors');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/task', async (req, res) => {
    const { text } = req.body;
    try {
        const newTask = await prisma.task.create({
            data: { text },
        });
        res.json(newTask);
    } catch (e) {
        res.status(500).json({ error: `Failed to create a task ${e.message}` });
    }
});

app.get('/task', async (req, res) => {
    try {
        const tasks = await prisma.task.findMany();
        res.json(tasks);
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});