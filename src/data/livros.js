import harryPotter from "/public/harryPotter.jpg"
import milnovecentoseoitentaequatro from "/public/milnovecentoseoitentaequatro.jpg"
import inglesCard from "/public/inglesCard.jpg"
import quarentaEoitoLeisDoPoder from "/public/quarentaEoitoLeisDoPoder.jpg"
import javascript from "/public/javascript.jpg"

const livros = [
  {
    id: 1,
    banner: harryPotter.src,
    titulo: "Harry Potter e a pedra filosofal",
    estado: "Bom",
    autor: "J. K. Rowling",
    preco: "R$ 20,00",
    categoria: "Fantasia",
  },
  {
    id: 2,
    banner: milnovecentoseoitentaequatro.src,
    titulo: "1984",
    estado: "Muito bom",
    autor: "George Orwell",
    preco: "R$ 25,00",
    categoria: "Ficção Científica",
  },
  {
    id: 3,
    banner: inglesCard.src,
    titulo: "Inglês para falar em qualquer situação",
    estado: "Aceitável",
    autor: "Chris Tunwell, Fernando Acuña",
    preco: "R$ 19,99",
    categoria: "Didático",
  },
  {
    id: 4,
    banner: quarentaEoitoLeisDoPoder.src,
    titulo: "As 48 leis do poder",
    estado: "Moderado",
    autor: "Robert Greene",
    preco: "R$ 23,99",
    categoria: "Autoajuda",
  },
  {
    id: 5,
    banner: javascript.src,
    titulo: "JavaScript: O Guia Definitivo",
    estado: "Bom",
    autor: "David Flanagan",
    preco: "R$ 9,99",
    categoria: "Didático",
  },
];

export default livros;