// src/ai/genetic.ts
import { PrismaClient } from '@prisma/client';
import { calcularFitness, Grade, Aula, gerarRelatorioGrade } from './fitness';
import { mutarGrade, cruzarGrades } from './mutations'; 

const prisma = new PrismaClient();

const DIAS = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'] as const;
// 👉 ADICIONADO OS TURNOS 5
const TURNOS = ['M1', 'M2', 'M3', 'M4', 'M5', 'T1', 'T2', 'T3', 'T4', 'T5', 'N1', 'N2', 'N3', 'N4', 'N5'];

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function gerarGradeAleatoria(disciplinas: any[]): Grade {
  const aulas: Aula[] = [];
  for (const disc of disciplinas) {
    const totalAulasNaSemana = disc.cargaHoraria || 4; 
    for (let i = 0; i < totalAulasNaSemana; i++) {
      aulas.push({
        disciplinaId: disc.id,
        professorId: disc.professorId,
        turmaId: disc.turmaId,
        dia: DIAS[randomInt(DIAS.length)],
        turno: TURNOS[randomInt(TURNOS.length)]
      });
    }
  }
  return { aulas };
}

export async function rodarAlgoritmoGerador(onProgress?: (geracao: number, total: number, nota: number) => void) {
  console.log("🚀 Puxando dados do banco...");
  const professores = await prisma.professor.findMany();
  const disciplinas = await prisma.disciplina.findMany();
  const turmas = await prisma.turma.findMany(); 

  const mapaProfs = new Map(professores.map(p => [p.id, p]));
  const mapaTurmas = new Map(turmas.map(t => [t.id, t]));

  const TAMANHO_POPULACAO = 200;
  const NUM_GERACOES = 5000; 
  const NUM_IMIGRANTES = 5; 

  let populacao: { grade: Grade, nota: number }[] = [];

  for (let i = 0; i < TAMANHO_POPULACAO; i++) {
    const grade = gerarGradeAleatoria(disciplinas);
    populacao.push({ grade, nota: calcularFitness(grade, mapaProfs, mapaTurmas) }); 
  }

  console.log("🧬 Iniciando a Evolução Genética Completa (Crossover + Mutação)...");

  for (let geracao = 0; geracao < NUM_GERACOES; geracao++) {
    populacao.sort((a, b) => b.nota - a.nota);

    if (onProgress && geracao % 20 === 0) {
      onProgress(geracao, NUM_GERACOES, populacao[0].nota);
    }

    const VINTE_PORCENTO = Math.floor(TAMANHO_POPULACAO * 0.20); 
    const novaPopulacao = populacao.slice(0, VINTE_PORCENTO);

    while (novaPopulacao.length < TAMANHO_POPULACAO) {
      const paiA = populacao[randomInt(VINTE_PORCENTO)].grade; 
      const paiB = populacao[randomInt(VINTE_PORCENTO)].grade; 
      let filho = cruzarGrades(paiA, paiB); 
      filho = mutarGrade(filho); 
      novaPopulacao.push({ grade: filho, nota: calcularFitness(filho, mapaProfs, mapaTurmas) });
    }

    for(let i = 0; i < NUM_IMIGRANTES; i++) {
        const gradeNova = gerarGradeAleatoria(disciplinas);
        novaPopulacao[novaPopulacao.length - 1 - i] = { grade: gradeNova, nota: calcularFitness(gradeNova, mapaProfs, mapaTurmas) };
    }

    populacao = novaPopulacao;

    if (geracao % 500 === 0 || geracao === NUM_GERACOES - 1) {
      console.log(`Geração ${geracao}: Melhor nota = ${populacao[0].nota}`);
    }
  }

  populacao.sort((a, b) => b.nota - a.nota);
  const melhorGrade = populacao[0].grade;

  const relatorio = gerarRelatorioGrade(melhorGrade, mapaProfs, mapaTurmas);
  console.log(`✅ Evolução concluída! Nota final: ${relatorio.nota}`);
  
  return {
    grade: melhorGrade,
    nota: relatorio.nota,
    logs: relatorio.logs
  };
}