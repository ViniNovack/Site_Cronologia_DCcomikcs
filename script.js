// =====================================
//   DC TIMELINE — SCRIPT.JS
// =====================================

const sagas = [
  {
    id: 1, year: "Big Bang", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Fonte Cria o Universo",
    branches: ["multiverso"],
    isCosmic: true,
    fallbackIcon: "💥",
    summary: "No alvorecer da criação, uma força primordial conhecida como A Fonte dá origem ao Universo DC. Nesse instante, o Anti-Monitor já tenta destruir tudo que está sendo criado, sendo detido por uma aliança entre os primeiros super-seres e a entidade O Espectro. Ao mesmo tempo, os Lordes da Ordem e do Caos surgem para equilibrar as forças fundamentais da existência, e os Perpétuos — Destino, Morte, Sonho, Destruição, Desejo, Desespero e Delírio — passam a existir como personificações eternas de conceitos universais.",
    events: [
      "A Fonte cria o Universo a partir de uma mão cósmica segurando um caldo de estrelas",
      "O Anti-Monitor surge no alvorecer da criação e tenta destruir tudo, sendo detido por heróis e O Espectro",
      "Os Lordes da Ordem e do Caos surgem para equilibrar as forças fundamentais da existência",
      "Os Perpétuos passam a existir em sequência: Destino, Morte, Sonho, Destruição, Desejo, Desespero e Delírio"
    ],
    consequences: "Esse momento fundacional estabelece as regras cósmicas que regem todo o Universo DC — a dualidade entre matéria e antimatéria, ordem e caos, vida e os Perpétuos que personificam conceitos eternos. Praticamente toda grande saga cósmica da DC, de Crise nas Infinitas Terras a Dark Nights: Death Metal, remonta a esse instante fundacional."
  },
  {
    id: 2, year: "10 bi. anos atrás", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "O Nascimento do Monitor e do Anti-Monitor",
    branches: ["multiverso"],
    isCosmic: true,
    fallbackIcon: "⚖️",
    summary: "Como resultado indireto de experimentos futuros de Krona, o Monitor nasce na lua de Oa, dedicando sua existência à meditação silenciosa e ao aprendizado dos segredos do universo. Simultaneamente, seu equivalente sombrio, o Anti-Monitor, nasce na lua de Qward, no universo de antimatéria, rapidamente assumindo o controle de seu mundo natal e formando um exército de seguidores conhecidos como os Demônios da Sombra.",
    events: [
      "O Monitor nasce na lua de Oa e dedica sua existência à meditação e ao conhecimento cósmico",
      "O Anti-Monitor nasce na lua de Qward, no universo de antimatéria oposto",
      "O Anti-Monitor assume rapidamente o controle de Qward com um exército de Trovejantes",
      "Formação dos Demônios da Sombra, guarda pessoal de elite do Anti-Monitor"
    ],
    consequences: "O nascimento simultâneo dessas duas entidades opostas estabeleceu o conflito fundamental entre matéria e antimatéria que definiria bilhões de anos de história cósmica, culminando bilhões de anos depois na Crise nas Infinitas Terras."
  },
  {
    id: 3, year: "9 bi. anos atrás", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Guerra entre Monitor e Anti-Monitor",
    branches: ["multiverso"],
    isCosmic: true,
    fallbackIcon: "🌌",
    summary: "Krypton e outros planetas se formam a partir de material galático em órbita da estrela Rao. Nesse mesmo período, o Anti-Monitor toma consciência da existência do Monitor, seu equivalente no universo de matéria positiva. Os dois travam uma guerra cósmica que se estende por um milhão de anos, com poder igualmente equilibrado, até que um ataque simultâneo deixa ambos imóveis e inconscientes por mais de nove bilhões de anos.",
    events: [
      "Krypton e planetas vizinhos se formam a partir de material galático em órbita de Rao",
      "O Anti-Monitor toma consciência da existência do Monitor no universo de matéria positiva",
      "Os dois travam uma guerra cósmica que dura um milhão de anos sem vencedor definido",
      "Um ataque simultâneo deixa ambos imóveis e inconscientes por mais de nove bilhões de anos"
    ],
    consequences: "Esse conflito ancestral entre o Monitor e o Anti-Monitor permaneceu adormecido por eras, até ser reativado nos eventos que levariam à Crise nas Infinitas Terras, quando o despertar do Anti-Monitor ameaçaria destruir todo o Multiverso."
  },
  {
    id: 4, year: "5 bi. anos atrás", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Guerra do Mundo dos Deuses e o Quarto Mundo",
    branches: ["multiverso", "liga"],
    isCosmic: true,
    fallbackIcon: "🔥",
    summary: "O Mundo dos Deuses, lar dos primeiros seres divinos do universo, é destruído em uma guerra catastrófica pela maior arma viva dos deuses antigos: Mageddon. Os deuses são mortos, mas uma onda de energia cósmica conhecida como Godwave se espalha pelo universo, criando forças fundamentais como a Força da Velocidade e o Metagene, que permitirão o surgimento de superpoderes em gerações futuras. Dos destroços do planeta original, surgem dois novos mundos: Apokolips e Nova Genesis.",
    events: [
      "O Mundo dos Deuses é destruído em guerra catastrófica pela arma viva Mageddon",
      "A Godwave se espalha pelo universo, plantando a semente de futuros superpoderes",
      "Mageddon é aprisionado em um dissipador de gravidade na borda do espaço-tempo",
      "Dos destroços do mundo original, surgem os planetas de Apokolips e Nova Genesis"
    ],
    consequences: "A criação de Apokolips e Nova Genesis deu origem aos Novos Deuses — incluindo Darkseid — que se tornariam algumas das forças mais influentes de toda a história editorial da DC, moldando eventos desde o Quarto Mundo de Jack Kirby até Death Metal."
  },
  {
    id: 5, year: "4,4 bi. anos atrás", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "O Pecado de Krona e a Criação do Universo de Antimatéria",
    branches: ["multiverso", "lanterna-verde"],
    isCosmic: true,
    fallbackIcon: "🌀",
    summary: "Krona, um cientista Maltusiano obcecado em descobrir os segredos da própria criação do Universo, constrói uma máquina capaz de observar o momento exato do Big Bang. Ao testemunhar a mão cósmica segurando o caldo de estrelas, sua máquina explode — um ato de curiosidade que custaria caro a toda a existência, sendo responsável pela criação do Universo de Antimatéria de Qward e por uma onda de mal que corromperia milhares de mundos.",
    events: [
      "Krona constrói uma máquina para observar o momento exato da criação do Universo",
      "A máquina explode ao revelar a mão cósmica segurando o caldo de estrelas primordial",
      "Esse ato acidental cria o Universo de Antimatéria de Qward",
      "Uma onda de mal se espalha pelo universo, corrompendo milhares de mundos"
    ],
    consequences: "O pecado de Krona é considerado a origem de todo mal cósmico subsequente no Universo DC. Para conter os efeitos de sua transgressão, os Maltusianos se dividiriam — alguns se tornando os Guardiões do Universo, fundadores da Tropa dos Lanternas Verdes, e outros se tornando os Controladores."
  },
  {
    id: 6, year: "4,4 bi. anos atrás", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Fundação da Tropa dos Lanternas Verdes",
    branches: ["lanterna-verde"],
    isCosmic: true,
    fallbackIcon: "💍",
    summary: "Sentindo-se culpados pela catástrofe causada por Krona, os Maltusianos se dividem: uma parte se torna os Controladores, enquanto a maioria migra para o planeta Oa e se torna os Guardiões do Universo. Para impedir que o caos se espalhasse, os Guardiões dividem o universo em 3.600 setores, criando um anel de poder para cada um — concedidos aos seres mais corajosos e honestos de cada região, dando origem à lendária Tropa dos Lanternas Verdes.",
    events: [
      "Os Maltusianos se dividem entre os Controladores e os futuros Guardiões do Universo",
      "Os Guardiões migram para o planeta Oa para desenvolver plenamente a ciência",
      "Criação dos andróides Caçadores Cósmicos, que mais tarde se rebelariam contra seus criadores",
      "Divisão do universo em 3.600 setores, cada um recebendo um anel de poder próprio",
      "Fundação oficial da Tropa dos Lanternas Verdes como força policial cósmica"
    ],
    consequences: "A fundação da Tropa dos Lanternas Verdes criou uma das instituições mais duradouras e importantes de toda a mitologia DC, servindo de base para incontáveis heróis — de Hal Jordan a John Stewart, Kyle Rayner e Jessica Cruz — ao longo de bilhões de anos de história."
  },
  {
    id: 7, year: "1 bi. anos atrás", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "O Aprisionamento dos Três Demônios",
    branches: ["liga"],
    isCosmic: true,
    fallbackIcon: "👹",
    summary: "Abnegazar, Rath e Gasth — conhecidos coletivamente como os Três Demônios — governam a Terra primitiva com mãos de ferro. Os Lordes da Ordem finalmente conseguem capturá-los, aprisionando-os em vastas câmaras escondidas sob gelo, areia e água ao redor do mundo. Antes de serem definitivamente subjugados, os demônios criam três artefatos místicos capazes de libertá-los: a Jarra Vermelha de Calythos, o Sino Verde de Uthool e a Roda de Prata de Nyorlath.",
    events: [
      "Os Três Demônios — Abnegazar, Rath e Gasth — dominam a Terra primitiva",
      "Os Lordes da Ordem capturam os demônios após um longo confronto cósmico",
      "Os demônios são aprisionados em câmaras escondidas sob gelo, areia e água",
      "Criação de três artefatos místicos capazes de libertar os demônios de seu cativeiro eterno"
    ],
    consequences: "Os Três Demônios permaneceriam aprisionados por um bilhão de anos, até que o feiticeiro Felix Fausto tentasse libertá-los na era moderna — uma ameaça que conectaria a pré-história mística da Terra diretamente às histórias contemporâneas de magia no Universo DC."
  },
  {
    id: 8, year: "250 mil a.C.", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "As Eras Antigas de Krypton",
    branches: ["superman"],
    isCosmic: true,
    fallbackIcon: "🔬",
    summary: "Um cientista chamado Bertron cria, através de clonagem evolutiva, a poderosa criatura Apocalypse no planeta-colônia de Krypton, ensinando aos kryptonianos os segredos da clonagem. Ao longo de eras subsequentes, a civilização kryptoniana desenvolve sua tecnologia de clonagem a tal ponto que cada cidadão chega a possuir três clones próprios mantidos em animação suspensa, servindo como repositório de órgãos para prolongar suas vidas.",
    events: [
      "Bertron cria a criatura Apocalypse em Krypton através de clonagem evolutiva avançada",
      "Os kryptonianos aprendem e aperfeiçoam as técnicas de clonagem ao longo de gerações",
      "Cada cidadão kryptoniano passa a possuir três clones mantidos em animação suspensa",
      "O Erradicador, um artefato bélico alienígena, atinge Krypton e é reprogramado por um ancestral de Superman"
    ],
    consequences: "Essas eras antigas de Krypton estabeleceram a cultura científica avançada e a obsessão com preservação genética que definiriam o planeta natal de Superman, elementos que ressoariam diretamente em sua origem e nas histórias sobre a destruição final de Krypton."
  },
  {
    id: 9, year: "50.000 a.C.", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Origem de Vandal Savage",
    branches: ["liga"],
    isCosmic: true,
    fallbackIcon: "☄️",
    summary: "Um homem das cavernas do tipo Cro-Magnon chamado Vandar Adg, líder da Tribo do Sangue, é banhado pela radiação de um misterioso meteorito que cai na Terra. O evento concede a ele intelecto e imortalidade inacreditáveis, transformando-o no ser que viveria por dezenas de milênios sob o nome de Vandal Savage — um dos vilões mais antigos e perigosos de toda a história do Universo DC, manipulando eventos importantes através de incontáveis civilizações ao longo dos séculos.",
    events: [
      "Um meteorito misterioso cai na Terra, irradiando o homem das cavernas Vandar Adg",
      "A radiação concede a Vandar intelecto sobre-humano e imortalidade absoluta",
      "Vandar Adg se torna conhecido através dos séculos como Vandal Savage",
      "Início de uma existência imortal que o levaria a influenciar civilizações por toda a história humana"
    ],
    consequences: "Vandal Savage se tornaria um dos antagonistas mais persistentes e versáteis da DC, aparecendo em praticamente todas as épocas da história humana e confrontando heróis desde a Sociedade da Justiça da Era de Ouro até a Liga da Justiça moderna."
  },
  {
    id: 10, year: "30.000 a.C.", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Divindade de Nova Genesis e Apokolips",
    branches: ["liga"],
    isCosmic: true,
    fallbackIcon: "⚡",
    summary: "Anthro, o primeiro homem moderno, começa a se transformar em líder entre os seres humanos recém-evoluídos. No mesmo período cósmico, os cidadãos de Nova Genesis e Apokolips alcançam plena divindade, marcando o verdadeiro início do que ficaria conhecido como o Quarto Mundo — o reino mitológico que mais tarde produziria Darkseid, Orion e toda a guerra eterna entre o bem e o mal cósmicos que moldaria incontáveis histórias da DC.",
    events: [
      "Anthro, o primeiro homem moderno, surge como líder entre os humanos pré-históricos",
      "Cidadãos de Nova Genesis e Apokolips atingem divindade plena, iniciando o Quarto Mundo",
      "Os Guardiões do Universo realizam alterações genéticas na espécie marciana primitiva",
      "Uma praga devastadora dizima a maior parte da raça marciana ancestral"
    ],
    consequences: "O início do Quarto Mundo nesse período pré-histórico estabeleceu as bases para toda a mitologia de Darkseid e dos Novos Deuses que Jack Kirby formalizaria nos quadrinhos décadas mais tarde, conectando a pré-história cósmica diretamente às sagas modernas envolvendo Apokolips."
  },
  {
    id: 11, year: "9.500 a.C.", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Queda de Atlântida",
    branches: ["aquaman"],
    isCosmic: true,
    fallbackIcon: "🌊",
    summary: "Durante o reinado do Rei Orin I, o mapa de Atlântida muda para sempre. Um terremoto colossal rasga o continente, matando milhões de pessoas. Cientistas atlantes haviam previsto a catástrofe e alertado o rei, que construiu grandes escudos de força para proteger algumas cidades, incluindo Tritonis e Poseidonis — mas nada poderia impedir que o continente inteiro afundasse permanentemente no oceano. Eventualmente, os cientistas do Rei Orin desenvolvem um soro que permite aos atlantes sobreviverem respirando debaixo d'água.",
    events: [
      "Cientistas atlantes preveem uma catástrofe iminente e alertam o Rei Orin I",
      "Construção de grandes escudos de força para proteger cidades-chave como Tritonis e Poseidonis",
      "Um terremoto colossal rasga o continente de Atlântida, matando milhões de pessoas",
      "O continente inteiro afunda permanentemente no oceano, dando origem às lendas perdidas",
      "Desenvolvimento de um soro que permite aos atlantes sobreviverem respirando debaixo d'água"
    ],
    consequences: "A queda de Atlântida estabeleceu a civilização submarina que séculos depois daria origem a Aquaman e ao seu reino, sendo uma das origens mitológicas mais ricas e centrais da geografia fantástica do Universo DC."
  },
  {
    id: 12, year: "4000 a.C.", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "As Eras Antigas do Egito e a Chegada de Khufu",
    branches: ["multiverso"],
    isCosmic: true,
    fallbackIcon: "🏺",
    summary: "No Egito Antigo, civilizações às margens do Nilo desenvolvem uma das culturas mais avançadas e duradouras da história humana. É nesse período que nasce Khufu, faraó que mais tarde seria associado a sucessivas reencarnações ao longo dos milênios — incluindo o herói da Idade Média conhecido como Cavaleiro Silencioso. Vandal Savage, já imortal há milênios, frequentemente posa como nobres e governantes egípcios, manipulando a política da região por trás dos bastidores.",
    events: [
      "Civilizações às margens do Nilo desenvolvem uma das culturas mais avançadas da Antiguidade",
      "Nascimento de Khufu, figura que reencarnaria ao longo de diferentes eras da história DC",
      "Vandal Savage usa sua imortalidade para se infiltrar na nobreza e política egípcia",
      "Primeiros registros de magia e misticismo que mais tarde se conectariam à Liga da Justiça Sombria"
    ],
    consequences: "O Egito Antigo se tornou um dos cenários históricos mais recorrentes do Universo DC, berço de reencarnações, artefatos místicos e da longa história de manipulação política de Vandal Savage — elementos que reapareceriam em incontáveis histórias modernas envolvendo magia e imortalidade."
  },
  {
    id: 13, year: "1004 a.C.", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Liga dos Antigos",
    branches: ["liga"],
    isCosmic: true,
    fallbackIcon: "🏛️",
    summary: "Rama Khan, nobre protetor de Jarhanpur, forma a Liga dos Antigos — os maiores super-heróis da Idade Antiga — após a Alta Sacerdotisa de Atlântida, Gamemnae, profetizar a chegada de uma 'hidra de sete cabeças' que devastaria a Terra. Em vez disso, os Antigos travam um confronto trágico: enfrentam e matam a própria Liga da Justiça da América, que havia viajado ao passado distante em busca de seu companheiro perdido, Aquaman — tudo parte de um plano da própria Gamemnae para impedir que Atlântida afundasse no futuro.",
    events: [
      "Gamemnae, Alta Sacerdotisa de Atlântida, profetiza a chegada de uma ameaça devastadora",
      "Rama Khan forma a Liga dos Antigos para proteger a Terra da profecia",
      "A Liga da Justiça da América viaja ao passado distante em busca de Aquaman",
      "Enganados por Gamemnae, os Antigos enfrentam e matam a Liga da Justiça vinda do futuro",
      "Atlântida é mantida fora do oceano por Gamemnae, alterando o curso da história"
    ],
    consequences: "Esse confronto trágico entre duas das maiores equipes de heróis de eras diferentes revelou a profundidade da manipulação de Gamemnae através dos milênios, e se tornou uma das histórias mais sombrias sobre paradoxos temporais e sacrifício heroico em toda a mitologia da Liga da Justiça."
  },
  {
    id: 14, year: "Idade Média", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "Camelot e os Cavaleiros da Mesa Redonda",
    branches: ["liga"],
    isCosmic: true,
    fallbackIcon: "⚔️",
    summary: "Na época do Rei Arthur e seus Cavaleiros da Mesa Redonda, o feiticeiro da corte Merlin e seu protetor demoníaco Etrigan defendem Camelot contra as forças da bruxa Morgaine le Fey. Entre os aliados de Merlin está Sir Justin, o Cavaleiro Brilhante, que recebe uma armadura mágica invulnerável. Eventualmente, Camelot cai quando o Monstro do Pântano — deslocado no tempo — se enraíza sob suas terras e faz o castelo desabar, encerrando uma era de heroísmo lendário.",
    events: [
      "Merlin e Etrigan defendem Camelot contra a bruxa malvada Morgaine le Fey",
      "Sir Justin Arthur recebe de Merlin uma armadura mágica invulnerável, tornando-se o Cavaleiro Brilhante",
      "O Cavaleiro Silencioso, uma encarnação de Khufu, luta ao lado dos heróis de Camelot",
      "O Monstro do Pântano, deslocado no tempo, se enraíza sob o castelo e o derruba",
      "Camelot cai, encerrando a era lendária do Rei Arthur"
    ],
    consequences: "A queda de Camelot conectou diretamente personagens místicos modernos — Etrigan, Monstro do Pântano e o Cavaleiro Brilhante — a uma das lendas mais antigas e influentes da cultura ocidental, estabelecendo um fio narrativo que atravessa toda a mitologia mística do Universo DC até os dias atuais."
  },
  {
    id: 15, year: "Idade Média", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "Genghis Khan e o Primeiro Lanterna Verde da Terra",
    branches: ["flash", "lanterna-verde"],
    isCosmic: true,
    fallbackIcon: "🐉",
    summary: "Dispersado no tempo após batalhar o Nebula Man, o Cavaleiro Brilhante perde a memória e serve sob Genghis Khan por um período, antes de ser resgatado por Sandman, Superman e Metamorfo viajando através das eras. No mesmo período histórico, vikings cruzam o oceano rumo à América sete séculos antes de Colombo, trazendo consigo Arak, guerreiro nativo que mais tarde serviria a Carlos Magno na corte europeia.",
    events: [
      "O Cavaleiro Brilhante, com a memória perdida, serve sob o comando de Genghis Khan",
      "Sandman, Superman e Metamorfo viajam no tempo para resgatar o herói perdido",
      "Vikings cruzam o Atlântico rumo à América, sete séculos antes da chegada de Colombo",
      "Arak, guerreiro da tribo Quontauka, é trazido à Europa e passa a servir Carlos Magno",
      "Jong Li, monge chinês, torna-se o primeiro representante terrestre da Tropa dos Lanternas Verdes"
    ],
    consequences: "Esse período estabeleceu a primeira conexão da Terra com a Tropa dos Lanternas Verdes através de Jong Li, séculos antes de Hal Jordan, além de expandir a presença de heróis deslocados no tempo por diferentes impérios e culturas históricas ao redor do mundo."
  },
  {
    id: 16, year: "Séc. XVI-XVII", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Era das Grandes Navegações e Primeiros Encontros",
    branches: ["multiverso"],
    isCosmic: true,
    fallbackIcon: "🧭",
    summary: "Durante a era das grandes navegações europeias, exploradores cruzam oceanos em busca de novos territórios, riquezas e rotas comerciais. Vandal Savage, sempre presente nos bastidores do poder ao longo dos séculos, continua manipulando eventos históricos de civilizações distantes, garantindo influência sobre o desenvolvimento das nações emergentes — sementes que décadas depois floresceriam nos conflitos que moldariam a Era Moderna.",
    events: [
      "Exploradores europeus cruzam oceanos em busca de novas rotas e territórios",
      "Vandal Savage continua sua influência secreta sobre cortes e governos ao redor do mundo",
      "Primeiros contatos entre civilizações de diferentes continentes alteram o curso da história global",
      "Artefatos místicos antigos começam a ser redescobertos por exploradores e estudiosos"
    ],
    consequences: "Esse período de expansão e contato entre civilizações lançou as bases políticas e territoriais que, séculos depois, moldariam o cenário onde os primeiros super-heróis modernos surgiriam, particularmente nos Estados Unidos em formação."
  },
  {
    id: 17, year: "1776", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Independência Americana e os Primeiros Heróis Patrióticos",
    branches: ["multiverso"],
    isCosmic: true,
    fallbackIcon: "🦅",
    summary: "A formação dos Estados Unidos da América durante a Revolução Americana planta as raízes culturais e patrióticas que séculos depois dariam origem a heróis explicitamente vinculados à identidade nacional americana, como o Capitão América de outras editoras e, no Universo DC, figuras como Stripesy, Major Victory e outros símbolos patrióticos que apareceriam durante a Era de Ouro e a Segunda Guerra Mundial.",
    events: [
      "Assinatura da Declaração de Independência dos Estados Unidos em 1776",
      "Formação da identidade nacional americana que influenciaria gerações futuras",
      "Sementes culturais do patriotismo americano que ecoariam em heróis futuros da Era de Ouro",
      "Vandal Savage observa e influencia secretamente os eventos da Revolução Americana"
    ],
    consequences: "A formação dos Estados Unidos estabeleceu o pano de fundo cultural e geográfico onde, mais de 150 anos depois, surgiriam os primeiros super-heróis mascarados da Era de Ouro, com fortes elementos de patriotismo e identidade nacional refletidos em personagens como o Vingador Escarlate e a futura Sociedade da Justiça da América."
  },
  {
    id: 18, year: "Séc. XIX", era: "cosmic", eraLabel: "Pré-História Cósmica",
    title: "A Guerra Civil Americana e o Século da Industrialização",
    branches: ["multiverso"],
    isCosmic: true,
    fallbackIcon: "🏭",
    summary: "Ao longo do século XIX, os Estados Unidos atravessam a Guerra Civil Americana (1861-1865) e entram em uma era de rápida industrialização. Esses eventos moldam profundamente a sociedade americana que, décadas depois, veria o surgimento dos primeiros super-heróis mascarados. Jonah Hex, pistoleiro lendário do Velho Oeste, atua durante esse período, tornando-se uma das figuras mais icônicas e atemporais da mitologia DC ambientada no século XIX.",
    events: [
      "A Guerra Civil Americana (1861-1865) divide e reconfigura os Estados Unidos",
      "Início da era de rápida industrialização e urbanização nos Estados Unidos",
      "Jonah Hex atua como pistoleiro e caçador de recompensas no Velho Oeste americano",
      "Vandal Savage continua manipulando eventos políticos e econômicos ao longo do século"
    ],
    consequences: "A industrialização e urbanização do século XIX criaram as condições sociais — grandes cidades, jornais de grande circulação, criminalidade organizada — que se tornariam o cenário perfeito para o surgimento dos primeiros super-heróis mascarados nas décadas de 1930, conectando o Velho Oeste de Jonah Hex diretamente à Era de Ouro dos heróis."
  },
  {
    id: 19, year: "1938", era: "golden", eraLabel: "Era de Ouro",
    title: "A Origem do Superman",
    branches: ["superman"],
    wikiSlugs: ["Action_Comics_1"],
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
    id: 20, year: "1939", era: "golden", eraLabel: "Era de Ouro",
    title: "A Origem do Batman",
    branches: ["batman"],
    wikiSlugs: ["Detective_Comics_27"],
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
    id: 21, year: "1940", era: "golden", eraLabel: "Era de Ouro",
    title: "A Formação da Sociedade da Justiça da América",
    branches: ["liga"],
    wikiSlugs: ["Justice_Society_of_America"],
    fallbackIcon: "🏛️",
    summary: "Em 22 de novembro de 1940, oito dos maiores heróis mascarados da época se reúnem em um hotel secreto para o primeiro encontro oficial da Sociedade da Justiça da América — a primeira equipe de super-heróis da história dos quadrinhos. Formada a pedido do Presidente Franklin Delano Roosevelt, que buscava apoiar os Aliados na Europa sem envolver oficialmente o povo americano, a equipe reunia Flash (Jay Garrick), Lanterna Verde (Alan Scott), Gavião Negro, Sr. Destino, Sandman, Homem-Hora, Átomo e o Espectro.",
    events: [
      "Oito heróis se reúnem secretamente a pedido do Presidente Franklin D. Roosevelt",
      "Formação oficial da Sociedade da Justiça da América, primeira equipe de heróis da história",
      "Johnny Trovoada invade a reunião acidentalmente usando seu raio mágico",
      "Estabelecimento da sede da SJA em Civic City, subúrbio de Filadélfia",
      "Mulher-Maravilha se junta à equipe um ano depois, em dezembro de 1941"
    ],
    consequences: "A Sociedade da Justiça da América pavimentou o caminho para toda futura equipe de super-heróis nos quadrinhos, sendo a precursora direta da Liga da Justiça décadas depois. A SJA estabeleceu Civic City e, mais tarde, Gotham e Nova York como sedes simbólicas do legado heroico americano, e seus membros se tornariam a base da mitologia da Terra-2 no Multiverso DC.",
    writers: "Criação: Gardner Fox (roteiro) & Sheldon Mayer (editor) — All-Star Comics #3, 1940"
  },
  {
    id: 22, year: "1941", era: "golden", eraLabel: "Era de Ouro",
    title: "A Origem da Mulher-Maravilha",
    branches: ["mulher-maravilha"],
    wikiSlugs: ["Wonder_Woman"],
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
    id: 23, year: "1941", era: "golden", eraLabel: "Era de Ouro",
    title: "A Barreira Mística e o Comando Invencível",
    branches: ["liga"],
    isCosmic: true,
    fallbackIcon: "🪖",
    summary: "Com a entrada dos Estados Unidos na Segunda Guerra Mundial, todos os heróis americanos se unem sob o nome de Comando Invencível para proteger o país das potências do Eixo. Mas um mistério intrigava os leitores há décadas: por que heróis tão poderosos como o Espectro e o Sr. Destino simplesmente não invadiram a Alemanha e encerraram a guerra em minutos? A resposta veio anos depois — o ocultista Rei Dragão, a serviço de Hitler, criara uma barreira mística usando o Santo Graal e a Lança do Destino, que cancelava poderes de meta-humanos e dominava seres místicos dentro do território do Eixo.",
    events: [
      "Os EUA entram na Segunda Guerra Mundial e os heróis se unem como o Comando Invencível",
      "Hitler obtém a Lança do Destino e o Santo Graal através do ocultista Rei Dragão",
      "Uma barreira mística é erguida sobre toda a Europa controlada pelo Eixo",
      "Heróis místicos ficam sob domínio do Führer; meta-humanos comuns perdem seus poderes na região",
      "A guerra passa a ser travada principalmente por soldados comuns, como o Sargento Rock"
    ],
    consequences: "Essa explicação retroativa, criada pelo escritor Roy Thomas nos anos 80, resolveu uma das maiores inconsistências da Era de Ouro: por que heróis onipotentes não encerraram a Segunda Guerra Mundial instantaneamente. O conceito também estabeleceu o Rei Dragão como um dos vilões místicos fundamentais ligados à Sociedade da Justiça, e reforçou o herói humano comum como peça central do esforço de guerra real."
  },
  {
    id: 24, year: "1941", era: "golden", eraLabel: "Era de Ouro",
    title: "Sete Soldados da Vitória (Legionários da Lei)",
    branches: ["liga"],
    wikiSlugs: ["Seven_Soldiers_of_Victory"],
    fallbackIcon: "🗡️",
    summary: "Reunidos pelo Presidente Roosevelt para combater o crime em solo americano enquanto a Sociedade da Justiça lidava com ameaças maiores, os Sete Soldados da Vitória — Arqueiro Verde, Speedy, Cavaleiro Brilhante, Vigilante, Garoto Estrelado, Stripesy e o Vingador Escarlate (com seu parceiro Wing) — se tornam a segunda grande equipe de heróis da Era de Ouro. Seu primeiro grande desafio os leva a enfrentar o vilão Doutor Doome, que os dispersa através do tempo, espalhando-os por diferentes épocas da história.",
    events: [
      "Formação dos Sete Soldados da Vitória a pedido do Presidente Roosevelt",
      "A equipe enfrenta o Mão de Ferro (Hand) e seus criminosos reunidos em 'Blueprint for Crime'",
      "O Doutor Doome dispersa os Soldados através de diferentes eras da história",
      "Cada Soldado precisa sobreviver isolado em uma época diferente até ser resgatado",
      "Superman, Sandman e Metamorfo resgatam o Cavaleiro Brilhante das hordas de Genghis Khan"
    ],
    consequences: "Os Sete Soldados da Vitória se tornaram a segunda equipe de super-heróis da história dos quadrinhos, consolidando o conceito de times heroicos paralelos à Sociedade da Justiça. A saga de dispersão temporal conectou diretamente a Era de Ouro a praticamente todos os períodos históricos do Universo DC, de Camelot ao Egito Antigo, e o conceito seria revisitado décadas depois por Grant Morrison.",
    writers: "Mort Weisinger & Mort Meskin (roteiro e arte) — Leading Comics #1, 1941"
  },
  {
    id: 25, year: "1951", era: "golden", eraLabel: "Era de Ouro",
    title: "O Fim da Sociedade da Justiça e a Caça às Bruxas",
    branches: ["liga"],
    isCosmic: true,
    fallbackIcon: "📜",
    summary: "Com o fim da Segunda Guerra Mundial e o início da Guerra Fria, um clima de paranoia toma conta dos Estados Unidos. Sob pressão do Comitê sobre Atividades Antiamericanas do Congresso, que exigia que os heróis mascarados revelassem suas identidades secretas para provar lealdade ao país, a Sociedade da Justiça da América se recusa a comprometer seus princípios e se dissolve oficialmente em 1951. Apenas os membros com identidades já públicas ou imunes a essa pressão — como Superman, Batman, Robin, Mulher-Maravilha e Sr. Destino — continuam atuando abertamente.",
    events: [
      "O Comitê sobre Atividades Antiamericanas pressiona heróis a revelarem identidades secretas",
      "A maioria dos membros da SJA se recusa a comprometer suas identidades e princípios",
      "A Sociedade da Justiça da América se dissolve oficialmente em 1951",
      "Superman, Batman, Robin, Mulher-Maravilha e Sr. Destino continuam atuando individualmente",
      "Encerramento simbólico da Era de Ouro dos super-heróis nos quadrinhos"
    ],
    consequences: "A dissolução da SJA encerrou a Era de Ouro dos quadrinhos e separou definitivamente os heróis remanescentes que se tornariam ícones atemporais (Superman, Batman, Mulher-Maravilha) dos heróis que ficariam adormecidos por uma década, até retornarem reformulados na Era de Prata. Esse hiato de silêncio se tornaria crucial para explicar décadas depois por que a SJA passou a ser associada à Terra-2, separada da Liga da Justiça moderna."
  },
  {
    id: 26, year: "1956", era: "silver", eraLabel: "Era de Prata",
    title: "O Surgimento do Flash",
    branches: ["flash"],
    wikiSlugs: ["Showcase_(comics)"],
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
    id: 27, year: "1959", era: "silver", eraLabel: "Era de Prata",
    title: "Hal Jordan se Torna o Lanterna Verde",
    branches: ["lanterna-verde"],
    wikiSlugs: ["Hal_Jordan", "Showcase_(comics)"],
    fallbackIcon: "💚",
    summary: "O alienígena Abin Sur, policial intergaláctico da Tropa dos Lanternas Verdes, cai com sua nave no deserto da Califórnia. Moribundo, ele ordena que seu anel de poder busque um sucessor digno — corajoso e de vontade inabalável. O escolhido é Hal Jordan, piloto de testes da Ferris Aircraft, que é transportado até o local do acidente e recebe o anel, o traje e a bateria de poder de Abin Sur antes de sua morte, tornando-se o novo Lanterna Verde do Setor 2814.",
    events: [
      "Abin Sur, da Tropa dos Lanternas Verdes, cai com sua nave no deserto da Califórnia",
      "O anel de poder de Abin Sur busca um sucessor corajoso e de vontade forte",
      "Hal Jordan, piloto de testes, é escolhido e transportado até o local da queda",
      "Abin Sur transmite o anel, o traje e a bateria de poder a Hal antes de morrer",
      "Hal Jordan aceita a responsabilidade e se torna o novo Lanterna Verde da Terra"
    ],
    consequences: "A origem de Hal Jordan reinventou completamente o conceito do Lanterna Verde, substituindo o misticismo da Era de Ouro por uma mitologia de ficção científica com uma força policial intergaláctica inteira. Hal se tornaria membro fundador da Liga da Justiça e um dos pilares mais duradouros da Era de Prata, embora décadas depois sua história tomasse rumos trágicos com sua queda como Parallax.",
    writers: "John Broome (roteiro) & Gil Kane (arte) — Showcase #22, 1959"
  },
  {
    id: 28, year: "1960", era: "silver", eraLabel: "Era de Prata",
    title: "Surgimento da Liga da Justiça",
    branches: ["liga"],
    wikiSlugs: ["The_Brave_and_the_Bold_(comic_book)", "Justice_League", "Justice_League_of_America"],
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
    id: 29, year: "1961", era: "silver", eraLabel: "Era de Prata",
    title: "Flash de Dois Mundos: O Nascimento do Multiverso",
    branches: ["flash", "multiverso"],
    wikiSlugs: ["Flash_of_Two_Worlds"],
    fallbackIcon: "🌐",
    summary: "Em uma aventura que mudaria para sempre a estrutura do Universo DC, Barry Allen (o Flash da Era de Prata) descobre que pode vibrar sua molécula em uma frequência específica e atravessar para uma realidade paralela — onde encontra Jay Garrick, o Flash original da Era de Ouro, ainda em atividade. A revelação de que Jay não era fictício, mas sim um herói real vivendo em uma Terra paralela, introduziu oficialmente o conceito de Multiverso nos quadrinhos da DC.",
    events: [
      "Barry Allen descobre como vibrar sua frequência molecular para cruzar entre realidades",
      "Barry encontra Jay Garrick, o Flash da Era de Ouro, vivendo em uma Terra paralela",
      "Revelação de que os heróis da Era de Ouro são reais e vivem na Terra-2",
      "Estabelecimento de Terra-1 (heróis modernos) e Terra-2 (heróis da Era de Ouro) como realidades distintas",
      "Os dois Flashes se unem para deter o vilão Pintor Risonho, que também havia cruzado dimensões"
    ],
    consequences: "Esta história introduziu formalmente o conceito de Multiverso na DC Comics, uma das ideias mais influentes e duradouras de toda a editora. Ela permitiu reunir gerações de heróis em encontros anuais entre a Liga da Justiça e a Sociedade da Justiça, e décadas depois forneceria a base conceitual para a Crise nas Infinitas Terras, que big-banged toda essa estrutura multiversal.",
    writers: "Gardner Fox (roteiro) & Carmine Infantino (arte) — The Flash #123, 1961"
  },
  {
    id: 30, year: "1963", era: "silver", eraLabel: "Era de Prata",
    title: "Crise nas Terras Gêmeas: Os Primeiros Encontros JLA/SJA",
    branches: ["liga", "multiverso"],
    isCosmic: true,
    fallbackIcon: "🔄",
    summary: "Após a descoberta do Multiverso, a Liga da Justiça da Terra-1 e a Sociedade da Justiça da Terra-2 começam a se reunir anualmente para enfrentar ameaças que atravessam dimensões. Esses encontros multiversais se tornam uma tradição amada dos quadrinhos, com as duas maiores equipes de heróis da história combinando forças contra vilões interdimensionais, ao mesmo tempo em que humanizam a ideia de Terras paralelas existindo lado a lado, separadas apenas por vibrações moleculares distintas.",
    events: [
      "Liga da Justiça e Sociedade da Justiça começam reuniões anuais entre Terra-1 e Terra-2",
      "Estabelecimento de uma tradição de crossovers entre as duas maiores equipes de heróis da DC",
      "Vilões interdimensionais como o Cristal Rei começam a explorar as fendas entre as Terras",
      "Expansão do conceito de Multiverso para incluir dezenas de Terras paralelas ao longo dos anos",
      "Os encontros se tornam um evento anual aguardado pelos leitores da época"
    ],
    consequences: "Essa tradição de crossovers anuais consolidou o Multiverso como elemento permanente e querido da mitologia DC, e estabeleceu o precedente narrativo que décadas depois seria usado e subvertido pela Crise nas Infinitas Terras — que reuniria essas mesmas Terras paralelas pela última vez antes de fundi-las em uma só."
  },
  {
    id: 31, year: "1958", era: "bronze", eraLabel: "Era de Bronze",
    title: "A Legião dos Super-Heróis do Futuro",
    branches: ["liga"],
    isCosmic: true,
    fallbackIcon: "🚀",
    summary: "No século 30, três adolescentes superpoderosos — Menino Cósmico, Rapaz Relâmpago e Garota Saturno — viajam no tempo até o presente para recrutar um jovem Superboy para seu 'clube de super-heróis'. Nascia assim a Legião dos Super-Heróis, uma equipe ambientada num futuro utópico interestelar que cresceria para incluir dezenas de membros com poderes únicos vindos de mundos alienígenas. Embora tenha estreado na Era de Prata, foi ao longo da década de 1970 que a Legião atingiu seu auge de popularidade e complexidade narrativa.",
    events: [
      "Cosmic Boy, Lightning Lad e Saturn Girl viajam do século 30 até o presente",
      "Os três recrutam Superboy para seu clube de super-heróis do futuro",
      "Superboy é aprovado em uma série de testes e se torna membro honorário",
      "A Legião cresce ao longo dos anos 60 e 70, incorporando dezenas de heróis alienígenas",
      "A equipe se torna uma das mais complexas e queridas mitologias futuristas da DC"
    ],
    consequences: "A Legião dos Super-Heróis estabeleceu um dos primeiros grandes futuros utópicos dos quadrinhos americanos, com uma mitologia interestelar rica que perdura até hoje. A equipe passaria por múltiplas reformulações ao longo das décadas, mas seu conceito central — jovens heróis de mundos diferentes unidos por um ideal comum — continuaria influenciando equipes futuras como os Novos Titãs e a Liga da Justiça Jovem.",
    writers: "Criação: Otto Binder (roteiro) & Al Plastino (arte) — Adventure Comics #247, 1958"
  },
  {
    id: 32, year: "1970", era: "bronze", eraLabel: "Era de Bronze",
    title: "GL/GA: O Espantalho de Deus",
    branches: ["lanterna-verde"],
    wikiSlugs: ["Green_Lantern/Green_Arrow"],
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
    id: 33, year: "1971", era: "bronze", eraLabel: "Era de Bronze",
    title: "O Quarto Mundo de Jack Kirby",
    branches: ["liga"],
    wikiSlugs: ["New_Gods", "Fourth_World_(comics)", "Mister_Miracle"],
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
    id: 34, year: "1971", era: "bronze", eraLabel: "Era de Bronze",
    title: "A Filha do Demônio: A Origem de Ra's al Ghul",
    branches: ["batman"],
    wikiSlugs: ["Ra's_al_Ghul"],
    fallbackIcon: "🗡️",
    summary: "Dennis O'Neil e Neal Adams apresentam um dos maiores e mais duradouros vilões de Batman: Ra's al Ghul, 'A Cabeça do Demônio', líder imortal da Liga dos Assassinos. Mantido vivo há séculos pelo poder regenerativo das Poços de Lázaro, Ra's vê em Batman não apenas um inimigo, mas um potencial herdeiro digno de seu império criminoso — e de sua filha, Talia al Ghul, que se torna uma das parceiras românticas mais complexas e perigosas da vida de Bruce Wayne.",
    events: [
      "Batman investiga a misteriosa Liga dos Assassinos e seu líder enigmático",
      "Primeira aparição de Ra's al Ghul, revelando sua longevidade extraordinária via Poços de Lázaro",
      "Apresentação de Talia al Ghul, filha de Ra's, e o início de seu complexo relacionamento com Batman",
      "Ra's revela seu plano ecoterrorista de reduzir drasticamente a população mundial",
      "Estabelecimento da rivalidade entre Batman e Ra's como um xadrez intelectual e moral contínuo"
    ],
    consequences: "Ra's al Ghul se tornou um dos antagonistas mais icônicos e intelectualmente complexos do Batman, rivalizando em importância com o Coringa. O conceito dos Poços de Lázaro introduziu a possibilidade de ressurreição na mitologia do Batman, e o relacionamento entre Bruce e Talia geraria, décadas depois, um dos elementos mais importantes da Era Moderna: o nascimento de Damian Wayne.",
    writers: "Dennis O'Neil (roteiro) & Neal Adams (arte) — Batman #232, 1971"
  },
  {
    id: 35, year: "1980", era: "bronze", eraLabel: "Era de Bronze",
    title: "Os Novos Titãs",
    branches: ["liga", "titas"],
    wikiSlugs: ["New_Teen_Titans"],
    fallbackIcon: "🌟",
    summary: "Marv Wolfman e George Pérez reinventam completamente a Turma Titã, unindo veteranos como Robin, Moça-Maravilha e Kid Flash a três personagens totalmente novos que se tornariam ícones: Estelar, uma princesa alienígena fugitiva de Tamaran; Ciborgue, um jovem reconstruído com tecnologia avançada após um acidente trágico; e Ravena, uma híbrida demoníaca em busca de ajuda para deter seu pai, o terrível Trigon, antes que ele destrua toda a existência.",
    events: [
      "Ravena recruta os ex-Titãs e novos heróis para ajudá-la a deter seu pai, Trigon",
      "Apresentação de Estelar, princesa tamaraneana fugindo de seu mundo natal",
      "Apresentação de Ciborgue, jovem de Detroit reconstruído com tecnologia alienígena após acidente",
      "A nova equipe derrota Trigon e decide permanecer unida como os Novos Titãs",
      "Estabelecimento da Torre dos Titãs como sede permanente da equipe"
    ],
    consequences: "Os Novos Titãs se tornaram um dos maiores sucessos comerciais e críticos da DC nos anos 80, rivalizando em popularidade com os X-Men da Marvel na mesma época. A saga 'O Contrato Judas', envolvendo o mercenário Exterminador, é considerada uma obra-prima dos quadrinhos. A química entre o elenco definiu o molde de equipes jovens de heróis para gerações seguintes.",
    writers: "Marv Wolfman (roteiro) & George Pérez (arte) — DC Comics Presents #26 / The New Teen Titans #1, 1980"
  },
  {
    id: 36, year: "1982", era: "bronze", eraLabel: "Era de Bronze",
    title: "A Grande Saga das Trevas",
    branches: ["liga"],
    wikiSlugs: ["The_Great_Darkness_Saga"],
    fallbackIcon: "🌑",
    summary: "Artefatos místicos começam a desaparecer ao redor da galáxia, roubados por misteriosos 'Servos das Trevas'. Quando a Legião dos Super-Heróis investiga, descobre que por trás de tudo está Darkseid, ressurgido no século 30 com um plano genial: usar os artefatos para obter controle mental sobre uma raça de três bilhões de seres todo-poderosos. Para enfrentar essa ameaça cósmica, a Legião precisa reunir praticamente todos os Legionários vivos e mortos da história da equipe numa última batalha desesperada — cuja salvação repousa nas mãos de um misterioso bebê que envelhece instantaneamente até a vida adulta.",
    events: [
      "Artefatos místicos de toda a galáxia começam a desaparecer, roubados pelos Servos das Trevas",
      "A Legião descobre que Darkseid ressurgiu no século 30 com um plano de dominação total",
      "Darkseid busca controle mental sobre uma raça de três bilhões de seres todo-poderosos",
      "A Legião reúne praticamente todos os Legionários vivos para a batalha final",
      "Um misterioso bebê que envelhece instantaneamente se revela a chave para deter Darkseid"
    ],
    consequences: "A Grande Saga das Trevas é amplamente considerada a melhor história da Legião dos Super-Heróis e uma das mais importantes da DC, cimentando Darkseid como uma ameaça verdadeiramente imortal e atemporal — capaz de aterrorizar heróis em qualquer século. A saga se tornou referência obrigatória para o uso de Darkseid em histórias futuras, da Crise Final ao Dark Nights: Metal.",
    writers: "Paul Levitz (roteiro) & Keith Giffen (arte) — Legion of Super-Heroes vol. 2 #290–294, 1982"
  },
  {
    id: 37, year: "1984", era: "bronze", eraLabel: "Era de Bronze",
    title: "O Contrato de Judas",
    branches: ["titas", "batman"],
    wikiSlugs: ["The_Judas_Contract"],
    fallbackIcon: "🗡️",
    summary: "Marv Wolfman e George Pérez encerram um dos maiores arcos de sua aclamada parceria nos Novos Titãs com uma traição devastadora: Terra, a mais nova recruta da equipe que conquistara o coração de Mutano, revela-se uma agente dupla a serviço do mercenário Exterminador desde o início. Usando segredos íntimos roubados da confiança dos Titãs, Exterminador captura quase toda a equipe para entregá-la à H.I.V.E., exceto Asa-Noturna — o novo codinome adotado por Dick Grayson após abandonar definitivamente a identidade de Robin.",
    events: [
      "Terra, recém-chegada aos Titãs, revela-se uma agente dupla do mercenário Exterminador desde sempre",
      "Exterminador usa segredos roubados por Terra para capturar quase toda a equipe Titã",
      "Dick Grayson escapa e adota a nova identidade de Asa-Noturna, abandonando definitivamente o manto de Robin",
      "Adeline Kane, ex-esposa de Exterminador, revela a Dick a origem completa do mercenário e apresenta seu filho Joey",
      "Joey Wilson se torna o Titã Jericho; Terra, tomada pela vergonha, provoca o desabamento da base da H.I.V.E. e morre"
    ],
    consequences: "O Contrato de Judas é amplamente considerado o ápice da parceria Wolfman/Pérez nos Novos Titãs e uma das histórias mais influentes e celebradas de toda a história dos Titãs. Estabeleceu Exterminador como um dos vilões mais complexos e duradouros da DC, consolidou Asa-Noturna como identidade definitiva de Dick Grayson, e a morte trágica de Terra se tornou um dos momentos mais marcantes e discutidos da Era de Bronze.",
    writers: "Marv Wolfman (roteiro) & George Pérez (arte) — Tales of the Teen Titans #42–44 e Annual #3, 1984"
  },
  {
    id: 38, year: "1985", era: "modern", eraLabel: "Era Moderna",
    title: "Crise nas Infinitas Terras",
    branches: ["multiverso"],
    wikiSlugs: ["Crisis_on_Infinite_Earths"],
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
    id: 39, year: "1986", era: "modern", eraLabel: "Era Moderna",
    title: "Wally West se Torna o Novo Flash",
    branches: ["flash"],
    wikiSlugs: ["Wally_West"],
    fallbackIcon: "⚡",
    summary: "Após testemunhar o sacrifício heroico de seu mentor e tio por casamento, Barry Allen, durante a Crise nas Infinitas Terras, Wally West — antigo Ajudante-Mirim Kid Flash dos Jovens Titãs — assume o manto do Flash. Diferente de Barry, Wally inicialmente não consegue ultrapassar a barreira do som, precisando consumir quantidades absurdas de calorias para sustentar sua supervelocidade. O que começou como um legado incerto se tornaria, ao longo de mais de duas décadas, uma das jornadas heroicas mais celebradas e amadas da DC Comics.",
    events: [
      "Barry Allen se sacrifica destruindo o canhão de antimatéria durante a Crise",
      "Wally West, antigo Kid Flash dos Jovens Titãs, assume o manto do Flash em homenagem ao tio",
      "Wally inicialmente luta com limitações de velocidade, não conseguindo quebrar a barreira do som",
      "Ele precisa consumir enormes quantidades de calorias para sustentar seus poderes",
      "Ao longo dos anos seguintes, Wally se torna gradualmente mais rápido que o próprio Barry jamais foi"
    ],
    consequences: "Wally West se tornou o primeiro sidekick da história dos quadrinhos a assumir permanentemente o manto de seu mentor, criando um precedente de legado heroico que influenciaria incontáveis personagens futuros. Sob a pena de Mark Waid a partir de 1990, Wally se tornaria o Flash titular por mais de duas décadas, sendo amplamente considerado por fãs como o definitivo Homem mais Rápido do Mundo.",
    writers: "Mike Baron (roteiro) & Jackson Guice (arte) — The Flash Vol. 2 #1, 1987"
  },
  {
    id: 40, year: "1986", era: "modern", eraLabel: "Era Moderna",
    title: "O Homem de Aço",
    branches: ["superman"],
    wikiSlugs: ["The_Man_of_Steel_(comics)"],
    fallbackIcon: "🌽",
    summary: "Completando o trio de reboots que reformulou a Santíssima Trindade após a Crise nas Infinitas Terras, John Byrne reconta do zero a origem do Superman, simplificando décadas de mitologia acumulada. Nesta nova versão, Kal-El se torna o único sobrevivente de Krypton — sem Supergirl, sem animais kryptonianos, sem garrafa de Kandor. Clark só desenvolve seus poderes na adolescência (eliminando a carreira de Superboy) e, pela primeira vez, é Clark Kent — não Superman — quem é tratado como a identidade verdadeira do personagem, com o traje de herói sendo a máscara.",
    events: [
      "Krypton é reformulado como uma civilização fria e estéril, condenando Jor-El a enviar apenas Kal-El à Terra",
      "Kal-El se torna o único sobrevivente kryptoniano, eliminando primos, animais de estimação e cidades em garrafa",
      "Clark Kent só manifesta superpoderes na adolescência, eliminando completamente a era de Superboy",
      "Clark é estabelecido como a identidade genuína do personagem; 'Superman' é a máscara, não o contrário",
      "Primeiros encontros reformulados com Lex Luthor (agora magnata empresarial) e Batman"
    ],
    consequences: "O Homem de Aço se tornou a origem oficial e definitiva do Superman por quase duas décadas, até ser substituída por Superman: Birthright em 2003. Muitos dos elementos estabelecidos por Byrne — Krypton estéril, Clark como identidade verdadeira, Lex Luthor como magnata corporativo — permanecem influentes até hoje, inclusive no filme 'Man of Steel' de Zack Snyder, que adaptou diretamente vários conceitos da minissérie.",
    writers: "John Byrne (roteiro e arte) & Dick Giordano (arte-final) — The Man of Steel #1–6, 1986"
  },
  {
    id: 41, year: "1986", era: "modern", eraLabel: "Era Moderna",
    title: "Batman: O Cavaleiro das Trevas",
    branches: ["batman"],
    wikiSlugs: ["Batman:_The_Dark_Knight_Returns"],
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
    id: 42, year: "1986", era: "modern", eraLabel: "Era Moderna",
    title: "Watchmen",
    branches: ["multiverso"],
    wikiSlugs: ["Watchmen"],
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
    id: 43, year: "1986", era: "modern", eraLabel: "Era Moderna",
    title: "O Que Aconteceu com o Homem do Amanhã?",
    branches: ["superman"],
    wikiSlugs: ["Whatever_Happened_to_the_Man_of_Tomorrow"],
    fallbackIcon: "🌅",
    summary: "Concebida pelo lendário editor Julius Schwartz como a despedida definitiva do Superman da Era de Prata antes da reformulação de John Byrne pós-Crise, esta história imaginária de Alan Moore narra os últimos dias do Homem de Aço através dos olhos de uma envelhecida Lois Lane, contando a um repórter o que realmente aconteceu naquela noite fatídica. Os vilões de toda a vida de Superman se unem numa última conspiração mortal, revelando segredos, sacrificando aliados queridos e levando o herói mais poderoso da Terra a um confronto final que selaria seu destino com honra e tragédia.",
    events: [
      "Uma idosa Lois Elliot (née Lane) conta a um jornalista os eventos finais do Superman",
      "Os vilões clássicos de Superman se unem numa conspiração coordenada para destruí-lo",
      "Identidades secretas são reveladas e aliados queridos de Superman são mortos um a um",
      "Superman é forçado a usar Kryptonita Dourada, removendo permanentemente seus poderes",
      "Numa última e ambígua cena, o Superman aparentemente sacrifica sua vida para deter Mxyzptlk"
    ],
    consequences: "Esta história é amplamente considerada uma das maiores e mais emocionalmente devastadoras já escritas sobre o Superman, servindo como o adeus perfeito para décadas de mitologia da Era de Prata antes do reboot de John Byrne. A icônica imagem de Superman chorando se tornou um símbolo da melancolia inerente a reformulações editoriais que apagam décadas de história amada pelos fãs.",
    writers: "Alan Moore (roteiro) & Curt Swan (arte) — Superman #423 e Action Comics #583, 1986"
  },
  {
    id: 44, year: "1986", era: "modern", eraLabel: "Era Moderna",
    title: "Lendas",
    branches: ["liga"],
    wikiSlugs: ["Legends_(comics)"],
    fallbackIcon: "⚡",
    summary: "Logo após a Crise nas Infinitas Terras, Darkseid lança um plano sutil para destruir os heróis da Terra sem usar força bruta: ele manipula a opinião pública através do demagogo G. Gordon Godfrey, fazendo com que a humanidade se volte contra seus próprios protetores. Diante da perseguição, super-heróis precisam agir na clandestinidade para provar seu valor, o que leva à formação de uma nova Liga da Justiça, um novo Esquadrão Suicida e o retorno do Capitão Marvel.",
    events: [
      "Darkseid inicia a 'Operação Humilhação' através do orador G. Gordon Godfrey",
      "A opinião pública se volta contra os super-heróis, que são declarados ilegais",
      "Billy Batson hesita em se tornar o Capitão Marvel após ser manipulado a matar um inocente",
      "Heróis como Flash, Firestorm e Mulher-Gavião enfrentam ameaças criadas por Darkseid",
      "Formação de uma nova Liga da Justiça para restaurar a confiança pública nos heróis"
    ],
    consequences: "Lendas foi o primeiro grande evento pós-Crise e serviu como ponto de partida para três novas séries icônicas: a Liga da Justiça Internacional de Giffen/DeMatteis, o Esquadrão Suicida de John Ostrander, e o relançamento de Flash com Wally West como protagonista. Esse evento moldou a estrutura editorial da DC por toda a década seguinte.",
    writers: "John Ostrander & Len Wein (roteiro), John Byrne (arte) — Legends #1–6, 1986–1987"
  },
  {
    id: 45, year: "1987", era: "modern", eraLabel: "Era Moderna",
    title: "Shazam!: O Novo Começo",
    branches: ["shazam"],
    wikiSlugs: ["Shazam!:_The_New_Beginning"],
    fallbackIcon: "⚡",
    summary: "Como spin-off direto da saga Lendas, Roy Thomas e Dann Thomas reapresentam o Capitão Marvel ao Universo DC Pós-Crise. Nesta nova continuidade, Billy Batson é um adolescente de 15 anos que fica órfão após a morte dos pais e vai morar com seu parente, o cientista maligno Dr. Sivana. Ao descobrir os planos sinistros de Sivana, Billy foge e encontra um misterioso metrô abandonado em São Francisco, onde conhece o ancião mago Shazam — que lhe concede poderes mágicos para enfrentar seu inimigo eterno, Adão Negro, libertado por Sivana de um exílio dimensional de 5.000 anos.",
    events: [
      "Billy Batson fica órfão e vai viver com seu parente, o cientista maligno Dr. Sivana",
      "Billy descobre os planos sinistros de Sivana e foge para um metrô abandonado em São Francisco",
      "O mago Shazam concede a Billy poderes mágicos, transformando-o em Capitão Marvel",
      "Dr. Sivana liberta Adão Negro de um exílio dimensional de 5.000 anos",
      "Capitão Marvel engana Adão Negro para que ative a própria máquina de Sivana e seja banido novamente"
    ],
    consequences: "Esta minissérie estabeleceu uma mudança permanente na mitologia do personagem: a partir de então, Capitão Marvel passou a ser definitivamente Billy transformado em um super-herói adulto com personalidade juvenil, e não mais tratado como uma entidade separada. Embora tenha sido posteriormente desconsiderada da continuidade principal (relegada à Terra-85) após o reboot de Jerry Ordway em O Poder de Shazam!, é amplamente considerada uma das melhores histórias do Capitão Marvel já escritas.",
    writers: "Roy Thomas & Dann Thomas (roteiro), Tom Mandrake (arte) — Shazam!: The New Beginning #1–4, 1987"
  },
  {
    id: 46, year: "1987", era: "modern", eraLabel: "Era Moderna",
    title: "Esquadrão Suicida: A Formação Moderna",
    branches: ["esquadrao-suicida", "batman"],
    wikiSlugs: ["Suicide_Squad"],
    fallbackIcon: "💀",
    summary: "Como desdobramento direto da minissérie Lendas, John Ostrander reconcebe o Esquadrão Suicida sob um conceito radical: em vez de uma equipe de especialistas comuns, a burocrata implacável Amanda Waller reúne supervilões presos na penitenciária Belle Reve, oferecendo-lhes redução de pena em troca de missões secretas extremamente perigosas para o governo americano. Cada membro porta um bracelete explosivo que pode ser detonado a qualquer sinal de deslealdade. A primeira missão envolve deter o grupo terrorista Jihad, formado por supervilões a serviço do país fictício de Qurac.",
    events: [
      "Amanda Waller recruta supervilões presos em Belle Reve, oferecendo redução de pena em troca de missões",
      "Cada membro recebe um bracelete explosivo que garante obediência sob ameaça de detonação",
      "A formação inicial inclui Rick Flag, Pistoleiro, Capitão Bumerangue, Encantadora e Tigre de Bronze",
      "A primeira missão oficial é deter o grupo terrorista Jihad no país fictício de Qurac",
      "Barbara Gordon, ex-Batgirl, surge como Oráculo, fornecendo suporte de informações remotas à equipe"
    ],
    consequences: "Esta reformulação se tornou a versão definitiva e mais influente do Esquadrão Suicida, sendo a base direta dos filmes 'Esquadrão Suicida' (2016) e 'O Esquadrão Suicida' (2021), com Amanda Waller interpretada por Viola Davis. A série também marcou a estreia de Barbara Gordon como Oráculo, uma das transformações mais significativas e respeitadas de qualquer personagem da DC após um trauma, tornando-se ícone de representatividade.",
    writers: "John Ostrander (roteiro) & Luke McDonnell (arte) — Suicide Squad Vol. 1 #1, 1987"
  },
  {
    id: 47, year: "1987", era: "modern", eraLabel: "Era Moderna",
    title: "Batman: Ano Um",
    branches: ["batman"],
    wikiSlugs: ["Batman:_Year_One"],
    fallbackIcon: "🌃",
    summary: "Após a Crise nas Infinitas Terras reformular o Universo DC, Frank Miller e David Mazzucchelli recontam definitivamente o primeiro ano de Bruce Wayne como o Cavaleiro das Trevas. Narrada em paralelo pelos pontos de vista de Bruce Wayne e do recém-chegado Tenente James Gordon, a história abandona o tom grandioso de super-herói e mostra um Batman inexperiente, falível e ainda aprendendo — levando tiros da polícia, usando um traje que não serve direito, e cometendo erros táticos — enquanto Gordon enfrenta a corrupção policial entrelaçada ao crime organizado de Carmine Falcone em Gotham City.",
    events: [
      "Bruce Wayne retorna a Gotham City após 12 anos de treinamento ao redor do mundo",
      "James Gordon se transfere para o departamento de polícia de Gotham, lidando com corrupção interna",
      "Bruce realiza sua primeira saída como vigilante e é gravemente ferido, quase morrendo",
      "Um morcego entra pela janela da Mansão Wayne, inspirando Bruce a se tornar o Batman",
      "Batman e Gordon formam uma aliança de confiança mútua que se tornaria a base de toda a mitologia futura"
    ],
    consequences: "Batman: Ano Um se tornou a origem moderna definitiva e mais influente do personagem, servindo de base direta para filmes como 'Batman Begins' de Christopher Nolan. A obra também elevou os quadrinhos à categoria de literatura séria, com sua narrativa noir e realista, e estabeleceu o relacionamento de confiança entre Batman e Gordon como um dos pilares emocionais centrais de toda a mitologia do personagem.",
    writers: "Frank Miller (roteiro) & David Mazzucchelli (arte) — Batman #404–407, 1987"
  },
  {
    id: 48, year: "1987", era: "modern", eraLabel: "Era Moderna",
    title: "Mulher-Maravilha: Deuses e Mortais",
    branches: ["mulher-maravilha"],
    wikiSlugs: ["Wonder_Woman:_Gods_and_Mortals"],
    fallbackIcon: "🏛️",
    summary: "Completando o trio de reboots de 1986-1987 ao lado de Ano Um e O Homem de Aço, George Pérez reconstrói a mitologia de Wonder Woman desde a fundação das Amazonas, criadas a partir das almas de mulheres mortas pela violência dos homens. Diana chega aos Estados Unidos sem saber falar inglês — uma mudança radical em relação a todas as versões anteriores — e precisa provar seu valor como campeã das Amazonas ao enfrentar Ares, deus da guerra, que manipula a humanidade rumo a uma Terceira Guerra Mundial.",
    events: [
      "As deusas gregas criam as Amazonas a partir das almas de mulheres mortas pela violência masculina",
      "Diana vence secretamente o torneio das Amazonas, disfarçada, para se tornar a campeã escolhida",
      "Diana chega aos Estados Unidos sem conhecimento prévio do idioma inglês, aprendendo aos poucos",
      "Ares, deus da guerra, manipula líderes mundiais para provocar o início de uma Terceira Guerra Mundial",
      "Diana derrota as forças de Ares e se estabelece como a heroína conhecida pelo mundo como Mulher-Maravilha"
    ],
    consequences: "Deuses e Mortais é amplamente considerado o relato definitivo da origem moderna de Wonder Woman e uma das obras mais aclamadas de toda a carreira de George Pérez. Estabeleceu elementos permanentes da mitologia, como a profunda conexão de Diana com a mitologia grega real, e elevou o título a um de seus períodos de maior sucesso crítico e comercial, influenciando diretamente o filme 'Wonder Woman' de 2017.",
    writers: "George Pérez (roteiro e arte), Greg Potter & Len Wein (roteiro) — Wonder Woman Vol. 2 #1–7, 1987"
  },
  {
    id: 49, year: "1987", era: "modern", eraLabel: "Era Moderna",
    title: "Liga da Justiça Internacional",
    branches: ["liga"],
    wikiSlugs: ["Justice_League_International"],
    fallbackIcon: "🌍",
    summary: "Após a dissolução violenta da Liga da Justiça Detroit num confronto brutal contra o Professor Ivo, o mundo fica sem uma equipe de heróis de elite. O empresário Maxwell Lord reúne um time improvável sob patrocínio das Nações Unidas: Batman, Caçador de Marte, Lanterna Verde Guy Gardner, Besouro Azul, Canário Negro, Dr. Destino, Capitão Marvel, Senhor Milagre e seu parceiro Oberon. Keith Giffen e J.M. DeMatteis transformam a equipe numa comédia sitcom irreverente, repleta de piadas internas, rivalidades cômicas e personagens secundários que se tornariam queridos pelos fãs.",
    events: [
      "A Liga da Justiça Detroit se dissolve após confronto brutal com o Professor Ivo",
      "Maxwell Lord recruta uma nova equipe sob patrocínio formal das Nações Unidas",
      "Formação inicial inclui Batman, Caçador de Marte, Guy Gardner, Besouro Azul e Dr. Destino",
      "A série adota um tom cômico inédito, com piadas internas e personagens excêntricos",
      "A equipe se expande e se divide em Liga da Justiça América e Liga da Justiça Europa"
    ],
    consequences: "A Liga da Justiça Internacional é amplamente considerada uma das eras mais amadas e influentes da Liga, provando que humor e caracterização forte podiam coexistir com aventuras de super-heróis sérias. Introduziu Maxwell Lord como personagem permanente da mitologia DC, e a dinâmica cômica entre Batman e Guy Gardner se tornou uma das parcerias mais citadas e parodiadas da história dos quadrinhos.",
    writers: "Keith Giffen & J.M. DeMatteis (roteiro), Kevin Maguire (arte) — Justice League #1–6 e Justice League International #7+, 1987"
  },
  {
    id: 50, year: "1988", era: "modern", eraLabel: "Era Moderna",
    title: "Batman: A Piada Mortal",
    branches: ["batman"],
    wikiSlugs: ["Batman:_The_Killing_Joke"],
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
    id: 51, year: "1988", era: "modern", eraLabel: "Era Moderna",
    title: "Animal Man de Grant Morrison",
    branches: ["animal-man"],
    wikiSlugs: ["Animal_Man_(comic_book)"],
    fallbackIcon: "🐾",
    summary: "Grant Morrison transforma Buddy Baker, um obscuro herói B-list capaz de emprestar temporariamente as habilidades de animais próximos, em uma das explorações mais radicalmente metaficcionais já publicadas em quadrinhos mainstream. Após uma viagem alucinógena com peiote, Buddy começa a vislumbrar fragmentos de sua própria natureza ficcional, culminando num confronto direto com o próprio Grant Morrison, que aparece como personagem dentro da história para conversar com sua criação sobre a crueldade arbitrária de matar a família de Buddy apenas por necessidade dramática.",
    events: [
      "Buddy Baker tem visões durante uma viagem de peiote, vislumbrando fragmentos de sua natureza ficcional",
      "Sua esposa e filhos são brutalmente assassinados enquanto ele está fora em uma missão",
      "Buddy viaja ao Limbo, dimensão onde residem personagens de quadrinhos esquecidos pela continuidade",
      "Buddy finalmente confronta seu próprio criador, Grant Morrison, dentro da narrativa",
      "Morrison reverte a morte da família de Buddy, reconhecendo a crueldade gratuita da decisão narrativa"
    ],
    consequences: "Animal Man se tornou uma obra fundamental da metaficção nos quadrinhos americanos, abrindo caminho para explorações posteriores similares como Os Invisíveis do próprio Morrison. A série também elevou Buddy Baker de personagem obscuro a um dos heróis mais filosoficamente ricos da DC, e sua defesa apaixonada dos direitos animais e do ambientalismo introduziu temas sociais raramente vistos em quadrinhos de super-heróis da época.",
    writers: "Grant Morrison (roteiro) & Chas Truog (arte) — Animal Man Vol. 1 #1–26, 1988–1990"
  },
  {
    id: 52, year: "1988", era: "modern", eraLabel: "Era Moderna",
    title: "Milênio",
    branches: ["liga"],
    wikiSlugs: ["Millennium_(comics)"],
    fallbackIcon: "🌠",
    summary: "Os Guardiões do Universo decidem que é hora de criar uma nova geração de seres evoluídos, os Novos Guardiões, escolhendo dez humanos ao redor do mundo para essa transformação. Porém, os Caçadores Cósmicos — andróides outrora criados pelos próprios Guardiões — se infiltraram secretamente na sociedade humana há anos e tentam impedir o ritual a todo custo, revelando uma conspiração antiga dentro da Tropa dos Lanternas Verdes.",
    events: [
      "Os Guardiões do Universo selecionam dez humanos para se tornarem os Novos Guardiões",
      "Revelação de que os Caçadores Cósmicos se infiltraram disfarçados entre os heróis há décadas",
      "Batman descobre que os Manhunters miram destruir os candidatos escolhidos",
      "Grande batalha entre a Liga da Justiça e os Caçadores Cósmicos pelo destino dos eleitos",
      "Surgimento oficial dos Novos Guardiões como uma nova força no Universo DC"
    ],
    consequences: "Milênio expandiu a mitologia dos Guardiões do Universo e dos Lanternas Verdes, revelando a antiga traição dos Caçadores Cósmicos. Embora controverso entre os fãs por sua resolução, o evento gerou consequências de longo prazo em diversas séries e aprofundou a história secreta da Tropa dos Lanternas Verdes.",
    writers: "Steve Englehart (roteiro) & Joe Staton (arte) — Millennium #1–8, 1988"
  },
  {
    id: 53, year: "1988", era: "modern", eraLabel: "Era Moderna",
    title: "Odisseia Cósmica",
    branches: ["liga"],
    wikiSlugs: ["Cosmic_Odyssey_(comics)"],
    fallbackIcon: "🪐",
    summary: "Darkseid descobre, através dos dados do Trono Móbius, que existe algo no universo mais poderoso do que ele mesmo: uma entidade primordial do mal capaz de destruir tudo. Obrigado a buscar ajuda entre seus inimigos, Darkseid recruta Superman, Batman, Lanterna Verde John Stewart, Caçador de Marte, Demolidor e os Novos Deuses para uma missão que pode salvar — ou destruir — quatro planetas inteiros.",
    events: [
      "Darkseid encontra o Trono Móbius e descobre uma ameaça maior que ele mesmo",
      "Formação de uma aliança improvável entre heróis da Terra e os Novos Deuses",
      "As equipes se dividem para proteger quatro mundos: Terra, Rann, Thanagar e Xanshi",
      "Lanterna Verde John Stewart falha em proteger Xanshi, que é destruído",
      "A culpa pela destruição de Xanshi marca profundamente a psique de John Stewart por anos"
    ],
    consequences: "Odisseia Cósmica é considerada uma das melhores histórias cósmicas da DC, com arte icônica de Mike Mignola. O trauma de John Stewart pela destruição de Xanshi se tornou um ponto central de desenvolvimento do personagem em histórias futuras, incluindo sua jornada de redenção em sagas posteriores do Lanterna Verde.",
    writers: "Jim Starlin (roteiro) & Mike Mignola (arte) — Cosmic Odyssey #1–4, 1988–1989"
  },
  {
    id: 54, year: "1988", era: "modern", eraLabel: "Era Moderna",
    title: "Morte em Família: A Morte de Jason Todd",
    branches: ["batman"],
    wikiSlugs: ["A_Death_in_the_Family_(comics)"],
    fallbackIcon: "🩸",
    summary: "Jason Todd, o segundo Robin, havia se tornado um personagem impopular entre os fãs por seu temperamento impulsivo e violento. A DC Comics tomou uma decisão sem precedentes na história dos quadrinhos: abrir uma linha telefônica para que os próprios leitores votassem se Jason deveria viver ou morrer. Em busca de sua mãe biológica no Líbano em guerra, Jason é capturado pelo Coringa, que o espanca brutalmente com um pé-de-cabra e o abandona junto a uma bomba prestes a explodir. O resultado da votação dos fãs decidiu seu destino: 5.343 votos a favor da morte contra 5.271 pela vida.",
    events: [
      "Jason Todd viaja ao Líbano em guerra em busca de sua mãe biológica",
      "A DC Comics abre uma linha telefônica para os fãs votarem sobre o destino de Jason",
      "O Coringa captura Jason e o espanca brutalmente com um pé-de-cabra",
      "Jason é deixado junto a uma bomba que explode antes que Batman consiga salvá-lo",
      "Os fãs votam pela morte de Jason Todd por uma margem de apenas 72 votos"
    ],
    consequences: "A morte de Jason Todd empurrou definitivamente a mitologia do Batman para um tom mais sombrio, com o fracasso em salvar seu parceiro assombrando o Cavaleiro das Trevas por anos. Tim Drake assumiria o manto de Robin pouco depois, mas a culpa de Batman por essa morte se tornaria um elemento permanente de sua psicologia, revisitado em incontáveis histórias futuras — incluindo o eventual retorno de Jason como o Capuz Vermelho.",
    writers: "Jim Starlin (roteiro) & Jim Aparo (arte) — Batman #426–429, 1988"
  },
  {
    id: 55, year: "1989", era: "modern", eraLabel: "Era Moderna",
    title: "Patrulha do Destino de Grant Morrison",
    branches: ["patrulha-destino"],
    wikiSlugs: ["Doom_Patrol"],
    fallbackIcon: "🌀",
    summary: "Assumindo o título a partir da edição #19, Grant Morrison transforma a Patrulha do Destino de uma equipe de super-heróis convencional em uma das séries mais surreais e psicologicamente complexas já publicadas pela DC. A nova formação inclui Robotman (Cliff Steele), lutando contra a depressão de viver como um cérebro humano em corpo robótico, e Crazy Jane, uma mulher com 64 personalidades distintas, cada uma com um superpoder único. A equipe enfrenta ameaças tão bizarras quanto eles mesmos: a Irmandade do Dadá, um grupo anarquista que combate a própria realidade através da arte sem sentido.",
    events: [
      "Grant Morrison assume a Patrulha do Destino a partir da edição #19, reformulando-a radicalmente",
      "Cliff Steele (Robotman) luta contra depressão profunda ao viver como cérebro em corpo robótico",
      "Surgimento de Crazy Jane, mulher com 64 personalidades distintas, cada uma com um poder único",
      "A equipe enfrenta a Irmandade do Dadá, grupo anarquista que ataca a realidade através da arte absurda",
      "Exploração de temas como saúde mental, identidade de gênero e descoberta sexual de forma abstrata e simbólica"
    ],
    consequences: "A Patrulha do Destino de Morrison se tornou uma obra fundamental da chamada 'invasão britânica' dos quadrinhos americanos, introduzindo conceitos de dadaísmo e literatura experimental nunca antes vistos em super-heróis mainstream. A série influenciou diretamente o desenvolvimento posterior de Morrison em obras como Os Invisíveis e Final Crisis, e décadas depois inspirou a aclamada série de TV 'Doom Patrol' (2019).",
    writers: "Grant Morrison (roteiro) & Richard Case (arte) — Doom Patrol Vol. 2 #19–63, 1989–1993"
  },
  {
    id: 56, year: "1989", era: "modern", eraLabel: "Era Moderna",
    title: "Sandman de Neil Gaiman",
    branches: ["sandman"],
    wikiSlugs: ["The_Sandman_(comic_book)"],
    fallbackIcon: "🌙",
    summary: "O até então pouco conhecido jornalista britânico Neil Gaiman reinventa completamente o obscuro herói Sandman para criar uma das obras mais aclamadas e influentes em toda a história dos quadrinhos. Dream, também conhecido como Morpheus, é um dos sete Perpétuos — seres anteriores aos próprios deuses que personificam aspectos fundamentais da existência — capturado e aprisionado por décadas por um ocultista que pretendia prender a Morte. Ao escapar de seu cativeiro, Dream precisa recuperar seus artefatos de poder roubados enquanto reconstrói seu reino devastado: a Sonhação.",
    events: [
      "O ocultista Roderick Burgess tenta aprisionar a Morte, mas erroneamente captura Dream em seu lugar",
      "Dream permanece preso por décadas, causando uma epidemia mundial de transtornos do sono",
      "Após escapar, Dream busca recuperar seu elmo, sua areia e seu rubi, artefatos de poder roubados",
      "Apresentação dos demais Perpétuos: Destino, Morte, Desejo, Desespero, Delírio e Destruição",
      "A série incorpora o Sandman original da Era de Ouro, Wesley Dodds, como parte da mitologia ampliada"
    ],
    consequences: "Sandman se tornou a primeira e única série em quadrinhos a vencer o World Fantasy Award, elevando definitivamente o meio à categoria de literatura séria. A obra atraiu um público inteiramente novo aos quadrinhos, sendo lançada sob o selo Vertigo a partir da edição #47. Décadas depois, tornou-se a base direta da aclamada série da Netflix estrelada por Tom Sturridge, e Dream permanece um dos personagens mais filosoficamente ricos de toda a mitologia DC.",
    writers: "Neil Gaiman (roteiro), múltiplos artistas incluindo Sam Kieth e Mike Dringenberg — The Sandman #1–75, 1989–1996"
  },
  {
    id: 57, year: "1989", era: "modern", eraLabel: "Era Moderna",
    title: "Arkham Asylum",
    branches: ["batman"],
    wikiSlugs: ["Arkham_Asylum:_A_Serious_House_on_Serious_Earth"],
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
    id: 58, year: "1991", era: "modern", eraLabel: "Era Moderna",
    title: "Guerra dos Deuses",
    branches: ["mulher-maravilha"],
    wikiSlugs: ["War_of_the_Gods_(comics)"],
    fallbackIcon: "⚡",
    summary: "Para celebrar os 50 anos da Mulher-Maravilha, George Pérez encerrou seu aclamado período no título com uma guerra entre panteões inteiros. A feiticeira Circe, buscando agradar sua deusa-patrona Hécate, tece a Teia do Fogo Infernal para destruir a deusa da Terra Gaia. Para isso, ela desperta e manipula os deuses gregos e romanos uns contra os outros, despertando um conflito que abala a estabilidade geológica do planeta inteiro e força praticamente todos os heróis do Universo DC — de Superman a Liga da Justiça — a entrar em ação.",
    events: [
      "Circe tece a Teia do Fogo Infernal, um ritual místico para destruir a deusa Gaia",
      "Os panteões grego e romano são despertados e manipulados a guerrear entre si",
      "O Capitão Marvel é possuído pelo panteão romano, enfrentando a Mulher-Maravilha protegida pelos gregos",
      "Efeitos da magia de Circe causam catástrofes geológicas ao redor do mundo inteiro",
      "Mulher-Maravilha enfrenta e derrota Circe definitivamente, encerrando a guerra entre os deuses"
    ],
    consequences: "Guerra dos Deuses foi o ápice e a conclusão do lendário período de George Pérez em Mulher-Maravilha, que havia redefinido completamente a personagem após a Crise nas Infinitas Terras. A saga estabeleceu Circe como a maior inimiga mística de Diana, e expandiu a mitologia grega dentro do Universo DC de forma mais rica do que qualquer história anterior da Era Moderna.",
    writers: "George Pérez (roteiro e arte), Cynthia Martin & Russell Braun (arte) — War of the Gods #1–4, 1991"
  },
  {
    id: 59, year: "1992", era: "modern", eraLabel: "Era Moderna",
    title: "A Morte do Superman",
    branches: ["superman"],
    wikiSlugs: ["The_Death_of_Superman"],
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
    id: 60, year: "1993", era: "modern", eraLabel: "Era Moderna",
    title: "Reino dos Supermens",
    branches: ["superman"],
    wikiSlugs: ["Reign_of_the_Supermen_(film)", "Hank_Henshaw"],
    fallbackIcon: "🔵",
    summary: "Seis meses após a morte de Superman para Doomsday, quatro figuras diferentes surgem simultaneamente clamando ser o verdadeiro Homem de Aço retornado: um Superboy clonado e patrocinado por Lex Luthor, o blindado John Henry Irons como Aço, o misterioso Eradicator (artefato kryptoniano senciente) e o poderoso Superman Cibernético. A verdade chocante é revelada quando o Superman Cibernético se revela como Hank Henshaw, astronauta transformado por radiação cósmica que culpa o verdadeiro Superman pela morte de sua esposa, planejando destruir seu legado e transformar Metrópolis em uma nova Engine City.",
    events: [
      "Quatro Supermens diferentes surgem simultaneamente reivindicando ser o herói retornado",
      "Lex Luthor patrocina publicamente o Superboy clonado como o 'verdadeiro' substituto de Superman",
      "Revelação de que o Superman Cibernético é, na verdade, o vilão Hank Henshaw",
      "Henshaw destrói Coast City com a ajuda do vilão alienígena Mongul, evento que levaria Hal Jordan à loucura",
      "O Superman original é revivido e, com ajuda de Superboy e Aço, derrota Henshaw definitivamente"
    ],
    consequences: "Reino dos Supermens introduziu permanentemente Conner Kent (Superboy) e John Henry Irons (Aço) à família de personagens de Superman, ambos se tornando aliados duradouros do herói nas décadas seguintes. A destruição de Coast City por Henshaw e Mongul se tornou o evento detonador direto da queda de Hal Jordan em Parallax, conectando esta saga diretamente a Zero Hour e à eventual saga de redenção do Lanterna Verde.",
    writers: "Dan Jurgens, Louise Simonson, Karl Kesel, Jerry Ordway, Roger Stern (roteiro) — Action Comics, Superman, Adventures of Superman, Superman: The Man of Steel, 1993"
  },
  {
    id: 61, year: "1993", era: "modern", eraLabel: "Era Moderna",
    title: "Knightfall: A Queda do Batman",
    branches: ["batman"],
    wikiSlugs: ["Batman:_Knightfall"],
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
    id: 62, year: "1993", era: "modern", eraLabel: "Era Moderna",
    title: "Flash: O Retorno de Barry Allen",
    branches: ["flash"],
    wikiSlugs: ["The_Flash_(comic_book)"],
    fallbackIcon: "🌀",
    summary: "Após anos como o Flash titular, Wally West enfrenta seu maior pesadelo emocional: Barry Allen parece ter retornado dos mortos. Mas o homem que volta não é o Barry gentil e heroico que Wally conhecia — é um velocista paranoico e violento, determinado a eliminar tudo que considera 'crime' através de métodos brutais. A verdade chocante por trás desse retorno revelaria uma das reviravoltas mais impactantes da carreira de Wally como herói, forçando-o a confrontar diretamente a sombra de seu próprio mentor.",
    events: [
      "Um velocista misterioso surge afirmando ser Barry Allen, retornado dos mortos",
      "O suposto Barry se revela paranoico e extremamente violento em sua cruzada contra o crime",
      "Wally West enfrenta a dolorosa possibilidade de que seu mentor tenha retornado corrompido",
      "Investigação revela que se trata de Bart Allen... na verdade Eobard Thawne disfarçado",
      "Wally precisa derrotar o impostor e reafirmar definitivamente seu próprio direito ao manto do Flash"
    ],
    consequences: "Esta saga, escrita por Mark Waid em seu aclamado período na revista, foi um marco decisivo para a maturidade de Wally West como herói — forçando-o a parar de viver na sombra de Barry Allen e a se afirmar como o Flash por direito próprio. É amplamente considerada uma das melhores histórias do período Waid e consolidou Wally como um dos heróis mais bem desenvolvidos psicologicamente da DC.",
    writers: "Mark Waid (roteiro) & Greg LaRocque (arte) — The Flash Vol. 2 #74–79, 1993"
  },
  {
    id: 63, year: "1994", era: "modern", eraLabel: "Era Moderna",
    title: "Zero Hour: Crise no Tempo",
    branches: ["lanterna-verde", "multiverso"],
    wikiSlugs: ["Zero_Hour:_Crisis_in_Time!"],
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
    id: 64, year: "1994", era: "modern", eraLabel: "Era Moderna",
    title: "Aquaman: A Transformação de Peter David",
    branches: ["aquaman"],
    wikiSlugs: ["Aquaman_(comic_book)", "Aquaman"],
    fallbackIcon: "🔱",
    summary: "Peter David assume o título de Aquaman com uma missão clara: transformar radicalmente um personagem visto havia décadas como piada entre os fãs de quadrinhos. Arthur Curry mergulha em depressão após descobrir verdades perturbadoras sobre seu passado e sua relação com o Mestre dos Oceanos durante a minissérie Crônicas de Atlântida. Quando o vilão Caribdis prende sua mão em um cardume de piranhas enlouquecidas, Aquaman perde a mão para sempre — e decide substituí-la por um arpão místico de água, ao mesmo tempo deixando crescer cabelo e barba longos, abandonando definitivamente a imagem datada de décadas anteriores.",
    events: [
      "Arthur Curry mergulha em depressão após descobrir segredos sombrios sobre seu passado",
      "O vilão Caribdis prende a mão de Aquaman em um cardume de piranhas enlouquecidas",
      "Aquaman perde permanentemente sua mão esquerda no confronto",
      "Ele substitui a mão perdida por um arpão místico capaz de canalizar água",
      "Aquaman deixa crescer cabelo e barba longos, adotando um visual selvagem e mais sério"
    ],
    consequences: "A reinvenção de Peter David transformou Aquaman de personagem secundário e motivo de piadas em um dos heróis mais respeitados e visualmente icônicos da DC dos anos 90. O visual de cabelo longo, barba e mão de arpão se tornaria tão influente que serviria de inspiração direta para a aparência de Arthur Curry interpretado por Jason Momoa no Universo Estendido DC décadas depois.",
    writers: "Peter David (roteiro) & Martin Egeland (arte) — Aquaman Vol. 5 #0–2, 1994"
  },
  {
    id: 65, year: "1996", era: "modern", eraLabel: "Era Moderna",
    title: "Kingdom Come",
    branches: ["liga", "superman"],
    wikiSlugs: ["Kingdom_Come_(comics)"],
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
    id: 66, year: "1996", era: "modern", eraLabel: "Era Moderna",
    title: "Batman: O Longo Dia das Bruxas",
    branches: ["batman"],
    wikiSlugs: ["Batman:_The_Long_Halloween"],
    fallbackIcon: "🎃",
    summary: "Situada logo após Batman: Ano Um, esta saga noir de treze edições acompanha o primeiro ano completo de Batman como detetive, investigando um misterioso assassino em série conhecido como Holiday, que mata uma vítima a cada feriado do calendário. Jeph Loeb e Tim Sale tecem uma trama digna de máfia siciliana ao redor da família Falcone, ao mesmo tempo explorando profundamente a queda do promotor Harvey Dent rumo à dupla identidade trágica de Duas-Caras — origem que se tornaria a referência definitiva do personagem.",
    events: [
      "Um assassino misterioso chamado Holiday começa a matar vítimas em cada feriado do calendário",
      "Batman, James Gordon e Harvey Dent formam um pacto para derrubar o império criminoso de Carmine Falcone",
      "Praticamente toda a galeria de vilões do Batman aparece ao longo da investigação, incluindo Coringa e Charada",
      "Harvey Dent sofre um ataque com ácido que desfigura metade de seu rosto, completando sua queda trágica",
      "Revelação da verdadeira identidade do assassino Holiday em uma reviravolta chocante envolvendo a família Falcone"
    ],
    consequences: "O Longo Dia das Bruxas é amplamente considerada uma das obras-primas definitivas do Batman, citada pelo diretor Christopher Nolan como inspiração direta para 'The Dark Knight'. A origem de Duas-Caras apresentada aqui se tornou a versão canônica mais influente do personagem, e a saga deu início a uma trilogia de sucesso com suas sequências Batman: Dark Victory e Catwoman: When in Rome.",
    writers: "Jeph Loeb (roteiro) & Tim Sale (arte) — Batman: The Long Halloween #1–13, 1996–1997"
  },
  {
    id: 67, year: "1996", era: "modern", eraLabel: "Era Moderna",
    title: "Noite Final",
    branches: ["lanterna-verde"],
    wikiSlugs: ["The_Final_Night"],
    fallbackIcon: "🌑",
    summary: "Um alienígena chamado Dusk cai na Terra trazendo um aviso terrível: uma entidade cósmica conhecida como Devorador de Sóis está vindo para consumir o Sol. Conforme o mundo mergulha em escuridão e frio extremo, heróis e vilões — incluindo Lex Luthor — precisam se unir desesperadamente para evitar a extinção de toda a vida na Terra, em uma batalha que custará a vida de Hal Jordan, agora possuído por Parallax.",
    events: [
      "Dusk cai na Terra alertando sobre a chegada do Devorador de Sóis",
      "O Sol é envolto e extinto, mergulhando o planeta em escuridão e frio mortal",
      "Heróis e vilões, incluindo Lex Luthor, se unem em esforços de sobrevivência global",
      "Parallax (Hal Jordan) se sacrifica usando seu poder para reacender o Sol",
      "A humanidade sobrevive à beira da extinção graças ao sacrifício final de Hal Jordan"
    ],
    consequences: "O sacrifício de Hal Jordan em Noite Final foi visto como uma redenção parcial após seus atos como Parallax, preparando emocionalmente os leitores para sua jornada de herói trágico que culminaria, anos depois, em Lanterna Verde: Renascimento. O evento também explorou temas raros nos quadrinhos da época: sobrevivência coletiva diante do fim do mundo.",
    writers: "Karl Kesel (roteiro) & Stuart Immonen (arte) — The Final Night #1–4, 1996"
  },
  {
    id: 68, year: "1997", era: "modern", eraLabel: "Era Moderna",
    title: "LJA: Nova Ordem Mundial",
    branches: ["liga"],
    wikiSlugs: ["JLA:_New_World_Order"],
    fallbackIcon: "🌍",
    summary: "Grant Morrison reformulou a Liga da Justiça reunindo seus membros mais icônicos — Superman, Batman, Mulher-Maravilha, Flash, Lanterna Verde, Aquaman e Caçador de Marte — em uma nova era de grandeza mítica. A história de estreia apresenta a Liga enfrentando os Hyperclan, um grupo de Marcianos Brancos disfarçados de salvadores da humanidade, que escondem planos de dominação total do planeta.",
    events: [
      "Surgimento do Hyperclan, supostos novos heróis que prometem resolver os problemas do mundo",
      "A Liga da Justiça original é gradualmente substituída na confiança pública pelo Hyperclan",
      "Revelação de que o Hyperclan é formado por Marcianos Brancos com planos de conquista",
      "Batman descobre a verdade e reúne a formação clássica da Liga para o confronto final",
      "Restabelecimento da Liga da Justiça como o time principal de elite do Universo DC"
    ],
    consequences: "Esta saga deu início à fase mais aclamada da Liga da Justiça, reposicionando o time como um 'panteão' de deuses modernos. Definiu o roster clássico (Superman, Batman, Mulher-Maravilha, Flash, Lanterna Verde, Aquaman, Caçador de Marte) como o padrão definitivo da equipe, influenciando diretamente adaptações futuras em animação e cinema.",
    writers: "Grant Morrison (roteiro) & Howard Porter (arte) — JLA #1–4, 1997"
  },
  {
    id: 69, year: "1998", era: "modern", eraLabel: "Era Moderna",
    title: "DC Um Milhão",
    branches: ["superman"],
    wikiSlugs: ["DC_One_Million"],
    fallbackIcon: "🔢",
    summary: "Para celebrar a publicação simbólica da Action Comics #1.000.000, Grant Morrison levou a Liga da Justiça a uma jornada até o século 853, onde encontram seus descendentes super-heroicos governando uma utopia interestelar. Lá, eles descobrem que o primeiro Superman ainda está vivo, vivendo dentro do núcleo do Sol, e que uma ameaça do passado pode comprometer todo o futuro da humanidade.",
    events: [
      "A Liga da Justiça viaja ao futuro para a celebração da Action Comics #1.000.000",
      "Descoberta de que o Superman original vive imerso no núcleo do Sol há milênios",
      "Apresentação da Liga da Justiça do século 853, descendente espiritual da equipe atual",
      "Solaris, o Tirano Solar, ameaça destruir o sistema solar e o legado de Superman",
      "A Liga do presente e do futuro se unem para impedir a ameaça e restaurar a ordem temporal"
    ],
    consequences: "DC Um Milhão é uma celebração visionária do legado duradouro dos heróis da DC, mostrando um futuro de esperança e grandiosidade cósmica. Embora seu impacto direto na cronologia seja menor, a saga é amplamente aclamada como uma das obras mais criativas de Grant Morrison e reforça o Superman como símbolo eterno de esperança.",
    writers: "Grant Morrison (roteiro) & Val Semeiks (arte) — DC One Million #1–4, 1998"
  },
  {
    id: 70, year: "1999", era: "modern", eraLabel: "Era Moderna",
    title: "Batman: Terra de Ninguém",
    branches: ["batman"],
    wikiSlugs: ["Batman:_No_Man's_Land"],
    fallbackIcon: "🏚️",
    summary: "Após uma sequência de desastres — surtos de superfebre, mais uma epidemia, e finalmente um terremoto de magnitude 7,6 conhecido como o Cataclismo — o governo dos Estados Unidos decide que Gotham City é cara demais para salvar. As pontes são explodidas, um bloqueio militar isola a cidade, e ela é oficialmente declarada Terra de Ninguém, abandonada à própria sorte. Vilões como Coringa, Pinguim, Duas-Caras e Bane dividem o território entre si, enquanto Batman, ausente no início do caos, retorna para encontrar sua cidade fraturada e precisa reconquistá-la quarteirão por quarteirão.",
    events: [
      "Um terremoto de magnitude 7,6 (o Cataclismo) devasta Gotham City, matando milhares",
      "O governo americano declara Gotham uma Terra de Ninguém, explodindo as pontes de acesso",
      "Vilões como Coringa, Pinguim, Duas-Caras e Bane dividem a cidade em territórios próprios",
      "Batman retorna à cidade fraturada para reconquistá-la com ajuda da Família Batman",
      "Cassandra Cain surge como a nova Batgirl, e Sarah Essen-Gordon é assassinada pelo Coringa"
    ],
    consequences: "Terra de Ninguém é considerada uma das maiores e mais ambiciosas sagas do Batman, unindo todos os títulos mensais relacionados durante um ano inteiro de publicação. Introduziu Cassandra Cain como uma das Batgirls mais queridas dos fãs, e a reconstrução de Gotham ao final da saga se tornou um marco simbólico de resiliência que viria a influenciar diretamente as séries de TV Gotham e adaptações futuras.",
    writers: "Jordan B. Gorfinkel (arquitetura editorial) & múltiplos roteiristas e artistas — Batman, Detective Comics, Batman: Shadow of the Bat e outros títulos, 1999"
  },
  {
    id: 71, year: "2000", era: "modern", eraLabel: "Era Moderna",
    title: "JLA: Torre de Babel",
    branches: ["liga", "batman"],
    wikiSlugs: ["JLA:_Tower_of_Babel"],
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
    id: 72, year: "2000", era: "modern", eraLabel: "Era Moderna",
    title: "Superman: Imperador Coringa",
    branches: ["superman", "batman"],
    wikiSlugs: ["Superman:_Emperor_Joker"],
    fallbackIcon: "🎪",
    summary: "O entediado Sr. Mxyzptlk, ser onipotente da Quinta Dimensão, decide dar uma fração de seus poderes de manipulação da realidade ao Coringa apenas para se divertir vendo o que aconteceria. O Coringa engana o duende e rouba 99% de seus poderes, recriando o universo inteiro à sua própria imagem grotesca: Superman é constantemente torturado, morto e ressuscitado repetidas vezes só para o entretenimento do Coringa, que governa uma realidade tão bizarra e caótica que ameaça desfazer literalmente o tecido da existência.",
    events: [
      "Mr. Mxyzptlk decide dar uma fração de seus poderes ao Coringa por puro entretenimento",
      "O Coringa engana o duende da Quinta Dimensão e rouba 99% de seu poder total",
      "O Coringa recria a realidade inteira à sua imagem, com Lois Lane como vilã e Bizarro como herói",
      "Superman é torturado, morto e ressuscitado repetidamente apenas para a diversão do Coringa",
      "Superman percebe que o Coringa não consegue apagar Batman, pois sua existência o define, e usa isso para quebrar seu controle"
    ],
    consequences: "Imperador Coringa é considerada uma das histórias mais criativamente bizarras e ousadas envolvendo Superman, explorando os limites entre comédia absurda e horror existencial. A revelação de que o Coringa precisa de Batman para se definir como vilão se tornou uma das observações mais citadas sobre a natureza simbiótica entre os dois personagens em toda a mitologia DC.",
    writers: "Jeph Loeb, Joe Kelly, Mark Schultz & J.M. DeMatteis (roteiro) — Superman/Action Comics/Superman: The Man of Steel, 2000"
  },
  {
    id: 73, year: "2000", era: "modern", eraLabel: "Era Moderna",
    title: "A Presidência de Lex Luthor",
    branches: ["superman", "lex-luthor"],
    wikiSlugs: ["Lex_Luthor"],
    fallbackIcon: "🇺🇸",
    summary: "Em um dos movimentos mais audaciosos de toda sua carreira, Lex Luthor anuncia sua candidatura à Presidência dos Estados Unidos liderando seu próprio partido, o Tomorrow Party, com a promessa de levar o país a um futuro tecnológico próspero. Beneficiado pela impopularidade da administração anterior — que lidou mal com o terremoto que devastou Gotham City em Terra de Ninguém — Luthor vence a eleição de forma surpreendente, derrotando até mesmo candidatos baseados em figuras políticas reais. Superman, ao saber do resultado, voa furioso até Saturno e racha uma de suas luas ao meio com a força de seu voo.",
    events: [
      "Lex Luthor anuncia sua candidatura à Presidência liderando o recém-formado Tomorrow Party",
      "Sua campanha é impulsionada pela má gestão do governo anterior durante a crise de Terra de Ninguém em Gotham",
      "Luthor vence a eleição de forma surpreendente, com Pete Ross como seu vice-presidente",
      "Superman reage furiosamente ao resultado, rachando uma lua de Saturno ao meio com seu voo",
      "Luthor transfere o controle da LexCorp para Talia al Ghul antes de assumir o cargo"
    ],
    consequences: "A Presidência de Lex Luthor se tornou um dos arcos mais ousados e duradouros da mitologia do Superman, culminando anos depois em sua participação na Guerra Imperiex e em seu eventual impeachment. O conceito provou ser tão marcante que foi adaptado em diversas mídias, incluindo a série 'Smallville' e o filme animado 'Superman/Batman: Public Enemies'.",
    writers: "Jeph Loeb & Greg Rucka (roteiro), múltiplos artistas — Superman: Lex 2000 #1 e títulos relacionados, 2000–2001"
  },
  {
    id: 74, year: "2001", era: "modern", eraLabel: "Era Moderna",
    title: "Nossos Mundos em Guerra",
    branches: ["superman", "mulher-maravilha"],
    wikiSlugs: ["Our_Worlds_at_War"],
    fallbackIcon: "💢",
    summary: "Imperiex, a encarnação viva da entropia, detecta 'imperfeições' no tecido do universo e decide destruí-lo para criar um cosmos 'perfeito' em seu lugar. Após arrasar incontáveis mundos, ele se volta para a Terra — a peça-chave cósmica que sustenta toda a realidade desde a Crise nas Infinitas Terras. Refugiados alienígenas de toda a galáxia convergem para o planeta numa última resistência desesperada, forçando até Superman a deixar de lado suas rivalidades com Lex Luthor, General Zod e o próprio Darkseid para enfrentar a aniquilação total.",
    events: [
      "Imperiex destrói incontáveis mundos em busca de um universo 'perfeito'",
      "A Terra é identificada como o ponto-chave cósmico que sustenta toda a realidade",
      "Heróis e vilões — incluindo Darkseid e Lex Luthor — formam uma aliança desesperada",
      "Brainiac trai todos ao absorver a essência de Imperiex e tentar dominar o universo inteiro",
      "Superman mergulha no núcleo do Sol para obter poder suficiente para deter a ameaça final"
    ],
    consequences: "Nossos Mundos em Guerra reuniu praticamente todo o panteão de heróis e vilões da DC numa escala raramente vista, e a morte de personagens importantes durante o evento chocou os leitores da época. Coincidentemente publicado nas semanas anteriores aos ataques de 11 de setembro de 2001, o evento ficou marcado por seu timing sombrio e involuntariamente profético sobre destruição em massa de cidades.",
    writers: "Jeph Loeb, Joe Casey, Mark Schultz, Joe Kelly, Phil Jimenez & Peter David (roteiro) — Superman e títulos relacionados, 2001"
  },
  {
    id: 75, year: "2001", era: "modern", eraLabel: "Era Moderna",
    title: "Coringa: A Última Risada",
    branches: ["batman"],
    wikiSlugs: ["Last_Laugh_(comics)"],
    fallbackIcon: "🃏",
    summary: "Preso na penitenciária de segurança máxima Slab, o Coringa descobre que possui um tumor cerebral terminal. Em vez de se entregar à morte, ele decide sair 'com chave de ouro': provoca um motim, infecta os outros detentos com seu veneno particular — transformando-os em versões caóticas e mortais de si mesmo — e força o vilão Massa Negra a sugar a prisão inteira para dentro de um buraco negro, libertando centenas de criminosos perigosos simultaneamente ao redor do mundo.",
    events: [
      "O Coringa descobre que possui um tumor cerebral terminal enquanto preso na Slab",
      "Ele provoca um motim e infecta outros detentos com seu veneno, criando versões caóticas deles",
      "Massa Negra é forçado a sugar a prisão inteira para um buraco negro, libertando os criminosos",
      "Batman, Asa Noturna e Canário Negro tentam conter o motim sem sucesso total",
      "Vilões libertados se espalham pelo mundo, causando caos simultâneo em múltiplas cidades"
    ],
    consequences: "A Última Risada foi um dos maiores eventos crossover focados em vilões da história da DC, espalhando caos por dezenas de títulos mensais simultaneamente. A premissa do tumor cerebral terminal do Coringa adicionou uma camada trágica e desesperada à sua loucura usual, e o evento reforçou sua posição como o vilão mais imprevisível e perigoso de toda a galeria de inimigos do Batman.",
    writers: "Chuck Dixon & Scott Beatty (roteiro) — Joker: Last Laugh #1–6, 2001"
  },
  {
    id: 76, year: "2003", era: "modern", eraLabel: "Era Moderna",
    title: "Batman: Hush",
    branches: ["batman"],
    wikiSlugs: ["Batman:_Hush"],
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
    id: 77, year: "2004", era: "modern", eraLabel: "Era Moderna",
    title: "Identidade Secreta",
    branches: ["liga"],
    wikiSlugs: ["Identity_Crisis_(DC_Comics)"],
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
    id: 78, year: "2004", era: "modern", eraLabel: "Era Moderna",
    title: "Lanterna Verde: Renascimento",
    branches: ["lanterna-verde"],
    wikiSlugs: ["Green_Lantern:_Rebirth"],
    fallbackIcon: "💚",
    summary: "Anos após se tornar o vilão Parallax e sacrificar-se em Noite Final, Hal Jordan retorna como o Espectro, o Espírito Divino da Vingança. Geoff Johns revela uma verdade chocante: Parallax nunca foi verdadeiramente Hal Jordan corrompido pelo luto — era uma entidade parasita do medo, presa há eras na Bateria Central de Poder em Oa, que havia se infiltrado em sua mente. Hal é finalmente exonerado e retorna ao posto de Lanterna Verde.",
    events: [
      "Hal Jordan, agora o Espectro, começa a perder o controle de sua própria humanidade",
      "Investigação revela que Parallax é uma entidade amarela do medo, e não uma criação de Hal",
      "Revelação de que Parallax estava aprisionada na Bateria Central de Oa há bilhões de anos",
      "Hal Jordan é libertado da influência de Parallax com ajuda da Liga da Justiça e do Flash",
      "Hal retorna oficialmente como Lanterna Verde, reintegrando-se à Tropa"
    ],
    consequences: "Esta minissérie redimiu Hal Jordan de forma definitiva e reescreveu décadas de história dos Lanternas Verdes, introduzindo o conceito do Espectro Emocional que se tornaria a espinha dorsal da mitologia do Lanterna Verde nos anos seguintes — culminando em Sinestro Corps War e Blackest Night. É considerada o início da fase mais aclamada de Geoff Johns no personagem.",
    writers: "Geoff Johns (roteiro) & Ethan Van Sciver (arte) — Green Lantern: Rebirth #1–6, 2004–2005"
  },
  {
    id: 79, year: "2005", era: "modern", eraLabel: "Era Moderna",
    title: "Lex Luthor: O Homem de Aço",
    branches: ["superman", "lex-luthor"],
    wikiSlugs: ["Lex_Luthor:_Man_of_Steel"],
    fallbackIcon: "🧪",
    summary: "Brian Azzarello e Lee Bermejo oferecem uma perspectiva radical e perturbadora: a história inteira contada do ponto de vista de Lex Luthor, que se vê genuinamente como o salvador da humanidade contra uma ameaça alienígena disfarçada de herói. Enquanto constrói a Torre da Ciência, um monumento às conquistas humanas, Luthor desenvolve secretamente Hope, uma heroína sintética destinada a substituir Superman aos olhos do público — ao mesmo tempo manipulando o vilão Brinquedista para incriminar Superman publicamente em um atentado terrorista.",
    events: [
      "Luthor constrói a Torre da Ciência em Metrópolis como monumento às conquistas da humanidade",
      "Em segredo, desenvolve Hope, uma heroína sintética para substituir a popularidade de Superman",
      "Luthor manipula o vilão Brinquedista a cometer um atentado, incriminando indiretamente Superman",
      "Superman usa visão de calor sobre Hope, revelando publicamente que ela é uma androide",
      "Luthor sacrifica Hope para destruir as evidências, deixando Superman branco diante da tragédia"
    ],
    consequences: "Esta minissérie ofereceu uma das explorações mais profundas e humanizadas da psicologia de Lex Luthor já publicadas, revelando como sua genuína crença em salvar a humanidade o torna ainda mais perigoso. A obra é frequentemente citada como inspiração direta para a caracterização do personagem em adaptações posteriores, incluindo o Universo Estendido DC.",
    writers: "Brian Azzarello (roteiro) & Lee Bermejo (arte) — Lex Luthor: Man of Steel #1–5, 2005"
  },
  {
    id: 80, year: "2005", era: "modern", eraLabel: "Era Moderna",
    title: "Contagem Regressiva Para Crise Infinita",
    branches: ["liga"],
    wikiSlugs: ["Countdown_to_Infinite_Crisis"],
    fallbackIcon: "⏱️",
    summary: "Uma edição especial de 80 páginas que serve como estopim para a Crise Infinita: o antigo Besouro Azul, Ted Kord, descobre que Maxwell Lord está secretamente controlando a organização Xeque-Mate e manipulando satélites da Liga da Justiça. Ao confrontá-lo, Ted Kord é executado a sangue frio, desencadeando uma série de eventos — incluindo a Guerra Rann/Thanagar e o assassinato de Maxwell Lord pela Mulher-Maravilha — que convergem diretamente para a Crise Infinita.",
    events: [
      "Ted Kord (Besouro Azul) descobre a manipulação secreta de Maxwell Lord sobre a Xeque-Mate",
      "Maxwell Lord executa Ted Kord a sangue frio ao ser confrontado",
      "Eclosão da Guerra Rann/Thanagar, com a morte da Mulher-Gavião Shayera Thal",
      "Maxwell Lord assume controle mental de Superman, forçando a intervenção da Mulher-Maravilha",
      "Mulher-Maravilha mata Maxwell Lord ao vivo, evento transmitido globalmente"
    ],
    consequences: "Este conjunto de minisséries (Projeto O.M.A.C., Guerra Rann/Thanagar, Dia da Vingança, Vilões Unidos) preparou todas as peças narrativas para a Crise Infinita. A morte de Maxwell Lord pela Mulher-Maravilha se tornou um dos momentos mais controversos e discutidos da história recente da personagem, com repercussões em sua reputação pública dentro do universo DC.",
    writers: "Geoff Johns, Greg Rucka, Judd Winick (roteiro) — Countdown to Infinite Crisis e minisséries relacionadas, 2005"
  },
  {
    id: 81, year: "2005", era: "modern", eraLabel: "Era Moderna",
    title: "Crise Infinita",
    branches: ["multiverso"],
    wikiSlugs: ["Infinite_Crisis"],
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
    id: 82, year: "2005", era: "modern", eraLabel: "Era Moderna",
    title: "Sob o Capuz: O Retorno de Jason Todd",
    branches: ["batman"],
    wikiSlugs: ["Batman:_Under_the_Hood"],
    fallbackIcon: "🔴",
    summary: "Anos após sua morte, um misterioso vigilante violento conhecido como Capuz Vermelho começa a tomar conta do submundo do crime em Gotham, eliminando traficantes com brutalidade calculada. A revelação devastadora: trata-se do próprio Jason Todd, trazido de volta à vida por uma onda de realidade alterada durante a Crise Infinita e posteriormente curado em uma Lacuna de Lázaro por Ra's al Ghul. Furioso por Batman nunca ter vingado sua morte matando o Coringa, Jason adota a identidade que antes pertenceu ao próprio Coringa como forma de zombaria e declaração de guerra contra os métodos de seu antigo mentor.",
    events: [
      "Um vigilante brutal conhecido como Capuz Vermelho começa a controlar o crime organizado de Gotham",
      "Superboy-Prime, durante a Crise Infinita, soca a realidade e inadvertidamente ressuscita Jason Todd",
      "Ra's al Ghul encontra Jason catatônico e o submerge numa Lacuna de Lázaro, completando sua cura",
      "Revelação de que o Capuz Vermelho é Jason Todd, agora adulto e brutalmente vingativo",
      "Jason confronta Batman por nunca ter matado o Coringa em retaliação por sua morte"
    ],
    consequences: "O retorno de Jason Todd como o Capuz Vermelho criou um dos antagonistas mais complexos e pessoais do Batman — um ex-aliado que espelha os métodos do herói, mas sem o código de nunca matar. Jason se tornaria um anti-herói recorrente e querido pelos fãs nas décadas seguintes, liderando equipes como os Outlaws e questionando constantemente a moralidade da cruzada de Batman contra o crime.",
    writers: "Judd Winick (roteiro) & Doug Mahnke (arte) — Batman #635–641, 645–650, 2005–2006"
  },
  {
    id: 83, year: "2006", era: "modern", eraLabel: "Era Moderna",
    title: "Superman: Filho Vermelho",
    branches: ["superman"],
    wikiSlugs: ["Superman:_Red_Son"],
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
    id: 84, year: "2006", era: "modern", eraLabel: "Era Moderna",
    title: "All-Star Superman",
    branches: ["superman"],
    wikiSlugs: ["All-Star_Superman"],
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
    id: 85, year: "2006", era: "modern", eraLabel: "Era Moderna",
    title: "52 Semanas",
    branches: ["liga", "multiverso"],
    wikiSlugs: ["52_(comics)"],
    fallbackIcon: "📅",
    summary: "Após a Crise Infinita, Superman, Batman e Mulher-Maravilha desaparecem da cena heroica por um ano inteiro. 52 narra semana a semana o que acontece com o restante do Universo DC durante esse vácuo de poder, acompanhando personagens como a detetive Renee Montoya, o Besouro Azul Ted Kord (antes de sua morte) e Adão Negro, enquanto revela a existência de um novo Multiverso com 52 Terras paralelas.",
    events: [
      "Superman, Batman e Mulher-Maravilha se afastam da linha de frente heroica por um ano",
      "Renee Montoya assume o manto da Questão após a morte de Vic Sage",
      "Adão Negro busca vingança violenta contra os responsáveis pela morte de sua família",
      "Exploração do Multiverso recém-criado, contendo 52 Terras paralelas distintas",
      "Convergência de todas as tramas no confronto final contra os vilões reunidos na Sociedade Secreta"
    ],
    consequences: "52 foi um experimento editorial sem precedentes — uma série semanal contínua por um ano inteiro escrita por quatro autores simultaneamente (Geoff Johns, Grant Morrison, Greg Rucka e Mark Waid). Estabeleceu formalmente o novo Multiverso DC de 52 Terras, conceito que se tornaria fundamental para histórias futuras como Final Crisis e Dark Nights: Metal.",
    writers: "Geoff Johns, Grant Morrison, Greg Rucka & Mark Waid (roteiro) — 52 #1–52, 2006–2007"
  },
  {
    id: 86, year: "2007", era: "modern", eraLabel: "Era Moderna",
    title: "A Guerra dos Sinestro Corps",
    branches: ["lanterna-verde"],
    wikiSlugs: ["Sinestro_Corps_War"],
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
    id: 87, year: "2008", era: "modern", eraLabel: "Era Moderna",
    title: "Final Crisis",
    branches: ["liga", "batman"],
    wikiSlugs: ["Final_Crisis"],
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
    id: 88, year: "2008", era: "modern", eraLabel: "Era Moderna",
    title: "Superman: Fase Novo Krypton",
    branches: ["superman"],
    wikiSlugs: ["Superman:_New_Krypton"],
    fallbackIcon: "🏙️",
    summary: "Após libertar a cidade-garrafa de Kandor do controle de Brainiac, Superman se vê diante de 100.000 kryptonianos recém-libertados na Terra. O governo americano, temeroso da concentração de poder, força os recém-chegados a se mudarem, e com tecnologia de Brainiac eles constroem um novo planeta no Sistema Solar: Novo Krypton. Superman decide viver lá para guiar seu povo, deixando a Terra sob proteção de outros heróis kryptonianos.",
    events: [
      "Superman liberta Kandor e expande a cidade de volta ao tamanho normal",
      "100.000 kryptonianos libertados causam tensão geopolítica com o governo dos EUA",
      "Construção do planeta Novo Krypton em órbita próxima ao Sol, usando tecnologia de Brainiac",
      "Superman se muda para Novo Krypton para governar ao lado dos sobreviventes de seu povo",
      "Tensões entre Novo Krypton e a Terra escalam, preparando o terreno para conflito futuro com o General Zod"
    ],
    consequences: "Novo Krypton foi uma das fases mais longas e ambiciosas do Superman na era moderna, explorando temas de identidade, pertencimento e nacionalismo. A tensão criada entre os dois planetas culminou na saga A Guerra dos Supermens, onde o General Zod lidera um exército kryptoniano contra a Terra, decisão que custaria caro ao próprio Novo Krypton.",
    writers: "Geoff Johns, James Robinson & Sterling Gates (roteiro), Gary Frank e outros (arte) — Superman: New Krypton, 2008–2009"
  },
  {
    id: 89, year: "2009", era: "modern", eraLabel: "Era Moderna",
    title: "Lanterna Verde: Blackest Night",
    branches: ["lanterna-verde"],
    wikiSlugs: ["Blackest_Night"],
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
    id: 90, year: "2009", era: "modern", eraLabel: "Era Moderna",
    title: "Flash: Renascido",
    branches: ["flash"],
    wikiSlugs: ["The_Flash:_Rebirth"],
    fallbackIcon: "🔁",
    summary: "Após retornar dos mortos por meio da Força da Aceleração ao final de Final Crisis, Barry Allen tenta se readaptar à vida moderna como o Flash. Mas a verdadeira provação vem quando ele descobre que Eobard Thawne — seu arqui-inimigo, o Flash Reverso — foi o responsável pelo assassinato de sua mãe quando ele era apenas uma criança, um crime pelo qual seu próprio pai foi condenado injustamente e morreu na prisão.",
    events: [
      "Barry Allen retorna à vida física após anos como força pura dentro da Speed Force",
      "Barry tenta se readaptar ao mundo moderno, décadas após sua morte original",
      "Revelação de que Eobard Thawne (Flash Reverso) assassinou Nora Allen, mãe de Barry",
      "Henry Allen, pai de Barry, é revelado como inocente, tendo morrido preso injustamente",
      "Barry assume definitivamente o manto do Flash, restaurando seu papel central no Universo DC"
    ],
    consequences: "Flash: Renascido devolveu Barry Allen ao centro do Universo DC após décadas de ausência, e sua dor pessoal pelo assassinato da mãe se tornaria o gatilho emocional para o evento Flashpoint dois anos depois. A obra também serviu de base direta para a primeira temporada da série de TV 'The Flash'.",
    writers: "Geoff Johns (roteiro) & Ethan Van Sciver (arte) — The Flash: Rebirth #1–6, 2009–2010"
  },
  {
    id: 91, year: "2010", era: "modern", eraLabel: "Era Moderna",
    title: "O Dia Mais Claro",
    branches: ["liga"],
    wikiSlugs: ["Brightest_Day"],
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
    id: 92, year: "2011", era: "modern", eraLabel: "Era Moderna",
    title: "Flashpoint",
    branches: ["flash", "multiverso"],
    wikiSlugs: ["Flashpoint_(comics)"],
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
    id: 93, year: "2011", era: "new52", eraLabel: "New 52",
    title: "New 52: Reinício do Universo DC",
    branches: ["multiverso"],
    wikiSlugs: ["The_New_52"],
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
    id: 94, year: "2011", era: "new52", eraLabel: "New 52",
    title: "Liga da Justiça: Origem (Novos 52)",
    branches: ["liga"],
    wikiSlugs: ["Justice_League:_Origin", "Justice_League_(2011_comic_book)"],
    fallbackIcon: "🛡️",
    summary: "A revista que inaugurou oficialmente o New 52, mostrando pela primeira vez como Batman, Lanterna Verde Hal Jordan, Flash Barry Allen, Mulher-Maravilha, Aquaman e Cyborg se uniram em meio a uma invasão de Apokolips liderada por Darkseid. Diferente de versões anteriores, aqui os heróis se encontram como praticamente desconhecidos uns dos outros, desconfiados e ainda aprendendo a confiar.",
    events: [
      "Batman e Lanterna Verde se encontram pela primeira vez perseguindo um Parademônio em Gotham",
      "Superman ataca Batman e Lanterna Verde por engano, acreditando serem ameaças",
      "Darkseid invade a Terra em busca da Mother Box e de um novo lar para Apokolips",
      "Victor Stone é gravemente ferido e reconstruído com tecnologia alienígena, tornando-se Cyborg",
      "Os sete heróis repelem Darkseid e formam oficialmente a Liga da Justiça"
    ],
    consequences: "Esta revista relançou a mitologia fundacional da Liga da Justiça para uma nova geração de leitores, com a icônica arte de Jim Lee. Tornou-se a porta de entrada definitiva para o New 52 e estabeleceu Cyborg como membro fundador permanente da Liga, uma mudança significativa em relação às formações clássicas anteriores.",
    writers: "Geoff Johns (roteiro) & Jim Lee (arte) — Justice League Vol. 2 #1–6, 2011–2012"
  },
  {
    id: 95, year: "2011", era: "new52", eraLabel: "New 52",
    title: "Mulher-Maravilha: Sangue (New 52)",
    branches: ["mulher-maravilha"],
    wikiSlugs: ["Wonder_Woman_(comic_book)", "Brian_Azzarello"],
    fallbackIcon: "⚡",
    summary: "Brian Azzarello reformula completamente as origens de Diana para o New 52: ela não foi esculpida em argila e animada pelos deuses como sempre se contou, mas sim filha biológica de Zeus, fruto de um caso secreto entre o rei dos deuses e a rainha Hipólita — uma verdade escondida por toda a vida de Diana. Quando Hera descobre que Zeus engravidou outra mulher mortal, Zola, ela envia seus súditos para matá-la. Diana assume a missão de proteger Zola e seu filho ainda não nascido, mergulhando de cabeça numa guerra de intrigas entre os deuses do Olimpo pelo trono vago de Zeus.",
    events: [
      "Revelação de que Diana não foi feita de argila, mas é filha biológica de Zeus e Hipólita",
      "Hera descobre que Zeus engravidou a mortal Zola e envia capangas para matá-la",
      "Diana assume a proteção de Zola e seu filho não nascido contra a fúria de Hera",
      "Surgimento do Primogênito, irmão mais velho de Diana e filho legítimo de Zeus e Hera",
      "Diana navega intrigas mortais entre Apolo, Ares, Estranho, Hermes e outros deuses gregos"
    ],
    consequences: "O run de Azzarello e Cliff Chiang é amplamente considerado uma das melhores reinvenções de qualquer personagem do New 52, transformando Mulher-Maravilha numa saga de intriga política e mitologia grega visceral. A revelação de Diana como filha de Zeus se tornou parte permanente e influente de sua mitologia, e a aclamação crítica da arte de Chiang elevou o título a um dos mais respeitados da era.",
    writers: "Brian Azzarello (roteiro) & Cliff Chiang (arte) — Wonder Woman Vol. 4 #1–6, 2011–2012"
  },
  {
    id: 96, year: "2012", era: "new52", eraLabel: "New 52",
    title: "Batman: Corte da Coruja",
    branches: ["batman"],
    wikiSlugs: ["Batman_(comic_book)", "Court_of_Owls", "Scott_Snyder"],
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
    id: 97, year: "2013", era: "new52", eraLabel: "New 52",
    title: "Trono de Atlântida",
    branches: ["aquaman", "liga"],
    wikiSlugs: ["Throne_of_Atlantis"],
    fallbackIcon: "🔱",
    summary: "Um míssil naval americano que funciona mal atinge Atlântida, provocando a ira de Orm, o Mestre dos Oceanos e meio-irmão de Aquaman, que declara guerra total contra a superfície. Enquanto a Liga da Justiça é capturada nas profundezas do oceano, Arthur Curry precisa enfrentar seu irmão e reivindicar seu direito ao trono atlante para impedir uma guerra que pode devastar bilhões de vidas na superfície.",
    events: [
      "Um míssil naval avariado atinge Atlântida, sendo interpretado como ataque deliberado",
      "Orm, o Mestre dos Oceanos, declara guerra contra a superfície em nome de Atlântida",
      "A Liga da Justiça é capturada pelas forças atlantes durante o conflito inicial",
      "Aquaman confronta seu meio-irmão Orm em batalha pelo direito ao trono",
      "Aquaman derrota Orm e assume oficialmente o trono de Atlântida, tornando-se Rei"
    ],
    consequences: "Trono de Atlântida transformou Aquaman de personagem secundário em uma das figuras centrais e mais respeitadas do New 52, estabelecendo-o como Rei de Atlântida. A saga também serviu de base direta para o filme 'Aquaman' de 2018, incluindo o conflito entre os irmãos Arthur e Orm.",
    writers: "Geoff Johns (roteiro) & Ivan Reis (arte) — Justice League #15–17 / Aquaman #15–16, 2012–2013"
  },
  {
    id: 98, year: "2013", era: "new52", eraLabel: "New 52",
    title: "Guerra da Trindade",
    branches: ["liga"],
    wikiSlugs: ["Trinity_War"],
    fallbackIcon: "⚔️",
    summary: "Pandora entrega sua caixa amaldiçoada para Superman, acreditando que ele seja puramente bom o suficiente para resistir à sua influência corruptora. Ela está enganada. O efeito da caixa desencadeia um confronto entre três versões da Liga da Justiça — a Liga principal, a Liga da Justiça da América e a sombria Liga da Justiça Sombria — em uma guerra que revela um plano muito maior: abrir um portal para a Terra-3 e libertar o terrível Sindicato do Crime.",
    events: [
      "Pandora entrega sua Caixa amaldiçoada para Superman, testando sua resistência à corrupção",
      "Três Ligas da Justiça diferentes entram em confronto direto por causa da caixa",
      "Superman mata acidentalmente a Doutora Luz sob influência da Caixa de Pandora",
      "Revelação de que tudo fazia parte de um plano para abrir um portal para a Terra-3",
      "O Sindicato do Crime de Terra-3 invade o universo principal, dando início a Vilania Eterna"
    ],
    consequences: "Guerra da Trindade foi o primeiro grande crossover entre os múltiplos títulos da Liga da Justiça do New 52, unindo as tramas que vinham sendo construídas desde o relançamento de 2011. Funcionou como prólogo direto para Vilania Eterna, o evento mais ambicioso da era New 52.",
    writers: "Geoff Johns (roteiro) & Ivan Reis, David Finch (arte) — Justice League #22 / Justice League of America #6 / Justice League Dark #22, 2013"
  },
  {
    id: 99, year: "2013", era: "new52", eraLabel: "New 52",
    title: "Vilania Eterna",
    branches: ["liga"],
    wikiSlugs: ["Forever_Evil"],
    fallbackIcon: "👹",
    summary: "O Sindicato do Crime — versões malignas e brutais da Liga da Justiça vindas da Terra-3 — invade o universo principal e aprisiona toda a Liga dentro do Nuclear, um campo de força inescapável. Com os heróis fora de cena, cabe aos vilões da Terra, liderados por um Lex Luthor relutante, formar a improvável Liga da Injustiça para impedir que o Sindicato do Crime conquiste o planeta de forma permanente.",
    events: [
      "O Sindicato do Crime de Terra-3 invade a Terra principal através do portal aberto na Guerra da Trindade",
      "A Liga da Justiça é aprisionada dentro do campo de força do Nuclear",
      "Lex Luthor reúne um grupo de vilões para resistir à ocupação do Sindicato",
      "Batman (Owlman) do Sindicato revela planos ainda mais sombrios para o multiverso",
      "Os heróis se libertam e, com ajuda da Liga da Injustiça, derrotam o Sindicato do Crime"
    ],
    consequences: "Vilania Eterna foi o evento de maior sucesso comercial e crítico do New 52, consolidando o Sindicato do Crime e a Terra-3 como elementos permanentes da mitologia DC. A parceria forçada entre Lex Luthor e os heróis também redefiniu a relação do vilão com a Liga da Justiça nos anos seguintes.",
    writers: "Geoff Johns (roteiro) & David Finch (arte) — Forever Evil #1–7, 2013–2014"
  },
  {
    id: 100, year: "2014", era: "new52", eraLabel: "New 52",
    title: "Fim dos Tempos",
    branches: ["liga"],
    wikiSlugs: ["The_New_52:_Futures_End"],
    fallbackIcon: "🤖",
    summary: "Em um salto de cinco anos no futuro do New 52, o mundo é dominado pelo Irmão Olho, uma inteligência artificial que converte a maioria dos super-heróis em cyborgs sob seu controle. Para impedir que esse futuro sombrio se torne realidade, um Batman do futuro, junto com uma resistência formada por Pandora e outros remanescentes, viaja no tempo para alterar os eventos antes que seja tarde demais.",
    events: [
      "Salto temporal de cinco anos revela um futuro distópico dominado pelo Irmão Olho",
      "A maioria dos super-heróis foi convertida à força em cyborgs sob controle do vilão",
      "Batman do futuro lidera uma resistência clandestina contra o domínio do Irmão Olho",
      "Pandora viaja ao passado tentando alertar os heróis do presente sobre o futuro sombrio",
      "Confronto final determina se esse futuro distópico poderá ser evitado"
    ],
    consequences: "Fim dos Tempos (Futures End) foi uma das séries semanais mais longas do New 52, com 49 edições. Funcionou como ponte direta para o evento Convergência, preparando os leitores para a transição que encerraria oficialmente a era New 52 nos anos seguintes.",
    writers: "Brian Azzarello, Keith Giffen, Dan Jurgens & Jeff Lemire (roteiro) — The New 52: Futures End #0–48, 2014–2015"
  },
  {
    id: 101, year: "2014", era: "new52", eraLabel: "New 52",
    title: "The Multiversity",
    branches: ["multiverso"],
    wikiSlugs: ["The_Multiversity"],
    fallbackIcon: "🌐",
    summary: "Grant Morrison apresenta um tour definitivo pelo Multiverso do New 52, explorando Terras paralelas nunca antes vistas em detalhe — desde um mundo dominado por super-heróis nazistas até universos steampunk e versões sombrias da Liga da Justiça. A obra culmina em uma ameaça que transcende universos individuais: a Casa das Trevas, uma força maligna capaz de consumir o próprio Multiverso.",
    events: [
      "Apresentação detalhada de múltiplas Terras paralelas do Multiverso do New 52",
      "Exploração de universos alternativos como Terra-7, Terra-19 (steampunk) e Terra-36",
      "Revelação da ameaça cósmica conhecida como a Casa das Trevas",
      "Heróis de diferentes Terras se unem pela primeira vez contra uma ameaça multiversal",
      "Estabelecimento detalhado da estrutura e regras do Multiverso de 52 Terras"
    ],
    consequences: "The Multiversity é considerada uma das obras mais ambiciosas e estruturalmente inovadoras de Grant Morrison, com cada edição usando técnicas narrativas distintas. Expandiu enormemente o conhecimento dos leitores sobre as 52 Terras do Multiverso, servindo como referência obrigatória para todas as histórias multiversais futuras da DC.",
    writers: "Grant Morrison (roteiro) & múltiplos artistas — The Multiversity #1–2 + one-shots, 2014–2015"
  },
  {
    id: 102, year: "2015", era: "new52", eraLabel: "New 52",
    title: "A Guerra de Darkseid",
    branches: ["liga"],
    wikiSlugs: ["Darkseid_War"],
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
    id: 103, year: "2015", era: "new52", eraLabel: "New 52",
    title: "Convergência",
    branches: ["multiverso"],
    wikiSlugs: ["Convergence_(comics)"],
    fallbackIcon: "🏙️",
    summary: "Para celebrar os 30 anos da Crise nas Infinitas Terras, Brainiac coleta cidades inteiras de incontáveis universos e linhas temporais — incluindo eras Pré-Crise, Pós-Crise e Pré-Novos 52 — e as aprisiona em cúpulas sob domínio do vilão Telos. Múltiplas versões de Superman, diferentes Ligas da Justiça de diversas épocas e heróis perdidos no tempo precisam competir para sobreviver, numa celebração nostálgica de toda a história editorial da DC.",
    events: [
      "Brainiac coleta cidades de incontáveis linhas temporais e as aprisiona em cúpulas isoladas",
      "Telos força confrontos entre cidades de diferentes eras para determinar quem sobrevive",
      "Múltiplas versões de Superman e outras Ligas da Justiça de diferentes épocas se encontram",
      "Personagens clássicos Pré-Crise retornam brevemente à continuidade ativa",
      "Resolução do evento prepara a transição de saída do New 52 para uma nova era editorial"
    ],
    consequences: "Convergência foi uma celebração nostálgica de 30 anos de história editorial da DC, reunindo eras que antes pareciam mutuamente exclusivas. Marcou o encerramento gradual da identidade visual do New 52, abrindo caminho para o relançamento que viria com o DC Rebirth no ano seguinte.",
    writers: "Jeff King, Scott Lobdell & Dan Jurgens (roteiro), múltiplos artistas — Convergence #0–8 + tie-ins, 2015"
  },
  {
    id: 104, year: "2016", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "DC Rebirth: O Universo Volta",
    branches: ["flash", "multiverso"],
    wikiSlugs: ["DC_Rebirth"],
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
    id: 105, year: "2017", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "Batman: A Maldição do Barão Branco",
    branches: ["batman"],
    wikiSlugs: ["Batman:_White_Knight"],
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
    id: 106, year: "2017", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "Doomsday Clock",
    branches: ["multiverso"],
    wikiSlugs: ["Doomsday_Clock_(comics)"],
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
    id: 107, year: "2018", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "Dark Nights: Metal",
    branches: ["batman", "liga"],
    wikiSlugs: ["Dark_Nights:_Metal"],
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
    id: 108, year: "2018", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "Liga da Justiça: Sem Justiça",
    branches: ["liga"],
    wikiSlugs: ["Justice_League_(comic_book)", "Scott_Snyder"],
    fallbackIcon: "🪐",
    summary: "Nas consequências diretas de Dark Nights: Metal, o equilíbrio cósmico do universo se rompeu. Brainiac chega à Terra com um aviso urgente: quatro entidades primordiais conhecidas como Titãs Ômega — representando Entropia, Sabedoria, Maravilha e Mistério — despertaram e ameaçam devorar mundos inteiros, incluindo o planeta natal do próprio Brainiac, Colu. Para enfrentar essa ameaça em escala de extinção, heróis e vilões são forçosamente combinados em quatro novas equipes, cada uma reunindo a energia correspondente a um dos Titãs Ômega.",
    events: [
      "Brainiac chega à Terra alertando sobre o despertar de quatro Titãs Ômega devoradores de mundos",
      "Heróis e vilões são combinados à força em quatro novas equipes temáticas",
      "Amanda Waller ativa o Protocolo XI, minerando a mente de Brainiac com tecnologia apokoliptiana",
      "As equipes combinadas enfrentam os Titãs Ômega em múltiplos cantos do universo simultaneamente",
      "Brainiac trai os heróis ao tentar assumir os poderes restantes dos Titãs Ômega para si mesmo"
    ],
    consequences: "Sem Justiça reformulou completamente a estrutura editorial da Liga da Justiça, dando origem a três novos títulos simultâneos: Justice League, Justice League Dark e Justice League Odyssey. A saga expandiu drasticamente a cosmologia do Universo DC pós-Metal, introduzindo os Titãs Ômega como conceitos fundamentais que normalizariam a fusão entre magia, ciência e cosmologia nas histórias seguintes da editora.",
    writers: "Scott Snyder, James Tynion IV & Joshua Williamson (roteiro), Francis Manapul (arte) — Justice League: No Justice #1–4, 2018"
  },
  {
    id: 109, year: "2020", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "Batman: Os Três Coringas",
    branches: ["batman"],
    wikiSlugs: ["Batman:_Three_Jokers"],
    fallbackIcon: "🃏",
    summary: "Trinta anos após A Piada Mortal e décadas após a pergunta plantada na Guerra de Darkseid — quando Batman, sentado no Trono Móbius, pergunta a verdadeira identidade do Coringa e recebe a resposta perturbadora 'são três' — Geoff Johns finalmente revela a verdade. Batman descobre que nunca enfrentou apenas um Coringa, mas três homens diferentes que assumiram o papel ao longo das décadas: o Criminoso (calculista, da Era de Ouro), o Comediante (caótico, da Era de Prata) e o Louco (violento e sádico, responsável pela Piada Mortal e por Morte em Família). Batman se une a Barbara Gordon e Jason Todd, duas vítimas diretas da brutalidade do Coringa, para caçar os responsáveis de uma vez por todas.",
    events: [
      "Batman investiga crimes simultâneos do Coringa que sugerem a existência de mais de um culpado",
      "Revelação de que existem três homens diferentes que usaram a identidade do Coringa ao longo do tempo",
      "Batman recruta Barbara Gordon (Batgirl) e Jason Todd (Capuz Vermelho), ambos sobreviventes de ataques do Coringa",
      "O trio investiga a fábrica química Ace Chemicals, onde encontram corpos vestidos como o Capuz Vermelho original",
      "Confronto final revela qual dos três Coringas restantes está ativo e suas verdadeiras motivações"
    ],
    consequences: "Os Três Coringas reexaminou décadas de história editorial do vilão mais icônico do Batman, oferecendo uma explicação unificadora para suas inconsistências de personalidade ao longo das eras. Embora sua canonicidade tenha sido debatida entre os próprios criadores da DC, a minissérie se tornou um sucesso comercial enorme e ofereceu um fechamento emocional poderoso para os traumas de Barbara Gordon e Jason Todd causados pelo vilão.",
    writers: "Geoff Johns (roteiro) & Jason Fabok (arte) — Batman: Three Jokers #1–3, 2020"
  },
  {
    id: 110, year: "2020", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "Dark Nights: Death Metal",
    branches: ["liga", "batman"],
    wikiSlugs: ["Dark_Nights:_Death_Metal"],
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
    id: 111, year: "2024", era: "rebirth", eraLabel: "Rebirth / Dawn",
    title: "DC K.O.: Absolute Power",
    branches: ["liga"],
    wikiSlugs: ["DC_K.O.", "Absolute_Power_(comics)", "Amanda_Waller"],
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
  cosmic:  "var(--cosmic)",
  golden:  "var(--golden)",
  silver:  "var(--silver)",
  bronze:  "var(--bronze)",
  modern:  "var(--modern)",
  new52:   "var(--new52)",
  rebirth: "var(--rebirth)"
};

// --- INFORMAÇÕES DOS RAMOS (PERSONAGEM/EQUIPE) ---
// Cada saga pode pertencer a 0+ ramos via saga.branches.
// "multiverso" representa eventos universais que ficam só na trilha principal.
const branchInfo = {
  "multiverso":       { label: "Multiverso / Eventos Cósmicos", color: "#9D7CFF", icon: "🌌" },
  "batman":           { label: "Batman",            color: "#5A6B7A", icon: "🦇" },
  "superman":         { label: "Superman",           color: "#0057FF", icon: "🦸" },
  "mulher-maravilha": { label: "Mulher-Maravilha",    color: "#CC0000", icon: "⚔️" },
  "flash":            { label: "Flash",               color: "#FFD700", icon: "⚡" },
  "lanterna-verde":   { label: "Lanterna Verde",       color: "#00C775", icon: "💚" },
  "aquaman":          { label: "Aquaman",              color: "#00A9C7", icon: "🔱" },
  "liga":             { label: "Liga da Justiça",      color: "#3A7FFF", icon: "🌟" },
  "shazam":           { label: "Shazam / Família Marvel", color: "#FFE066", icon: "🔴" },
  "esquadrao-suicida":{ label: "Esquadrão Suicida",   color: "#8B1A1A", icon: "💀" },
  "titas":            { label: "Titãs",               color: "#7C3AED", icon: "⭐" },
  "lex-luthor":       { label: "Lex Luthor",           color: "#5B8C3E", icon: "🧪" },
  "patrulha-destino": { label: "Patrulha do Destino",   color: "#B83280", icon: "🌀" },
  "animal-man":       { label: "Animal Man",            color: "#E07A1F", icon: "🐾" },
  "sandman":          { label: "Sandman",                color: "#2B2B40", icon: "🌙" }
};

// Ordem de exibição dos ramos no seletor
const branchOrder = ["batman", "superman", "mulher-maravilha", "flash", "lanterna-verde", "aquaman", "liga", "shazam", "esquadrao-suicida", "titas", "lex-luthor", "patrulha-destino", "animal-man", "sandman"];

// Estado atual do "modo expandir": null = trilha principal completa, ou um id de branch
let activeBranch = null;
// Orientação atual da timeline: "horizontal" ou "vertical"
let timelineOrientation = "horizontal";

// --- CACHE DE IMAGENS ---
const imageCache = {};

// Tenta buscar o thumbnail de UM slug específico via Wikipedia REST API
async function fetchSingleWikiImage(slug) {
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("no data");
    const data = await res.json();
    const img = data?.thumbnail?.source || data?.originalimage?.source || null;
    return img ? img.replace(/\/\d+px-/, '/500px-') : null;
  } catch {
    return null;
  }
}

// Fallback extra: usa a API de pageimages do MediaWiki, que costuma achar
// imagens mesmo quando o REST summary não tem thumbnail (ex: páginas de
// organizações, conceitos ou personagens em vez de uma HQ específica).
async function fetchWikiPageImageFallback(slug) {
  try {
    const title = slug.replace(/_/g, ' ');
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=500&origin=*`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("no data");
    const data = await res.json();
    const pages = data?.query?.pages || {};
    for (const key in pages) {
      const thumb = pages[key]?.thumbnail?.source;
      if (thumb) return thumb;
    }
    return null;
  } catch {
    return null;
  }
}

// Recebe um array de slugs candidatos (em ordem de preferência) e tenta
// cada um, primeiro via REST summary, depois via pageimages, até achar
// uma imagem válida. Resultado fica em cache pela chave do primeiro slug.
async function fetchWikiImage(slugs) {
  const slugList = Array.isArray(slugs) ? slugs : [slugs];
  const cacheKey = slugList[0];
  if (imageCache[cacheKey] !== undefined) return imageCache[cacheKey];

  for (const slug of slugList) {
    let img = await fetchSingleWikiImage(slug);
    if (!img) img = await fetchWikiPageImageFallback(slug);
    if (img) {
      imageCache[cacheKey] = img;
      return img;
    }
  }

  imageCache[cacheKey] = null;
  return null;
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

    // Quando há um branch ativo, sagas que NÃO pertencem a esse branch
    // ficam esmaecidas (modo "destacar"), em vez de desaparecer —
    // assim a pessoa ainda vê onde o ramo se reconecta à trilha principal.
    const belongsToActiveBranch = activeBranch
      ? (saga.branches || []).includes(activeBranch)
      : true;

    let classes = "card";
    if (saga.isCosmic) classes += " card-cosmic";
    if (activeBranch) classes += belongsToActiveBranch ? " card-branch-active" : " card-branch-dim";

    card.className = classes;
    card.style.setProperty("--card-era-color", color);
    if (activeBranch && belongsToActiveBranch) {
      card.style.setProperty("--card-branch-color", branchInfo[activeBranch]?.color || color);
    }
    card.dataset.id = saga.id;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${saga.title}, ${saga.year}`);

    // Badges dos ramos aos quais a saga pertence (mostrados sempre, pequenos)
    const branchBadges = (saga.branches || [])
      .filter(b => b !== "multiverso")
      .map(b => {
        const info = branchInfo[b];
        if (!info) return "";
        return `<span class="branch-chip" title="${info.label}" style="--chip-color:${info.color}">${info.icon}</span>`;
      })
      .join("");

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-cover" id="cover-card-${saga.id}">
          <span class="card-cover-emoji">${saga.fallbackIcon}</span>
        </div>
        <div class="card-body">
          <div class="card-year">${saga.year}</div>
          <div class="card-title">${saga.title}</div>
          <span class="card-era-tag" style="background:${color}">${saga.eraLabel}</span>
          ${branchBadges ? `<div class="card-branches">${branchBadges}</div>` : ""}
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

  // Carrega imagens em segundo plano (eventos cósmicos não têm HQ/capa associada,
  // então pulamos a busca e mantemos apenas o ícone temático)
  for (const { saga, card } of cards) {
    if (saga.isCosmic) continue;
    fetchWikiImage(saga.wikiSlugs).then(imgUrl => {
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

  // Eventos cósmicos não têm uma HQ/ficha de autores específica associada —
  // eles representam fatos da cronologia ficcional, não publicações.
  const writersEl = document.getElementById("modalWriters");
  if (saga.isCosmic) {
    writersEl.textContent = "Evento da cronologia cósmica do Universo DC — referenciado ao longo de diversas publicações.";
  } else {
    writersEl.textContent = saga.writers;
  }

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

  // Eventos cósmicos não têm capa de HQ para buscar na Wikipedia
  if (saga.isCosmic) return;

  // Carrega imagem real para o modal
  const imgUrl = await fetchWikiImage(saga.wikiSlugs);
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

// --- RAMOS POR PERSONAGEM (MODO EXPANDIR) ---
// Renderiza os botões de seleção de ramo e gerencia o estado de destaque.
function setupBranchFilters() {
  const container = document.getElementById("branchPills");
  if (!container) return;

  container.innerHTML = "";

  // Botão "Trilha Completa" (reseta o branch ativo)
  const resetBtn = document.createElement("button");
  resetBtn.className = "branch-pill active";
  resetBtn.dataset.branch = "";
  resetBtn.innerHTML = `<span class="branch-pill-icon">🕸️</span> Trilha Completa`;
  container.appendChild(resetBtn);

  branchOrder.forEach(branchKey => {
    const info = branchInfo[branchKey];
    if (!info) return;
    const btn = document.createElement("button");
    btn.className = "branch-pill";
    btn.dataset.branch = branchKey;
    btn.style.setProperty("--chip-color", info.color);
    btn.innerHTML = `<span class="branch-pill-icon">${info.icon}</span> ${info.label}`;
    container.appendChild(btn);
  });

  const pills = container.querySelectorAll(".branch-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const branchKey = pill.dataset.branch;
      activeBranch = branchKey === "" ? null : branchKey;

      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      // Atualiza a barra de contexto ativo
      updateBranchContextBar();

      // Re-renderiza mantendo o filtro de era atual
      const activeEraPill = document.querySelector(".era-pill.active");
      const currentEraFilter = activeEraPill ? activeEraPill.dataset.filter : "all";
      renderCards(currentEraFilter);
    });
  });
}

// Mostra/esconde a barra que indica qual ramo está em destaque no momento
function updateBranchContextBar() {
  const bar = document.getElementById("branchContextBar");
  if (!bar) return;

  if (!activeBranch) {
    bar.classList.remove("visible");
    bar.innerHTML = "";
    return;
  }

  const info = branchInfo[activeBranch];
  if (!info) return;

  bar.innerHTML = `
    <span class="branch-context-icon">${info.icon}</span>
    <span>Destacando o ramo: <strong>${info.label}</strong> — as demais histórias aparecem esmaecidas, mostrando onde este ramo se conecta à trilha principal.</span>
  `;
  bar.style.setProperty("--chip-color", info.color);
  bar.classList.add("visible");
}

// --- TOGGLE DE ORIENTAÇÃO (HORIZONTAL / VERTICAL) ---
function setupOrientationToggle() {
  const btn = document.getElementById("orientationToggle");
  const timelineSection = document.querySelector(".timeline-section");
  if (!btn || !timelineSection) return;

  btn.addEventListener("click", () => {
    timelineOrientation = timelineOrientation === "horizontal" ? "vertical" : "horizontal";

    timelineSection.classList.toggle("timeline-vertical", timelineOrientation === "vertical");
    timelineSection.classList.toggle("timeline-horizontal", timelineOrientation === "horizontal");

    const icon = btn.querySelector(".orientation-icon");
    const label = btn.querySelector(".orientation-label");
    if (timelineOrientation === "vertical") {
      if (icon) icon.textContent = "↔️";
      if (label) label.textContent = "Ver na Horizontal";
      btn.setAttribute("aria-label", "Mudar para visualização horizontal");
    } else {
      if (icon) icon.textContent = "↕️";
      if (label) label.textContent = "Ver na Vertical";
      btn.setAttribute("aria-label", "Mudar para visualização vertical");
    }
  });
}


document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// --- ÁUDIO DE FUNDO (autoplay a partir da 1ª interação) ---
// Navegadores bloqueiam áudio com som antes de qualquer interação do
// usuário na página. Por isso, assim que a pessoa clicar ou tocar em
// QUALQUER lugar do site pela primeira vez, a música começa a tocar
// sozinha em loop, sem precisar de um botão de play.
function setupAudioPlayer() {
  const audio = document.getElementById("bgAudio");
  if (!audio) return;

  audio.volume = 0.35;
  let started = false;

  function startMusic() {
    if (started) return;
    started = true;
    audio.play().catch(() => {
      // Se falhar (ex: arquivo theme.mp3 ausente), tenta de novo no
      // próximo clique sem quebrar a navegação.
      started = false;
    });
  }

  // Qualquer clique, toque ou tecla no documento dispara a música uma vez.
  ["click", "touchstart", "keydown"].forEach(evt => {
    document.addEventListener(evt, startMusic, { once: true, passive: true });
  });
}

// --- INIT ---
renderCards();
setupFilters();
setupBranchFilters();
setupOrientationToggle();
setupAudioPlayer();
