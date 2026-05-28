// src/routes/schedule.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { rodarAlgoritmoGerador } from '../ai/genetic';

const router = Router();
const prisma = new PrismaClient();

router.post('/schedule', async (req, res) => {
  try {
    console.log("1. Recebendo pedido de geração...");
    
    // Agora ele retorna { grade, nota, logs } direto do campeão
    const resultado = await rodarAlgoritmoGerador();
    console.log("2. Algoritmo executou com sucesso!");

    if (!resultado || !resultado.grade) {
      return res.status(500).json({ error: "O algoritmo não retornou nenhuma grade." });
    }

    console.log("3. Buscando dados no Prisma...");
    const professores = await prisma.professor.findMany();
    const turmas = await prisma.turma.findMany();
    const disciplinas = await prisma.disciplina.findMany();
    console.log("4. Dados carregados. Mapeando grade...");

    // Traduz os IDs para os Nomes legíveis usando a grade do resultado
    const melhorGradeTraduzida = resultado.grade.aulas.map((aula: any) => ({
      dia: aula.dia,
      turno: aula.turno,
      disciplina: disciplinas.find((d: any) => d.id === aula.disciplinaId)?.nome || 'Desconhecida',
      professor: professores.find((p: any) => p.id === aula.professorId)?.nome || 'Desconhecido',
      turma: turmas.find((t: any) => t.id === aula.turmaId)?.nome || 'Desconhecida'
    }));

    // Envia tudo para o Frontend (incluindo os logs!)
    res.json({ 
      success: true, 
      nota: resultado.nota, 
      aulas: melhorGradeTraduzida,
      logs: resultado.logs 
    });

  } catch (error) {
    console.error("!!! ERRO CRÍTICO NO BACKEND !!!", error);
    res.status(500).json({ error: "Erro no servidor. Verifique o terminal." });
  }
});

export default router;