// src/routes/schedule.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { rodarAlgoritmoGerador } from '../ai/genetic';

const router = Router();
const prisma = new PrismaClient();

router.post('/schedule', async (req, res) => {
  try {
    console.log("1. Recebendo pedido de geração...");
    
    // Testa se o algoritmo retorna algo
    const sugestoes = await rodarAlgoritmoGerador();
    console.log("2. Algoritmo executou. Quantidade de resultados:", sugestoes ? sugestoes.length : "NULO");

    if (!sugestoes || sugestoes.length === 0) {
      return res.status(500).json({ error: "O algoritmo não retornou nenhuma grade." });
    }

    console.log("3. Buscando dados no Prisma...");
    const professores = await prisma.professor.findMany();
    const turmas = await prisma.turma.findMany();
    const disciplinas = await prisma.disciplina.findMany();
    console.log("4. Dados carregados. Mapeando grade...");

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
    // ESTA É A LINHA QUE VAI REVELAR O ERRO
    console.error("!!! ERRO CRÍTICO NO BACKEND !!!", error);
    res.status(500).json({ error: "Erro no servidor. Verifique o terminal." });
  }
});

export default router;