import { Grade } from './fitness';

const DIAS = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'] as const;
const TURNOS = ['M1', 'M2', 'T1', 'T2'];

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function mutarGrade(gradeOriginal: Grade): Grade {
  const novaGrade = JSON.parse(JSON.stringify(gradeOriginal)) as Grade;
  const tipoMutacao = Math.random();

  if (tipoMutacao > 0.3) {
    const idx1 = randomInt(novaGrade.aulas.length);
    const idx2 = randomInt(novaGrade.aulas.length);

    const diaTemp = novaGrade.aulas[idx1].dia;
    const turnoTemp = novaGrade.aulas[idx1].turno;

    novaGrade.aulas[idx1].dia = novaGrade.aulas[idx2].dia;
    novaGrade.aulas[idx1].turno = novaGrade.aulas[idx2].turno;

    novaGrade.aulas[idx2].dia = diaTemp;
    novaGrade.aulas[idx2].turno = turnoTemp;
  } else {
    const qtdMutacoes = randomInt(3) + 1;
    for (let i = 0; i < qtdMutacoes; i++) {
      const indiceAleatorio = randomInt(novaGrade.aulas.length);
      novaGrade.aulas[indiceAleatorio].dia = DIAS[randomInt(DIAS.length)];
      novaGrade.aulas[indiceAleatorio].turno = TURNOS[randomInt(TURNOS.length)];
    }
  }

  return novaGrade;
}