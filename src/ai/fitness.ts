// src/ai/fitness.ts

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

// ============================================================================
// 1. FUNÇÃO DE CÁLCULO (Usada milhares de vezes durante a evolução)
// ============================================================================
export function calcularFitness(grade: Grade, professores: any[], turmas: any[]): number {
  let nota = 10000; 
  
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

    // --- 2. DISPONIBILIDADE DO PROFESSOR ---
    const professor = professores.find((p) => p.id === aula.professorId);
    if (professor && professor.diasDisponiveis) {
      const turnosLivresNesseDia = professor.diasDisponiveis[aula.dia] || [];
      if (!turnosLivresNesseDia.includes(aula.turno)) {
        nota -= 50000; 
      }
    }

    // --- 3. CARGA HORÁRIA LIMITADA ---
    const cargaAtual = (cargaHorariaProf.get(aula.professorId) || 0) + 1;
    cargaHorariaProf.set(aula.professorId, cargaAtual);
    if (cargaAtual > 8) nota -= 50000;

    // --- 4. AULAS GEMINADAS (Agora com 12 horários) ---
    let turnoPar = '';
    if (aula.turno === 'M1') turnoPar = 'M2';
    else if (aula.turno === 'M2') turnoPar = 'M1';
    else if (aula.turno === 'M3') turnoPar = 'M4';
    else if (aula.turno === 'M4') turnoPar = 'M3';
    else if (aula.turno === 'T1') turnoPar = 'T2';
    else if (aula.turno === 'T2') turnoPar = 'T1';
    else if (aula.turno === 'T3') turnoPar = 'T4';
    else if (aula.turno === 'T4') turnoPar = 'T3';
    else if (aula.turno === 'N1') turnoPar = 'N2';
    else if (aula.turno === 'N2') turnoPar = 'N1';
    else if (aula.turno === 'N3') turnoPar = 'N4';
    else if (aula.turno === 'N4') turnoPar = 'N3';
    
    if (turnoPar) {
      const temPar = grade.aulas.find(a => 
        a.professorId === aula.professorId && 
        a.turmaId === aula.turmaId && 
        a.dia === aula.dia && 
        a.turno === turnoPar
      );
      if (!temPar) nota -= 200; 
    }

    // --- 5. CONCENTRAÇÃO DE TURNO (M, T ou N) ---
    const chaveProfDia = `${aula.professorId}-${aula.dia}`;
    const turnoAtual = aula.turno.charAt(0); // Pega apenas a primeira letra (M, T ou N)
    
    const turnoAnterior = aulasPorProfDia.get(chaveProfDia);
    if (turnoAnterior && turnoAnterior !== turnoAtual) {
      nota -= 1000; 
    }
    aulasPorProfDia.set(chaveProfDia, turnoAtual);

    // --- 6. BLOQUEIO DE TURNO POR CURSO ---
    const turma = turmas.find(t => t.id === aula.turmaId);
    if (turma && turma.nome) {
      const nomeTurma = turma.nome.toLowerCase();
      const ehTecnico = nomeTurma.includes('técnico') || nomeTurma.includes('tecnico');
      const ehSistemas = nomeTurma.includes('sistemas de informação') || nomeTurma.includes('sistemas de informacao');

      if (ehTecnico && aula.turno.startsWith('N')) nota -= 100000;
      if (ehSistemas && aula.turno.startsWith('M')) nota -= 100000;
    }
  }

  return nota;
}

// ============================================================================
// 2. FUNÇÃO DE RELATÓRIO (Roda apenas uma vez no campeão para gerar os textos)
// ============================================================================
export function gerarRelatorioGrade(grade: Grade, professores: any[], turmas: any[]): { nota: number, logs: string[] } {
  let nota = 10000; 
  const logs: string[] = [];
  
  const ocupacaoProfessores = new Set<string>();
  const ocupacaoTurmas = new Set<string>();
  const cargaHorariaProf = new Map<number, number>();
  const aulasPorProfDia = new Map<string, string>();

  for (const aula of grade.aulas) {
    const chaveProf = `${aula.dia}-${aula.turno}-${aula.professorId}`;
    const chaveTurma = `${aula.dia}-${aula.turno}-${aula.turmaId}`;

    if (ocupacaoProfessores.has(chaveProf)) {
      nota -= 100000;
      logs.push(`🚨 FATAL: Prof ${aula.professorId} está em duas salas na ${aula.dia} (${aula.turno}).`);
    }
    
    if (ocupacaoTurmas.has(chaveTurma)) {
      nota -= 100000;
      logs.push(`🚨 FATAL: Turma ${aula.turmaId} tem duas aulas diferentes na ${aula.dia} (${aula.turno}).`);
    }

    ocupacaoProfessores.add(chaveProf);
    ocupacaoTurmas.add(chaveTurma);

    const professor = professores.find((p) => p.id === aula.professorId);
    if (professor && professor.diasDisponiveis) {
      const turnosLivresNesseDia = professor.diasDisponiveis[aula.dia] || [];
      if (!turnosLivresNesseDia.includes(aula.turno)) {
        nota -= 50000; 
        logs.push(`⚠️ DISPONIBILIDADE: Prof ${aula.professorId} não pode dar aula na ${aula.dia} (${aula.turno}).`);
      }
    }

    const cargaAtual = (cargaHorariaProf.get(aula.professorId) || 0) + 1;
    cargaHorariaProf.set(aula.professorId, cargaAtual);
    if (cargaAtual > 8) {
      nota -= 50000;
      logs.push(`⚠️ SOBRECARGA: Prof ${aula.professorId} ultrapassou 8 aulas/semana.`);
    }

    let turnoPar = '';
    if (aula.turno === 'M1') turnoPar = 'M2';
    else if (aula.turno === 'M2') turnoPar = 'M1';
    else if (aula.turno === 'M3') turnoPar = 'M4';
    else if (aula.turno === 'M4') turnoPar = 'M3';
    else if (aula.turno === 'T1') turnoPar = 'T2';
    else if (aula.turno === 'T2') turnoPar = 'T1';
    else if (aula.turno === 'T3') turnoPar = 'T4';
    else if (aula.turno === 'T4') turnoPar = 'T3';
    else if (aula.turno === 'N1') turnoPar = 'N2';
    else if (aula.turno === 'N2') turnoPar = 'N1';
    else if (aula.turno === 'N3') turnoPar = 'N4';
    else if (aula.turno === 'N4') turnoPar = 'N3';

    if (turnoPar) {
      const temPar = grade.aulas.find(a => a.professorId === aula.professorId && a.turmaId === aula.turmaId && a.dia === aula.dia && a.turno === turnoPar);
      if (!temPar) {
        nota -= 200;
        logs.push(`ℹ️ CONFORTO: Aula do Prof ${aula.professorId} na Turma ${aula.turmaId} (${aula.dia} ${aula.turno}) ficou solta (sem par).`);
      }
    }

    const chaveProfDia = `${aula.professorId}-${aula.dia}`;
    const turnoAtual = aula.turno.charAt(0); 
    const turnoAnterior = aulasPorProfDia.get(chaveProfDia);
    
    if (turnoAnterior && turnoAnterior !== turnoAtual) {
      nota -= 1000; 
      logs.push(`ℹ️ CONFORTO: Prof ${aula.professorId} está dando aula em mais de um turno (M/T/N) na ${aula.dia}.`);
    }
    aulasPorProfDia.set(chaveProfDia, turnoAtual);

    const turma = turmas.find(t => t.id === aula.turmaId);
    if (turma && turma.nome) {
      const nomeTurma = turma.nome.toLowerCase();
      const ehTecnico = nomeTurma.includes('técnico') || nomeTurma.includes('tecnico');
      const ehSistemas = nomeTurma.includes('sistemas de informação') || nomeTurma.includes('sistemas de informacao');

      if (ehTecnico && aula.turno.startsWith('N')) {
        nota -= 100000;
        logs.push(`🚨 FATAL: Turma Técnica (${turma.nome}) alocada à noite (${aula.dia} ${aula.turno}).`);
      }

      if (ehSistemas && aula.turno.startsWith('M')) {
        nota -= 100000;
        logs.push(`🚨 FATAL: Sistemas de Informação (${turma.nome}) alocado de manhã (${aula.dia} ${aula.turno}).`);
      }
    }
  }

  return { nota, logs };
}