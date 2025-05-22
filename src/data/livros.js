import harryPotter from "/public/harryPotter.jpg";
import milnovecentoseoitentaequatro from "/public/milnovecentoseoitentaequatro.jpg";
import inglesCard from "/public/inglesCard.jpg";
import quarentaEoitoLeisDoPoder from "/public/quarentaEoitoLeisDoPoder.jpg";
import javascript from "/public/javascript.jpg";
import oHobbit from "/public/oHobbit.jpg";
import umDia from "/public/umDia.jpg";
import assassinoDeRoger from "/public/assassinoDeRoger.jpg";
import duna from "/public/duna.jpg"

const livros = [
  {
    id: 1,
    banner: harryPotter.src,
    titulo: "Harry Potter e a pedra filosofal",
    estado: "Bom",
    autor: "J. K. Rowling",
    preco: "R$ 20,00",
    categoria: "Fantasia",
    descricao: `Harry Potter e a Pedra Filosofal é o primeiro livro da série de J.K. Rowling. 
    Nele, Harry descobre que é um bruxo e vai estudar em Hogwarts, uma escola de magia. 
    Lá, ele faz novos amigos e enfrenta perigos para proteger a misteriosa Pedra Filosofal de cair nas mãos do malvado Lord Voldemort.`,
  },
  {
    id: 2,
    banner: milnovecentoseoitentaequatro.src,
    titulo: "1984",
    estado: "Muito bom",
    autor: "George Orwell",
    preco: "R$ 25,00",
    categoria: "Ficção Científica",
    descricao: `1984, de George Orwell, é um romance distópico que retrata uma sociedade totalitária onde o governo controla tudo, 
    até os pensamentos. O protagonista, Winston Smith, tenta resistir ao regime opressor do Grande Irmão, em busca de liberdade e 
    verdade.`,
  },
  {
    id: 3,
    banner: inglesCard.src,
    titulo: "Inglês para falar em qualquer situação",
    estado: "Aceitável",
    autor: "Chris Tunwell, Fernando Acuña",
    preco: "R$ 19,99",
    categoria: "Didático",
    descricao: `Inglês para Falar em Qualquer Situação é um guia prático que ajuda você a se comunicar com confiança em inglês 
    no dia a dia. Com diálogos, expressões úteis e vocabulário essencial, o livro é ideal para quem quer falar inglês de forma 
    simples e eficaz em viagens, trabalho e conversas informais.`,
  },
  {
    id: 4,
    banner: quarentaEoitoLeisDoPoder.src,
    titulo: "As 48 leis do poder",
    estado: "Moderado",
    autor: "Robert Greene",
    preco: "R$ 23,99",
    categoria: "Autoajuda",
    descricao: `As 48 Leis do Poder, de Robert Greene, reúne estratégias inspiradas na história, na política e na 
    filosofia para entender, conquistar e manter o poder. Um guia direto e provocador sobre influência, 
    liderança e relações de poder.`,
  },
  {
    id: 5,
    banner: javascript.src,
    titulo: "JavaScript: O Guia Definitivo",
    estado: "Bom",
    autor: "David Flanagan",
    preco: "R$ 9,99",
    categoria: "Didático",
    descricao: `JavaScript: O Guia Definitivo, de David Flanagan, é uma referência completa para desenvolvedores. 
    Abrange desde os fundamentos da linguagem até recursos avançados, sendo ideal para quem quer dominar JavaScript com 
    profundidade e precisão.`,
  },
  {
    id: 6,
    banner: oHobbit.src,
    titulo: "O Hobbit",
    estado: "Moderado",
    autor: "J. R. R. Tolkien",
    preco: "R$ 33,99",
    categoria: "Fantasia",
    descricao: `O Hobbit, de J.R.R. Tolkien, conta a aventura de Bilbo Bolseiro, um hobbit pacato que é arrastado para 
    uma jornada épica com anões em busca de um tesouro guardado por um dragão. Uma história clássica de coragem, 
    magia e descoberta.`,
  },
  {
    id: 7,
    banner: umDia.src,
    titulo: "Um dia",
    estado: "Aceitável",
    autor: "David Nicholls",
    preco: "R$ 10,99",
    categoria: "Romance",
    descricao: `Um romance emocionante que acompanha a vida de Emma e Dexter, retratando o que acontece 
    com eles no mesmo dia — 15 de julho — ao longo de 20 anos. Com humor, amor e reflexões sobre o tempo, 
    é uma história tocante sobre encontros, desencontros e conexões duradouras.`,
  },
  {
    id: 8,
    banner: duna.src,
    titulo: "Duna",
    estado: "Moderado",
    autor: "Frank Herbert",
    preco: "R$ 25,99",
    categoria: "Ficção Científica",
    descricao: `Ambientado em um futuro distante, Duna acompanha Paul Atreides, herdeiro de uma família nobre que assume
     o controle do planeta desértico Arrakis, onde é extraída a substância mais valiosa do universo. A obra mistura política, 
     ecologia, religião e tecnologia em uma narrativa épica e complexa.`,
  },
  {
    id: 9,
    banner: assassinoDeRoger.src,
    titulo: "O Assassinato de Roger Ackroyd",
    estado: "Bom",
    autor: "Agatha Christie",
    preco: "R$ 12,99",
    categoria: "Mistério",
    descricao: `Nesse livro, o detetive Hercule Poirot investiga a morte misteriosa de Roger Ackroyd em uma pequena vila inglesa.
     Com reviravoltas surpreendentes, é uma das obras mais famosas e intrigantes da rainha do mistério.`,
  },
];

export default livros;