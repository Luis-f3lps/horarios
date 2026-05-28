import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { rodarAlgoritmoGerador } from '../ai/genetic';

const router = Router();
const prisma = new PrismaClient();

router.get('/schedule-stream', async (req, res) => {
  const setor = req.query.setor as 'tecnico' | 'graduacao';
  
  if (!setor) {
    return res.status(400).write(`data: ${JSON.stringify({ type: 'error', message: 'Setor obrigatório' })}\n\n`);
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    const sugestoes = await rodarAlgoritmoGerador(setor, (geracao, total, nota) => {
      res.write(`data: ${JSON.stringify({ type: 'progress', geracao, total, nota })}\n\n`);
    });
    
    const professores = await prisma.professor.findMany();
    const turmas = await prisma.turma.findMany();
    const disciplinas = await prisma.disciplina.findMany();

    const melhorGradeTraduzida = sugestoes[0].grade.aulas.map(aula => ({
      ...aula,
      disciplina: disciplinas.find(d => d.id === aula.disciplinaId)?.nome,
      professor: professores.find(p => p.id === aula.professorId)?.nome,
      turma: turmas.find(t => t.id === aula.turmaId)?.nome
    }));

    res.write(`data: ${JSON.stringify({ type: 'done', nota: sugestoes[0].nota, aulas: melhorGradeTraduzida })}\n\n`);
    res.end(); 
  } catch (error) {
    console.error(error);
    res.write(`data: ${JSON.stringify({ type: 'error', message: 'Erro no processador da IA' })}\n\n`);
    res.end();
  }
});

router.post('/save-schedule', async (req, res) => {
  const { aulas, setor } = req.body; 

  try {
    await prisma.aulaSalva.createMany({
      data: aulas.map((a: any) => ({
        professorId: a.professorId,
        turmaId: a.turmaId,
        disciplinaId: a.disciplinaId,
        dia: a.dia,
        turno: a.turno,
        setor: setor
      }))
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao salvar grade no banco de dados" });
  }
});

export default router;