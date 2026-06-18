// =====================================
//   DC TIMELINE — SCRIPT.JS
// =====================================

// --- DADOS DAS SAGAS ---
const sagas = [
  {
    id: 1,
    year: "1938",
    title: "A Origem do Superman",
    era: "golden",
    eraLabel: "Era de Ouro",
    icon: "🦸",
    summary:
      "Em 1938, Jerry Siegel e Joe Shuster apresentaram ao mundo o primeiro super-herói moderno: Superman. Publicado na Action Comics #1, Kal-El chega à Terra como bebê, enviado por seu pai Jor-El antes da destruição de Krypton. Criado pelos Kent em Smallville, Clark descobre seus poderes e decide proteger a humanidade como o Homem de Aço, estabelecendo o arquétipo do herói em quadrinhos que influenciaria toda a indústria.",
    events: [
      "Destruição de Krypton e fuga de Kal-El em um foguete",
      "Adoção por Jonathan e Martha Kent em Smallville",
      "Descoberta gradual de poderes sobre-humanos",
      "Mudança para Metrópolis e início da dupla identidade como Clark Kent",
      "Primeira aparição na Action Comics #1 em junho de 1938"
    ],
    consequences:
      "A criação do Superman inaugurou a Era de Ouro dos quadrinhos e definiu os pilares do gênero de super-heróis: identidade secreta, poderes extraordinários e a luta pelo bem. Sem o Superman, personagens como Batman, Mulher-Maravilha e toda a DC não existiriam como os conhecemos. Ele provou que quadrinhos podiam ser arte e entretenimento pop de massa.",
    writers: "Criação: Jerry Siegel (roteiro) & Joe Shuster (arte) — Action Comics #1, 1938"
  },
  {
    id: 2,
    year: "1939",
    title: "A Origem do Batman",
    era: "golden",
    eraLabel: "Era de Ouro",
    icon: "🦇",
    summary:
      "Um ano após o Superman, Bob Kane e Bill Finger criaram o Cavaleiro das Trevas. Bruce Wayne, filho de um médico e filântropo, assiste à morte de seus pais Thomas e Martha em um assalto num beco de Gotham City. O trauma molda sua vida inteira: ele treina corpo e mente ao máximo para se tornar o Batman, o maior detetive e vigilante do mundo. Diferente de Superman, Batman não tem poderes — apenas inteligência, riqueza, técnica e determinação.",
    events: [
      "Assassinato dos pais de Bruce Wayne por Joe Chill em um beco",
      "Juramento de Bruce sobre o túmulo dos pais para combater o crime",
      "Anos de treinamento pelo mundo com os melhores mestres",
      "Escolha do morcego como símbolo para aterrorizar criminosos",
      "Primeira aparição no Detective Comics #27 em maio de 1939"
    ],
    consequences:
      "Batman estabeleceu o arquétipo do herói sem superpoderes, provando que humanidade e determinação podem ser tão poderosas quanto capacidades sobre-humanas. Seu código moral — nunca matar — e sua relação com a justiça são debatidos até hoje. Gotham City se tornou um dos cenários mais ricos dos quadrinhos, e o Batman é atualmente o personagem DC mais adaptado para outros mídias.",
    writers: "Criação: Bob Kane & Bill Finger — Detective Comics #27, 1939"
  },
  {
    id: 3,
    year: "1941",
    title: "A Origem da Mulher-Maravilha",
    era: "golden",
    eraLabel: "Era de Ouro",
    icon: "⚔️",
    summary:
      "William Moulton Marston criou Diana, princesa das Amazonas de Themyscira, com a intenção explícita de criar um herói feminino que fosse um modelo de poder, bondade e justiça. Filha da rainha Hipólita, Diana deixa seu paraíso isolado para trazer paz ao mundo dos homens durante a Segunda Guerra Mundial. Ela porta a Tiara, as Pulseiras Inquebrável e o Laço da Verdade — artefatos que se tornam ícones culturais.",
    events: [
      "Steve Trevor cai em Themyscira e é resgatado pelas Amazonas",
      "Torneio entre as Amazonas para escolher quem irá ao mundo exterior",
      "Diana vence o torneio em segredo e parte com Trevor",
      "Adoção do traje e da identidade de Mulher-Maravilha",
      "Primeiras batalhas contra as forças do Eixo na 2ª Guerra Mundial"
    ],
    consequences:
      "A Mulher-Maravilha se tornou o maior símbolo feminino dos quadrinhos e da cultura pop global. Ela introduziu mitologia grega de forma acessível e estabeleceu que heroínas podem ser tão poderosas e complexas quanto heróis. Junto com Superman e Batman, forma a Santíssima Trindade da DC, presente em quase toda grande saga da editora.",
    writers: "Criação: William Moulton Marston & H.G. Peter — All Star Comics #8, 1941"
  },
  {
    id: 4,
    year: "1956",
    title: "O Surgimento do Flash",
    era: "silver",
    eraLabel: "Era de Prata",
    icon: "⚡",
    summary:
      "Em Showcase #4, Julius Schwartz reinventou o Flash, substituindo Jay Garrick pelo policial Barry Allen. Um acidente de laboratório envolve Allen em produtos químicos e raios, concedendo-lhe a capacidade de correr mais rápido do que a luz. Este evento inaugurou oficialmente a Era de Prata dos quadrinhos, um renascimento do gênero após anos de declínio. O novo Flash trouxe ciência-ficção e lógica para os poderes dos heróis.",
    events: [
      "Barry Allen é atingido por raios e produtos químicos em seu laboratório",
      "Descoberta da capacidade de mover-se à velocidade da luz",
      "Criação do traje vermelho armazenado em um anel especial",
      "Primeiros casos como o Homem Mais Rápido do Mundo",
      "Introdução do conceito de Força de Aceleração (Speed Force)"
    ],
    consequences:
      "O novo Flash reiniciou a Era de Ouro e abriu as portas para a recriação de todos os heróis clássicos. O conceito de Terra-2 (onde viviam os heróis originais) foi criado para resolver as inconsistências entre os dois Flash, plantando a semente do Multiverso DC — um dos elementos mais icônicos da editora. A Era de Prata trouxe de volta os quadrinhos ao mainstream.",
    writers: "Escrito por Robert Kanigher, arte de Carmine Infantino — Showcase #4, 1956"
  },
  {
    id: 5,
    year: "1960",
    title: "Surgimento da Liga da Justiça",
    era: "silver",
    eraLabel: "Era de Prata",
    icon: "🌟",
    summary:
      "A Liga da Justiça da América reuniu pela primeira vez os maiores heróis da DC em uma equipe. Superman, Batman, Mulher-Maravilha, Flash, Lanterna Verde, Aquaman e Marciano Caçador de Homens passaram a enfrentar ameaças que nenhum herói poderia enfrentar sozinho. A formação de um time de super-heróis foi uma ideia revolucionária que logo inspiraria a Marvel a criar os X-Men e os Vingadores.",
    events: [
      "Primeira missão unindo todos os heróis contra Starro, o Conquistador",
      "Estabelecimento do Quartel-General na Lua (mais tarde a Torre da Justiça)",
      "Definição de protocolos de crise e comunicação entre os membros",
      "Criação do conceito de equipe hierárquica de super-heróis",
      "Publicação no The Brave and the Bold #28, fevereiro de 1960"
    ],
    consequences:
      "A JLA estabeleceu que heróis individuais poderiam compartilhar um mesmo universo coeso, conceito que se tornou fundamental para os quadrinhos modernos. Cada crossover da DC, cada evento de grande escala, herda diretamente esse legado. A Liga se tornou o grupo de referência para equipes de super-heróis em toda a mídia, da animação ao cinema.",
    writers: "Criação: Gardner Fox & Mike Sekowsky — The Brave and the Bold #28, 1960"
  },
  {
    id: 6,
    year: "1970",
    title: "A Morte de Gwen Stacy / O Novo Quarto Mundo",
    era: "bronze",
    eraLabel: "Era de Bronze",
    icon: "🌌",
    summary:
      "Jack Kirby migrou para a DC e criou o Quarto Mundo, uma saga épica sobre a guerra entre Nova Gênese e Apokolips. Darkseid, um dos maiores vilões dos quadrinhos, surge como um tirano divino em busca da Anti-Vida Equação — uma fórmula matemática capaz de subjugar toda forma de vida à sua vontade. As histórias de Kirby exploraram mitologia cósmica de escala nunca vista, redefinindo o escopo dos quadrinhos.",
    events: [
      "Criação de Apokolips e Nova Gênese como planetas-deuses opostos",
      "Surgimento de Darkseid, filho de Heggra, como senhor de Apokolips",
      "Introdução de Orion, filho de Darkseid criado em Nova Gênese como garantia de paz",
      "Revelação da Anti-Vida Equação e sua ameaça existencial",
      "Publicação em New Gods, Forever People e Mister Miracle (1971)"
    ],
    consequences:
      "O Quarto Mundo de Kirby introduziu Darkseid, que se tornaria o vilão cósmico definitivo da DC. A Anti-Vida Equação e o conceito de Apokolips moldaram eventos futuros como a Crise nas Infinitas Terras e a Final Crisis. Darkseid é frequentemente considerado o análogo DC de Thanos — curiosamente, Thanos foi inspirado em Darkseid pela Marvel.",
    writers: "Criação de Jack Kirby — New Gods, Forever People, Mister Miracle (1971)"
  },
  {
    id: 7,
    year: "1973",
    title: "A Morte de Gwen Stacy (DC Response)",
    era: "bronze",
    eraLabel: "Era de Bronze",
    icon: "💀",
    summary:
      "A Era de Bronze foi marcada por histórias mais sombrias e realistas. Na DC, isso se manifestou com O Espantalho de Deus (Green Lantern/Green Arrow) de Dennis O'Neil e Neal Adams, que abordou diretamente drogas, racismo e pobreza. Hal Jordan enfrenta um dilema ao ver seu companheiro Roy Harper viciado em heroína — até então um tema impensável nos quadrinhos.",
    events: [
      "Green Arrow descobre que Roy Harper (Speedy) está viciado em heroína",
      "Confronto direto com a realidade das drogas nas ruas americanas",
      "Green Lantern questiona sua missão ao ver pobreza e injustiça ignoradas",
      "Publicação sem a aprovação do Comics Code Authority pela primeira vez",
      "A DC e a Marvel abrem o caminho para temas adultos nos quadrinhos"
    ],
    consequences:
      "A série abriu as portas para quadrinhos que tratavam de temas sociais reais. Isso influenciou diretamente obras futuras como Watchmen, Batman: The Dark Knight Returns e outras histórias que tornaram os quadrinhos literatura respeitada. O Comics Code, outrora absoluto, começou a perder relevância.",
    writers: "Dennis O'Neil (roteiro) & Neal Adams (arte) — Green Lantern #76–89, 1970–1972"
  },
  {
    id: 8,
    year: "1985",
    title: "Crise nas Infinitas Terras",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🌀",
    summary:
      "O Anti-Monitor, ser primordial nascido ao mesmo tempo que o Monitor no Big Bang, inicia uma guerra para destruir todo o Multiverso DC e substituí-lo pelo seu Anti-Universo. Ao longo de 12 edições, incontáveis universos paralelos são eliminados, heróis e vilões lutam lado a lado, e personagens icônicos morrem. Supergirl dá sua vida para salvar Superman. Barry Allen (Flash) corre mais rápido do que qualquer coisa para destruir o canhão de antimatéria, se desintegrando no processo.",
    events: [
      "O Anti-Monitor começa a devorar universos paralelos com ondas de antimatéria",
      "Morte de Supergirl (Kara Zor-El) ao enfrentar o Anti-Monitor",
      "Barry Allen (Flash) sacrifica sua vida destruindo o canhão de antimatéria",
      "Os inúmeros Earths do Multiverso são fundidos em uma única Terra",
      "O Multiverso DC é simplificado, apagando décadas de continuidade"
    ],
    consequences:
      "A Crise nas Infinitas Terras reiniciou completamente o universo DC, fundindo todas as Terras em uma só e permitindo refazer as origens de personagens como Superman, Batman e Mulher-Maravilha. Foi o primeiro grande evento de crossover da história dos quadrinhos. O sacrifício do Flash se tornou lendário, e sua ressurreição anos depois gerou outra saga icônica.",
    writers: "Marv Wolfman (roteiro) & George Pérez (arte) — Crisis on Infinite Earths #1–12, 1985–1986"
  },
  {
    id: 9,
    year: "1986",
    title: "Batman: O Cavaleiro das Trevas",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🌑",
    summary:
      "Frank Miller imaginou um futuro distópico onde um Bruce Wayne de 55 anos, aposentado há uma década, retorna como Batman diante de um Gotham dominado pelo crime. Com o corpo debilitado mas a mente afiada, ele enfrenta os Mutantes, vê Jason Todd morrer, e tem um confronto épico e ideológico com um Superman controlado pelo governo americano. A minissérie redefiniu o que Batman poderia ser: não um herói de fantasia, mas um símbolo de obsessão, medo e resistência.",
    events: [
      "Bruce Wayne retorna como Batman aos 55 anos, impelido pela violência crescente",
      "Derrota do líder dos Mutantes em batalha física e psicológica",
      "Carrie Kelly torna-se a nova Robin sem aprovação formal de Batman",
      "Confronto com o Coringa, que culmina na morte do vilão",
      "Batalha final e catártica com Superman, resultado de conflito ideológico"
    ],
    consequences:
      "The Dark Knight Returns transformou permanentemente a imagem do Batman, de herói camp dos anos 60 para ícone sombrio e complexo. Junto com Watchmen, lançado no mesmo ano, inaugurou a era dos quadrinhos para adultos e elevou o meio à categoria de literatura. Tim Burton e todos os filmes subsequentes foram diretamente influenciados por essa obra.",
    writers: "Frank Miller (roteiro e arte) com Lynn Varley (cores) — Batman: The Dark Knight Returns #1–4, 1986"
  },
  {
    id: 10,
    year: "1986",
    title: "Watchmen",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🕐",
    summary:
      "Alan Moore e Dave Gibbons desconstruíram o arquétipo do super-herói em doze edições que mudaram os quadrinhos para sempre. Em uma América alternativa dos anos 80 à beira da guerra nuclear, um grupo de vigilantes aposentados é convocado após o assassinato de um colega. A investigação revela uma conspiração macabra e questiona fundamentalmente o que significa ser herói, o uso de violência para o 'bem', e a natureza da moralidade.",
    events: [
      "Assassinato do Comediante inicia a investigação de Rorschach",
      "Dr. Manhattan é transportado para Marte após acusações públicas de câncer",
      "Revelação de que Ozymandias planeja matar milhões para evitar a guerra nuclear",
      "Morte de Rorschach por Dr. Manhattan ao recusar-se a guardar o segredo",
      "O Plano de Ozymandias tem sucesso, mas Rorschach deixa seu diário como legado"
    ],
    consequences:
      "Watchmen é considerado a obra-prima dos quadrinhos ocidentais e o texto que provou de forma irrefutável que o meio é literatura. Influenciou toda obra de ficção científica e superhero nos 40 anos seguintes. O personagem de Rorschach, em particular, tornou-se um dos ícones culturais mais complexos e mal compreendidos da ficção moderna.",
    writers: "Alan Moore (roteiro) & Dave Gibbons (arte) — Watchmen #1–12, 1986–1987"
  },
  {
    id: 11,
    year: "1988",
    title: "Batman: A Piada Mortal",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🃏",
    summary:
      "Alan Moore apresentou a origem definitiva do Coringa — um comediante fracassado que vive 'um dia ruim' e enlouquece completamente. Na história, o Coringa atira e paralisa Barbara Gordon (Batgirl) e rapta o comissário James Gordon para provar que qualquer pessoa pode quebrar. A obra explora o paralelo psicológico entre Batman e Coringa como dois lados da mesma moeda.",
    events: [
      "Revelação da possível origem do Coringa como comediante fracassado",
      "O Coringa compra um parque de diversões abandonado como palco do crime",
      "Barbara Gordon é baleada na porta de casa, paralisando-a da cintura para baixo",
      "Gordon é submetido a um inferno psicológico para ser 'quebrado'",
      "Batman e Coringa terminam compartilhando uma risada ambígua e perturbadora"
    ],
    consequences:
      "A Piada Mortal é a história mais influente do Coringa, tornando-o um vilão genuinamente aterrorizante e filosoficamente profundo. A paralisia de Barbara Gordon levou à sua reencarnação como Oracle, uma figura revolucionária para representação de pessoas com deficiência nos quadrinhos. A relação entre Batman e Coringa nunca mais foi vista da mesma forma.",
    writers: "Alan Moore (roteiro) & Brian Bolland (arte) — Batman: The Killing Joke, 1988"
  },
  {
    id: 12,
    year: "1989",
    title: "Batman: Asas Sobre Arkham",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🏚️",
    summary:
      "Arkham Asylum: A Serious House on Serious Earth, escrito por Grant Morrison com arte de Dave McKean, desceu às profundezas psicológicas do Hospício Arkham quando todos os vilões de Batman tomam o prédio como reféns. A obra é narrada em paralelo com a história de Amadeus Arkham, fundador do asilo, revelando que o próprio prédio é uma arquitetura de loucura. Batman enfrenta seus maiores medos enquanto caminha pelos corredores sombrios.",
    events: [
      "Vilões de Arkham tomam o asilo e exigem a entrada do Batman",
      "Batman percorre os corredores enfrentando seus inimigos um por um",
      "Revelação da história de Amadeus Arkham e sua descida à loucura",
      "Confronto com o Coringa em sua versão mais perturbadoramente surreal",
      "Batman descobre que a loucura pode não ser tão diferente da sanidade"
    ],
    consequences:
      "Arkham Asylum redefiniu a relação de Batman com seus vilões e com o próprio conceito de sanidade. A obra inspirou diretamente a série de jogos Batman: Arkham, uma das franquias mais aclamadas da história dos videogames. É frequentemente listada como uma das obras mais artisticamente ambiciosas dos quadrinhos.",
    writers: "Grant Morrison (roteiro) & Dave McKean (arte) — Arkham Asylum, 1989"
  },
  {
    id: 13,
    year: "1992",
    title: "A Morte do Superman",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🪦",
    summary:
      "Doomsday, uma criatura de destruição pura criada em Krypton por experimentos em ambientes hostis, avança pelo continente americano destruindo tudo em seu caminho. A Liga da Justiça tenta detê-lo e falha miseravelmente. Superman enfrenta Doomsday em Metrópolis em um confronto brutal que culmina com ambos caindo mortos. A notícia da morte do Superman chocou o mundo real, com reportagens em telejornais e filas em bancas.",
    events: [
      "Doomsday é libertado de sua prisão subterrânea e começa a destruir tudo",
      "Liga da Justiça é completamente derrotada por Doomsday",
      "Superman e Doomsday têm batalha apocalíptica nas ruas de Metrópolis",
      "Ambos morrem com o último golpe mútuo, Superman nos braços de Lois Lane",
      "O mundo inteiro chora a morte do maior herói, gerando comoção real nos leitores"
    ],
    consequences:
      "A Morte do Superman foi um fenômeno cultural sem precedentes, com edições esgotadas no dia do lançamento e cobertura jornalística global. Provou que personagens icônicos podiam 'morrer', aumentando a dramaticidade das histórias. O arco seguinte, Mundo Sem Superman, introduziu quatro personagens que reivindicavam o manto, e a Reinvenção de Superman revelou como o herói retornou.",
    writers: "Dan Jurgens, Roger Stern, Karl Kesel, Jerry Ordway, Louise Simonson — Superman #75, 1992"
  },
  {
    id: 14,
    year: "1993",
    title: "Knightfall: A Queda do Batman",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🦴",
    summary:
      "Bane, nascido e criado em uma prisão de Santa Prisca, foi submetido ao experimento Venom que o tornou um gigante de inteligência e força sobre-humanas. Sua obsessão com Batman o leva a elaborar um plano brilhante: liberar todos os prisioneiros de Arkham para exaurir o Cavaleiro das Trevas antes do confronto final. O plano funciona. Em sua mansão, Bane quebra a coluna de Bruce Wayne sobre seu joelho.",
    events: [
      "Bane libera todos os vilões de Arkham Asylum simultaneamente",
      "Batman passa meses perseguindo e recapturando cada vilão, se esgotando",
      "Bane invade a mansão Wayne e encontra um Batman destruído",
      "A coluna de Bruce Wayne é quebrada sobre o joelho de Bane",
      "Jean-Paul Valley (Azrael) assume o manto do Batman com métodos mais violentos"
    ],
    consequences:
      "Knightfall provou que até Batman podia ser quebrado — física e psicologicamente. O conceito de 'legado de herói' foi explorado profundamente com Azrael e depois com Dick Grayson assumindo o manto. Bane se consolidou como um dos maiores vilões do Batman, e a saga influenciou diretamente o filme 'The Dark Knight Rises' de Christopher Nolan.",
    writers: "Doug Moench, Chuck Dixon, Jo Duffy e outros — Batman #492–500 e conexões, 1993"
  },
  {
    id: 15,
    year: "1994",
    title: "Corrida das Almas: Crise no Tempo",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "⏳",
    summary:
      "Zero Hour: Crisis in Time foi uma tentativa de corrigir inconsistências na continuidade do universo DC após a Crise nas Infinitas Terras. Hal Jordan, o Lanterna Verde, enlouquece após a destruição de Coast City por Mongul e Hank Henshaw, massacra quase todos os membros do Corpo das Lanternas Verdes, e absorve todo o poder de Mogo e Oa. Renomeando-se Parallax, ele decide refazer o tempo para salvar Coast City.",
    events: [
      "Destruição de Coast City — cidade de Hal Jordan — mata 7 milhões de pessoas",
      "Hal Jordan enlouquece de luto e começa a atacar seus aliados Lanternas Verdes",
      "Assassinato de quase todos os Guardiões e Lanternas, absorvendo seus anéis",
      "Jordan se transforma em Parallax e tenta reescrever a história do universo",
      "Kyle Rayner recebe o último anel de Lanterna Verde e se torna o único anel verde"
    ],
    consequences:
      "Zero Hour simplificou partes da continuidade DC e introduziu Kyle Rayner como o novo Lanterna Verde principal por anos. A queda de Hal Jordan em vilania foi um dos arcos mais controversos e amados dos quadrinhos dos anos 90. Sua eventual redenção em Green Lantern: Rebirth por Geoff Johns, onde se revelou que Parallax era uma entidade parasita de medo, tornou-se uma das maiores histórias de redenção dos quadrinhos.",
    writers: "Dan Jurgens (roteiro e arte), Jerry Ordway — Zero Hour #4–0, 1994"
  },
  {
    id: 16,
    year: "1996",
    title: "Kingdom Come",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "👑",
    summary:
      "Mark Waid e Alex Ross criaram uma visão do futuro da DC onde a geração clássica de heróis foi substituída por uma nova geração violenta e irresponsável que não hesita em matar. Superman saiu da aposentadoria forçada após a morte de Lois Lane, e tenta restaurar a ordem. Mas o conflito entre gerações, entre ideais e pragmatismo, leva a uma conclusão cataclísmica onde a humanidade e os deuses devem decidir o futuro da Terra.",
    events: [
      "Superman retira-se após o assassinato de Lois Lane e a aprovação pública do assassino",
      "Nova geração de 'heróis' violentos assume o papel sem código moral",
      "Superman retorna com uma nova Liga da Justiça para restaurar a ordem",
      "Conflito entre as gerações de heróis escala para guerra total",
      "Revolta da humanidade contra os super-seres culmina em explosões nucleares"
    ],
    consequences:
      "Kingdom Come é uma das histórias mais belas e melancólicas dos quadrinhos, com as aquarelas de Alex Ross elevando o meio visualmente. Questionou profundamente se o modelo clássico de herói tem lugar no mundo moderno, tema que ecoou em filmes como Batman v Superman. Influenciou diretamente a estética visual do filme Man of Steel.",
    writers: "Mark Waid (roteiro) & Alex Ross (arte aquarelada) — Kingdom Come #1–4, 1996"
  },
  {
    id: 17,
    year: "1999",
    title: "JLA: Torre de Babel",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "📖",
    summary:
      "Ra's al Ghul rouba os planos secretos de Batman — arquivos meticulosos com as fraquezas e formas de neutralizar cada membro da Liga da Justiça, incluindo o Superman. Usando esses planos, ele incapacita toda a JLA ao mesmo tempo: Superman é exposto a kriptonita sintética, Flash é preso num estado de aceleração infinita, Aquaman desenvolve hidrofobia, e assim por diante. A Liga quase é destruída por dentro.",
    events: [
      "Ra's al Ghul rouba os planos secretos de Batman sobre a Liga",
      "Cada membro da JLA é atacado com sua fraqueza específica simultaneamente",
      "A Liga inteira é neutralizada sem que possam se ajudar",
      "Revelação de que Batman mantinha essas estratégias em segredo de seus aliados",
      "A Liga vota pela expulsão de Batman, que aceita a decisão"
    ],
    consequences:
      "Torre de Babel abriu um debate fundamental que permeia os quadrinhos DC até hoje: Batman tem o direito de preparar estratégias para derrotar seus aliados? O arco inspirou o filme animado 'Justice League: Doom' e cristalizou a ideia de que Batman, por sua paranoia e genialidade, é potencialmente o ser mais perigoso da DC.",
    writers: "Mark Waid (roteiro) & Howard Porter (arte) — JLA #43–46, 2000"
  },
  {
    id: 18,
    year: "2004",
    title: "Identidade Secreta",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🔍",
    summary:
      "Brad Meltzer escreveu uma das histórias mais emocionalmente pesadas da DC, onde a esposa do Arqueiro Esmeralda, Sue Dibny, é assassinada brutalmente. A investigação revela que no passado, membros da Liga da Justiça usaram o apagamento de memórias do Dr. Destino para encobrir o estupro de Sue por Dr. Luz. A história questionou a moralidade de heróis que manipulam mentes para resolver seus problemas.",
    events: [
      "Sue Dibny, esposa do Homem-Elástico, é assassinada em seu apartamento",
      "Os heróis investigam e temem que vilões descubram identidades secretas",
      "Revelação de que Dr. Luz atacou Sue no Satélite da Liga",
      "Liga votou por apagar as memórias de Dr. Luz — e também de Batman, que discordou",
      "Revelação do assassino: Jean Loring, ex-esposa de Ray Palmer (Átomo), fingindo loucura"
    ],
    consequences:
      "Identity Crisis dividiu fãs mas tornou-se um dos arcos mais discutidos da DC. Revelou que heróis também podem fazer coisas moralmente questionáveis e forçou uma reflexão sobre poder, consentimento e responsabilidade. Levou diretamente aos eventos de Infinite Crisis.",
    writers: "Brad Meltzer (roteiro) & Rags Morales (arte) — Identity Crisis #1–7, 2004"
  },
  {
    id: 19,
    year: "2005",
    title: "Crise Infinita",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🌌",
    summary:
      "Os sobreviventes da Crise nas Infinitas Terras — Superboy-Prime, Alexander Luthor Jr., Poder Supremo e Lois Lane do Earth-2 — estavam observando o universo DC e concluíram que este era o 'universo errado'. Superboy-Prime, obcecado com a perda de sua Terra original, começa a socar a barreira entre dimensões, literalmente alterando a realidade. Alexander Luthor Jr. constrói uma máquina para restaurar o Multiverso, mas com intenções ocultas.",
    events: [
      "Superboy-Prime escapa de sua prisão dimensional e ataca heróis",
      "Alexander Luthor Jr. recria o Multiverso para encontrar o 'universo perfeito'",
      "Superboy-Prime mata vários heróis, incluindo membros dos Jovens Titãs",
      "Múltiplas versões de Superman de diferentes Terras combatem Superboy-Prime",
      "O Multiverso é restaurado — agora com 52 Terras ao invés de apenas uma"
    ],
    consequences:
      "Infinite Crisis restaurou o conceito de Multiverso na DC de forma controlada, abrindo o caminho para 52 e Final Crisis. O personagem Superboy-Prime se tornou uma sátira da mentalidade de fãs que querem seus universos fictícios de volta. A morte de Superboy (Conner Kent) foi um dos momentos mais emocionalmente impactantes da DC moderna.",
    writers: "Geoff Johns (roteiro) & Phil Jimenez, George Pérez e outros (arte) — Infinite Crisis #1–7, 2005–2006"
  },
  {
    id: 20,
    year: "2007",
    title: "Final Crisis",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🔴",
    summary:
      "Grant Morrison escreveu o maior pesadelo da DC: Darkseid finalmente encontrou a Anti-Vida Equação e a transmitiu pela internet, subjugando a mente de praticamente toda a humanidade à sua vontade. A maioria dos heróis é derrotada, capturada ou comprometida. Batman, o último homem de pé, usa a Pistola de Radion para atirar em Darkseid — violando seu único código. Superman, num ato de puro amor pelo universo, usa a Máquina de Montagem para recriar a realidade.",
    events: [
      "Darkseid decodifica e transmite a Anti-Vida Equação globalmente via internet",
      "A humanidade inteira cai sob controle mental de Darkseid em horas",
      "Batman viola seu código ao atirar em Darkseid com a pistola de Radion",
      "Darkseid usa os Raios Ômega em Batman, aparentemente matando-o",
      "Superman usa a Máquina de Montagem para recriar o universo e destruir Darkseid"
    ],
    consequences:
      "Final Crisis é a história mais cosmicamente ambiciosa da DC, explorando conceitos de narrativa, realidade e a natureza de histórias em quadrinhos. A 'morte' de Batman levou ao arco 'Batman: O Retorno de Bruce Wayne', onde ele atravessava a história da humanidade. Final Crisis estabeleceu o tom para todo o universo DC da década seguinte.",
    writers: "Grant Morrison (roteiro) & J.G. Jones, Carlos Pacheco, Doug Mahnke — Final Crisis #1–7, 2008–2009"
  },
  {
    id: 21,
    year: "2009",
    title: "Lanterna Verde: Blackest Night",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "💍",
    summary:
      "Nekron, o senhor da morte, e o Black Hand desencadeiam a Blackest Night: anéis pretos ressuscitam os mortos de todo o universo DC como Lanternas Negras, incluindo Superman, Batman e outros heróis assassinados ao longo dos anos. As Lanternas Negras se alimentam das emoções dos vivos. Lanterna Verde Hal Jordan precisa unir os representantes de todos os espectros emocionais — de Atrocitus (raiva/vermelho) a Larfleeze (ganância/laranja) — numa Lanterna Branca.",
    events: [
      "Nekron ressuscita heróis e vilões mortos como Lanternas Negras",
      "Lanternas Negras atacam seus entes queridos vivos, alimentando-se de emoções",
      "Hal Jordan une sete Corpos de Lanternas de cores diferentes",
      "Criação da Lanterna Branca — o espectro completo da vida — para combater Nekron",
      "Heróis mortos (Martian Manhunter, Hawkman, Aquaman) são permanentemente ressuscitados"
    ],
    consequences:
      "Blackest Night expandiu o mitologia dos Lanternas Verdes com o espectro emocional completo, conceito que passou a ser fundamental em todas as histórias do Corpo. A ressurreição permanente de heróis importantes como Aquaman e o Caçador de Marte rejuvenesceu a DC. A saga é considerada o auge do run de Geoff Johns em Lanterna Verde.",
    writers: "Geoff Johns (roteiro) & Ivan Reis (arte) — Blackest Night #0–8 + tie-ins, 2009–2010"
  },
  {
    id: 22,
    year: "2011",
    title: "Flashpoint",
    era: "modern",
    eraLabel: "Era Moderna",
    icon: "🌩️",
    summary:
      "Barry Allen acorda em um mundo completamente diferente: sem poderes, sem Liga da Justiça, com Thomas Wayne (não Bruce) como Batman, e o mundo destruído pela guerra entre Aquaman e a Mulher-Maravilha. Barry descobre que sua mãe Nora, que deveria ter morrido assassinada quando ele era criança, está viva — porque ele mesmo voltou no tempo para salvá-la, alterando toda a linha do tempo. O preço foi o mundo inteiro.",
    events: [
      "Barry Allen acorda sem poderes num universo completamente alterado",
      "Thomas Wayne é Batman; Bruce morreu no beco e Thomas virou vigilante",
      "Aquaman e Mulher-Maravilha estão em guerra destruindo a Europa",
      "Barry recupera seus poderes com ajuda do Batman deste mundo",
      "Corrida para o ponto de ruptura do tempo para desfazer a mudança"
    ],
    consequences:
      "Flashpoint foi o evento que permitiu o lançamento do New 52 — o maior reinício da DC em décadas. Todas as origens foram reescritas, o universo foi rejuvenescido. O personagem de Thomas Wayne como Batman gerou tanto interesse que retornou em histórias futuras. A Profetisa do Tempo diz a Barry que três linhas do tempo foram fundidas — a origem do New 52.",
    writers: "Geoff Johns (roteiro) & Andy Kubert (arte) — Flashpoint #1–5, 2011"
  },
  {
    id: 23,
    year: "2011",
    title: "New 52: Reinício do Universo DC",
    era: "new52",
    eraLabel: "New 52",
    icon: "🔁",
    summary:
      "Em setembro de 2011, a DC Comics relançou todos os seus títulos a partir do número 1 simultaneamente — o New 52. O universo foi reiniciado: origens foram reescritas, continuidades apagadas, relacionamentos alterados. Superman voltou a ser jovem e inexperiente em calças jeans. Batman e o Lanterna Verde mantiveram partes de suas histórias. Mulher-Maravilha ganhou nova origem como filha literal de Zeus.",
    events: [
      "Relançamento simultâneo de 52 títulos da DC em setembro de 2011",
      "Reescrita das origens de Superman, Mulher-Maravilha e outros personagens",
      "Novos trajes, novas continuidades, personagens mais jovens",
      "Lançamento de títulos nunca vistos como Batwing e I, Vampire",
      "Introdução de novos conceitos como a Trindade do Pecado e a SHAZAM! moderna"
    ],
    consequences:
      "O New 52 aumentou drasticamente as vendas inicialmente mas gerou polêmica pela perda de décadas de história. Muitos leitores veteranos se sentiram alienados. Após 5 anos, a DC lançou o DC Rebirth para restaurar partes da continuidade anterior. O New 52 produziu histórias icônicas como Snyder/Capullo em Batman e Azzarello/Chiang em Mulher-Maravilha.",
    writers: "Múltiplos autores, edição coordenada por Geoff Johns e Dan DiDio — Setembro de 2011"
  },
  {
    id: 24,
    year: "2013",
    title: "Batman: Corte da Coruja",
    era: "new52",
    eraLabel: "New 52",
    icon: "🦉",
    summary:
      "Scott Snyder e Greg Capullo criaram a melhor história do Batman do New 52: a Corte das Corujas, uma sociedade secreta que controla Gotham City desde sua fundação, finalmente direciona sua atenção ao Batman. Os Talon — assassinos imortais e ressuscitados — atacam Gotham em massa. Bruce Wayne descobre que o próprio Dick Grayson quase se tornou um Talon, e que a Corte influenciou cada aspecto da história de Gotham.",
    events: [
      "A Corte das Corujas começa a enviar ameaças ao Batman",
      "Um Talon ressuscitado invade a Mansão Wayne e quase mata Bruce",
      "A Corte ativa 40 Talons simultâneos para matar 40 alvos em Gotham numa noite",
      "Bruce ativa o traje experimental e combate os Talons com temperatura extrema",
      "Revelação de que a Corte existe há séculos e moldou a história de Gotham"
    ],
    consequences:
      "A Corte das Corujas é amplamente considerada uma das melhores histórias do Batman do século XXI. Expandiu a mitologia de Gotham com a Corte como um vilão institucional — não uma pessoa, mas um sistema. Estabeleceu o padrão para o run de Snyder/Capullo que produziria também Death of the Family, Endgame e Batman: Superheavy.",
    writers: "Scott Snyder (roteiro) & Greg Capullo (arte) — Batman #1–11, 2011–2012"
  },
  {
    id: 25,
    year: "2016",
    title: "DC Rebirth: O Universo Volta",
    era: "rebirth",
    eraLabel: "Rebirth / Dawn",
    icon: "🌅",
    summary:
      "Wally West, o Flash original do universo pré-New 52, estava preso na Speed Force, esquecido por todos porque sua existência havia sido apagada pela manipulação de Dr. Manhattan (de Watchmen). Nessa edição especial de 80 páginas, Wally usa suas últimas forças para se conectar com pessoas que o amaram, tentando que alguém o lembre para que ele possa retornar. Batman encontra o botão amarelo do sorriso do Comediante na Batcaverna, um mistério que conecta Watchmen ao DCU.",
    events: [
      "Wally West aparece preso na Speed Force, esquecido por todos",
      "Tentativas de se conectar com ex-aliados que não o reconhecem mais",
      "Barry Allen finalmente reconhece Wally, permitindo seu retorno",
      "Batman encontra o botão do Comediante na Batcaverna — vindo de outro universo",
      "Revelação de que um ser externo (Dr. Manhattan) roubou décadas do DCU"
    ],
    consequences:
      "DC Rebirth foi um momento catártico para fãs veteranos, trazendo esperança e emoção num retorno muito aguardado. A revelação de que Dr. Manhattan havia manipulado o DCU abriu as portas para Doomsday Clock. Wally West voltou a ser um dos personagens mais amados da DC, e o Rebirth impulsionou títulos como Flash, Hal Jordan e Liga da Justiça a novos patamares.",
    writers: "Geoff Johns (roteiro) & Gary Frank, Ethan Van Sciver e outros — DC Universe: Rebirth #1, 2016"
  },
  {
    id: 26,
    year: "2017",
    title: "Batman: A Maldição do Barão Branco",
    era: "rebirth",
    eraLabel: "Rebirth / Dawn",
    icon: "🎭",
    summary:
      "Sean Murphy criou uma história alternativa e visceralmente realista onde o Coringa, após anos de tratamento psiquiátrico, fica curado de sua insanidade e se torna Jack Napier — um homem inteligente e eloquente que expõe as falhas sistêmicas do sistema de justiça de Gotham. Napier argumenta que Batman é a causa do crime em Gotham, não a solução. Bruce Wayne, disfarçado, se aproxima de Napier e começa a duvidar de sua própria missão.",
    events: [
      "O Coringa 'cura' sua insanidade e emerge como Jack Napier",
      "Napier usa meios legais e políticos para expor as falhas de Gotham",
      "Bruce Wayne se infiltra no grupo de Napier disfarçado",
      "Batman começa a questionar se sua cruzada causa mais dano do que bem",
      "O confronto final revela camadas de complexidade moral sobre justiça e reabilitação"
    ],
    consequences:
      "Batman: White Knight se tornou um dos maiores sucessos da DC Black Label, gerando sequências. É uma das raras histórias que apresenta o Coringa como o personagem mais racional e moralmente justificável. Questionou o status quo do Batman de uma forma que poucas histórias ousaram fazer, e demonstrou o potencial das histórias DC para literatura de ideias.",
    writers: "Sean Murphy (roteiro e arte) — Batman: White Knight #1–8, 2017–2018"
  },
  {
    id: 27,
    year: "2017",
    title: "Doomsday Clock",
    era: "rebirth",
    eraLabel: "Rebirth / Dawn",
    icon: "⏰",
    summary:
      "A continuação direta de Watchmen e de DC Rebirth, Doomsday Clock é um encontro entre o universo DC e o de Watchmen. No mundo de Rorschach, a verdade sobre o plano de Ozymandias foi revelada e o mundo entrou em colapso. O novo Rorschach e Ozymandias cruzam para o universo DC em busca do Dr. Manhattan. Lá, Manhattan está secretamente presente há décadas, moldando e remoldando a realidade da DC, removendo a esperança do universo.",
    events: [
      "O mundo de Watchmen colapsa após a revelação do plano de Ozymandias",
      "Novo Rorschach e Ozymandias atravessam para o universo DC",
      "Dr. Manhattan é encontrado interagindo com o passado do universo DC",
      "Manhattan manipulou as origens dos heróis DC para remover a esperança",
      "Confronto entre Superman e Dr. Manhattan — fé versus poder absoluto"
    ],
    consequences:
      "Doomsday Clock resolveu o mistério aberto em DC Rebirth e estabeleceu Superman como o coração e alma do universo DC — o ser cuja bondade pode tocar até o ser mais poderoso e cínico. Manhattan, ao ver Superman, recobra esperança pela humanidade e restaura o DCU. É a conclusão literária de décadas de histórias que começaram em Watchmen.",
    writers: "Geoff Johns (roteiro) & Gary Frank (arte) — Doomsday Clock #1–12, 2017–2019"
  },
  {
    id: 28,
    year: "2019",
    title: "Liga da Justiça: Totalmente F*didos",
    era: "rebirth",
    eraLabel: "Rebirth / Dawn",
    icon: "🌊",
    summary:
      "Scott Snyder escreveu a história mais ambiciosa da DC em anos: Perpetua, a mãe do Multiverso, é libertada de sua prisão após bilhões de anos. Ela é a criadora original do Multiverso Primordial, feito de Assunto Vital — que drena vida da humanidade. Luthor firma aliança com ela como o Apex Luthor. A Liga, enfrentando a corrupção da realidade, precisa escolher entre o caminho da Doom (servidão e sobrevivência) e o caminho da Destino (crença e sacrifício).",
    events: [
      "Perpetua, criadora do Multiverso, é libertada da Muralha de Energia Cósmica",
      "Lex Luthor se transforma no Apex Luthor, sendo de sua natureza mais pura",
      "O Multiverso começa a se corromper com Assunto Vital",
      "A Liga se fragmenta entre seguir Doom ou acreditar em Destino",
      "Batalha pelo destino do Multiverso com todas as Terras em risco"
    ],
    consequences:
      "Justice League: No Justice e o run de Snyder redefiniu a Liga da Justiça para a era moderna, com escopo cósmico. Introduziu conceitos como as Forças Fundamentais e o Multiverso Primordial. Conectou diretamente ao Dark Nights: Death Metal, o maior evento da DC dos anos 2020.",
    writers: "Scott Snyder (roteiro) & Jorge Jimenez, Francis Manapul e outros — Justice League #1–39, 2018–2020"
  },
  {
    id: 29,
    year: "2021",
    title: "Dark Nights: Death Metal",
    era: "rebirth",
    eraLabel: "Rebirth / Dawn",
    icon: "🤘",
    summary:
      "A conclusão da saga do Batmansauro Nobre, o Batman que Ri e o Darkfather — um Darkseid infundido com energia Anti-Vida. O mundo foi recriado pelo Batman que Ri como uma escultura de horror, com versões corrompidas de todos os heróis. Wonder Woman lidera a resistência. O Darkfather ameaça o Multiverso inteiro. A resolução: Superman e a Liga usam a Crise como ferramenta para expandir o Multiverso, criando o Omniverso — um Multiverso de Multiversos.",
    events: [
      "O Batman que Ri remolda a realidade num pesadelo de versões corrompidas",
      "Wonder Woman lidera a resistência no 'Earth-Metalverse'",
      "O Darkfather consome anti-vida ameaçando toda existência",
      "Perpetua é derrotada e o DCU é transformado num Omniverso",
      "O Multiverso se expande: agora há infinitas possibilidades de universos"
    ],
    consequences:
      "Death Metal encerrou a era iniciada em Dark Nights: Metal e 'reiniciou' suavemente o universo DC, criando o Infinite Frontier: um universo com infinitas possibilidades onde TODAS as histórias são válidas e canônicas. Foi a resposta criativa definitiva ao debate de continuidade — em vez de apagar histórias, o DCU as abraça todas.",
    writers: "Scott Snyder (roteiro) & Greg Capullo (arte) — Dark Nights: Death Metal #1–7, 2020–2021"
  },
  {
    id: 30,
    year: "2023",
    title: "DC All In / DCU K.O.",
    era: "rebirth",
    eraLabel: "Rebirth / Dawn",
    icon: "💥",
    summary:
      "Após Absolute Power — onde Amanda Waller usou tecnologia Braniac para eliminar temporariamente os poderes de todos os heróis — a DC lançou o DC All In e a iniciativa Absolute Universe. Em um universo paralelo, versões mais sombrias e radicais de Superman, Batman e Mulher-Maravilha surgem: sem a esperança do Superman clássico, sem o código moral de Batman, sem a compaixão de Diana. No universo principal, a DCU K.O. marca o confronto final entre as visões do que o DCU deve ser.",
    events: [
      "Amanda Waller lança Absolute Power, neutralizando poderes de heróis globalmente",
      "Surgimento do Absolute Universe como um espelho sombrio do DCU principal",
      "Absolute Superman emerge como um ser de puro poder sem restrições morais",
      "Absolute Batman opera sem o código de nunca matar",
      "DCU K.O. confronta as duas visões do universo em colisão direta"
    ],
    consequences:
      "A iniciativa DC All In e o Absolute Universe representam a mais recente reinvenção da DC, oferecendo paralelamente o universo clássico (DCU) e uma linha mais sombria (Absolute). A DCU K.O. estabelece os pilares narrativos para os próximos anos da editora, ao mesmo tempo que honra o legado de décadas de histórias.",
    writers: "Joshua Williamson, Scott Snyder e outros — DC All In, Absolute Universe, 2023–2024"
  }
];

// Mapeamento de cores por era
const eraColors = {
  golden:  "var(--golden)",
  silver:  "var(--silver)",
  bronze:  "var(--bronze)",
  modern:  "var(--modern)",
  new52:   "var(--new52)",
  rebirth: "var(--rebirth)"
};

// --- RENDERIZAR CARDS ---
function renderCards(filter = "all") {
  const container = document.getElementById("timelineCards");
  container.innerHTML = "";

  const filtered = filter === "all"
    ? sagas
    : sagas.filter(s => s.era === filter);

  filtered.forEach((saga, index) => {
    const color = eraColors[saga.era] || "var(--dc-blue)";
    const card = document.createElement("div");
    card.className = "card";
    card.style.setProperty("--card-era-color", color);
    card.dataset.id = saga.id;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${saga.title}, ${saga.year}`);

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-cover">
          <span class="card-cover-emoji">${saga.icon}</span>
        </div>
        <div class="card-body">
          <div class="card-year">${saga.year}</div>
          <div class="card-title">${saga.title}</div>
          <span class="card-era-tag" style="background:${color}">${saga.eraLabel}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openModal(saga));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(saga);
      }
    });

    container.appendChild(card);
  });
}

// --- MODAL ---
function openModal(saga) {
  const overlay = document.getElementById("modalOverlay");
  const color   = eraColors[saga.era] || "var(--dc-blue)";

  // Preencher conteúdo
  document.getElementById("modalEraBadge").textContent = saga.eraLabel;
  document.getElementById("modalEraBadge").style.background = color;
  document.getElementById("modalYear").textContent = saga.year;
  document.getElementById("modalTitle").textContent = saga.title;
  document.getElementById("coverIcon").textContent = saga.icon;
  document.getElementById("modalSummary").textContent = saga.summary;
  document.getElementById("modalConsequences").textContent = saga.consequences;
  document.getElementById("modalWriters").textContent = saga.writers;

  // Eventos
  const ul = document.getElementById("modalEvents");
  ul.innerHTML = "";
  saga.events.forEach(ev => {
    const li = document.createElement("li");
    li.textContent = ev;
    ul.appendChild(li);
  });

  // Acento de cor no modal
  document.getElementById("modal").style.setProperty("--modal-color", color);
  document.getElementById("modal").style.borderColor = color + "55";

  // Abrir
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focar no botão fechar para acessibilidade
  setTimeout(() => {
    document.getElementById("modalClose").focus();
  }, 350);
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// --- FILTROS DE ERA ---
function setupFilters() {
  const pills = document.querySelectorAll(".era-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderCards(pill.dataset.filter);
    });
  });
}

// --- EVENTOS ---
document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// --- INIT ---
renderCards();
setupFilters();
