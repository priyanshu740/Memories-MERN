import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/routes.js';
import authRoutes from './routes/routes.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/auth', authRoutes);

const CONNECTION_URL = 'mongodb+srv://priyanshu74:priyanshu74@cluster0.2l3k1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

