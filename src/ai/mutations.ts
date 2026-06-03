// src/ai/mutations.ts
import { Grade } from './fitness';

const DIAS = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'] as const;
const TURNOS = ['M1', 'M2', 'M3', 'M4', 'T1', 'T2', 'T3', 'T4', 'N1', 'N2', 'N3', 'N4'];

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

// 👉 NOVA FUNÇÃO: Cruzamento Genético (Cara-ou-Coroa)
export function cruzarGrades(paiA: Grade, paiB: Grade): Grade {
  const filho: Grade = { aulas: [] };

  for (let i = 0; i < paiA.aulas.length; i++) {
    // 50% de chance de herdar a aula do Pai A, 50% do Pai B
    if (Math.random() < 0.5) {
      filho.aulas.push({ ...paiA.aulas[i] });
    } else {
      filho.aulas.push({ ...paiB.aulas[i] });
    }
  }

  return filho;
}

export function mutarGrade(gradeOriginal: Grade): Grade {
  const novaGrade: Grade = {
    aulas: gradeOriginal.aulas.map(aula => ({ ...aula }))
  };  
  
  const qtdMutacoes = randomInt(10) + 2; 
  
  for (let i = 0; i < qtdMutacoes; i++) {
    const indiceAleatorio = randomInt(novaGrade.aulas.length);
    novaGrade.aulas[indiceAleatorio].dia = DIAS[randomInt(DIAS.length)];
    novaGrade.aulas[indiceAleatorio].turno = TURNOS[randomInt(TURNOS.length)];
  }

  return novaGrade;
}