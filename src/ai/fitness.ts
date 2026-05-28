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

export function calcularFitness(
  grade: Grade, 
  professores: any[], 
  turmas: any[], 
  disciplinas: any[],
  aulasCongeladas: any[]
): number {
  let nota = 10000;

  const ocupacaoProfessores = new Set<string>();
  const ocupacaoTurmas = new Set<string>();
  const cargaHorariaProf = new Map<number, number>();
  
  const aulasPorProfDia = new Map<string, number>();
  const aulasPorDisciplinaTurma = new Map<string, number>();

  for (const aula of grade.aulas) {
    const prof = professores.find(p => p.id === aula.professorId);
    const disc = disciplinas.find(d => d.id === aula.disciplinaId);
    
    // --- REGRAS FATAIS (Punição Alta) ---

    // 1. Conflito com Setor Congelado
    const conflitoCongelado = aulasCongeladas.find(c => 
      c.dia === aula.dia && c.turno === aula.turno && c.professorId === aula.professorId
    );
    if (conflitoCongelado) nota -= 1000000;

    // 2. Colisão Professor e Turma na própria Grade
    const chaveProf = `${aula.dia}-${aula.turno}-${aula.professorId}`;
    const chaveTurma = `${aula.dia}-${aula.turno}-${aula.turmaId}`;
    if (ocupacaoProfessores.has(chaveProf) || ocupacaoTurmas.has(chaveTurma)) nota -= 100000;
    ocupacaoProfessores.add(chaveProf);
    ocupacaoTurmas.add(chaveTurma);

    // 3. Disciplina em Turma Inexistente
    if (disc && disc.turmasPermitidas && !disc.turmasPermitidas.includes(aula.turmaId)) {
      nota -= 100000;
    }

    // 4. Carga Horária Semanal
    const cargaAtual = (cargaHorariaProf.get(aula.professorId) || 0) + 1;
    cargaHorariaProf.set(aula.professorId, cargaAtual);
    if (cargaAtual > 6) nota -= 50000;
    if (cargaAtual > 8) nota -= 100000;

    // --- REGRAS DE CONFORTO (Punição Leve) ---

    // 5. Aula Geminada
    const turnoPar = aula.turno.endsWith('1') ? aula.turno.replace('1', '2') : aula.turno.replace('2', '1');
    const temPar = grade.aulas.find(a => a.professorId === aula.professorId && a.turmaId === aula.turmaId && a.dia === aula.dia && a.turno === turnoPar);
    if (!temPar) nota -= 200;

    // 6. Distribuição de Disciplinas (Máx 2 no dia)
    const chaveDist = `${aula.disciplinaId}-${aula.turmaId}-${aula.dia}`;
    const contagemDist = (aulasPorDisciplinaTurma.get(chaveDist) || 0) + 1;
    aulasPorDisciplinaTurma.set(chaveDist, contagemDist);
    if (contagemDist > 2) nota -= 500;

    // 7. Concentração por Turno (Evitar Manhã e Tarde no mesmo dia)
    const chaveProfDia = `${aula.professorId}-${aula.dia}`;
    const contagemProfDia = (aulasPorProfDia.get(chaveProfDia) || 0) + 1;
    aulasPorProfDia.set(chaveProfDia, contagemProfDia);
    
    if (aula.turno.startsWith('M') && grade.aulas.some(a => a.professorId === aula.professorId && a.dia === aula.dia && a.turno.startsWith('T'))) {
      nota -= 400;
    }
  }

  return nota;
}