import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const listaProfessores = [
  "Adailton", "Adélia", "Admilson", "Aldemi", "Aldo Gomes", "Alessandro", "Alexandre", "Alex Sander",
  "Aline", "Alison Zille", "Ana Clara", "André Canela", "Andreia", "Antônio", "Arilson", "Arthur",
  "Ataliba", "Bárbara", "Bergston", "Bruna Porto", "Bruno", "Caio", "Cani", "Carla", "Carlos Magno",
  "Charles", "Cláudia", "Clayton", "Cristiane", "Daiane", "Daniela", "Danielle", "Débora", "Diego Carvalho",
  "Edilene", "Edilson", "Edna", "Eduardo Garrido", "Eilson Santiago", "Élcio", "Érica", "Erik", "Evelyn",
  "Fabiano", "Fabiene", "Fabrício", "Felipe Cimino", "Felipe Ferres", "Fernanda", "Fernando Matos", "Filipe",
  "Frederico", "Geilson", "Gera Jr.", "Gera Magela", "Gerson", "Geycy", "Giuliana", "Guilherme Carvalho",
  "Guilherme Mendes", "Higor", "Hugo", "Isis", "Jaciely", "Jairo", "Jamerson Jardel", "Jamerson Rezende",
  "Jane Bruna", "Jean", "Jerusa", "Jéssica", "Josy", "Juliana Diniz", "Juliana Zara", "Júlio", "Karoline",
  "Kélcio", "Kelly", "Laio", "Lays", "Leonardo Coelho", "Leonardo Humberto", "Leonardo Martins", "Leonardo Vieira",
  "Lilian", "Lívia", "Luana", "Lucas Diego", "Lucas Fernando", "Luciano", "Luiz Fernando", "Magalhães",
  "Magnovaldo", "Marcelo Rossi", "Márcia Antunes", "Márcia Martins", "Marco Aurélio", "Marcos Alves",
  "Marcos de Oliveira", "Maria Eva", "Maria Madalena", "Marília", "Marinalva", "Mário", "Mayara", "Michellia",
  "Nilmar", "Nilsa", "Patrícia Alves", "Patrícia Lucas", "Patrícia Ramires", "Paulo Eduardo", "Paulo Fernando",
  "Paulo Henrique", "Penha", "Rafael", "Ramon", "Rayrinne", "Renata", "Ricardo", "Roberta", "Roberto",
  "Rodrigo", "Romana", "Ronaldo", "Rosana", "Rosi", "Sebastião", "Sérgio", "Sileimar", "Silvinha", "Stanley",
  "Tatianne", "Thaís Larissa", "Thaís Rios", "Tiago Caminha", "Vailton", "Valéria", "Vanessa Paulino",
  "Vinícius", "Vinícius Figueiredo", "Viviane", "Wagner", "Walter", "Wesley", "Willian Andrade",
  "Willian Fernandes", "Yago", "Yara", "Zélia"
];

async function main() {
  console.log("⏳ Iniciando a inserção dos professores...");


  const disponibilidadePadrao = {
    "segunda": ["M1", "M2", "T1", "T2"],
    "terca":   ["M1", "M2", "T1", "T2"],
    "quarta":  ["M1", "M2", "T1", "T2"],
    "quinta":  ["M1", "M2", "T1", "T2"],
    "sexta":   ["M1", "M2", "T1", "T2"]
  };

  const dadosParaInserir = listaProfessores.map(nome => ({
    nome: nome,
    diasDisponiveis: disponibilidadePadrao
  }));

  await prisma.professor.createMany({
    data: dadosParaInserir,
    skipDuplicates: true
  });

  console.log(`✅ ${listaProfessores.length} professores foram adicionados com sucesso ao banco!`);
}

main()
  .catch((e) => {
    console.error("❌ Erro ao inserir professores:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });