import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use('/book', bookRoutes);
app.use('/user', userRoutes);
app.use('/student', studentRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

export default app;