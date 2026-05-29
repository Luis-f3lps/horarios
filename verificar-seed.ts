import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 1. Cole o seu objeto JSON completo aqui
const seedData = {"Agricultura Geral e Olericultura": [
    {
      "professor": "Cani",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Cani",
      "turma": "1º ANO B\nAgropecuária"
    }
  ],
  "Algoritmos e Estruturas de Dados I": [
    {
      "professor": "Alison Zille",
      "turma": "Info) - 1º PERÍODO\nSist. de Informação"
    }
  ],
  "Algoritmos e Estruturas de Dados III": [
    {
      "professor": "Patrícia Lucas",
      "turma": "Info) - 5º PERÍODO\nSist. de Informação"
    }
  ],
  "Algorítmos": [
    {
      "professor": "Alison Zille",
      "turma": "Info) - 1º ANO A\nInformática"
    },
    {
      "professor": "Alison Zille",
      "turma": "Info) - 1º ANO B\nInformática"
    }
  ],
  "Anatomia Veterinária I": [
    {
      "professor": "Walter",
      "turma": "1º PERÍODO\nMed. Veterinária"
    }
  ],
  "Anál. Sensorial": [
    {
      "professor": "Daniela",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Daniela",
      "turma": "3º ANO B\nAgroindústria"
    }
  ],
  "Anál. de Alim.": [
    {
      "professor": "Alexandre",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Alexandre",
      "turma": "3º ANO B\nAgroindústria"
    }
  ],
  "Anál. e Proj. de sist.": [
    {
      "professor": "Danielle",
      "turma": "Info)  - 2º ANO A\nInformática"
    },
    {
      "professor": "Danielle",
      "turma": "Info) - 2º ANO B\nInformática"
    }
  ],
  "Análise sensorial": [
    {
      "professor": "Bruna Porto",
      "turma": "7º PERÍODO\nEng. Alimentos"
    }
  ],
  "Arte": [
    {
      "professor": "Jamerson Rezende",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Jamerson Rezende",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Jamerson Rezende",
      "turma": "1º ANO B\nAgropecuária"
    }
  ],
  "Artes": [
    {
      "professor": "Jamerson Rezende",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Jamerson Rezende",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Jamerson Rezende",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Jamerson Rezende",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Jamerson Rezende",
      "turma": "1º ANO B\nInformática"
    }
  ],
  "Avicultura": [
    {
      "professor": "Fernando Matos",
      "turma": "5º PERÍODO\nMed. Veterinária"
    }
  ],
  "Banco de dados": [
    {
      "professor": "Danielle",
      "turma": "Info) - 2º ANO A\nInformática"
    },
    {
      "professor": "Danielle",
      "turma": "Info) - 2º ANO B\nInformática"
    },
    {
      "professor": "Patrícia Lucas",
      "turma": "Info) - 5º PERÍODO\nSist. de Informação"
    }
  ],
  "Bioengenharia": [
    {
      "professor": "Jean",
      "turma": "7º PERÍODO\nEng. Alimentos"
    }
  ],
  "Biologia": [
    {
      "professor": "Érica",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Lays",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Érica",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Érica",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Érica",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Érica",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Érica",
      "turma": "1º ANO B\nAgropecuária"
    },
    {
      "professor": "Érica",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Marinalva",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Sileimar",
      "turma": "2º ANO A\nAgropecuária"
    },
    {
      "professor": "Sileimar",
      "turma": "2º ANO A\nInformática"
    },
    {
      "professor": "Marinalva",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Sileimar",
      "turma": "2º ANO B\nAgropecuária"
    },
    {
      "professor": "Sileimar",
      "turma": "2º ANO B\nInformática"
    },
    {
      "professor": "Érica",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Marinalva",
      "turma": "3º ANO B\nAgroindústria"
    },
    {
      "professor": "Érica",
      "turma": "3º ANO B\nAgropecuária"
    }
  ],
  "Biologia Celular": [
    {
      "professor": "Lays",
      "turma": "1º PERÍODO\nEng. Florestal"
    },
    {
      "professor": "Marinalva",
      "turma": "1º PERÍODO\nLic. Biológicas"
    },
    {
      "professor": "Lays",
      "turma": "1º PERÍODO\nMed. Veterinária"
    }
  ],
  "Bioquímica": [
    {
      "professor": "Bruno",
      "turma": "1º PERÍODO\nMed. Veterinária"
    },
    {
      "professor": "Cristiane",
      "turma": "3º PERÍODO\nEng. Alimentos + Bioquímica (Cristiane) (3/11) - 3º PERÍODO\nEng. Florestal"
    },
    {
      "professor": "Cristiane",
      "turma": "3º PERÍODO\nEng. Alimentos + Bioquímica (Cristiane)(3/10) - 3º PERÍODO\nEng. Florestal"
    }
  ],
  "Bovinocultura": [
    {
      "professor": "Antônio",
      "turma": "5º PERÍODO\nMed. Veterinária"
    }
  ],
  "Ciência da Natureza": [
    {
      "professor": "Gera Magela",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Lays",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Gera Magela",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Lays",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Aline",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Clayton",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Isis",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Marinalva",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Aline",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Clayton",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Isis",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Marinalva",
      "turma": "2º ANO B\nAgroindústria"
    }
  ],
  "Ciência e Tecnologia de Produtos de Origem Vegetal": [
    {
      "professor": "Márcia Antunes",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Márcia Antunes",
      "turma": "1º ANO B\nAgroindústria"
    }
  ],
  "Ciência e Tecnologia de Produtos de Origem animal": [
    {
      "professor": "Ramon",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Ramon",
      "turma": "2º ANO B\nAgroindústria"
    }
  ],
  "Clín. Méd. Peq. Anim.": [
    {
      "professor": "Thaís Larissa",
      "turma": "7º PERÍODO\nMed. Veterinária"
    }
  ],
  "Clínica Médica de Grandes Animas I": [
    {
      "professor": "Leonardo Coelho",
      "turma": "7º PERÍODO\nMed. Veterinária"
    }
  ],
  "Construções Rurais e Ambiência": [
    {
      "professor": "Fabrício",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Fabrício",
      "turma": "3º ANO B\nAgropecuária"
    }
  ],
  "Cult. Perenes e Fruticultura": [
    {
      "professor": "Magalhães",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Magalhães",
      "turma": "3º ANO B\nAgropecuária"
    }
  ],
  "Culturas Anuais e Forragicultura": [
    {
      "professor": "Fabrício",
      "turma": "2º ANO A\nAgropecuária"
    },
    {
      "professor": "Fabrício",
      "turma": "2º ANO B\nAgropecuária"
    }
  ],
  "CÁCULO NUMÉRICO": [
    {
      "professor": "Viviane",
      "turma": "Info) - 5º PERÍODO\nLic. Matemática"
    }
  ],
  "CÁLCULO DIFERENCIAL E INTEGRAL I": [
    {
      "professor": "Eilson Santiago",
      "turma": "3º PERÍODO\nLic. Matemática"
    }
  ],
  "Cálculo I": [
    {
      "professor": "Nilmar",
      "turma": "1º PERÍODO\nEng. Florestal"
    }
  ],
  "Cálculo II": [
    {
      "professor": "Nilmar",
      "turma": "3º PERÍODO\nEng. Alimentos"
    }
  ],
  "Cálculo Numérico": [
    {
      "professor": "Sebastião",
      "turma": "Info) - 3º PERÍODO\nEng. Alimentos + Cálculo Numérico (Sebastião)(Lab. 1 - Info) - 3º PERÍODO\nSist. de Informação"
    },
    {
      "professor": "Sebastião",
      "turma": "Info) - 3º PERÍODO\nEng. Alimentos + Cálculo Numérico (Sebastião)(Lab. 3 - Info) - 3º PERÍODO\nSist. de Informação"
    }
  ],
  "Des. de sistema": [
    {
      "professor": "Leonardo Humberto",
      "turma": "Info) - 2º ANO A\nInformática"
    },
    {
      "professor": "Leonardo Humberto",
      "turma": "Info) - 2º ANO B\nInformática"
    }
  ],
  "Desenho Técnico": [
    {
      "professor": "Jane Bruna",
      "turma": "1º PERÍODO\nEng. Florestal"
    }
  ],
  "Desenvolv. Ext. Rural": [
    {
      "professor": "Magalhães",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Magalhães",
      "turma": "1º ANO B\nAgropecuária"
    }
  ],
  "Desenvolv. WEB": [
    {
      "professor": "Arthur",
      "turma": "Info) - 3º ANO A\nInformática"
    },
    {
      "professor": "Arthur",
      "turma": "Info) - 3º ANO B\nInformática"
    }
  ],
  "Desenvolvimento WEB I": [
    {
      "professor": "Arthur",
      "turma": "Info) - 3º PERÍODO\nSist. de Informação"
    }
  ],
  "Desenvolvimento de novos produtos": [
    {
      "professor": "Bruna Porto",
      "turma": "7º PERÍODO\nEng. Alimentos"
    }
  ],
  "Didática I": [
    {
      "professor": "Lilian",
      "turma": "3º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Didática II": [
    {
      "professor": "Laio",
      "turma": "5º PERÍODO\nLic. Biológicas + Didática II (Laio)\n (1/6) - 5º PERÍODO\nLic. Física + Didática II (Laio)\n (1/6) - 5º PERÍODO\nLic. Matemática + Didática II (Laio)\n (1/6) - 5º PERÍODO\nLic. Química"
    }
  ],
  "EQUAÇÕES DIFERENCIAIS ORDINÁRIAS": [
    {
      "professor": "Nilmar",
      "turma": "7º PERÍODO\nLic. Matemática"
    }
  ],
  "ESPAÇOS MÉTRICOS": [
    {
      "professor": "Frederico",
      "turma": "7º PERÍODO\nLic. Matemática"
    }
  ],
  "ESTÁGIO SUPERVISIONADO III": [
    {
      "professor": "Gerson",
      "turma": "7º PERÍODO\nLic. Matemática"
    }
  ],
  "Ecologia Florestal": [
    {
      "professor": "Marília",
      "turma": "3º PERÍODO\nEng. Florestal"
    }
  ],
  "Ecologia Geral": [
    {
      "professor": "Marília",
      "turma": "1º PERÍODO\nEng. Florestal"
    }
  ],
  "Ecologia de comunidades e ecossistemas": [
    {
      "professor": "Tatianne",
      "turma": "7º PERÍODO\nLic. Biológicas"
    }
  ],
  "Economia Florestal": [
    {
      "professor": "Alessandro",
      "turma": "7º PERÍODO\nEng. Florestal"
    }
  ],
  "Ed. Física": [
    {
      "professor": "Gera Jr.",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Gera Jr.",
      "turma": "2º ANO A\nAgropecuária"
    },
    {
      "professor": "Gera Jr.",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Gera Jr.",
      "turma": "2º ANO B\nAgropecuária"
    }
  ],
  "Edcuação, Sustentabilidade e Meio Ambiente": [
    {
      "professor": "Márcia Martins",
      "turma": "3º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Educação Física": [
    {
      "professor": "Jairo",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Jairo",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Jairo",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Jairo",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Jairo",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Jairo",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Jairo",
      "turma": "1º ANO B\nAgropecuária"
    },
    {
      "professor": "Jairo",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Gera Jr.",
      "turma": "2º ANO A\nInformática"
    },
    {
      "professor": "Gera Jr.",
      "turma": "2º ANO B\nInformática"
    },
    {
      "professor": "Fabiene",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Fabiene",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Fabiene",
      "turma": "3º ANO A\nInformática"
    },
    {
      "professor": "Fabiene",
      "turma": "3º ANO B\nAgroindústria"
    },
    {
      "professor": "Fabiene",
      "turma": "3º ANO B\nAgropecuária"
    },
    {
      "professor": "Fabiene",
      "turma": "3º ANO B\nInformática"
    }
  ],
  "Empreendedorismo": [
    {
      "professor": "Mário",
      "turma": "5º PERÍODO\nSist. de Informação"
    }
  ],
  "Energia da biomassa florestal": [
    {
      "professor": "Wagner",
      "turma": "9º PERÍODO\nEng. Florestal"
    }
  ],
  "Engenharia de Software I": [
    {
      "professor": "Danielle",
      "turma": "Info) - 3º PERÍODO\nSist. de Informação"
    }
  ],
  "Entomologia Florestal": [
    {
      "professor": "Tatianne",
      "turma": "7º PERÍODO\nEng. Florestal"
    }
  ],
  "Equideocultura": [
    {
      "professor": "Sérgio",
      "turma": "5º PERÍODO\nMed. Veterinária"
    }
  ],
  "Estatística Aplicada": [
    {
      "professor": "Rodrigo",
      "turma": "1º ANO   Química"
    }
  ],
  "Estatística Básica": [
    {
      "professor": "Roberto",
      "turma": "1º PERÍODO\nMed. Veterinária"
    },
    {
      "professor": "Jean",
      "turma": "3º PERÍODO\nEng. Florestal"
    },
    {
      "professor": "Patrícia Lucas",
      "turma": "5º PERÍODO\nSist. de Informação"
    },
    {
      "professor": "Roberto",
      "turma": "5º PERÍODO\nSist. de Informação"
    }
  ],
  "Estatística Experimental": [
    {
      "professor": "Leonardo Martins",
      "turma": "Info) - 5º PERÍODO\nEng. Alimentos"
    }
  ],
  "Estágio": [
    {
      "professor": "Márcia Antunes",
      "turma": "Área 2 (Paulo Henrique, Márcia Antunes e Vanessa Paulino) (Clínica do HV) - 9º PERÍODO\nMed. Veterinária"
    },
    {
      "professor": "Eduardo Garrido",
      "turma": "Área 5 (Eduardo Garrido e Thaís Larissa) (Clínica do HV) - 9º PERÍODO\nMed. Veterinária"
    },
    {
      "professor": "Thaís Larissa",
      "turma": "Área 5 (Eduardo Garrido e Thaís Larissa) (Clínica do HV) - 9º PERÍODO\nMed. Veterinária"
    }
  ],
  "Estágio Curricular Supervisionado I": [
    {
      "professor": "Edna",
      "turma": "1º PERÍODO\nLic. Biológicas"
    },
    {
      "professor": "Jaciely",
      "turma": "5º PERÍODO\nLic. Física"
    },
    {
      "professor": "Laio",
      "turma": "5º PERÍODO\nLic. Matemática + Estágio Curricular Supervisionado I (Laio) (1/11) - 5º PERÍODO\nLic. Química"
    }
  ],
  "Estágio Curricular Supervisionado II": [
    {
      "professor": "Laio",
      "turma": "5º PERÍODO\nLic. Biológicas"
    }
  ],
  "Estágio Curricular Supervisionado III": [
    {
      "professor": "Giuliana",
      "turma": "7º PERÍODO\nLic. Biológicas"
    },
    {
      "professor": "Vailton",
      "turma": "7º PERÍODO\nLic. Física"
    },
    {
      "professor": "Willian Andrade",
      "turma": "7º PERÍODO\nLic. Química"
    }
  ],
  "Estágio I – Docência na Educação Infantil": [
    {
      "professor": "Lilian",
      "turma": "5º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Estágio supervisionado I: Autoconhecimento e profissionalidade": [
    {
      "professor": "Admilson",
      "turma": "1º PERÍODO\nLic. Pedagogia"
    },
    {
      "professor": "Lilian",
      "turma": "1º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Estágio área 1": [
    {
      "professor": "Antônio",
      "turma": "9º PERÍODO\nMed. Veterinária"
    },
    {
      "professor": "Charles",
      "turma": "9º PERÍODO\nMed. Veterinária"
    },
    {
      "professor": "Fernando Matos",
      "turma": "9º PERÍODO\nMed. Veterinária"
    },
    {
      "professor": "Sérgio",
      "turma": "9º PERÍODO\nMed. Veterinária"
    }
  ],
  "Estágio área 3": [
    {
      "professor": "Walter",
      "turma": "9º PERÍODO\nMed. Veterinária"
    }
  ],
  "Estágio área 4": [
    {
      "professor": "Leonardo Coelho",
      "turma": "9º PERÍODO\nMed. Veterinária"
    }
  ],
  "Evolução": [
    {
      "professor": "Filipe",
      "turma": "5º PERÍODO\nLic. Biológicas"
    }
  ],
  "Fenômenos de Transporte I": [
    {
      "professor": "Alexandre",
      "turma": "5º PERÍODO\nEng. Alimentos"
    }
  ],
  "Fertilidade Solo e Nutr Plantas": [
    {
      "professor": "Élcio",
      "turma": "5º PERÍODO\nEng. Florestal"
    }
  ],
  "Fertilidade do Solo e Nutrição de Plantas": [
    {
      "professor": "Élcio",
      "turma": "5º PERÍODO\nEng. Florestal"
    }
  ],
  "Filosofia": [
    {
      "professor": "Lucas Fernando",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Lucas Fernando",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Lucas Fernando",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Lucas Fernando",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Lucas Fernando",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Lucas Fernando",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Lucas Fernando",
      "turma": "1º ANO B\nAgropecuária"
    },
    {
      "professor": "Lucas Fernando",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Admilson",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Admilson",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Lucas Fernando",
      "turma": "3º ANO A\nInformática"
    },
    {
      "professor": "Admilson",
      "turma": "3º ANO B\nAgroindústria"
    },
    {
      "professor": "Admilson",
      "turma": "3º ANO B\nAgropecuária"
    },
    {
      "professor": "Lucas Fernando",
      "turma": "3º ANO B\nInformática"
    }
  ],
  "Filosofia da Educação": [
    {
      "professor": "Admilson",
      "turma": "1º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Fisiologia Vegetal": [
    {
      "professor": "Michellia",
      "turma": "7º PERÍODO\nLic. Biológicas"
    }
  ],
  "Forragicultura": [
    {
      "professor": "Magalhães",
      "turma": "3º PERÍODO\nMed. Veterinária"
    }
  ],
  "Fundamentos da Física": [
    {
      "professor": "Rodrigo",
      "turma": "3º PERÍODO\nLic. Biológicas"
    }
  ],
  "Fundamentos da Teoria Eletromagnética": [
    {
      "professor": "Luciano",
      "turma": "7º PERÍODO\nLic. Física"
    }
  ],
  "Fundamentos de Equações Diferenciais": [
    {
      "professor": "Fabiano",
      "turma": "5º PERÍODO\nLic. Física"
    }
  ],
  "Fundamentos de Física Quântica": [
    {
      "professor": "Rafael",
      "turma": "7º PERÍODO\nLic. Física"
    }
  ],
  "Fundamentos de medidas": [
    {
      "professor": "Gera Magela",
      "turma": "1º ANO - Meio Ambiente"
    }
  ],
  "Fundamentos do Design e Webdesign": [
    {
      "professor": "Jamerson Rezende",
      "turma": "Info) - 2º ANO A\nInformática"
    },
    {
      "professor": "Jamerson Rezende",
      "turma": "Info) - 2º ANO B\nInformática"
    }
  ],
  "Fundamentos e Metodologia da Ciência nas SIEF": [
    {
      "professor": "Edna",
      "turma": "5º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Fundamentos e Metodologia da Educação Especial/Inclusiva": [
    {
      "professor": "Edna",
      "turma": "1º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Fundamentos e Metodologia da Educação Infantil": [
    {
      "professor": "Jaciely",
      "turma": "3º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Fundamentos e Metodologia da Geografia nas SIEF": [
    {
      "professor": "Josy",
      "turma": "5º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Fundamentos e Metodologia da História nas SIEF": [
    {
      "professor": "Renata",
      "turma": "5º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Fundamentos e Metodologia da Língua Portuguesa nas SIEF": [
    {
      "professor": "Giuliana",
      "turma": "5º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Fundamentos e Metodologia da Matemática nas SIEF": [
    {
      "professor": "Gerson",
      "turma": "5º PERÍODO\nLic. Pedagogia"
    }
  ],
  "FÍSICA GERAL II": [
    {
      "professor": "Luciano",
      "turma": "5º PERÍODO\nLic. Matemática"
    }
  ],
  "Física": [
    {
      "professor": "Clayton",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Rafael",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Rafael",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Rodrigo",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Rodrigo",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Rafael",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Gera Magela",
      "turma": "1º ANO B\nAgropecuária"
    },
    {
      "professor": "Rodrigo",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Rodrigo",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Clayton",
      "turma": "2º ANO A\nAgropecuária"
    },
    {
      "professor": "Gera Magela",
      "turma": "2º ANO A\nInformática"
    },
    {
      "professor": "Clayton",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Clayton",
      "turma": "2º ANO B\nAgropecuária"
    },
    {
      "professor": "Gera Magela",
      "turma": "2º ANO B\nInformática"
    },
    {
      "professor": "Rafael",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Clayton",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Rafael",
      "turma": "3º ANO A\nInformática"
    },
    {
      "professor": "Rafael",
      "turma": "3º ANO B\nAgroindústria"
    },
    {
      "professor": "Clayton",
      "turma": "3º ANO B\nAgropecuária"
    },
    {
      "professor": "Rafael",
      "turma": "3º ANO B\nInformática"
    }
  ],
  "Física Experimental": [
    {
      "professor": "Gera Magela",
      "turma": "5º PERÍODO\nEng. Alimentos"
    }
  ],
  "Física Geral I": [
    {
      "professor": "Diego Carvalho",
      "turma": "5º PERÍODO\nLic. Química"
    }
  ],
  "Física Geral II": [
    {
      "professor": "Diego Carvalho",
      "turma": "3º PERÍODO\nEng. Florestal"
    }
  ],
  "Física Geral III": [
    {
      "professor": "Luciano",
      "turma": "5º PERÍODO\nLic. Física"
    },
    {
      "professor": "Luciano",
      "turma": "Rec. Didáticos) - 5º PERÍODO\nLic. Física"
    },
    {
      "professor": "Rodrigo",
      "turma": "Rec. Didáticos) - 5º PERÍODO\nLic. Física"
    }
  ],
  "Física Geral IV": [
    {
      "professor": "Rodrigo",
      "turma": "Rec. Didáticos) - 5º PERÍODO\nLic. Física"
    }
  ],
  "Física I": [
    {
      "professor": "Diego Carvalho",
      "turma": "3º PERÍODO\nEng. Alimentos"
    }
  ],
  "Física III": [
    {
      "professor": "Rodrigo",
      "turma": "5º PERÍODO\nEng. Alimentos"
    }
  ],
  "Físico Química II": [
    {
      "professor": "Magnovaldo",
      "turma": "7º PERÍODO\nLic. Química"
    }
  ],
  "Físico-Química I": [
    {
      "professor": "Luiz Fernando",
      "turma": "3º PERÍODO\nEng. Alimentos"
    }
  ],
  "Genética": [
    {
      "professor": "Marinalva",
      "turma": "5º PERÍODO\nEng. Florestal"
    }
  ],
  "Geografia": [
    {
      "professor": "Tiago Caminha",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Tiago Caminha",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Tiago Caminha",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Tiago Caminha",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Tiago Caminha",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Tiago Caminha",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Tiago Caminha",
      "turma": "1º ANO B\nAgropecuária"
    },
    {
      "professor": "Tiago Caminha",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Márcia Martins",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Márcia Martins",
      "turma": "2º ANO A\nAgropecuária"
    },
    {
      "professor": "Márcia Martins",
      "turma": "2º ANO A\nInformática"
    },
    {
      "professor": "Márcia Martins",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Márcia Martins",
      "turma": "2º ANO B\nAgropecuária"
    },
    {
      "professor": "Márcia Martins",
      "turma": "2º ANO B\nInformática"
    },
    {
      "professor": "Josy",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Josy",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Josy",
      "turma": "3º ANO A\nInformática"
    },
    {
      "professor": "Josy",
      "turma": "3º ANO B\nAgroindústria"
    },
    {
      "professor": "Josy",
      "turma": "3º ANO B\nAgropecuária"
    },
    {
      "professor": "Josy",
      "turma": "3º ANO B\nInformática"
    }
  ],
  "Geometria Analítica e Álgebra Linear": [
    {
      "professor": "Marco Aurélio",
      "turma": "1º PERÍODO\nSist. de Informação"
    }
  ],
  "Gerência de Projetos": [
    {
      "professor": "Mário",
      "turma": "7º PERÍODO\nSist. de Informação"
    },
    {
      "professor": "Mário",
      "turma": "9º PERÍODO\nEng. Florestal"
    }
  ],
  "Gestão da qualidade": [
    {
      "professor": "Bruna Porto",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Bruna Porto",
      "turma": "1º ANO B\nAgroindústria"
    }
  ],
  "Gestão do agronegócio": [
    {
      "professor": "Charles",
      "turma": "5º PERÍODO\nMed. Veterinária"
    }
  ],
  "Gestão em espaços não escolares": [
    {
      "professor": "Giuliana",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Gestão na Educação – Ênfase nos Espaços Escolares": [
    {
      "professor": "Laio",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Hidrologia e M. B. H.": [
    {
      "professor": "Marcelo Rossi",
      "turma": "7º PERÍODO\nEng. Florestal"
    }
  ],
  "Histologia Veterinária": [
    {
      "professor": "Eduardo Garrido",
      "turma": "3º PERÍODO\nMed. Veterinária"
    }
  ],
  "História": [
    {
      "professor": "Renata",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Renata",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Bergston",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Renata",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Bergston",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Bergston",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Renata",
      "turma": "1º ANO B\nAgropecuária"
    },
    {
      "professor": "Bergston",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Renata",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Renata",
      "turma": "3º ANO A\nInformática"
    },
    {
      "professor": "Renata",
      "turma": "3º ANO B\nAgroindústria"
    },
    {
      "professor": "Renata",
      "turma": "3º ANO B\nInformática"
    }
  ],
  "História da Educação I": [
    {
      "professor": "Bergston",
      "turma": "1º PERÍODO\nLic. Pedagogia"
    }
  ],
  "História e Memória e escrita do eu": [
    {
      "professor": "Gerson",
      "turma": "1º PERÍODO\nLic. Biológicas"
    }
  ],
  "História e Princípios epistemológicos do Currículo, Cultura e Prática Escolar": [
    {
      "professor": "Bergston",
      "turma": "3º PERÍODO\nLic. Pedagogia"
    },
    {
      "professor": "Edna",
      "turma": "3º PERÍODO\nLic. Pedagogia"
    }
  ],
  "INTRODUÇÃO A TEORIA ARITMÉTICA DOS NÚMEROS": [
    {
      "professor": "Leonardo Martins",
      "turma": "5º PERÍODO\nLic. Matemática"
    }
  ],
  "Imunologia": [
    {
      "professor": "Ataliba",
      "turma": "7º PERÍODO\nLic. Biológicas"
    }
  ],
  "Informática, Ética e Sociedade": [
    {
      "professor": "Lucas Fernando",
      "turma": "7º PERÍODO\nSist. de Informação"
    }
  ],
  "Inglês Instrumental": [
    {
      "professor": "Adailton",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Adailton",
      "turma": "1º ANO B\nInformática"
    }
  ],
  "Iniciação à Engenharia Florestal": [
    {
      "professor": "Élcio",
      "turma": "1º PERÍODO\nEng. Florestal + Mecanização Florestal (Alessandro) (3/9) / Optativa II: Manejo Cons Solos Flor (Élcio) (3/10)\n - 5º PERÍODO\nEng. Florestal + Matemática \n(Kélcio)(2/5) - 1º ANO B\nInformática"
    }
  ],
  "Interface Homem-Máquina": [
    {
      "professor": "Geycy",
      "turma": "Info) - 3º PERÍODO\nSist. de Informação"
    }
  ],
  "Introdução ao Estudo do Meio Ambiente": [
    {
      "professor": "Jane Bruna",
      "turma": "1º ANO - Meio Ambiente"
    }
  ],
  "Introdução à Ciências Biológicas": [
    {
      "professor": "Michellia",
      "turma": "1º PERÍODO\nLic. Biológicas"
    }
  ],
  "Introdução à Pedagogia: Organização do Trabalho Pedagógico": [
    {
      "professor": "Edna",
      "turma": "1º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Irrigação e Drenagem": [
    {
      "professor": "Marcelo Rossi",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Marcelo Rossi",
      "turma": "3º ANO B\nAgropecuária"
    }
  ],
  "Laboratório I": [
    {
      "professor": "Roberta",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Roberta",
      "turma": "1º ANO B\nAgroindústria"
    }
  ],
  "Laboratório II": [
    {
      "professor": "Alexandre",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Daniela",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Alexandre",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Daniela",
      "turma": "2º ANO B\nAgroindústria"
    }
  ],
  "Laboratório em Química": [
    {
      "professor": "Luiz Fernando",
      "turma": "1º ANO   Química"
    }
  ],
  "Libras I": [
    {
      "professor": "CEaD",
      "turma": "7º PERÍODO\nLic. Biológicas + Libras I (CEaD) - 7º PERÍODO\nLic. Física + Libras I (CEaD) - 7º PERÍODO\nLic. Matemática"
    }
  ],
  "Literatura": [
    {
      "professor": "Evelyn",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Evelyn",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Mayara",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Yara",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Evelyn",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Wesley",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Mayara",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Yara",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Wesley",
      "turma": "1º ANO B\nAgropecuária"
    },
    {
      "professor": "Wesley",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Wesley",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Wesley",
      "turma": "2º ANO A\nAgropecuária"
    },
    {
      "professor": "Wesley",
      "turma": "2º ANO A\nInformática"
    },
    {
      "professor": "Wesley",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Wesley",
      "turma": "2º ANO B\nAgropecuária"
    },
    {
      "professor": "Wesley",
      "turma": "2º ANO B\nInformática"
    },
    {
      "professor": "Mayara",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Yara",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Mayara",
      "turma": "3º ANO B\nAgroindústria"
    },
    {
      "professor": "Yara",
      "turma": "3º ANO B\nAgroindústria"
    }
  ],
  "Literatura Infanto-juvenil": [
    {
      "professor": "Edna",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    },
    {
      "professor": "Willian Fernandes",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Língua Estrangeira": [
    {
      "professor": "Thaís Rios",
      "turma": "2º ANO A\nInformática"
    },
    {
      "professor": "Thaís Rios",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Thaís Rios",
      "turma": "2º ANO B\nAgropecuária"
    },
    {
      "professor": "Thaís Rios",
      "turma": "2º ANO B\nInformática"
    },
    {
      "professor": "Thaís Rios",
      "turma": "3º ANO B\nAgroindústria"
    },
    {
      "professor": "Thaís Rios",
      "turma": "3º ANO B\nAgropecuária"
    }
  ],
  "Língua Inglesa": [
    {
      "professor": "Adailton",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Adailton",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Adailton",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Adailton",
      "turma": "1º ANO B\nInformática"
    }
  ],
  "Língua Inglêsa": [
    {
      "professor": "Adailton",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Adailton",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Adailton",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Adailton",
      "turma": "1º ANO B\nAgropecuária"
    }
  ],
  "Língua Portuguesa": [
    {
      "professor": "Willian Fernandes",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Willian Fernandes",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Cláudia",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Mayara",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Yara",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Cláudia",
      "turma": "1º ANO B\nAgropecuária"
    },
    {
      "professor": "Mayara",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Yara",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Patrícia Ramires",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Patrícia Ramires",
      "turma": "2º ANO A\nInformática"
    },
    {
      "professor": "Patrícia Ramires",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Patrícia Ramires",
      "turma": "2º ANO B\nInformática"
    },
    {
      "professor": "Cláudia",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Willian Fernandes",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Cláudia",
      "turma": "3º ANO B\nAgroindústria"
    },
    {
      "professor": "Willian Fernandes",
      "turma": "3º ANO B\nAgropecuária"
    }
  ],
  "Matemática": [
    {
      "professor": "Eilson Santiago",
      "turma": "1º ANO   Química"
    },
    {
      "professor": "Frederico",
      "turma": "1º ANO - Meio Ambiente"
    },
    {
      "professor": "Fabiano",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Marco Aurélio",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Élcio",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Kélcio",
      "turma": "1º ANO A\nInformática"
    },
    {
      "professor": "Fabiano",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Marco Aurélio",
      "turma": "1º ANO B\nAgropecuária"
    },
    {
      "professor": "Élcio",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Kélcio",
      "turma": "1º ANO B\nInformática"
    },
    {
      "professor": "Aldemi",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Eilson Santiago",
      "turma": "2º ANO A\nAgropecuária"
    },
    {
      "professor": "Aldemi",
      "turma": "2º ANO A\nInformática"
    },
    {
      "professor": "Aldemi",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Eilson Santiago",
      "turma": "2º ANO B\nAgropecuária"
    },
    {
      "professor": "Aldemi",
      "turma": "2º ANO B\nInformática"
    },
    {
      "professor": "Nilsa",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Nilsa",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Nilsa",
      "turma": "3º ANO A\nInformática"
    },
    {
      "professor": "Nilsa",
      "turma": "3º ANO B\nAgroindústria"
    },
    {
      "professor": "Viviane",
      "turma": "3º ANO B\nAgropecuária"
    },
    {
      "professor": "Nilsa",
      "turma": "3º ANO B\nInformática"
    }
  ],
  "Matemática Elementar": [
    {
      "professor": "Aldemi",
      "turma": "3º PERÍODO\nLic. Biológicas"
    }
  ],
  "Matemática e Português para o Cotidiano": [
    {
      "professor": "Evelyn",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Fabiano",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Roberta",
      "turma": "1º ANO A\nAgroindústria"
    },
    {
      "professor": "Evelyn",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Fabiano",
      "turma": "1º ANO B\nAgroindústria"
    },
    {
      "professor": "Roberta",
      "turma": "1º ANO B\nAgroindústria"
    }
  ],
  "Mecanização Florestal": [
    {
      "professor": "Alessandro",
      "turma": "5º PERÍODO\nEng. Florestal"
    }
  ],
  "Meteorologia e Climatologia": [
    {
      "professor": "Marcelo Rossi",
      "turma": "5º PERÍODO\nEng. Florestal"
    }
  ],
  "Microbiologia": [
    {
      "professor": "Marinalva",
      "turma": "3º PERÍODO\nEng. Florestal"
    },
    {
      "professor": "Marinalva",
      "turma": "5º PERÍODO\nLic. Biológicas"
    }
  ],
  "Microbiologia Ambiental": [
    {
      "professor": "Érica",
      "turma": "1º ANO - Meio Ambiente"
    }
  ],
  "Microbiologia Veterinária": [
    {
      "professor": "Eduardo Garrido",
      "turma": "3º PERÍODO\nMed. Veterinária"
    }
  ],
  "Microbiologia de Alimentos": [
    {
      "professor": "Roberta",
      "turma": "5º PERÍODO\nEng. Alimentos"
    }
  ],
  "Montagem e Manut.": [
    {
      "professor": "Geycy",
      "turma": "Info) - 2º ANO A\nInformática"
    },
    {
      "professor": "Geycy",
      "turma": "Info) - 2º ANO B\nInformática"
    }
  ],
  "Morfologia e Anatomia Vegetal": [
    {
      "professor": "Lays",
      "turma": "3º PERÍODO\nLic. Biológicas"
    },
    {
      "professor": "Sileimar",
      "turma": "3º PERÍODO\nLic. Biológicas"
    }
  ],
  "Máquinas Agrícolas": [
    {
      "professor": "Cani",
      "turma": "2º ANO A\nAgropecuária"
    },
    {
      "professor": "Cani",
      "turma": "2º ANO B\nAgropecuária"
    }
  ],
  "Nutrição": [
    {
      "professor": "Jean",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Jean",
      "turma": "2º ANO B\nAgroindústria"
    }
  ],
  "Operações Unitárias II": [
    {
      "professor": "Isis",
      "turma": "7º PERÍODO\nEng. Alimentos"
    },
    {
      "professor": "Jean",
      "turma": "7º PERÍODO\nEng. Alimentos"
    }
  ],
  "Optativa I: Gestão Ambiental": [
    {
      "professor": "Élcio",
      "turma": "3º PERÍODO\nEng. Florestal"
    },
    {
      "professor": "Élcio",
      "turma": "3º PERÍODO\nEng. Florestal + Matemática \n(Kélcio) (2/4) - 1º ANO A\nInformática"
    }
  ],
  "Optativa I: Pedagogia Hospitalar": [
    {
      "professor": "Giuliana",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Optativa II": [
    {
      "professor": "Zélia",
      "turma": "Sistemas de Apoio a Decisão (Zélia)    (Lab. 2 - Info) - 7º PERÍODO\nSist. de Informação"
    },
    {
      "professor": "Zélia",
      "turma": "Sistemas de Apoio a Decisão (Zélia)   (Lab. 2 - Info) - 7º PERÍODO\nSist. de Informação"
    }
  ],
  "Optativa II: Manejo Cons Solos Flor": [
    {
      "professor": "Élcio",
      "turma": "5º PERÍODO\nEng. Florestal"
    }
  ],
  "Optativa IV": [
    {
      "professor": "Zélia",
      "turma": "Métodos Ágeis (Zélia)  (Lab. 4 - Info) - 7º PERÍODO\nSist. de Informação"
    }
  ],
  "Optativa IV: Licenciamento Ambiental Aplicado": [
    {
      "professor": "Jane Bruna",
      "turma": "9º PERÍODO\nEng. Florestal"
    }
  ],
  "Optativa V": [
    {
      "professor": "Alison Zille",
      "turma": "Computação Natural (Alison Zille)  (Lab. 4 - Info) - 7º PERÍODO\nSist. de Informação"
    },
    {
      "professor": "Alison Zille",
      "turma": "Computação Natural (Alison Zille) (Lab. 4 - Info) - 7º PERÍODO\nSist. de Informação"
    }
  ],
  "Organização e Gestão Pedagógica": [
    {
      "professor": "Laio",
      "turma": "7º PERÍODO\nLic. Biológicas + Organização e Gestão Pedagógica(Laio)\n (1/7) - 7º PERÍODO\nLic. Física + Organização e Gestão Pedagógica(Laio)\n (1/7) - 7º PERÍODO\nLic. Matemática + Organização e Gestão Pedagógica(Laio)\n (1/7) - 7º PERÍODO\nLic. Química"
    }
  ],
  "Patologia Especial Veterinária": [
    {
      "professor": "Thaís Larissa",
      "turma": "5º PERÍODO\nMed. Veterinária"
    }
  ],
  "Pesquisa Aplicada à Educação II – TCC II": [
    {
      "professor": "Edna",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    },
    {
      "professor": "Jaciely",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Pesquisa e Prática Pedagógica III": [
    {
      "professor": "Edna",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Pesquisa em Ensino de Física": [
    {
      "professor": "Rafael",
      "turma": "5º PERÍODO\nLic. Física"
    }
  ],
  "Planejamento e Prática": [
    {
      "professor": "Gerson",
      "turma": "3º PERÍODO\nLic. Biológicas + Planejamento e Prática (Gerson) (1/5) - 3º PERÍODO\nLic. Matemática"
    }
  ],
  "Português Instrumental": [
    {
      "professor": "Evelyn",
      "turma": "1º PERÍODO\nSist. de Informação"
    }
  ],
  "Preservação da Madeira": [
    {
      "professor": "Wagner",
      "turma": "9º PERÍODO\nEng. Florestal"
    }
  ],
  "Produção de Monogástricos": [
    {
      "professor": "Fernando Matos",
      "turma": "2º ANO A\nAgropecuária"
    },
    {
      "professor": "Fernando Matos",
      "turma": "2º ANO B\nAgropecuária"
    }
  ],
  "Produção de Ruminantes": [
    {
      "professor": "Sérgio",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Sérgio",
      "turma": "3º ANO B\nAgropecuária"
    }
  ],
  "Produção e Gestão do Conhecimento": [
    {
      "professor": "Laio",
      "turma": "5º PERÍODO\nLic. Química"
    }
  ],
  "Programação Orientada a Objetos II": [
    {
      "professor": "Leonardo Humberto",
      "turma": "Info) - 5º PERÍODO\nSist. de Informação"
    }
  ],
  "Projeto Integrador I": [
    {
      "professor": "Cristiane",
      "turma": "Química e Sociedade\n (Cristiane/Lucas Fernando)(1/4) - 1º ANO   Química"
    },
    {
      "professor": "Lucas Fernando",
      "turma": "Química e Sociedade\n (Cristiane/Lucas Fernando)(1/4) - 1º ANO   Química"
    }
  ],
  "Proteção contra incêndios": [
    {
      "professor": "Jane Bruna",
      "turma": "9º PERÍODO\nEng. Florestal"
    }
  ],
  "Prática Pedagógica V: Estratégias e Atividades para o Ensino de Soluções e Misturas": [
    {
      "professor": "Aline",
      "turma": "5º PERÍODO\nLic. Química"
    }
  ],
  "Prática Pedagógica V: LEMII": [
    {
      "professor": "Sebastião",
      "turma": "Laboratório de Educação Matemática II (Sebastião) (LEM) - 7º PERÍODO\nLic. Matemática"
    }
  ],
  "Prática Pedagógica VII: Estratégias e Atividades para o Ensino de Gases e suas Propriedades": [
    {
      "professor": "Aldo Gomes",
      "turma": "7º PERÍODO\nLic. Química"
    }
  ],
  "Prática Pedagógica Vl: Laboratório de Evolução": [
    {
      "professor": "Filipe",
      "turma": "7º PERÍODO\nLic. Biológicas"
    }
  ],
  "Prática Pedagógica Vll: Laboratório de Microbiologia": [
    {
      "professor": "Michellia",
      "turma": "7º PERÍODO\nLic. Biológicas"
    }
  ],
  "Psicologia da Educação I": [
    {
      "professor": "Giuliana",
      "turma": "3º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Psicologia do desenvolvimento e da aprendizagem": [
    {
      "professor": "Gerson",
      "turma": "3º PERÍODO\nLic. Biológicas + Psicologia do desenvolvimento e da aprendizagem (Gerson) (1/5) - 3º PERÍODO\nLic. Matemática"
    }
  ],
  "Psicopedagogia: mediação e diálogo da sexualidade, identidade na formação da criança": [
    {
      "professor": "Edna",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Química": [
    {
      "professor": "Luiz Fernando",
      "turma": "1º ANO A\nAgropecuária"
    },
    {
      "professor": "Luiz Fernando",
      "turma": "1º ANO B\nAgropecuária"
    },
    {
      "professor": "Cristiane",
      "turma": "2º ANO A\nAgroindústria"
    },
    {
      "professor": "Aldo Gomes",
      "turma": "2º ANO A\nAgropecuária"
    },
    {
      "professor": "Aline",
      "turma": "2º ANO A\nInformática"
    },
    {
      "professor": "Cristiane",
      "turma": "2º ANO B\nAgroindústria"
    },
    {
      "professor": "Aldo Gomes",
      "turma": "2º ANO B\nAgropecuária"
    },
    {
      "professor": "Aline",
      "turma": "2º ANO B\nInformática"
    },
    {
      "professor": "Magnovaldo",
      "turma": "3º ANO A\nAgropecuária"
    },
    {
      "professor": "Bruno",
      "turma": "3º ANO A\nInformática"
    },
    {
      "professor": "Magnovaldo",
      "turma": "3º ANO B\nAgropecuária"
    },
    {
      "professor": "Bruno",
      "turma": "3º ANO B\nInformática"
    }
  ],
  "Química Analítica": [
    {
      "professor": "Aldo Gomes",
      "turma": "3º PERÍODO\nEng. Alimentos"
    }
  ],
  "Química Geral": [
    {
      "professor": "Willian Andrade",
      "turma": "1º PERÍODO\nEng. Alimento"
    },
    {
      "professor": "Willian Andrade",
      "turma": "1º PERÍODO\nEng. Alimento + Química Geral (Willian Andrade) (2/1) - 1º PERÍODO\nEng. Florestal"
    },
    {
      "professor": "Willian Andrade",
      "turma": "1º PERÍODO\nEng. Alimento + Química Geral (Willian Andrade) (3/9) - 1º PERÍODO\nEng. Florestal"
    },
    {
      "professor": "Magnovaldo",
      "turma": "1º PERÍODO\nLic. Biológicas"
    }
  ],
  "Química Geral e Inorgânica": [
    {
      "professor": "Willian Andrade",
      "turma": "1º ANO   Química"
    }
  ],
  "Química Inorgânica II": [
    {
      "professor": "Aline",
      "turma": "3º PERÍODO\nLic. Química"
    }
  ],
  "Química Orgânica II": [
    {
      "professor": "Bruno",
      "turma": "3º PERÍODO\nLic. Química"
    }
  ],
  "Redes de Computadores": [
    {
      "professor": "Jamerson Jardel",
      "turma": "5º PERÍODO\nSist. de Informação"
    }
  ],
  "Redes de comput.": [
    {
      "professor": "Jamerson Jardel",
      "turma": "3º ANO A\nInformática"
    },
    {
      "professor": "Jamerson Jardel",
      "turma": "3º ANO B\nInformática"
    }
  ],
  "Refrigeração": [
    {
      "professor": "Isis",
      "turma": "9º PERÍODO\nEng. Alimentos"
    }
  ],
  "Secagem de grãos": [
    {
      "professor": "Jean",
      "turma": "7º PERÍODO\nEng. Alimentos"
    }
  ],
  "Segurança e Auditoria de Sistemas de Informação": [
    {
      "professor": "Zélia",
      "turma": "Info) - 7º PERÍODO\nSist. de Informação"
    }
  ],
  "Semiologia Veterinária": [
    {
      "professor": "Eduardo Garrido",
      "turma": "5º PERÍODO\nMed. Veterinária"
    },
    {
      "professor": "Leonardo Coelho",
      "turma": "5º PERÍODO\nMed. Veterinária"
    }
  ],
  "Sistemas Agroflorestais": [
    {
      "professor": "Marília",
      "turma": "7º PERÍODO\nEng. Florestal"
    }
  ],
  "Sistemas Operacionais": [
    {
      "professor": "Zélia",
      "turma": "Info) - 3º PERÍODO\nSist. de Informação"
    }
  ],
  "Sistemática de Angiospermas": [
    {
      "professor": "Michellia",
      "turma": "3º PERÍODO\nEng. Florestal"
    }
  ],
  "Software": [
    {
      "professor": "Patrícia Lucas",
      "turma": "Info) - 1º ANO A\nInformática"
    },
    {
      "professor": "Patrícia Lucas",
      "turma": "Info) - 1º ANO B\nInformática"
    }
  ],
  "Solos e Recuperação de Áreas Degradadas": [
    {
      "professor": "Alessandro",
      "turma": "1º ANO - Meio Ambiente"
    }
  ],
  "TCC I": [
    {
      "professor": "Laio",
      "turma": "7º PERÍODO\nLic. Biológicas + TCC I (Laio)  (1/7) - 7º PERÍODO\nLic. Física + TCC I (Laio)  (1/7) - 7º PERÍODO\nLic. Matemática + TCC I (Laio)  (1/7) - 7º PERÍODO\nLic. Química"
    }
  ],
  "Tecnologia Aplicada à Educação": [
    {
      "professor": "Laio",
      "turma": "5º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Tecnologia da Madeira": [
    {
      "professor": "Wagner",
      "turma": "7º PERÍODO\nEng. Florestal"
    }
  ],
  "Tecnologia de Leite": [
    {
      "professor": "Ramon",
      "turma": "3º ANO A\nAgroindústria"
    },
    {
      "professor": "Ramon",
      "turma": "3º ANO B\nAgroindústria"
    }
  ],
  "Tecnologia de obtenção da celulose": [
    {
      "professor": "Wagner",
      "turma": "9º PERÍODO\nEng. Florestal"
    }
  ],
  "Teoria Geral da Administração": [
    {
      "professor": "Mário",
      "turma": "1º PERÍODO\nSist. de Informação"
    }
  ],
  "Teoria e Fundamentos de Sistemas de Informação": [
    {
      "professor": "Patrícia Lucas",
      "turma": "1º PERÍODO\nSist. de Informação"
    },
    {
      "professor": "Patrícia Lucas",
      "turma": "Info) - 1º PERÍODO\nSist. de Informação"
    }
  ],
  "Termodinâmica": [
    {
      "professor": "Clayton",
      "turma": "5º PERÍODO\nLic. Física"
    }
  ],
  "Trabalho de Conclusão de Curso I": [
    {
      "professor": "Geycy",
      "turma": "Info) - 7º PERÍODO\nSist. de Informação"
    }
  ],
  "Trabalho de Conclusão de Curso II": [
    {
      "professor": "Arthur",
      "turma": "Info) - 7º PERÍODO\nSist. de Informação"
    }
  ],
  "Tratamento de Resíduos": [
    {
      "professor": "Isis",
      "turma": "7º PERÍODO\nEng. Alimentos + Tratamento de Resíduos (Isis) (Lab. Fenôm. de Transportes) - 9º PERÍODO\nEng. Alimentos"
    }
  ],
  "Técnica operatória": [
    {
      "professor": "Walter",
      "turma": "7º PERÍODO\nMed. Veterinária"
    }
  ],
  "Tópicos Especiais em Biologia II": [
    {
      "professor": "Marinalva",
      "turma": "7º PERÍODO\nLic. Biológicas"
    }
  ],
  "UCE 3": [
    {
      "professor": "Arilson",
      "turma": "PROJETO MATEMÁTICA EM DIA (Arilson) (1/10) - 5º PERÍODO\nLic. Matemática"
    }
  ],
  "UCE I": [
    {
      "professor": "Geycy",
      "turma": "Ciclo de Palestras e Eventos (Geycy) (Lab. 2 - Info) - 3º PERÍODO\nSist. de Informação"
    },
    {
      "professor": "Geycy",
      "turma": "Ciclo de Palestras e Eventos (Geycy) (Mini 2) - Remoto - 3º PERÍODO\nSist. de Informação"
    },
    {
      "professor": "Jaciely",
      "turma": "História, Memórias e Escrita do eu (Jaciely) (2/1) - 1º PERÍODO\nLic. Pedagogia"
    }
  ],
  "UCE I Educação e Sáude": [
    {
      "professor": "Lays",
      "turma": "5º PERÍODO\nLic. Biológicas"
    }
  ],
  "UCE II": [
    {
      "professor": "Márcia Antunes",
      "turma": "7º PERÍODO\nEng. Alimentos"
    },
    {
      "professor": "Márcia Antunes",
      "turma": "7º PERÍODO\nEng. Alimentos + Estágio - Área 2 (Paulo Henrique, Márcia Antunes e Vanessa Paulino) (Clínica do HV) - 9º PERÍODO\nMed. Veterinária"
    }
  ],
  "UCE III": [
    {
      "professor": "Marília",
      "turma": "7º PERÍODO\nEng. Florestal"
    },
    {
      "professor": "Zélia",
      "turma": "Consultoria e Marketing Digital (Zélia) (3/9) - 5º PERÍODO\nSist. de Informação"
    }
  ],
  "UCE III – Robótica Educacional": [
    {
      "professor": "Jéssica",
      "turma": "Robótica)    - 5º PERÍODO\nLic. Física"
    },
    {
      "professor": "Rafael",
      "turma": "Robótica)    - 5º PERÍODO\nLic. Física + UCE V - SELFIS (Clayton) (1/9) / Fundamentos de Física Quântica (Rafael) (1/16) - 7º PERÍODO\nLic. Física"
    },
    {
      "professor": "Jéssica",
      "turma": "Robótica)  - 5º PERÍODO\nLic. Física"
    },
    {
      "professor": "Rafael",
      "turma": "Robótica)  - 5º PERÍODO\nLic. Física + UCE V - SELFIS (Clayton) (1/9) / Fundamentos de Física Quântica (Rafael) (1/16) - 7º PERÍODO\nLic. Física"
    },
    {
      "professor": "Jéssica",
      "turma": "Robótica) /  Física Geral IV (Rodrigo) (PPC 2017) (Lab. Física - Rec. Didáticos) - 5º PERÍODO\nLic. Física"
    },
    {
      "professor": "Rafael",
      "turma": "Robótica) /  Física Geral IV (Rodrigo) (PPC 2017) (Lab. Física - Rec. Didáticos) - 5º PERÍODO\nLic. Física"
    },
    {
      "professor": "Rodrigo",
      "turma": "Robótica) /  Física Geral IV (Rodrigo) (PPC 2017) (Lab. Física - Rec. Didáticos) - 5º PERÍODO\nLic. Física"
    }
  ],
  "UCE III: Educação ambiental e sustentabilidade": [
    {
      "professor": "Jaciely",
      "turma": "3º PERÍODO\nLic. Pedagogia"
    }
  ],
  "UCE IV": [
    {
      "professor": "Gerson",
      "turma": "Tecnologias na Prática Educativa (Gerson) (2/3) - 5º PERÍODO\nLic. Pedagogia"
    }
  ],
  "UCE IV: Tecnologias na prática educativa": [
    {
      "professor": "Gerson",
      "turma": "5º PERÍODO\nLic. Pedagogia"
    }
  ],
  "UCE V": [
    {
      "professor": "Leonardo Humberto",
      "turma": "Implantação e Manutenção de Sistemas (Leonardo Humberto)(Lab. 1 - Info) - 7º PERÍODO\nSist. de Informação"
    },
    {
      "professor": "Leonardo Humberto",
      "turma": "Implantação e Manutenção de Sistemas (Leonardo Humberto)(Lab. 2 - Info) - 7º PERÍODO\nSist. de Informação"
    },
    {
      "professor": "Clayton",
      "turma": "SELFIS (Clayton) (1/9) / Fundamentos de Física Quântica (Rafael) (1/16) - 7º PERÍODO\nLic. Física"
    },
    {
      "professor": "Rafael",
      "turma": "SELFIS (Rafael) (1/9) / Laboratório para o Ensino de Física IV (Rodrigo) (Lab. Física - Rec. Didáticos) - 7º PERÍODO\nLic. Física"
    },
    {
      "professor": "Rodrigo",
      "turma": "SELFIS (Rafael) (1/9) / Laboratório para o Ensino de Física IV (Rodrigo) (Lab. Física - Rec. Didáticos) - 7º PERÍODO\nLic. Física"
    }
  ],
  "UCE VI: Educação, Trabalho e Cultura Regional": [
    {
      "professor": "Bergston",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    },
    {
      "professor": "Laio",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    },
    {
      "professor": "Lilian",
      "turma": "7º PERÍODO\nLic. Pedagogia"
    }
  ],
  "UCEIII: Educação Ambiental": [
    {
      "professor": "Jaciely",
      "turma": "3º PERÍODO\nLic. Pedagogia"
    }
  ],
  "Unidade Curricular de Extensão": [
    {
      "professor": "Aldo Gomes",
      "turma": "5º PERÍODO\nLic. Química"
    }
  ],
  "Unidades de Conservação": [
    {
      "professor": "Alessandro",
      "turma": "7º PERÍODO\nEng. Florestal"
    }
  ],
  "Zoologia Comparada de Invertebrados I": [
    {
      "professor": "Filipe",
      "turma": "1º PERÍODO\nLic. Biológicas"
    }
  ],
  "Zoologia Comparada de Vertebrados": [
    {
      "professor": "Tatianne",
      "turma": "3º PERÍODO\nLic. Biológicas"
    }
  ],
  "Zoologia Geral": [
    {
      "professor": "Filipe",
      "turma": "1º PERÍODO\nEng. Florestal"
    }
  ],
  "ÁLGEBRA LINEAR II": [
    {
      "professor": "Marco Aurélio",
      "turma": "3º PERÍODO\nLic. Matemática"
    }
  ]}

async function verificarFaltantes() {
  console.log("🔍 Mapeando os dados do Seed...");
  
  // 2. Transforma o seu JSON em uma lista plana mais fácil de checar
  const listaEsperada = [];
  for (const [nomeDisciplina, alocacoes] of Object.entries(seedData)) {
    for (const alocacao of (alocacoes as any[])) {
      listaEsperada.push({
        disciplina: nomeDisciplina.trim(),
        professor: alocacao.professor.trim(),
        // Troca o \n por espaço normal para evitar falsos positivos
        turma: alocacao.turma.replace('\n', ' ').trim() 
      });
    }
  }

  console.log(`📊 Total esperado do Seed: ${listaEsperada.length} aulas cadastradas`);

  // 3. Puxa o banco de dados inteiro (trazendo os nomes do prof e turma juntos)
  const disciplinasNoBanco = await prisma.disciplina.findMany({
    include: {
      professor: true,
      turma: true
    }
  });

  // 4. Cria um "registro digital" de cada disciplina do banco para busca rápida
  // Tudo em minúsculo e sem espaços extras para a comparação ser à prova de falhas
  const bancoNormalizado = new Set(
    disciplinasNoBanco.map(d => {
      const profNome = d.professor?.nome || '';
      const turmaNome = d.turma?.nome || '';
      return `${d.nome}-${profNome}-${turmaNome}`.toLowerCase().replace(/\s+/g, ' ');
    })
  );

  console.log(`📊 Total salvo no Banco: ${disciplinasNoBanco.length} aulas cadastradas\n`);

  // 5. O Grande Filtro: quem está na lista esperada mas não está no banco?
  const faltantes = [];

  for (const item of listaEsperada) {
    const chaveEsperada = `${item.disciplina}-${item.professor}-${item.turma}`.toLowerCase().replace(/\s+/g, ' ');
    
    if (!bancoNormalizado.has(chaveEsperada)) {
      faltantes.push(item);
    }
  }

  // 6. Relatório Final
  if (faltantes.length === 0) {
    console.log("✅ Tudo perfeito! O banco está idêntico ao Seed.");
  } else {
    console.log("🚨 ITENS QUE NÃO FORAM SALVOS NO BANCO:");
    faltantes.forEach(f => {
      console.log(`❌ Falta -> Disciplina: "${f.disciplina}" | Prof: "${f.professor}" | Turma: "${f.turma}"`);
    });
    console.log(`\nTotal que ficou de fora: ${faltantes.length}`);
  }
}

verificarFaltantes()
  .catch(e => console.error("Erro no script:", e))
  .finally(async () => await prisma.$disconnect());