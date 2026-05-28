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
  
  // Estruturas de controle para as regras
  const ocupacaoProfessores = new Set<string>();
  const ocupacaoTurmas = new Set<string>();
  const cargaHorariaProf = new Map<number, number>();
const aulasPorProfDia = new Map<string, string>();

  for (const aula of grade.aulas) {
    // --- 1. CONFLITOS DE HORÁRIO ---
    const chaveProf = `${aula.dia}-${aula.turno}-${aula.professorId}`;
    const chaveTurma = `${aula.dia}-${aula.turno}-${aula.turmaId}`;

    if (ocupacaoProfessores.has(chaveProf)) nota -= 100000;
    if (ocupacaoTurmas.has(chaveTurma)) nota -= 100000;

    ocupacaoProfessores.add(chaveProf);
    ocupacaoTurmas.add(chaveTurma);

    // --- 2. DISPONIBILIDADE DO PROFESSOR (JSON) ---
    const professor = professores.find((p) => p.id === aula.professorId);
    if (professor && professor.diasDisponiveis) {
      const turnosLivresNesseDia = professor.diasDisponiveis[aula.dia] || [];
      if (!turnosLivresNesseDia.includes(aula.turno)) {
        nota -= 50000; 
      }
    }

    // --- 3. CARGA HORÁRIA (Limite de 8 aulas/semana por prof) ---
    const cargaAtual = (cargaHorariaProf.get(aula.professorId) || 0) + 1;
    cargaHorariaProf.set(aula.professorId, cargaAtual);
    if (cargaAtual > 8) nota -= 50000;

    // --- 4. AULAS GEMINADAS (Fidelidade ao turno) ---
    // Ex: Se tem M1, deve ter M2. Se tem T1, deve ter T2.
    const turnoPar = aula.turno === 'M1' ? 'M2' : aula.turno === 'M2' ? 'M1' : 
                     aula.turno === 'T1' ? 'T2' : aula.turno === 'T2' ? 'T1' : '';
    
    if (turnoPar) {
      const temPar = grade.aulas.find(a => 
        a.professorId === aula.professorId && 
        a.turmaId === aula.turmaId && 
        a.dia === aula.dia && 
        a.turno === turnoPar
      );
      if (!temPar) nota -= 200; // Penalidade leve se a aula não for dobrada
    }

    // --- 5. CONCENTRAÇÃO DE TURNO (Evitar Manhã e Tarde no mesmo dia) ---
    const chaveProfDia = `${aula.professorId}-${aula.dia}`;
    const turnoAtual = aula.turno.startsWith('M') ? 'M' : 'T';
    
    // Verifica se já existe um turno diferente para este professor neste dia
    const turnoAnterior = aulasPorProfDia.get(chaveProfDia);
    if (turnoAnterior && turnoAnterior !== turnoAtual) {
      nota -= 1000; // Penalidade por dar aula em turnos opostos no mesmo dia
    }
    aulasPorProfDia.set(chaveProfDia, turnoAtual);
  }

  return nota;
}