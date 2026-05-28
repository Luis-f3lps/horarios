// src/server.ts
import express from 'express';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { rodarAlgoritmoGerador } from './ai/genetic';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.post('/api/schedule', async (req, res) => {
  try {
    console.log("Recebendo pedido de geração...");
    const sugestoes = await rodarAlgoritmoGerador();
    
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

    res.json({ 
      success: true, 
      nota: sugestoes[0].nota, 
      aulas: melhorGradeTraduzida 
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao gerar horários" });
  }
});
// Adicione este bloco no seu src/server.ts:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000 🚀');
  console.log('Acesse: http://localhost:3000 para ver o Sistema Merlin!');
});