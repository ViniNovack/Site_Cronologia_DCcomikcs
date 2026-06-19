// =====================================
//   DC TIMELINE — SCRIPT.JS
// =====================================

const sagas = [
  {
    id: 1, year: "1938", era: "golden", eraLabel: "Era de Ouro",
    title: "A Origem do Superman",
    wikiSlug: "Action_Comics_1",
    fallbackIcon: "🦸",
    summary: "Em 1938, Jerry Siegel e Joe Shuster apresentaram ao mundo o primeiro super-herói moderno: Superman. Publicado na Action Comics #1, Kal-El chega à Terra como bebê, enviado por seu pai Jor-El antes da destruição de Krypton. Criado pelos Kent em Smallville, Clark descobre seus poderes e decide proteger a humanidade como o Homem de Aço, estabelecendo o arquétipo do herói em quadrinhos que influenciaria toda a indústria.",
    events: [
      "Destruição de Krypton e fuga de Kal-El em um foguete",
      "Adoção por Jonathan e Martha Kent em Smallville",
      "Descoberta gradual de poderes sobre-humanos",
      "Mudança para Metrópolis e início da dupla identidade como Clark Kent",
      "Primeira aparição na Action Comics #1 em junho de 1938"
    ],
    consequences: "A criação do Superman inaugurou a Era de Ouro dos quadrinhos e definiu os pilares do gênero de super-heróis: identidade secreta, poderes extraordinários e a luta pelo bem. Sem o Superman, personagens como Batman, Mulher-Maravilha e toda a DC não existiriam como os conhecemos. Ele provou que quadrinhos podiam ser arte e entretenimento pop de massa.",
    writers: "Criação: Jerry Siegel (roteiro) & Joe Shuster (arte) — Action Comics #1, 1938"
  },
  {
    id: 2, year: "1939", era: "golden", eraLabel: "Era de Ouro",
    title: "A Origem do Batman",
    wikiSlug: "Detective_Comics_27",
    fallbackIcon: "🦇",
    summary: "Um ano após o Superman, Bob Kane e Bill Finger criaram o Cavaleiro das Trevas. Bruce Wayne assiste à morte de seus pais Thomas e Martha em um assalto num beco de Gotham City. O trauma molda sua vida inteira: ele treina corpo e mente ao máximo para se tornar o Batman, o maior detetive e vigilante do mundo. Diferente de Superman, Batman não tem poderes — apenas inteligência, riqueza, técnica e determinação inabalável.",
    events: [
      "Assassinato dos pais de Bruce Wayne por Joe Chill em um beco",
      "Juramento de Bruce sobre o túmulo dos pais para combater o crime",
      "Anos de treinamento pelo mundo com os melhores mestres",
      "Escolha do morcego como símbolo para aterrorizar criminosos",
      "Primeira aparição no Detective Comics #27 em maio de 1939"
    ],
    consequences: "Batman estabeleceu o arquétipo do herói sem superpoderes. Seu código moral — nunca matar — e sua relação com a justiça são debatidos até hoje. Gotham City se tornou um dos cenários mais ricos dos quadrinhos, e o Batman é atualmente o personagem DC mais adaptado para outros mídias.",
    writers: "Criação: Bob Kane & Bill Finger — Detective Comics #27, 1939"
  },
  {
    id: 3, year: "1941", era: "golden", eraLabel: "Era de Ouro",
    title: "A Origem da Mulher-Maravilha",
    wikiSlug: "Wonder_Woman",
    fallbackIcon: "⚔️",
    summary: "William Moulton Marston criou Diana, princesa das Amazonas de Themyscira, com a intenção explícita de criar um herói feminino que fosse um modelo de poder, bondade e justiça. Filha da rainha Hipólita, Diana deixa seu paraíso isolado para trazer paz ao mundo dos homens durante a Segunda Guerra Mundial, portando a Tiara, as Pulseiras Inquebráveis e o Laço da Verdade.",
    events: [
      "Steve Trevor cai em Themyscira e é resgatado pelas Amazonas",
      "Torneio entre as Amazonas para escolher quem irá ao mundo exterior",
      "Diana vence o torneio em segredo e parte com Trevor",
      "Adoção do traje e da identidade de Mulher-Maravilha",
      "Primeiras batalhas contra as forças do Eixo na 2ª Guerra Mundial"
    ],
    consequences: "A Mulher-Maravilha se tornou o maior símbolo feminino dos quadrinhos e da cultura pop global. Ela introduziu mitologia grega de forma acessível. Junto com Superman e Batman, forma a Santíssima Trindade da DC, presente em quase toda grande saga da editora.",
    writers: "Criação: William Moulton Marston & H.G. Peter — All Star Comics #8, 1941"
  },
  {
    id: 4, year: "1956", era: "silver", eraLabel: "Era de Prata",
    title: "O Surgimento do Flash",
    wikiSlug: "Showcase_(comics)",
    fallbackIcon: "⚡",
    summary: "Em Showcase #4, Julius Schwartz reinventou o Flash, substituindo Jay Garrick pelo policial Barry Allen. Um acidente de laboratório envolve Allen em produtos químicos e raios, concedendo-lhe a capacidade de correr mais rápido do que a luz. Este evento inaugurou oficialmente a Era de Prata dos quadrinhos, um renascimento do gênero após anos de declínio.",
    events: [
      "Barry Allen é atingido por raios e produtos químicos em seu laboratório",
      "Descoberta da capacidade de mover-se à velocidade da luz",
      "Criação do traje vermelho armazenado em um anel especial",
      "Primeiros casos como o Homem Mais Rápido do Mundo",
      "Introdução do conceito de Força de Aceleração (Speed Force)"
    ],
    consequences: "O novo Flash abriu as portas para a recriação de todos os heróis clássicos. O conceito de Terra-2 foi criado para resolver as inconsistências entre os dois Flash, plantando a semente do Multiverso DC. A Era de Prata trouxe de volta os quadrinhos ao mainstream.",
    writers: "Escrito por Robert Kanigher, arte de Carmine Infantino — Showcase #4, 1956"
  },
  {
    id: 5, year: "1960", era: "silver", eraLabel: "Era de Prata",
    title: "Surgimento da Liga da Justiça",
    wikiSlug: "Justice_League_of_America",
    fallbackIcon: "🌟",
    summary: "A Liga da Justiça da América reuniu pela primeira vez os maiores heróis da DC em uma equipe. Superman, Batman, Mulher-Maravilha, Flash, Lanterna Verde, Aquaman e Marciano Caçador de Homens passaram a enfrentar ameaças que nenhum herói poderia enfrentar sozinho. A formação de um time de super-heróis foi uma ideia revolucionária que logo inspiraria a Marvel a criar os X-Men e os Vingadores.",
    events: [
      "Primeira missão unindo todos os heróis contra Starro, o Conquistador",
      "Estabelecimento do Quartel-General na Lua (mais tarde a Torre da Justiça)",
      "Definição de protocolos de crise e comunicação entre os membros",
      "Criação do conceito de equipe hierárquica de super-heróis",
      "Publicação no The Brave and the Bold #28, fevereiro de 1960"
    ],
    consequences: "A JLA estabeleceu que heróis individuais poderiam compartilhar um mesmo universo coeso, conceito fundamental para os quadrinhos modernos. Cada crossover da DC herda diretamente esse legado. A Liga se tornou o grupo de referência para equipes de super-heróis em toda a mídia.",
    writers: "Criação: Gardner Fox & Mike Sekowsky — The Brave and the Bold #28, 1960"
  },
  {
    id: 6, year: "1971", era: "bronze", eraLabel: "Era de Bronze",
    title: "O Quarto Mundo de Jack Kirby",
    wikiSlug: "New_Gods",
    fallbackIcon: "🌌",
    summary: "Jack Kirby migrou para a DC e criou o Quarto Mundo, uma saga épica sobre a guerra entre Nova Gênese e Apokolips. Darkseid surge como um tirano divino em busca da Anti-Vida Equação — uma fórmula matemática capaz de subjugar toda forma de vida à sua vontade. As histórias de Kirby exploraram mitologia cósmica de escala nunca vista, redefinindo o escopo dos quadrinhos.",
    events: [
      "Criação de Apokolips e Nova Gênese como planetas-deuses opostos",
      "Surgimento de Darkseid, filho de Heggra, como senhor de Apokolips",
      "Introdução de Orion, filho de Darkseid criado em Nova Gênese",
      "Revelação da Anti-Vida Equação e sua ameaça existencial",
      "Publicação em New Gods, Forever People e Mister Miracle (1971)"
    ],
    consequences: "O Quarto Mundo introduziu Darkseid, o vilão cósmico definitivo da DC. A Anti-Vida Equação e Apokolips moldaram eventos futuros como a Crise nas Infinitas Terras e a Final Crisis. Curiosamente, Thanos da Marvel foi diretamente inspirado em Darkseid por Jim Starlin.",
    writers: "Criação de Jack Kirby — New Gods, Forever People, Mister Miracle (1971)"
  },
  {
    id: 7, year: "1970", era: "bronze", eraLabel: "Era de Bronze",
    title: "GL/GA: O Espantalho de Deus",
    wikiSlug: "Green_Lantern/Green_Arrow",
    fallbackIcon: "💊",
    summary: "Dennis O'Neil e Neal Adams criaram uma das séries mais politicamente corajosas dos quadrinhos, abordando drogas, racismo e pobreza. Hal Jordan enfrenta um dilema ao ver seu companheiro Roy Harper (Speedy) viciado em heroína — até então um tema impensável nos quadrinhos americanos, publicada sem a aprovação do Comics Code Authority.",
    events: [
      "Green Arrow descobre que Roy Harper (Speedy) está viciado em heroína",
      "Confronto direto com a realidade das drogas nas ruas americanas",
      "Green Lantern questiona sua missão ao ver pobreza e injustiça ignoradas",
      "Publicação sem a aprovação do Comics Code Authority pela primeira vez",
      "A DC abre o caminho para temas adultos nos quadrinhos mainstream"
    ],
    consequences: "A série abriu as portas para quadrinhos que tratavam de temas sociais reais, influenciando diretamente obras futuras como Watchmen e Batman: The Dark Knight Returns. O Comics Code, outrora absoluto, começou a perder relevância.",
    writers: "Dennis O'Neil (roteiro) & Neal Adams (arte) — Green Lantern #76–89, 1970–1972"
  },
  {
    id: 8, year: "1985", era: "modern", eraLabel: "Era Moderna",
    title: "Crise nas Infinitas Terras",
    wikiSlug: "Crisis_on_Infinite_Earths",
    fallbackIcon: "🌀",
    summary: "O Anti-Monitor inicia uma guerra para destruir todo o Multiverso DC com ondas de antimatéria. Ao longo de 12 edições, incontáveis universos paralelos são eliminados. Supergirl dá sua vida para salvar Superman. Barry Allen (Flash) corre mais rápido do que qualquer coisa para destruir o canhão de antimatéria, desintegrando-se no processo.",
    events: [
      "O Anti-Monitor começa a devorar universos paralelos com ondas de antimatéria",
      "Morte de Supergirl (Kara Zor-El) ao enfrentar o Anti-Monitor diretamente",
      "Barry Allen (Flash) sacrifica sua vida destruindo o canhão de antimatéria",
      "Os inúmeros universos do Multiverso são fundidos em uma única Terra",
      "O Multiverso DC é simplificado, apagando décadas de continuidade"
    ],
    consequences: "A Crise nas Infinitas Terras reiniciou completamente o universo DC. Foi o primeiro grande evento crossover da história dos quadrinhos. O sacrifício do Flash se tornou lendário, e sua ressurreição anos depois gerou outra saga icônica.",
    writers: "Marv Wolfman (roteiro) & George Pérez (arte) — Crisis on Infinite Earths #1–12, 1985–1986"
  },
  {
    id: 9, year: "1986", era: "modern", eraLabel: "Era Moderna",
    title: "Batman: O Cavaleiro das Trevas",
    wikiSlug: "Batman:_The_Dark_Knight_Returns",
    fallbackIcon: "🌑",
    summary: "Frank Miller imaginou um futuro distópico onde um Bruce Wayne de 55 anos retorna como Batman diante de um Gotham dominado pelo crime. Com o corpo debilitado mas a mente afiada, ele enfrenta os Mutantes e tem um confronto épico e ideológico com um Superman controlado pelo governo americano, redefinindo o que Batman poderia ser.",
    events: [
      "Bruce Wayne retorna como Batman aos 55 anos, impelido pela violência crescente",
      "Derrota do líder dos Mutantes em batalha física e psicológica",
      "Carrie Kelly torna-se a nova Robin sem aprovação formal de Batman",
      "Confronto com o Coringa, que culmina na morte do vilão",
      "Batalha final e catártica com Superman, resultado de conflito ideológico"
    ],
    consequences: "The Dark Knight Returns transformou permanentemente a imagem do Batman de herói camp para ícone sombrio e complexo. Junto com Watchmen, inaugurou a era dos quadrinhos para adultos. Tim Burton e todos os filmes subsequentes foram diretamente influenciados por essa obra.",
    writers: "Frank Miller (roteiro e arte) com Lynn Varley (cores) — Batman: The Dark Knight Returns #1–4, 1986"
  },
  {
    id: 10, year: "1986", era: "modern", eraLabel: "Era Moderna",
    title: "Watchmen",
    wikiSlug: "Watchmen",
    fallbackIcon: "🕐",
    summary: "Alan Moore e Dave Gibbons desconstruíram o arquétipo do super-herói em doze edições que mudaram os quadrinhos para sempre. Em uma América alternativa à beira da guerra nuclear, um grupo de vigilantes aposentados investiga o assassinato de um colega, revelando uma conspiração macabra que questiona fundamentalmente o que significa ser herói.",
    events: [
      "Assassinato do Comediante inicia a investigação de Rorschach",
      "Dr. Manhattan é transportado para Marte após acusações públicas",
      "Revelação de que Ozymandias planeja matar milhões para evitar a guerra nuclear",
      "Morte de Rorschach por Dr. Manhattan ao recusar-se a guardar o segredo",
      "O Plano de Ozymandias tem sucesso, mas Rorschach deixa seu diário como legado"
    ],
    consequences: "Watchmen é considerado a obra-prima dos quadrinhos ocidentais e provou de forma irrefutável que o meio é literatura. Influenciou toda obra de ficção científica e superhero nos 40 anos seguintes.",
    writers: "Alan Moore (roteiro) & Dave Gibbons (arte) — Watchmen #1–12, 1986–1987"
  },
  {
    id: 11, year: "1988", era: "modern", eraLabel: "Era Moderna",
    title: "Batman: A Piada Mortal",
    wikiSlug: "Batman:_The_Killing_Joke",
    fallbackIcon: "🃏",
    summary: "Alan Moore apresentou a origem definitiva do Coringa — um comediante fracassado que vive 'um dia ruim' e enlouquece completamente. O Coringa atira e paralisa Barbara Gordon e rapta o comissário James Gordon para provar que qualquer pessoa pode quebrar, explorando o paralelo psicológico entre Batman e Coringa.",
    events: [
      "Revelação da possível origem do Coringa como comediante fracassado",
      "O Coringa compra um parque de diversões abandonado como palco do crime",
      "Barbara Gordon é baleada na porta de casa, paralisando-a da cintura para baixo",
      "Gordon é submetido a um inferno psicológico para ser 'quebrado'",
      "Batman e Coringa terminam compartilhando uma risada ambígua e perturbadora"
    ],
    consequences: "A paralisia de Barbara Gordon levou à sua reencarnação como Oracle, figura revolucionária para representação de pessoas com deficiência nos quadrinhos. A relação entre Batman e Coringa nunca mais foi vista da mesma forma.",
    writers: "Alan Moore (roteiro) & Brian Bolland (arte) — Batman: The Killing Joke, 1988"
  },
  {
    id: 12, year: "1989", era: "modern", eraLabel: "Era Moderna",
    title: "Arkham Asylum",
    wikiSlug: "Arkham_Asylum:_A_Serious_House_on_Serious_Earth",
    fallbackIcon: "🏚️",
    summary: "Grant Morrison desceu às profundezas psicológicas do Hospício Arkham quando todos os vilões de Batman tomam o prédio como reféns. A obra é narrada em paralelo com a história de Amadeus Arkham, fundador do asilo, revelando que o próprio prédio é uma arquitetura de loucura. Batman enfrenta seus maiores medos enquanto caminha pelos corredores sombrios.",
    events: [
      "Vilões de Arkham tomam o asilo e exigem a entrada do Batman",
      "Batman percorre os corredores enfrentando seus inimigos um por um",
      "Revelação da história de Amadeus Arkham e sua descida à loucura",
      "Confronto com o Coringa em sua versão mais perturbadoramente surreal",
      "Batman descobre que a loucura pode não ser tão diferente da sanidade"
    ],
    consequences: "Arkham Asylum redefiniu a relação de Batman com seus vilões e o conceito de sanidade. A obra inspirou diretamente a série de jogos Batman: Arkham, uma das franquias mais aclamadas da história dos videogames.",
    writers: "Grant Morrison (roteiro) & Dave McKean (arte) — Arkham Asylum, 1989"
  },
  {
    id: 13, year: "1992", era: "modern", eraLabel: "Era Moderna",
    title: "A Morte do Superman",
    wikiSlug: "The_Death_of_Superman",
    fallbackIcon: "🪦",
    summary: "Doomsday, uma criatura de destruição pura criada em Krypton, avança destruindo tudo em seu caminho. A Liga da Justiça tenta detê-lo e falha miseravelmente. Superman enfrenta Doomsday em Metrópolis em um confronto brutal que culmina com ambos caindo mortos. A notícia chocou o mundo real, com reportagens em telejornais e filas em bancas.",
    events: [
      "Doomsday é libertado de sua prisão subterrânea e começa a destruir tudo",
      "Liga da Justiça é completamente derrotada por Doomsday",
      "Superman e Doomsday têm batalha apocalíptica nas ruas de Metrópolis",
      "Ambos morrem com o último golpe mútuo, Superman nos braços de Lois Lane",
      "O mundo inteiro chora a morte do maior herói, gerando comoção real nos leitores"
    ],
    consequences: "A Morte do Superman foi um fenômeno cultural sem precedentes, com edições esgotadas no lançamento e cobertura jornalística global. O arco seguinte introduziu quatro personagens que reivindicavam o manto, e a Reinvenção de Superman revelou como o herói retornou.",
    writers: "Dan Jurgens, Roger Stern, Karl Kesel, Jerry Ordway, Louise Simonson — Superman #75, 1992"
  },
  {
    id: 14, year: "1993", era: "modern", eraLabel: "Era Moderna",
    title: "Knightfall: A Queda do Batman",
    wikiSlug: "Batman:_Knightfall",
    fallbackIcon: "🦴",
    summary: "Bane elabora um plano brilhante: liberar todos os prisioneiros de Arkham para exaurir o Cavaleiro das Trevas antes do confronto final. O plano funciona. Em sua mansão, Bane quebra a coluna de Bruce Wayne sobre seu joelho, em uma das cenas mais icônicas da história dos quadrinhos.",
    events: [
      "Bane libera todos os vilões de Arkham Asylum simultaneamente",
      "Batman passa meses perseguindo e recapturando cada vilão, se esgotando",
      "Bane invade a mansão Wayne e encontra um Batman destruído",
      "A coluna de Bruce Wayne é quebrada sobre o joelho de Bane",
      "Jean-Paul Valley (Azrael) assume o manto do Batman com métodos mais violentos"
    ],
    consequences: "Knightfall provou que até Batman podia ser quebrado física e psicologicamente. O conceito de 'legado de herói' foi explorado com Azrael e depois Dick Grayson. Bane se consolidou como um dos maiores vilões do Batman, influenciando diretamente 'The Dark Knight Rises'.",
    writers: "Doug Moench, Chuck Dixon e outros — Batman #492–500 e conexões, 1993"
  },
  {
    id: 15, year: "1994", era: "modern", eraLabel: "Era Moderna",
    title: "Zero Hour: Crise no Tempo",
    wikiSlug: "Zero_Hour:_Crisis_in_Time!",
    fallbackIcon: "⏳",
    summary: "Hal Jordan enlouquece após a destruição de Coast City, massacra quase todos os membros do Corpo das Lanternas Verdes e absorve todo o poder de Oa. Renomeando-se Parallax, ele decide refazer o tempo para salvar sua cidade — custando a estabilidade de toda a linha do tempo do universo DC.",
    events: [
      "Destruição de Coast City — cidade de Hal Jordan — mata 7 milhões de pessoas",
      "Hal Jordan enlouquece de luto e começa a atacar seus aliados Lanternas Verdes",
      "Assassinato de quase todos os Guardiões e Lanternas, absorvendo seus anéis",
      "Jordan se transforma em Parallax e tenta reescrever a história do universo",
      "Kyle Rayner recebe o último anel de Lanterna Verde e se torna o único anel verde"
    ],
    consequences: "Zero Hour simplificou partes da continuidade DC e introduziu Kyle Rayner como o novo Lanterna Verde. A redenção de Hal Jordan em Green Lantern: Rebirth — onde se revelou que Parallax era uma entidade parasita de medo — tornou-se uma das maiores histórias de redenção dos quadrinhos.",
    writers: "Dan Jurgens (roteiro e arte), Jerry Ordway — Zero Hour #4–0, 1994"
  },
  {
    id: 16, year: "1996", era: "modern", eraLabel: "Era Moderna",
    title: "Kingdom Come",
    wikiSlug: "Kingdom_Come_(comics)",
    fallbackIcon: "👑",
    summary: "Mark Waid e Alex Ross criaram uma visão do futuro da DC onde a geração clássica de heróis foi substituída por uma nova geração violenta e irresponsável. Superman saiu da aposentadoria para restaurar a ordem. O conflito entre gerações, entre ideais e pragmatismo, leva a uma conclusão cataclísmica onde a humanidade e os deuses devem decidir o futuro da Terra.",
    events: [
      "Superman retira-se após o assassinato de Lois Lane e a aprovação pública do assassino",
      "Nova geração de 'heróis' violentos assume o papel sem código moral",
      "Superman retorna com uma nova Liga da Justiça para restaurar a ordem",
      "Conflito entre as gerações de heróis escala para guerra total",
      "Revolta da humanidade contra os super-seres culmina em explosões nucleares"
    ],
    consequences: "Kingdom Come é uma das histórias mais belas dos quadrinhos, com as aquarelas de Alex Ross elevando o meio visualmente. Questionou se o modelo clássico de herói tem lugar no mundo moderno — tema que ecoou em filmes como Batman v Superman.",
    writers: "Mark Waid (roteiro) & Alex Ross (arte aquarelada) — Kingdom Come #1–4, 1996"
  },
  {
    id: 17, year: "2000", era: "modern", eraLabel: "Era Moderna",
    title: "JLA: Torre de Babel",
    wikiSlug: "JLA:_Tower_of_Babel",
    fallbackIcon: "📖",
    summary: "Ra's al Ghul rouba os planos secretos de Batman com as fraquezas e formas de neutralizar cada membro da Liga da Justiça. Usando esses planos, ele incapacita toda a JLA ao mesmo tempo: Superman é exposto a kriptonita sintética, Flash é preso num estado de aceleração infinita, Aquaman desenvolve hidrofobia. A Liga quase é destruída por dentro.",
    events: [
      "Ra's al Ghul rouba os planos secretos de Batman sobre a Liga",
      "Cada membro da JLA é atacado com sua fraqueza específica simultaneamente",
      "A Liga inteira é neutralizada sem que possam se ajudar",
      "Revelação de que Batman mantinha essas estratégias em segredo de seus aliados",
      "A Liga vota pela expulsão de Batman, que aceita a decisão"
    ],
    consequences: "Torre de Babel abriu um debate fundamental: Batman tem o direito de preparar estratégias para derrotar seus aliados? O arco inspirou o filme animado 'Justice League: Doom' e cristalizou a ideia de que Batman é potencialmente o ser mais perigoso da DC.",
    writers: "Mark Waid (roteiro) & Howard Porter (arte) — JLA #43–46, 2000"
  },
  {
    id: 18, year: "2003", era: "modern", eraLabel: "Era Moderna",
    title: "Batman: Hush",
    wikiSlug: "Batman:_Hush",
    fallbackIcon: "🤫",
    summary: "Jeph Loeb e Jim Lee criaram uma das histórias mais visualmente deslumbrantes do Batman: um vilão misterioso chamado Hush orquestra praticamente cada inimigo do Batman em sequência, enquanto Bruce Wayne vive um raro romance com Selina Kyle (Mulher-Gato). A identidade de Hush, revelada gradualmente, conecta o passado de Bruce Wayne de forma surpreendente.",
    events: [
      "Hush começa a manipular os vilões do Batman em sequência coordenada",
      "Bruce Wayne e Selina Kyle iniciam um relacionamento romântico",
      "Batman enfrenta Mulher-Gato, Venenoso, Coringa, Lex Luthor e outros",
      "Revelação de que Hush é Thomas Elliot, amigo de infância de Bruce Wayne",
      "Batman descobre que o Coringa sabe sua identidade secreta"
    ],
    consequences: "Batman: Hush se tornou um dos arcos mais vendidos da história do personagem graças à arte magistral de Jim Lee. Apresentou Hush como um dos vilões mais pessoais do Batman e aprofundou o relacionamento entre Bruce e Selina que ecoa em histórias posteriores.",
    writers: "Jeph Loeb (roteiro) & Jim Lee (arte) — Batman #608–619, 2002–2003"
  },
  {
    id: 19, year: "2004", era: "modern", eraLabel: "Era Moderna",
    title: "Identidade Secreta",
    wikiSlug: "Identity_Crisis_(DC_Comics)",
    fallbackIcon: "🔍",
    summary: "Brad Meltzer escreveu uma das histórias mais emocionalmente pesadas da DC: a esposa do Arqueiro Esmeralda é assassinada brutalmente. A investigação revela que no passado, membros da Liga da Justiça usaram o apagamento de memórias do Dr. Destino para encobrir um crime grave, questionando a moralidade de heróis que manipulam mentes.",
    events: [
      "Sue Dibny, esposa do Homem-Elástico, é assassinada em seu apartamento",
      "Os heróis investigam e temem que vilões descubram identidades secretas",
      "Revelação de que Dr. Luz atacou Sue no Satélite da Liga",
      "Liga votou por apagar as memórias de Dr. Luz — e também de Batman, que discordou",
      "Revelação do assassino: Jean Loring, ex-esposa de Ray Palmer (Átomo)"
    ],
    consequences: "Identity Crisis revelou que heróis também podem fazer coisas moralmente questionáveis e forçou uma reflexão sobre poder e responsabilidade. Levou diretamente aos eventos da Crise Infinita.",
    writers: "Brad Meltzer (roteiro) & Rags Morales (arte) — Identity Crisis #1–7, 2004"
  },
  {
    id: 20, year: "2005", era: "modern", eraLabel: "Era Moderna",
    title: "Crise Infinita",
    wikiSlug: "Infinite_Crisis",
    fallbackIcon: "🌌",
    summary: "Os sobreviventes da Crise nas Infinitas Terras — Superboy-Prime, Alexander Luthor Jr. e o casal Superman e Lois Lane da Terra-2 — concluíram que este era o 'universo errado'. Superboy-Prime começa a socar a barreira entre dimensões, alterando a realidade. Alexander Luthor constrói uma máquina para restaurar o Multiverso com intenções ocultas e destrutivas.",
    events: [
      "Superboy-Prime escapa de sua prisão dimensional e ataca heróis",
      "Alexander Luthor Jr. recria o Multiverso para encontrar o 'universo perfeito'",
      "Superboy-Prime mata vários heróis, incluindo membros dos Jovens Titãs",
      "Múltiplas versões de Superman de diferentes Terras combatem Superboy-Prime",
      "O Multiverso é restaurado — agora com 52 Terras ao invés de apenas uma"
    ],
    consequences: "Infinite Crisis restaurou o conceito de Multiverso na DC de forma controlada, abrindo o caminho para 52 e Final Crisis. Superboy-Prime tornou-se uma sátira da mentalidade de fãs que querem seus universos fictícios de volta. A morte de Conner Kent (Superboy) foi um dos momentos mais impactantes da DC moderna.",
    writers: "Geoff Johns (roteiro) & Phil Jimenez, George Pérez e outros — Infinite Crisis #1–7, 2005–2006"
  },
  {
    id: 21, year: "2006", era: "modern", eraLabel: "Era Moderna",
    title: "Superman: Filho Vermelho",
    wikiSlug: "Superman:_Red_Son",
    fallbackIcon: "☭",
    summary: "Mark Millar imaginou: e se a nave de Kal-El tivesse caído na União Soviética em vez dos EUA? Nessa história, Superman cresce como o maior campeão do socialismo soviético, tornando-se a ferramenta mais poderosa da Guerra Fria. Enquanto isso, Lex Luthor trabalha para os EUA tentando encontrar uma forma de derrotá-lo, e a Mulher-Maravilha e o Batman russo surgem como peças no tabuleiro geopolítico.",
    events: [
      "Superman cresce na Ucrânia e se torna o símbolo máximo da URSS",
      "Lex Luthor dedica sua vida a superar e derrotar Superman a serviço dos EUA",
      "Superman transforma a URSS em uma utopia — mas às custas da liberdade individual",
      "Batman russo lidera uma resistência contra o regime de Superman",
      "A reviravolta final conecta toda a história da humanidade à origem de Kal-El"
    ],
    consequences: "Superman: Red Son é considerado uma das melhores histórias de universo alternativo já feitas, explorando como os valores de um herói são moldados pelo ambiente em que cresce. Questiona se Superman seria o mesmo sem os valores americanos — e se esses valores são realmente universais.",
    writers: "Mark Millar (roteiro) & Dave Johnson e Kilian Plunkett (arte) — Superman: Red Son #1–3, 2003"
  },
  {
    id: 22, year: "2006", era: "modern", eraLabel: "Era Moderna",
    title: "All-Star Superman",
    wikiSlug: "All-Star_Superman",
    fallbackIcon: "☀️",
    summary: "Grant Morrison e Frank Quitely criaram a celebração definitiva do Superman: exposto a uma dose letal de energia solar por Lex Luthor, Superman descobre que está morrendo e decide dedicar seus últimos dias completando doze trabalhos hercúleos. A história é ao mesmo tempo o maior conto de Superman e uma meditação sobre mortalidade, legado e o que significa ser um deus entre humanos.",
    events: [
      "Superman é exposto a radiação solar excessiva por Lex Luthor e descobre que está morrendo",
      "Clark Kent revela sua identidade secreta para Lois Lane",
      "Superman completa doze tarefas impossíveis nos seus últimos dias",
      "Confronto final com Lex Luthor, que por um momento experimenta os poderes de Superman",
      "Superman entra no sol para salvá-lo, possivelmente tornando-se parte dele"
    ],
    consequences: "All-Star Superman é frequentemente citado como a história definitiva do personagem e um dos melhores quadrinhos já publicados. A cena em que Superman impede uma adolescente de se suicidar com apenas palavras é considerada uma das mais poderosas da história do meio.",
    writers: "Grant Morrison (roteiro) & Frank Quitely (arte) — All-Star Superman #1–12, 2005–2008"
  },
  {
    id: 23, year: "2007", era: "modern", eraLabel: "Era Moderna",
    title: "A Guerra dos Sinestro Corps",
    wikiSlug: "Sinestro_Corps_War",
    fallbackIcon: "🟡",
    summary: "Sinestro recruta os seres mais aterrorizantes do universo — incluindo o Anti-Monitor e Superboy-Prime — para formar um exército de anéis amarelos baseados no medo. O Corpo das Lanternas Verdes enfrenta sua maior guerra, com Hal Jordan, Kyle Rayner, John Stewart e Guy Gardner na linha de frente. A batalha decisiva acontece nas ruas de Nova York.",
    events: [
      "Sinestro revela o Corpo Sinestro, formado por seres que inspiram medo",
      "Anti-Monitor e Superboy-Prime se juntam às forças de Sinestro",
      "O Corpo das Lanternas Verdes recebe autorização para matar pela primeira vez",
      "Batalha épica em Terra, nas ruas de Nova York e Metrópolis",
      "Revelação das Equações das Emoções e dos outros corpos de lanternas a surgir"
    ],
    consequences: "A Guerra dos Sinestro Corps preparou o terreno para Blackest Night ao revelar que existem sete corpos de lanternas baseados no espectro emocional. Geoff Johns transformou completamente a mitologia dos Lanternas Verdes, tornando-a a mais rica e elaborada da DC.",
    writers: "Geoff Johns & Dave Gibbons (roteiro), Ivan Reis, Patrick Gleason & Ethan Van Sciver (arte) — 2007"
  },
  {
    id: 24, year: "2008", era: "modern", eraLabel: "Era Moderna",
    title: "Final Crisis",
    wikiSlug: "Final_Crisis",
    fallbackIcon: "🔴",
    summary: "Grant Morrison escreveu o maior pesadelo da DC: Darkseid finalmente encontrou a Anti-Vida Equação e a transmitiu pela internet, subjugando a mente de praticamente toda a humanidade. Batman viola seu único código ao atirar em Darkseid. Superman usa a Máquina de Montagem para recriar a realidade e destruir Darkseid.",
    events: [
      "Darkseid decodifica e transmite a Anti-Vida Equação globalmente via internet",
      "A humanidade inteira cai sob controle mental de Darkseid em horas",
      "Batman viola seu código ao atirar em Darkseid com a pistola de Radion",
      "Darkseid usa os Raios Ômega em Batman, aparentemente matando-o",
      "Superman usa a Máquina de Montagem para recriar o universo e destruir Darkseid"
    ],
    consequences: "Final Crisis é a história mais cosmicamente ambiciosa da DC. A 'morte' de Batman levou ao arco 'Batman: O Retorno de Bruce Wayne', onde ele atravessava a história da humanidade. Final Crisis estabeleceu o tom para todo o universo DC da década seguinte.",
    writers: "Grant Morrison (roteiro) & J.G. Jones, Carlos Pacheco, Doug Mahnke — Final Crisis #1–7, 2008–2009"
  },
  {
    id: 25, year: "2009", era: "modern", eraLabel: "Era Moderna",
    title: "Lanterna Verde: Blackest Night",
    wikiSlug: "Blackest_Night",
    fallbackIcon: "💍",
    summary: "Nekron, o senhor da morte, desencadeia a Blackest Night: anéis pretos ressuscitam os mortos de todo o universo DC como Lanternas Negras. Lanterna Verde Hal Jordan precisa unir os representantes de todos os espectros emocionais — de Atrocitus (vermelho/raiva) a Larfleeze (laranja/ganância) — numa Lanterna Branca para combater a morte personificada.",
    events: [
      "Nekron ressuscita heróis e vilões mortos como Lanternas Negras",
      "Lanternas Negras atacam seus entes queridos vivos, alimentando-se de emoções",
      "Hal Jordan une sete Corpos de Lanternas de cores diferentes",
      "Criação da Lanterna Branca — o espectro completo da vida — para combater Nekron",
      "Heróis mortos (Martian Manhunter, Hawkman, Aquaman) são permanentemente ressuscitados"
    ],
    consequences: "Blackest Night expandiu a mitologia dos Lanternas Verdes com o espectro emocional completo. A ressurreição de heróis importantes como Aquaman e o Caçador de Marte rejuvenesceu a DC. É considerada o auge do run de Geoff Johns em Lanterna Verde.",
    writers: "Geoff Johns (roteiro) & Ivan Reis (arte) — Blackest Night #0–8 + tie-ins, 2009–2010"
  },
  {
    id: 26, year: "2010", era: "modern", eraLabel: "Era Moderna",
    title: "O Dia Mais Claro",
    wikiSlug: "Brightest_Day",
    fallbackIcon: "🌟",
    summary: "Após os eventos de Blackest Night, doze heróis e vilões são misteriosamente ressuscitados pela Lanterna Branca — entre eles Aquaman, Martian Manhunter, Hawkman, Hawkgirl e o Espectro Branco. Cada ressuscitado tem uma missão específica que deve cumprir. Por trás de tudo está o Entidade, o ser de vida primordial, e uma ameaça que pode consumir toda a vida na Terra.",
    events: [
      "Doze personagens são ressuscitados simultaneamente pela Lanterna Branca",
      "Aquaman descobre que seus poderes estão errados — convoca criaturas mortas",
      "Martian Manhunter retorna a Marte e encontra rastros de vida alienígena sombria",
      "Hawkman e Hawkgirl investigam o ciclo eterno de suas reencarnações",
      "Revelação do Guerreiro Branco e sua missão de proteger a vida na Terra"
    ],
    consequences: "Brightest Day reintegrou personagens clássicos como Aquaman ao núcleo do universo DC e preparou o terreno para o New 52. A história de Aquaman nesse período levou diretamente ao seu renascimento como um dos personagens mais relevantes da editora.",
    writers: "Geoff Johns & Peter Tomasi (roteiro), Ivan Reis & Patrick Gleason (arte) — Brightest Day #0–24, 2010–2011"
  },
  {
    id: 27, year: "2011", era: "modern", eraLabel: "Era Moderna",
    title: "Flashpoint",
    wikiSlug: "Flashpoint_(comics)",
    fallbackIcon: "🌩️",
    summary: "Barry Allen acorda em um mundo completamente diferente: sem poderes, sem Liga da Justiça, com Thomas Wayne como Batman e o mundo destruído pela guerra entre Aquaman e a Mulher-Maravilha. Barry descobre que sua mãe Nora, que deveria ter morrido assassinada, está viva — porque ele mesmo voltou no tempo para salvá-la, alterando toda a linha do tempo.",
    events: [
      "Barry Allen acorda sem poderes num universo completamente alterado",
      "Thomas Wayne é Batman; Bruce morreu no beco e Thomas virou vigilante",
      "Aquaman e Mulher-Maravilha estão em guerra destruindo a Europa",
      "Barry recupera seus poderes com ajuda do Batman deste mundo",
      "Corrida para o ponto de ruptura do tempo para desfazer a mudança"
    ],
    consequences: "Flashpoint foi o evento que permitiu o lançamento do New 52. O personagem de Thomas Wayne como Batman gerou tanto interesse que retornou em histórias futuras. A Profetisa do Tempo diz a Barry que três linhas do tempo foram fundidas — a origem do New 52.",
    writers: "Geoff Johns (roteiro) & Andy Kubert (arte) — Flashpoint #1–5, 2011"
  },
  {
    id: 28, year: "2011", era: "new52", eraLabel: "New 52",
    title: "New 52: Reinício do Universo DC",
    wikiSlug: "The_New_52",
    fallbackIcon: "🔁",
    summary: "Em setembro de 2011, a DC Comics relançou todos os seus títulos a partir do número 1 simultaneamente — o New 52. O universo foi reiniciado: origens foram reescritas, continuidades apagadas, relacionamentos alterados. Superman voltou a ser jovem e inexperiente em calças jeans. Mulher-Maravilha ganhou nova origem como filha literal de Zeus.",
    events: [
      "Relançamento simultâneo de 52 títulos da DC em setembro de 2011",
      "Reescrita das origens de Superman, Mulher-Maravilha e outros personagens",
      "Novos trajes, novas continuidades, personagens mais jovens",
      "Lançamento de títulos nunca vistos como Batwing e I, Vampire",
      "Introdução de novos conceitos como a Trindade do Pecado e a SHAZAM! moderna"
    ],
    consequences: "O New 52 aumentou dramaticamente as vendas inicialmente mas gerou polêmica pela perda de décadas de história. Após 5 anos, a DC lançou o DC Rebirth para restaurar partes da continuidade anterior. Produziu histórias icônicas como Snyder/Capullo em Batman.",
    writers: "Múltiplos autores, coordenação de Geoff Johns e Dan DiDio — Setembro de 2011"
  },
  {
    id: 29, year: "2012", era: "new52", eraLabel: "New 52",
    title: "Batman: Corte da Coruja",
    wikiSlug: "Court_of_Owls",
    fallbackIcon: "🦉",
    summary: "Scott Snyder e Greg Capullo criaram a melhor história do Batman do New 52: a Corte das Corujas, uma sociedade secreta que controla Gotham City desde sua fundação, direciona sua atenção ao Batman. Os Talon — assassinos imortais e ressuscitados — atacam Gotham em massa. Bruce Wayne descobre que a própria Corte influenciou cada aspecto da história de Gotham.",
    events: [
      "A Corte das Corujas começa a enviar ameaças ao Batman",
      "Um Talon ressuscitado invade a Mansão Wayne e quase mata Bruce",
      "A Corte ativa 40 Talons simultâneos para matar 40 alvos em Gotham numa noite",
      "Bruce ativa o traje experimental e combate os Talons com temperatura extrema",
      "Revelação de que a Corte existe há séculos e moldou a história de Gotham"
    ],
    consequences: "A Corte das Corujas é amplamente considerada uma das melhores histórias do Batman do século XXI. Expandiu a mitologia de Gotham com a Corte como um vilão institucional — não uma pessoa, mas um sistema. Estabeleceu o padrão para o run de Snyder/Capullo.",
    writers: "Scott Snyder (roteiro) & Greg Capullo (arte) — Batman Vol. 2 #1–11, 2011–2012"
  },
  {
    id: 30, year: "2015", era: "new52", eraLabel: "New 52",
    title: "A Guerra de Darkseid",
    wikiSlug: "Darkseid_War",
    fallbackIcon: "🔥",
    summary: "Geoff Johns criou o maior evento do New 52: a Liga da Justiça fica presa no meio de uma guerra entre Darkseid e o Anti-Monitor. A filha de Darkseid, Grail, manipula ambos os lados. No caos, membros da Liga absorvem poderes de deuses — Batman senta no Mobius Chair e se torna onisciente, Flash funde-se com a Speed Force e Superman é exposto à Anti-Vida Equação.",
    events: [
      "Anti-Monitor e Darkseid entram em guerra com a Terra como campo de batalha",
      "Darkseid é morto pelo Anti-Monitor, causando distúrbios cósmicos",
      "Batman senta no Mobius Chair de Metron e se torna temporariamente onisciente",
      "Flash funde-se com a Speed Force e Superman é infectado pela Anti-Vida",
      "Superfilha Grail manipula os eventos para ressuscitar Darkseid de forma corrompida"
    ],
    consequences: "A Guerra de Darkseid foi o canto do cisne do New 52 e uma das histórias mais ambiciosas de Geoff Johns. Redefiniu as escalas de poder do universo DC e preparou o caminho para o DC Rebirth. A revelação de que os Guardiões escondem segredos sobre a Speed Force repercutiu em histórias posteriores.",
    writers: "Geoff Johns (roteiro) & Jason Fabok (arte) — Justice League #40–50, 2015–2016"
  },
  {
    id: 31, year: "2016", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "DC Rebirth: O Universo Volta",
    wikiSlug: "DC_Rebirth",
    fallbackIcon: "🌅",
    summary: "Wally West, o Flash original do universo pré-New 52, estava preso na Speed Force, esquecido por todos porque sua existência havia sido apagada pela manipulação de Dr. Manhattan. Nessa edição especial de 80 páginas, Wally usa suas últimas forças tentando que alguém o lembre. Batman encontra o botão amarelo do sorriso do Comediante na Batcaverna, conectando o mundo de Watchmen ao DCU.",
    events: [
      "Wally West aparece preso na Speed Force, esquecido por todos",
      "Tentativas de se conectar com ex-aliados que não o reconhecem mais",
      "Barry Allen finalmente reconhece Wally, permitindo seu retorno",
      "Batman encontra o botão do Comediante na Batcaverna — vindo de outro universo",
      "Revelação de que um ser externo (Dr. Manhattan) roubou décadas do DCU"
    ],
    consequences: "DC Rebirth foi um momento catártico para fãs veteranos. A revelação de que Dr. Manhattan havia manipulado o DCU abriu as portas para Doomsday Clock. Wally West voltou a ser um dos personagens mais amados da DC.",
    writers: "Geoff Johns (roteiro) & Gary Frank, Ethan Van Sciver e outros — DC Universe: Rebirth #1, 2016"
  },
  {
    id: 32, year: "2017", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "Batman: A Maldição do Barão Branco",
    wikiSlug: "Batman:_White_Knight",
    fallbackIcon: "🎭",
    summary: "Sean Murphy criou uma história alternativa onde o Coringa, após tratamento psiquiátrico, fica curado de sua insanidade e se torna Jack Napier. Ele usa meios legais e políticos para expor as falhas sistêmicas do sistema de justiça de Gotham, argumentando que Batman é a causa do crime em Gotham, não a solução.",
    events: [
      "O Coringa 'cura' sua insanidade e emerge como Jack Napier",
      "Napier usa meios legais e políticos para expor as falhas de Gotham",
      "Bruce Wayne se infiltra no grupo de Napier disfarçado",
      "Batman começa a questionar se sua cruzada causa mais dano do que bem",
      "O confronto final revela camadas de complexidade moral sobre justiça e reabilitação"
    ],
    consequences: "Batman: White Knight se tornou um dos maiores sucessos da DC Black Label, gerando sequências. É uma das raras histórias que apresenta o Coringa como o personagem mais racional e moralmente justificável.",
    writers: "Sean Murphy (roteiro e arte) — Batman: White Knight #1–8, 2017–2018"
  },
  {
    id: 33, year: "2017", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "Doomsday Clock",
    wikiSlug: "Doomsday_Clock_(comics)",
    fallbackIcon: "⏰",
    summary: "A continuação direta de Watchmen e de DC Rebirth. No mundo de Rorschach, o plano de Ozymandias foi revelado e o mundo entrou em colapso. O novo Rorschach e Ozymandias cruzam para o universo DC em busca do Dr. Manhattan, que está secretamente presente há décadas moldando a realidade da DC e removendo a esperança do universo.",
    events: [
      "O mundo de Watchmen colapsa após a revelação do plano de Ozymandias",
      "Novo Rorschach e Ozymandias atravessam para o universo DC",
      "Dr. Manhattan é encontrado interagindo com o passado do universo DC",
      "Manhattan manipulou as origens dos heróis DC para remover a esperança",
      "Confronto entre Superman e Dr. Manhattan — fé versus poder absoluto"
    ],
    consequences: "Doomsday Clock resolveu o mistério aberto em DC Rebirth e estabeleceu Superman como o coração e alma do universo DC. Manhattan, ao ver Superman, recobra esperança e restaura o DCU. É a conclusão literária de décadas de histórias que começaram em Watchmen.",
    writers: "Geoff Johns (roteiro) & Gary Frank (arte) — Doomsday Clock #1–12, 2017–2019"
  },
  {
    id: 34, year: "2018", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "Dark Nights: Metal",
    wikiSlug: "Dark_Nights:_Metal",
    fallbackIcon: "🎸",
    summary: "Scott Snyder revelou que existe um Multiverso das Trevas abaixo do Multiverso normal, feito de matéria escura e pesadelos. O Deus-Corvo Barbatos usa Batman como portal de entrada, liberando versões sombrias de Batman de universos onde ele caiu em desgraça — incluindo o Batman que Ri, a fusão entre Batman e Coringa.",
    events: [
      "Revelação do Multiverso das Trevas, feito de pesadelos e possibilidades sombrias",
      "Barbatos usa Batman como âncora para invadir o universo principal",
      "Sete Batmans das Trevas invadem a Terra, cada um representando um pesadelo diferente",
      "Surgimento do Batman que Ri — a mais terrível das versões sombrias",
      "Liga da Justiça luta para fechar a Trevas e reforçar as fundações do Multiverso"
    ],
    consequences: "Dark Nights: Metal introduziu o Batman que Ri, que se tornou um dos vilões mais populares da DC moderna e ganhou sua própria série. O evento expandiu o Multiverso DC de forma radical, abrindo caminho para Death Metal e a criação do Omniverso.",
    writers: "Scott Snyder (roteiro) & Greg Capullo (arte) — Dark Nights: Metal #1–6, 2017–2018"
  },
  {
    id: 35, year: "2020", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "Dark Nights: Death Metal",
    wikiSlug: "Dark_Nights:_Death_Metal",
    fallbackIcon: "🤘",
    summary: "A conclusão da saga do Batman que Ri: o mundo foi recriado como uma escultura de horror, com versões corrompidas de todos os heróis. Wonder Woman lidera a resistência. O Darkfather — um Darkseid infundido com energia Anti-Vida — ameaça o Multiverso inteiro. A resolução usa a própria Crise como ferramenta para expandir o Multiverso, criando o Omniverso.",
    events: [
      "O Batman que Ri remolda a realidade num pesadelo de versões corrompidas",
      "Wonder Woman lidera a resistência no 'Earth-Metalverse'",
      "O Darkfather consome Anti-Vida ameaçando toda existência",
      "Perpetua é derrotada e o DCU é transformado num Omniverso",
      "O Multiverso se expande: agora há infinitas possibilidades de universos"
    ],
    consequences: "Death Metal criou o Infinite Frontier — um universo onde TODAS as histórias são válidas e canônicas. Foi a resposta criativa definitiva ao debate de continuidade: em vez de apagar histórias, o DCU as abraça todas.",
    writers: "Scott Snyder (roteiro) & Greg Capullo (arte) — Dark Nights: Death Metal #1–7, 2020–2021"
  },
  {
    id: 36, year: "2024", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "DC K.O.: Absolute Power",
    wikiSlug: "DC_K.O.",
    fallbackIcon: "💥",
    summary: "Amanda Waller usa tecnologia Brainiac para eliminar temporariamente os poderes de todos os heróis. Em resposta, a DC lança o DC All In e o Absolute Universe — um universo paralelo com versões mais sombrias e radicais de Superman, Batman e Mulher-Maravilha, sem os códigos morais das versões clássicas. O confronto entre os dois universos define o futuro da DC.",
    events: [
      "Amanda Waller lança Absolute Power, neutralizando poderes de heróis globalmente",
      "Surgimento do Absolute Universe como um espelho sombrio do DCU principal",
      "Absolute Superman emerge como um ser de puro poder sem restrições morais",
      "Absolute Batman opera sem o código de nunca matar",
      "O DCU principal e o Absolute Universe entram em colisão direta — DC K.O."
    ],
    consequences: "A iniciativa DC All In e o Absolute Universe representam a mais recente reinvenção da DC, oferecendo paralelamente o universo clássico e uma linha mais sombria. Estabelece os pilares narrativos para os próximos anos da editora.",
    writers: "Joshua Williamson, Scott Snyder e outros — DC All In / Absolute Universe, 2024"
  }
];

// --- CORES POR ERA ---
const eraColors = {
  golden:  "var(--golden)",
  silver:  "var(--silver)",
  bronze:  "var(--bronze)",
  modern:  "var(--modern)",
  new52:   "var(--new52)",
  rebirth: "var(--rebirth)"
};

// --- CACHE DE IMAGENS ---
const imageCache = {};

async function fetchWikiImage(slug) {
  if (imageCache[slug] !== undefined) return imageCache[slug];
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("no data");
    const data = await res.json();
    const img = data?.thumbnail?.source || null;
    // Pede resolução maior substituindo o tamanho no URL
    const highRes = img ? img.replace(/\/\d+px-/, '/400px-') : null;
    imageCache[slug] = highRes;
    return highRes;
  } catch {
    imageCache[slug] = null;
    return null;
  }
}

// --- RENDERIZAR CARDS ---
async function renderCards(filter = "all") {
  const container = document.getElementById("timelineCards");
  container.innerHTML = "";

  const filtered = filter === "all"
    ? sagas
    : sagas.filter(s => s.era === filter);

  const cards = filtered.map((saga) => {
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
        <div class="card-cover" id="cover-card-${saga.id}">
          <span class="card-cover-emoji">${saga.fallbackIcon}</span>
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
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(saga); }
    });

    container.appendChild(card);
    return { saga, card };
  });

  // Carrega imagens em segundo plano
  for (const { saga, card } of cards) {
    fetchWikiImage(saga.wikiSlug).then(imgUrl => {
      if (!imgUrl) return;
      const coverEl = document.getElementById(`cover-card-${saga.id}`);
      if (coverEl) {
        coverEl.innerHTML = `
          <img
            src="${imgUrl}"
            alt="Capa de ${saga.title}"
            style="width:100%;height:100%;object-fit:cover;display:block;"
            loading="lazy"
            onerror="this.parentElement.innerHTML='<span class=\\'card-cover-emoji\\'>${saga.fallbackIcon}</span>'"
          />
        `;
      }
    });
  }
}

// --- ABRIR MODAL ---
async function openModal(saga) {
  const overlay = document.getElementById("modalOverlay");
  const color   = eraColors[saga.era] || "var(--dc-blue)";

  document.getElementById("modalEraBadge").textContent = saga.eraLabel;
  document.getElementById("modalEraBadge").style.background = color;
  document.getElementById("modalYear").textContent = saga.year;
  document.getElementById("modalTitle").textContent = saga.title;
  document.getElementById("modalSummary").textContent = saga.summary;
  document.getElementById("modalConsequences").textContent = saga.consequences;
  document.getElementById("modalWriters").textContent = saga.writers;

  const coverPlaceholder = document.getElementById("modalCoverPlaceholder");
  coverPlaceholder.innerHTML = `<div class="cover-icon" id="coverIcon">${saga.fallbackIcon}</div>`;

  const ul = document.getElementById("modalEvents");
  ul.innerHTML = "";
  saga.events.forEach(ev => {
    const li = document.createElement("li");
    li.textContent = ev;
    ul.appendChild(li);
  });

  document.getElementById("modal").style.borderColor = color + "55";

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("modalClose").focus(), 350);

  // Carrega imagem real para o modal
  const imgUrl = await fetchWikiImage(saga.wikiSlug);
  if (imgUrl) {
    coverPlaceholder.innerHTML = `
      <img
        src="${imgUrl}"
        alt="Capa de ${saga.title}"
        style="width:100%;height:100%;object-fit:cover;border-radius:10px;"
        onerror="this.parentElement.innerHTML='<div class=\\'cover-icon\\'>${saga.fallbackIcon}</div>'"
      />
    `;
  }
}

// --- FECHAR MODAL ---
function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// --- FILTROS ---
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
