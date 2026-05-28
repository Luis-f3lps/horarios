// src/ai/genetic.ts
import { PrismaClient } from '@prisma/client';
import { calcularFitness, Grade, Aula } from './fitness';

const prisma = new PrismaClient();

const DIAS = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'] as const;
const TURNOS = ['M1', 'M2', 'T1', 'T2']; 

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function gerarGradeAleatoria(disciplinas: any[]): Grade {
  const aulas: Aula[] = [];
  for (const disc of disciplinas) {
    aulas.push({
      disciplinaId: disc.id,
      professorId: disc.professorId,
      turmaId: disc.turmaId,
      dia: DIAS[randomInt(DIAS.length)],
      turno: TURNOS[randomInt(TURNOS.length)]
    });
  }
  return { aulas };
}

function mutarGrade(gradeOriginal: Grade): Grade {
  const novaGrade = JSON.parse(JSON.stringify(gradeOriginal)) as Grade;
  
  const qtdMutacoes = randomInt(5) + 1;
  
  for (let i = 0; i < qtdMutacoes; i++) {
    const indiceAleatorio = randomInt(novaGrade.aulas.length);
    novaGrade.aulas[indiceAleatorio].dia = DIAS[randomInt(DIAS.length)];
    novaGrade.aulas[indiceAleatorio].turno = TURNOS[randomInt(TURNOS.length)];
  }

  return novaGrade;
}

export async function rodarAlgoritmoGerador() {
  console.log("🚀 Puxando dados do banco...");
  const professores = await prisma.professor.findMany();
  const disciplinas = await prisma.disciplina.findMany();

  const TAMANHO_POPULACAO = 200;
  const NUM_GERACOES = 3000; 
  let populacao: { grade: Grade, nota: number }[] = [];

  for (let i = 0; i < TAMANHO_POPULACAO; i++) {
    const grade = gerarGradeAleatoria(disciplinas);
    populacao.push({ grade, nota: calcularFitness(grade, professores) });
  }

  console.log("🧬 Iniciando a Evolução Genética...");

  for (let geracao = 0; geracao < NUM_GERACOES; geracao++) {
    populacao.sort((a, b) => b.nota - a.nota);

    const novaPopulacao = populacao.slice(0, 5);

    while (novaPopulacao.length < TAMANHO_POPULACAO) {
      const pai = populacao[randomInt(5)].grade; 
      
      const filho = mutarGrade(pai); 
      
      novaPopulacao.push({ grade: filho, nota: calcularFitness(filho, professores) });
    }

    populacao = novaPopulacao;

    if (geracao % 50 === 0 || geracao === NUM_GERACOES - 1) {
      console.log(`Geração ${geracao}: Melhor nota = ${populacao[0].nota}`);
    }
  }

  populacao.sort((a, b) => b.nota - a.nota);
  const top3 = populacao.slice(0, 3);

  console.log("✅ Evolução concluída!");
  return top3;
}
