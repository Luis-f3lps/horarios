// src/ai/mutations.ts
import { Grade } from './fitness';

const DIAS = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'] as const;

// Atualizado para os 12 horários da realidade do IFNMG
const TURNOS = ['M1', 'M2', 'M3', 'M4', 'T1', 'T2', 'T3', 'T4', 'N1', 'N2', 'N3', 'N4'];

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function mutarGrade(gradeOriginal: Grade): Grade {
  const novaGrade = JSON.parse(JSON.stringify(gradeOriginal)) as Grade;
  
  // Taxa de Mutação Agressiva (Para alimentar os 80% do Exército de Clones)
  const qtdMutacoes = randomInt(10) + 2; 
  
  for (let i = 0; i < qtdMutacoes; i++) {
    const indiceAleatorio = randomInt(novaGrade.aulas.length);
    novaGrade.aulas[indiceAleatorio].dia = DIAS[randomInt(DIAS.length)];
    novaGrade.aulas[indiceAleatorio].turno = TURNOS[randomInt(TURNOS.length)];
  }

  return novaGrade;
}