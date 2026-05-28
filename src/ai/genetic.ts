// src/ai/genetic.ts
import { PrismaClient } from '@prisma/client';
import { calcularFitness, Grade, Aula, gerarRelatorioGrade } from './fitness';

const prisma = new PrismaClient();

const DIAS = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'] as const;
const TURNOS = ['M1', 'M2', 'M3', 'M4', 'T1', 'T2', 'T3', 'T4', 'N1', 'N2', 'N3', 'N4'];

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
  
  // Taxa de Mutação: agressiva o suficiente para gerar variações na base dos 80%
  const qtdMutacoes = randomInt(10) + 2; 
  
  for (let i = 0; i < qtdMutacoes; i++) {
    const indiceAleatorio = randomInt(novaGrade.aulas.length);
    novaGrade.aulas[indiceAleatorio].dia = DIAS[randomInt(DIAS.length)];
    novaGrade.aulas[indiceAleatorio].turno = TURNOS[randomInt(TURNOS.length)];
  }

  return novaGrade;
}

export async function rodarAlgoritmoGerador(onProgress?: (geracao: number, total: number, nota: number) => void) {
  console.log("🚀 Puxando dados do banco...");
  const professores = await prisma.professor.findMany();
  const disciplinas = await prisma.disciplina.findMany();
  
  // NOVA LINHA: Puxando as turmas para aplicar as regras de bloqueio de turno
  const turmas = await prisma.turma.findMany(); 

  const TAMANHO_POPULACAO = 200;
  const NUM_GERACOES = 5000; 
  const NUM_IMIGRANTES = 5; 

  let populacao: { grade: Grade, nota: number }[] = [];

  // Geração Zero
  for (let i = 0; i < TAMANHO_POPULACAO; i++) {
    const grade = gerarGradeAleatoria(disciplinas);
    // Passando 'turmas' para o calcularFitness
    populacao.push({ grade, nota: calcularFitness(grade, professores, turmas) });
  }

  console.log("🧬 Iniciando a Evolução Genética (Estratégia 20/80)...");

  for (let geracao = 0; geracao < NUM_GERACOES; geracao++) {
    // Ordena do melhor para o pior
    populacao.sort((a, b) => b.nota - a.nota);

    if (onProgress && geracao % 20 === 0) {
      onProgress(geracao, NUM_GERACOES, populacao[0].nota);
    }

    // 1. ELITISMO DE 20%: Calcula quantos indivíduos representam o topo
    const VINTE_PORCENTO = Math.floor(TAMANHO_POPULACAO * 0.20); 

    // Guarda os 20% melhores intactos (sem mutação)
    const novaPopulacao = populacao.slice(0, VINTE_PORCENTO);

    // 2. MUTAÇÃO NOS 80%: Preenche o resto da população
    while (novaPopulacao.length < TAMANHO_POPULACAO) {
      // Sorteia um "pai" APENAS de dentro do grupo seleto dos 20% melhores
      const pai = populacao[randomInt(VINTE_PORCENTO)].grade; 
      
      // Gera o filho aplicando mutação no pai da elite
      const filho = mutarGrade(pai); 
      
      // Avalia a nota do filho e coloca na nova população (Passando 'turmas')
      novaPopulacao.push({ grade: filho, nota: calcularFitness(filho, professores, turmas) });
    }

    // 3. IMIGRANTES: Substitui os últimos da lista (os piores) por grades totalmente novas
    for(let i = 0; i < NUM_IMIGRANTES; i++) {
        const gradeNova = gerarGradeAleatoria(disciplinas);
        // Passando 'turmas' aqui também
        novaPopulacao[novaPopulacao.length - 1 - i] = { grade: gradeNova, nota: calcularFitness(gradeNova, professores, turmas) };
    }

    populacao = novaPopulacao;

    if (geracao % 500 === 0 || geracao === NUM_GERACOES - 1) {
      console.log(`Geração ${geracao}: Melhor nota = ${populacao[0].nota}`);
    }
  }

  // Ordenação final para garantir que o campeão está no topo
  populacao.sort((a, b) => b.nota - a.nota);
  const melhorGrade = populacao[0].grade;

  // Roda o raio-X apenas no campeão (Passando 'turmas' para o relatório)
  const relatorio = gerarRelatorioGrade(melhorGrade, professores, turmas);

  console.log(`✅ Evolução concluída! Nota final: ${relatorio.nota}`);
  
  // Retorna a melhor grade e os logs para a API
  return {
    grade: melhorGrade,
    nota: relatorio.nota,
    logs: relatorio.logs
  };
}