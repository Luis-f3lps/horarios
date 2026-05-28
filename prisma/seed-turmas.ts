import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const cursosTecnicos = [
  "Agroindústria", "Agropecuária", "Informática", 
  "Química", "Meio Ambiente"
];

const cursosGraduacao = [
  "Engenharia de Alimentos", "Engenharia Florestal", "Sistemas de Informação", 
  "Medicina Veterinária", "Ciências Biológicas", "Física", 
  "Matemática", "Química", "Pedagogia"
];

async function main() {
  console.log("⏳ Iniciando a geração automática de turmas...");

  const turmasParaInserir: { nome: string }[] = [];

  for (const curso of cursosTecnicos) {
    for (const ano of [1, 2, 3]) {
      for (const letra of ['A', 'B']) {
        turmasParaInserir.push({ nome: `${ano}º Ano ${letra} - Técnico em ${curso}` });
      }
    }
  }

  const semestresImpares = [1, 3, 5, 7];
  const semestresPares = [2, 4, 6, 8];
  
  const todosSemestres = [...semestresImpares, ...semestresPares];

  for (const curso of cursosGraduacao) {
    for (const periodo of todosSemestres) {
      turmasParaInserir.push({ nome: `${curso} - ${periodo}º Período` });
    }
  }


  await prisma.turma.createMany({
    data: turmasParaInserir,
    skipDuplicates: true
  });

  console.log(`✅ Sucesso! Foram geradas e salvas ${turmasParaInserir.length} turmas diferentes no banco de dados.`);
}

main()
  .catch((e) => {
    console.error("❌ Erro ao gerar turmas:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });