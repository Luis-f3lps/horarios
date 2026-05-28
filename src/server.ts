// Adicione isto no topo de TUDO
import 'dotenv/config'; 

import express from 'express';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import scheduleRoutes from './routes/schedule';

const app = express();
const prisma = new PrismaClient();

// Teste de conexão com o banco
prisma.$connect()
  .then(() => console.log("✅ Conectado ao NeonDB com sucesso!"))
  .catch((e) => {
    console.error("❌ ERRO AO CONECTAR AO BANCO:", e);
    process.exit(1); // Isso faz o processo parar se o banco falhar
  });

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', scheduleRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000 🚀');
});