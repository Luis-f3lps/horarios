
export interface Aula {
  professorId: number;
  turmaId: number;
  disciplinaId: number;
  dia: 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta';
  turno: string; 
}

export interface Grade {
  aulas: Aula[];
}

export function calcularFitness(grade: Grade, professores: any[]): number {
  let nota = 10000; 
  
  const ocupacaoProfessores = new Set<string>();
  const ocupacaoTurmas = new Set<string>();

  for (const aula of grade.aulas) {
    const chaveProf = `${aula.dia}-${aula.turno}-${aula.professorId}`;
    const chaveTurma = `${aula.dia}-${aula.turno}-${aula.turmaId}`;

    if (ocupacaoProfessores.has(chaveProf)) {
      nota -= 100000; 
    }
    if (ocupacaoTurmas.has(chaveTurma)) {
      nota -= 100000; 
    }

    ocupacaoProfessores.add(chaveProf);
    ocupacaoTurmas.add(chaveTurma);

    const professor = professores.find((p) => p.id === aula.professorId);
    
    if (professor && professor.diasDisponiveis) {
      const turnosLivresNesseDia = professor.diasDisponiveis[aula.dia] || [];
      
      if (!turnosLivresNesseDia.includes(aula.turno)) {
        nota -= 50000; 
      }
    }

  }

  return nota;
}