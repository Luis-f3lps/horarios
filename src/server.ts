import express from 'express';
import path from 'path';
import scheduleRoutes from './routes/schedule';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/api', scheduleRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000 🚀');
  console.log('Acesse: http://localhost:3000 para ver o Sistema Merlin!');
});