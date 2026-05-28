import { PrismaClient } from '@prisma/client';
import { calcularFitness, Grade, Aula } from './fitness';
import { mutarGrade } from './mutations';

const prisma = new PrismaClient();

const DIAS = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'] as const;
const TURNOS = ['M1', 'M2', 'T1', 'T2']; 

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

// ESTA FUNÇÃO AGORA É PURA E RÁPIDA (Não acessa banco de dados!)
function gerarGradeAleatoria(disciplinas: any[]): Grade {
  console.log(`Debug: Gerando grade aleatória com ${disciplinas.length} disciplinas.`);
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

export async function rodarAlgoritmoGerador(
  setor: 'tecnico' | 'graduacao', 
  onProgress?: (geracao: number, total: number, melhorNota: number) => void
) {
  console.log(`🚀 Buscando dados do setor: ${setor}...`);
  
  // A busca deve acontecer APENAS AQUI, uma única vez
const disciplinas = await prisma.disciplina.findMany(); // Busca TUDO sem filtro
console.log(`DEBUG TOTAL: Foram encontradas ${disciplinas.length} disciplinas no banco total.`);
 const professores = await prisma.professor.findMany();
  const turmas = await prisma.turma.findMany();
  const aulasCongeladas = await prisma.aulaSalva.findMany();

  console.log(`✅ Disciplinas encontradas: ${disciplinas.length}`);
  console.log(`✅ Professores encontrados: ${professores.length}`);

  const TAMANHO_POPULACAO = 200;
  const NUM_GERACOES = 5000;
  let populacao: { grade: Grade, nota: number }[] = [];

  // Cria a população inicial
  for (let i = 0; i < TAMANHO_POPULACAO; i++) {
    const grade = gerarGradeAleatoria(disciplinas);
    populacao.push({ grade, nota: calcularFitness(grade, professores, turmas, disciplinas, aulasCongeladas) });
  }

  console.log("🧬 Iniciando a Evolução Genética...");

  for (let geracao = 0; geracao < NUM_GERACOES; geracao++) {
    populacao.sort((a, b) => b.nota - a.nota);

    if (geracao % 100 === 0) {
      console.log(`⏳ Gerando... Geração ${geracao}. Melhor nota atual: ${populacao[0].nota}`);
    }

    if (geracao % 50 === 0 && onProgress) {
      onProgress(geracao, NUM_GERACOES, populacao[0].nota);
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    const novaPopulacao = populacao.slice(0, 5); // Mantém os 5 melhores

    while (novaPopulacao.length < TAMANHO_POPULACAO) {
      const pai = populacao[randomInt(5)].grade; 
      const filho = mutarGrade(pai); 
      novaPopulacao.push({ 
        grade: filho, 
        nota: calcularFitness(filho, professores, turmas, disciplinas, aulasCongeladas) 
      });
    }

    populacao = novaPopulacao;
  }

  populacao.sort((a, b) => b.nota - a.nota);
  return populacao.slice(0, 3);
}