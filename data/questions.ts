export interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  dificuldade: string
}

export interface Tema {
  descricao: string
  perguntas: Question[]
}

export interface TemasType {
  [key: string]: Tema
}

export const temas: TemasType = {
  ciencia: {
    descricao: "Teste seus conhecimentos sobre física, química, biologia e astronomia",
    perguntas: [
      // Fácil
      {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Júpiter", "Saturno", "Netuno"],
        correctAnswer: 1,
        explanation: "Júpiter é o maior planeta do Sistema Solar, com uma massa maior que todos os outros planetas combinados!",
        dificuldade: "facil"
      },
      {
        question: "Qual é a fórmula química da água?",
        options: ["H2O", "CO2", "NaCl", "CH4"],
        correctAnswer: 0,
        explanation: "A fórmula química da água é H2O, indicando que cada molécula contém dois átomos de hidrogênio e um de oxigênio.",
        dificuldade: "facil"
      },
      {
        question: "Qual é o órgão responsável pela produção de insulina no corpo humano?",
        options: ["Fígado", "Pâncreas", "Rins", "Estômago"],
        correctAnswer: 1,
        explanation: "O pâncreas é o órgão responsável pela produção de insulina, hormônio que regula os níveis de açúcar no sangue.",
        dificuldade: "facil"
      },
      {
        question: "Qual é o elemento químico representado pelo símbolo 'O'?",
        options: ["Ouro", "Oxigênio", "Ósmio", "Oganesson"],
        correctAnswer: 1,
        explanation: "O símbolo 'O' representa o oxigênio, um elemento essencial para a respiração dos seres vivos.",
        dificuldade: "facil"
      },
      {
        question: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?",
        options: ["Fotossíntese", "Respiração", "Digestão", "Fermentação"],
        correctAnswer: 0,
        explanation: "A fotossíntese é o processo pelo qual as plantas utilizam luz solar, água e dióxido de carbono para produzir glicose e oxigênio.",
        dificuldade: "facil"
      },
      
      // Médio
      {
        question: "Qual é a velocidade da luz no vácuo?",
        options: ["300.000 km/s", "299.792.458 m/s", "150.000 km/s", "500.000 km/s"],
        correctAnswer: 1,
        explanation: "A velocidade da luz no vácuo é exatamente 299.792.458 metros por segundo, uma constante fundamental da física.",
        dificuldade: "medio"
      },
      {
        question: "Qual é o elemento químico mais abundante no universo?",
        options: ["Oxigênio", "Carbono", "Hidrogênio", "Hélio"],
        correctAnswer: 2,
        explanation: "O hidrogênio é o elemento mais abundante no universo, constituindo cerca de 75% de toda a matéria bariônica.",
        dificuldade: "medio"
      },
      {
        question: "Qual é a unidade de medida da corrente elétrica?",
        options: ["Volt", "Watt", "Ampere", "Ohm"],
        correctAnswer: 2,
        explanation: "O ampere (A) é a unidade de medida da corrente elétrica no Sistema Internacional de Unidades (SI).",
        dificuldade: "medio"
      },
      {
        question: "Qual é o nome do processo de divisão celular que resulta em células com metade do número de cromossomos?",
        options: ["Mitose", "Meiose", "Citocinese", "Interfase"],
        correctAnswer: 1,
        explanation: "A meiose é o tipo de divisão celular que resulta em células com metade do número de cromossomos, essencial para a reprodução sexuada.",
        dificuldade: "medio"
      },
      {
        question: "Qual é o gás responsável pelo efeito estufa que mais contribui para o aquecimento global?",
        options: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Metano"],
        correctAnswer: 2,
        explanation: "O dióxido de carbono (CO2) é o principal gás de efeito estufa responsável pelo aquecimento global, principalmente devido à queima de combustíveis fósseis.",
        dificuldade: "medio"
      },
      
      // Difícil
      {
        question: "Qual partícula subatômica foi prevista teoricamente por Paul Dirac antes de ser descoberta experimentalmente?",
        options: ["Próton", "Nêutron", "Pósitron", "Quark"],
        correctAnswer: 2,
        explanation: "O pósitron, a antipartícula do elétron, foi previsto teoricamente por Paul Dirac em 1928 e descoberto experimentalmente por Carl Anderson em 1932.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome da teoria que unifica a mecânica quântica e a relatividade especial?",
        options: ["Teoria das Cordas", "Teoria Quântica de Campos", "Teoria da Grande Unificação", "Teoria do Tudo"],
        correctAnswer: 1,
        explanation: "A Teoria Quântica de Campos é o framework que unifica a mecânica quântica e a relatividade especial, sendo a base para o Modelo Padrão da física de partículas.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome do fenômeno quântico no qual partículas distantes podem influenciar instantaneamente o estado uma da outra?",
        options: ["Superposição", "Dualidade onda-partícula", "Emaranhamento quântico", "Princípio da incerteza"],
        correctAnswer: 2,
        explanation: "O emaranhamento quântico é o fenômeno no qual partículas interagem de tal forma que o estado quântico de cada uma não pode ser descrito independentemente das outras, mesmo quando separadas por grandes distâncias.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome da enzima que catalisa a replicação do DNA?",
        options: ["DNA polimerase", "RNA polimerase", "Helicase", "Ligase"],
        correctAnswer: 0,
        explanation: "A DNA polimerase é a enzima responsável por catalisar a adição de nucleotídeos durante a replicação do DNA, sintetizando novas fitas a partir de um molde.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome do processo pelo qual uma estrela como o Sol se transformará no final de sua vida?",
        options: ["Supernova", "Anã branca", "Buraco negro", "Estrela de nêutrons"],
        correctAnswer: 1,
        explanation: "O Sol, por ter massa intermediária, se transformará em uma anã branca no final de sua vida, após expandir-se como gigante vermelha e ejetar suas camadas externas formando uma nebulosa planetária.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome da teoria proposta por Albert Einstein que descreve a gravidade como uma curvatura no espaço-tempo?",
        options: ["Teoria da Relatividade Especial", "Teoria da Relatividade Geral", "Teoria Quântica da Gravidade", "Teoria do Campo Unificado"],
        correctAnswer: 1,
        explanation: "A Teoria da Relatividade Geral, publicada por Einstein em 1915, descreve a gravidade não como uma força, mas como uma curvatura no tecido do espaço-tempo causada pela presença de massa e energia.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome do mecanismo pelo qual as células danificadas se autodestruem para prevenir o desenvolvimento de câncer?",
        options: ["Mitose", "Meiose", "Apoptose", "Necrose"],
        correctAnswer: 2,
        explanation: "A apoptose é o processo de morte celular programada que permite ao organismo eliminar células danificadas ou potencialmente cancerígenas de forma controlada.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome do fenômeno que explica por que o céu é azul durante o dia?",
        options: ["Refração", "Difração", "Espalhamento de Rayleigh", "Efeito Doppler"],
        correctAnswer: 2,
        explanation: "O espalhamento de Rayleigh explica por que o céu é azul: as moléculas da atmosfera espalham mais eficientemente a luz de comprimentos de onda curtos (azul) do que a de comprimentos de onda longos (vermelho).",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome da lei da termodinâmica que afirma que a entropia do universo tende a aumentar?",
        options: ["Primeira Lei", "Segunda Lei", "Terceira Lei", "Lei Zero"],
        correctAnswer: 1,
        explanation: "A Segunda Lei da Termodinâmica estabelece que a entropia total de um sistema isolado sempre aumenta com o tempo, ou permanece constante em processos reversíveis ideais.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome do efeito pelo qual a frequência de uma onda muda quando a fonte e o observador estão em movimento relativo?",
        options: ["Efeito fotoelétrico", "Efeito Doppler", "Efeito Compton", "Efeito Tyndall"],
        correctAnswer: 1,
        explanation: "O efeito Doppler é o fenômeno pelo qual a frequência de uma onda (sonora, luminosa, etc.) muda para o observador quando há movimento relativo entre a fonte e o observador.",
        dificuldade: "dificil"
      }
    ]
  },
  historia: {
    descricao: "Desafie-se com perguntas sobre eventos históricos, civilizações antigas e personagens importantes",
    perguntas: [
      // Fácil
      {
        question: "Em que ano o Brasil foi descoberto pelos portugueses?",
        options: ["1498", "1500", "1502", "1504"],
        correctAnswer: 1,
        explanation: "O Brasil foi descoberto por Pedro Álvares Cabral em 22 de abril de 1500.",
        dificuldade: "facil"
      },
      {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Dom Pedro I", "Dom Pedro II", "Marechal Deodoro da Fonseca", "Getúlio Vargas"],
        correctAnswer: 2,
        explanation: "Marechal Deodoro da Fonseca foi o primeiro presidente do Brasil, governando de 1889 a 1891, após a Proclamação da República.",
        dificuldade: "facil"
      },
      {
        question: "Em que ano começou a Primeira Guerra Mundial?",
        options: ["1912", "1914", "1916", "1918"],
        correctAnswer: 1,
        explanation: "A Primeira Guerra Mundial começou em 28 de julho de 1914, após o assassinato do arquiduque Francisco Ferdinando da Áustria.",
        dificuldade: "facil"
      },
      {
        question: "Qual foi o nome do movimento liderado por Mahatma Gandhi para libertar a Índia do domínio britânico?",
        options: ["Revolução Indiana", "Movimento de Independência", "Satyagraha", "Movimento de Não-Violência"],
        correctAnswer: 2,
        explanation: "Satyagraha, que significa 'firmeza na verdade', foi o movimento de resistência não-violenta liderado por Gandhi contra o domínio colonial britânico na Índia.",
        dificuldade: "facil"
      },
      {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswer: 1,
        explanation: "A Mona Lisa foi pintada pelo artista italiano Leonardo da Vinci entre 1503 e 1506, sendo uma das obras de arte mais famosas do mundo.",
        dificuldade: "facil"
      },
      
      // Médio
      {
        question: "Em que ano aconteceu a Revolução Francesa?",
        options: ["1776", "1789", "1804", "1815"],
        correctAnswer: 1,
        explanation: "A Revolução Francesa começou em 1789 com a Queda da Bastilha em 14 de julho, marcando o início de profundas transformações políticas e sociais na França e na Europa.",
        dificuldade: "medio"
      },
      {
        question: "Qual imperador romano adotou o cristianismo como religião oficial do Império Romano?",
        options: ["Júlio César", "Augusto", "Nero", "Constantino"],
        correctAnswer: 3,
        explanation: "Constantino, o Grande, foi o primeiro imperador romano a converter-se ao cristianismo e a legalizar a religião com o Édito de Milão em 313 d.C.",
        dificuldade: "medio"
      },
      {
        question: "Qual foi o nome do tratado que dividiu as terras do 'Novo Mundo' entre Portugal e Espanha?",
        options: ["Tratado de Madrid", "Tratado de Tordesilhas", "Tratado de Utrecht", "Tratado de Lisboa"],
        correctAnswer: 1,
        explanation: "O Tratado de Tordesilhas, assinado em 1494, dividiu as terras recém-descobertas entre Portugal e Espanha, estabelecendo uma linha imaginária 370 léguas a oeste de Cabo Verde.",
        dificuldade: "medio"
      },
      {
        question: "Qual foi o período da história brasileira conhecido como 'República Velha'?",
        options: ["1889-1930", "1930-1945", "1945-1964", "1964-1985"],
        correctAnswer: 0,
        explanation: "A República Velha, também conhecida como Primeira República, foi o período da história do Brasil entre 1889 (Proclamação da República) e 1930 (Revolução de 1930).",
        dificuldade: "medio"
      },
      {
        question: "Qual foi o nome da operação militar que marcou o desembarque das tropas aliadas na Normandia durante a Segunda Guerra Mundial?",
        options: ["Operação Barbarossa", "Operação Market Garden", "Operação Overlord", "Operação Torch"],
        correctAnswer: 2,
        explanation: "A Operação Overlord, realizada em 6 de junho de 1944 (Dia D), foi o codinome para o desembarque das tropas aliadas nas praias da Normandia, na França ocupada pelos nazistas.",
        dificuldade: "medio"
      },
      
      // Difícil
      {
        question: "Qual foi o nome do último imperador da China, que abdicou em 1912?",
        options: ["Hongwu", "Guangxu", "Puyi", "Qianlong"],
        correctAnswer: 2,
        explanation: "Puyi foi o último imperador da China, da dinastia Qing. Ele ascendeu ao trono em 1908 com apenas dois anos de idade e abdicou em 1912, após a Revolução Xinhai que estabeleceu a República da China.",
        dificuldade: "dificil"
      },
      {
        question: "Qual foi o nome do tratado que encerrou oficialmente a Primeira Guerra Mundial?",
        options: ["Tratado de Versalhes", "Tratado de Paris", "Tratado de Brest-Litovsk", "Tratado de Saint-Germain"],
        correctAnswer: 0,
        explanation: "O Tratado de Versalhes, assinado em 28 de junho de 1919, encerrou oficialmente a Primeira Guerra Mundial e impôs severas penalidades à Alemanha, contribuindo para o cenário que levaria à Segunda Guerra Mundial.",
        dificuldade: "dificil"
      },
      {
        question: "Qual foi o nome da revolta popular ocorrida em São Paulo e Minas Gerais em 1932 contra o governo de Getúlio Vargas?",
        options: ["Revolta da Vacina", "Revolução Federalista", "Revolução Constitucionalista", "Revolta da Chibata"],
        correctAnswer: 2,
        explanation: "A Revolução Constitucionalista de 1932 foi um movimento armado que ocorreu em São Paulo, com apoio de Minas Gerais, exigindo a promulgação de uma nova constituição e o fim do governo provisório de Getúlio Vargas.",
        dificuldade: "dificil"
      },
      {
        question: "Qual foi o nome do período de reformas econômicas e políticas implementadas por Mikhail Gorbachev na União Soviética?",
        options: ["Glasnost", "Perestroika", "Détente", "Nomenklatura"],
        correctAnswer: 1,
        explanation: "Perestroika ('reestruturação') foi o nome dado às reformas econômicas e políticas implementadas por Mikhail Gorbachev na União Soviética entre 1985 e 1991, que contribuíram para o fim do regime comunista.",
        dificuldade: "dificil"
      },
      {
        question: "Qual civilização antiga desenvolveu o primeiro sistema de escrita conhecido como cuneiforme?",
        options: ["Egípcios", "Sumérios", "Hititas", "Fenícios"],
        correctAnswer: 1,
        explanation: "Os sumérios, que viveram na Mesopotâmia (atual Iraque) por volta de 3500 a.C., desenvolveram o primeiro sistema de escrita conhecido, a escrita cuneiforme, feita com cunhas em tabuletas de argila.",
        dificuldade: "dificil"
      },
      {
        question: "Qual foi o nome do conflito entre Inglaterra e França que durou de 1337 a 1453?",
        options: ["Guerra dos Cem Anos", "Guerra das Rosas", "Guerra dos Sete Anos", "Guerra da Sucessão Espanhola"],
        correctAnswer: 0,
        explanation: "A Guerra dos Cem Anos foi uma série de conflitos entre Inglaterra e França de 1337 a 1453 (116 anos) pela sucessão ao trono francês e controle de territórios na França.",
        dificuldade: "dificil"
      },
      {
        question: "Qual foi o nome do movimento artístico e cultural que surgiu na Itália no século XIV e se espalhou pela Europa?",
        options: ["Iluminismo", "Barroco", "Renascimento", "Romantismo"],
        correctAnswer: 2,
        explanation: "O Renascimento foi um movimento cultural, artístico e científico que começou na Itália no século XIV e se espalhou pela Europa, marcando a transição da Idade Média para a Idade Moderna.",
        dificuldade: "dificil"
      },
      {
        question: "Qual foi o nome do acordo assinado em 1938 que permitiu à Alemanha nazista anexar parte da Tchecoslováquia?",
        options: ["Pacto de Varsóvia", "Acordo de Munique", "Tratado de Locarno", "Pacto Molotov-Ribbentrop"],
        correctAnswer: 1,
        explanation: "O Acordo de Munique, assinado em setembro de 1938 por Alemanha, Reino Unido, França e Itália, permitiu à Alemanha nazista anexar a região dos Sudetos da Tchecoslováquia, em uma política de apaziguamento que fracassou em evitar a Segunda Guerra Mundial.",
        dificuldade: "dificil"
      },
      {
        question: "Qual foi o nome da dinastia que governou a China de 1368 a 1644?",
        options: ["Dinastia Han", "Dinastia Tang", "Dinastia Ming", "Dinastia Qing"],
        correctAnswer: 2,
        explanation: "A Dinastia Ming governou a China de 1368 a 1644, sendo um período de estabilidade política, desenvolvimento social e expansão do comércio internacional, incluindo a construção da Cidade Proibida e a reconstrução da Grande Muralha.",
        dificuldade: "dificil"
      },
      {
        question: "Qual foi o nome do movimento revolucionário russo de 1917 que derrubou o governo provisório e levou os bolcheviques ao poder?",
        options: ["Revolução de Fevereiro", "Revolução de Outubro", "Domingo Sangrento", "Revolta Dezembrista"],
        correctAnswer: 1,
        explanation: "A Revolução de Outubro (que ocorreu em novembro pelo calendário gregoriano) foi o levante liderado por Vladimir Lenin e os bolcheviques em 1917 que derrubou o governo provisório russo e estabeleceu o primeiro estado socialista do mundo.",
        dificuldade: "dificil"
      }
    ]
  },
  geografia: {
    descricao: "Explore seus conhecimentos sobre países, capitais, relevo, clima e fenômenos geográficos",
    perguntas: [
      // Fácil
      {
        question: "Qual é a capital da Austrália?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2,
        explanation: "Canberra é a capital da Austrália, embora Sydney e Melbourne sejam cidades maiores e mais conhecidas.",
        dificuldade: "facil"
      },
      {
        question: "Qual é o maior país do mundo em área territorial?",
        options: ["China", "Estados Unidos", "Brasil", "Rússia"],
        correctAnswer: 3,
        explanation: "A Rússia é o maior país do mundo em área territorial, com aproximadamente 17 milhões de km².",
        dificuldade: "facil"
      },
      {
        question: "Qual é o rio mais extenso do Brasil?",
        options: ["Rio São Francisco", "Rio Paraná", "Rio Amazonas", "Rio Tocantins"],
        correctAnswer: 2,
        explanation: "O Rio Amazonas é o mais extenso do Brasil e também o maior rio do mundo em volume de água.",
        dificuldade: "facil"
      },
      {
        question: "Em qual continente está localizado o Egito?",
        options: ["Ásia", "África", "Europa", "Oceania"],
        correctAnswer: 1,
        explanation: "O Egito está localizado no nordeste da África, embora uma pequena parte de seu território (a Península do Sinai) esteja na Ásia.",
        dificuldade: "facil"
      },
      {
        question: "Qual é o maior oceano do mundo?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
        correctAnswer: 2,
        explanation: "O Oceano Pacífico é o maior oceano do mundo, cobrindo cerca de um terço da superfície terrestre.",
        dificuldade: "facil"
      },
      
      // Médio
      {
        question: "Qual é o país com o maior número de fronteiras terrestres?",
        options: ["Rússia", "China", "Brasil", "França"],
        correctAnswer: 1,
        explanation: "A China faz fronteira com 14 países: Afeganistão, Butão, Índia, Cazaquistão, Quirguistão, Laos, Mongólia, Myanmar, Nepal, Coreia do Norte, Paquistão, Rússia, Tajiquistão e Vietnã.",
        dificuldade: "medio"
      },
      {
        question: "Qual é o menor país do mundo em área territorial?",
        options: ["Mônaco", "Vaticano", "Nauru", "San Marino"],
        correctAnswer: 1,
        explanation: "O Vaticano é o menor país do mundo, com apenas 0,44 km² de área.",
        dificuldade: "medio"
      },
      {
        question: "Qual é o nome do estreito que separa a Ásia da América do Norte?",
        options: ["Estreito de Gibraltar", "Estreito de Bering", "Estreito de Malaca", "Estreito de Magalhães"],
        correctAnswer: 1,
        explanation: "O Estreito de Bering separa a Ásia (Rússia) da América do Norte (Alasca, EUA), com aproximadamente 85 km de largura no seu ponto mais estreito.",
        dificuldade: "medio"
      },
      {
        question: "Qual é o ponto mais alto do Brasil?",
        options: ["Pico da Neblina", "Pico da Bandeira", "Monte Roraima", "Pico das Agulhas Negras"],
        correctAnswer: 0,
        explanation: "O Pico da Neblina, localizado na Serra do Imeri, na fronteira com a Venezuela, é o ponto mais alto do Brasil, com 2.995 metros de altitude.",
        dificuldade: "medio"
      },
      {
        question: "Qual é o maior deserto do mundo?",
        options: ["Deserto do Saara", "Deserto da Arábia", "Deserto de Gobi", "Deserto da Antártida"],
        correctAnswer: 3,
        explanation: "O Deserto da Antártida é considerado o maior deserto do mundo, pois desertos são definidos pela baixa precipitação, não necessariamente pelo calor. A Antártida recebe menos de 200 mm de precipitação por ano.",
        dificuldade: "medio"
      },
      
      // Difícil
      {
        question: "Qual é o nome do fenômeno climático caracterizado pelo aquecimento anormal das águas do Oceano Pacífico equatorial?",
        options: ["La Niña", "El Niño", "Monção", "Ciclone"],
        correctAnswer: 1,
        explanation: "El Niño é um fenômeno climático caracterizado pelo aquecimento anormal das águas superficiais do Oceano Pacífico equatorial, que afeta os padrões climáticos globais.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome da linha imaginária que divide a Terra em duas partes iguais, Norte e Sul?",
        options: ["Trópico de Câncer", "Círculo Polar Ártico", "Equador", "Meridiano de Greenwich"],
        correctAnswer: 2,
        explanation: "O Equador é a linha imaginária que circunda a Terra, equidistante dos polos, dividindo o planeta em Hemisfério Norte e Hemisfério Sul.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o país com território em dois continentes diferentes?",
        options: ["Rússia", "Turquia", "Egito", "Todas as alternativas anteriores"],
        correctAnswer: 3,
        explanation: "Todas as alternativas estão corretas. A Rússia tem território na Europa e na Ásia, a Turquia também está na Europa e na Ásia, e o Egito tem a maior parte do seu território na África, mas a Península do Sinai está na Ásia.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome do processo de formação de montanhas causado pelo choque entre placas tectônicas?",
        options: ["Erosão", "Sedimentação", "Orogênese", "Vulcanismo"],
        correctAnswer: 2,
        explanation: "Orogênese é o processo geológico de formação de montanhas causado principalmente pelo choque entre placas tectônicas, que comprime e eleva a crosta terrestre.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome da corrente marítima fria que flui ao longo da costa oeste da América do Sul?",
        options: ["Corrente do Golfo", "Corrente de Humboldt", "Corrente do Brasil", "Corrente de Benguela"],
        correctAnswer: 1,
        explanation: "A Corrente de Humboldt (ou Corrente do Peru) é uma corrente marítima fria que flui ao longo da costa oeste da América do Sul, influenciando o clima e a biodiversidade marinha da região.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome do fenômeno geológico caracterizado pelo afundamento gradual de uma área da crosta terrestre?",
        options: ["Subsidência", "Soerguimento", "Abrasão", "Intemperismo"],
        correctAnswer: 0,
        explanation: "Subsidência é o processo geológico de afundamento gradual de uma área da crosta terrestre, que pode ocorrer por causas naturais (dissolução de rochas, compactação de sedimentos) ou antrópicas (extração de água subterrânea ou petróleo).",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome do sistema de coordenadas geográficas que utiliza latitude e longitude para localizar pontos na superfície terrestre?",
        options: ["Sistema UTM", "Sistema Cartesiano", "Sistema Geodésico", "Sistema de Projeção de Mercator"],
        correctAnswer: 2,
        explanation: "O Sistema Geodésico é o sistema de coordenadas geográficas que utiliza latitude (paralelos) e longitude (meridianos) para localizar com precisão qualquer ponto na superfície terrestre.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome do processo de transformação de áreas férteis em desertos devido à ação humana ou mudanças climáticas?",
        options: ["Erosão", "Desertificação", "Lixiviação", "Assoreamento"],
        correctAnswer: 1,
        explanation: "Desertificação é o processo de degradação do solo que transforma áreas férteis em desertos ou regiões áridas, causado por fatores como desmatamento, práticas agrícolas inadequadas, sobrepastoreio e mudanças climáticas.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome da teoria que explica a formação dos continentes atuais a partir de um supercontinente chamado Pangeia?",
        options: ["Teoria da Evolução", "Teoria da Relatividade", "Teoria da Deriva Continental", "Teoria do Big Bang"],
        correctAnswer: 2,
        explanation: "A Teoria da Deriva Continental, proposta por Alfred Wegener em 1912, explica que os continentes atuais se formaram a partir da fragmentação de um supercontinente chamado Pangeia. Esta teoria evoluiu para a atual Teoria das Placas Tectônicas.",
        dificuldade: "dificil"
      },
      {
        question: "Qual é o nome do fenômeno atmosférico caracterizado pela inversão da direção dos ventos alísios no Oceano Índico?",
        options: ["El Niño", "La Niña", "Monção", "Furacão"],
        correctAnswer: 2,
        explanation: "Monção é o sistema de ventos sazonais que muda de direção conforme a estação do ano, especialmente no sul e sudeste da Ásia. Durante o verão, sopram do oceano para o continente (trazendo chuvas), e no inverno, do continente para o oceano (período seco).",
        dificuldade: "dificil"
      }
    ]
  },
  portugues: {
    descricao: "Teste seus conhecimentos sobre gramática, literatura e língua portuguesa",
    perguntas: [
      // Fácil
      {
        question: "Qual é o plural de 'cidadão'?",
        options: ["Cidadões", "Cidadãos", "Cidadães",\
