import express from 'express';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { rodarAlgoritmoGerador } from './ai/genetic';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/schedule-stream', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    console.log("Recebendo pedido de geração em tempo real...");
    
    const sugestoes = await rodarAlgoritmoGerador((geracao, total, nota) => {
      res.write(`data: ${JSON.stringify({ type: 'progress', geracao, total, nota })}\n\n`);
    });
    
    const professores = await prisma.professor.findMany();
    const turmas = await prisma.turma.findMany();
    const disciplinas = await prisma.disciplina.findMany();

    const melhorGradeTraduzida = sugestoes[0].grade.aulas.map(aula => ({
      dia: aula.dia,
      turno: aula.turno,
      disciplina: disciplinas.find(d => d.id === aula.disciplinaId)?.nome || 'Desconhecida',
      professor: professores.find(p => p.id === aula.professorId)?.nome || 'Desconhecido',
      turma: turmas.find(t => t.id === aula.turmaId)?.nome || 'Desconhecida'
    }));

    res.write(`data: ${JSON.stringify({ type: 'done', nota: sugestoes[0].nota, aulas: melhorGradeTraduzida })}\n\n`);
    res.end(); 

  } catch (error) {
    console.error(error);
    res.write(`data: ${JSON.stringify({ type: 'error', message: 'Erro interno no processador da IA' })}\n\n`);
    res.end();
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000 🚀');
  console.log('Acesse: http://localhost:3000 para ver o Sistema Merlin!');
});

