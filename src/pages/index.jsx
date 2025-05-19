import PageWrapper from "@/components/PageWrapper"
import matematica from "/public/matematica.jpg"
import portugues from "/public/portugues.jpg"
import historia from "/public/historia.jpg"
import geografia from "/public/geografia.jpg"
import ingles from "/public/ingles.jpg"
import quimica from "/public/quimica.jpg"
import { LuBookOpen, LuTruck, LuBadgePercent, LuBookCheck } from "react-icons/lu";
import CardLivro from "@/components/CardLivro"
import harryPotter from "/public/harryPotter.jpg"
import milnovecentoseoitentaequatro from "/public/milnovecentoseoitentaequatro.jpg"
import inglesCard from "/public/inglesCard.jpg"
import quarentaEoitoLeisDoPoder from "/public/quarentaEoitoLeisDoPoder.jpg"
import javascript from "/public/javascript.jpg"

const categorias = [
"Romance", "Ficção", "Não-Ficção", "Ficção Científica" , "Mistério", "Fantasia", "Autoajuda", "Biografia", "História", "Infantil",
"Didático", "Ciência"]

export default function Home(){
  return (
      <PageWrapper>
      <div className="min-h-screen"> 
        <section className="w-full h-full flex">
              <div className="w-[50%] h-full pl-16 mt-46">
                <h1 className="text-[60px] text-[#3E2723] font-bold">Descubra seu próximo livro favorito</h1>
                <p className="text-[20px] text-[#374167]">Navegue por nossa coleção selecionada de livros usados 
                  de qualidade a preços acessíveis. Dos clássicos da literatura aos best-sellers modernos, 
                  encontre a leitura perfeita.
                </p>
                <div className="w-full flex h-[10%] pt-4 gap-4">
                  <button className="flex items-center gap-1 border-0 bg-[#8B4513] text-white p-[5px] 
                    text-[16px] rounded-[10px] cursor-pointer
                     whitespace-nowrap hover:shadow-lg hover:scale-105" 
                     onClick={() => window.location.href = "/livros"}>Procure livros</button>
                  <button className="flex items-center gap-1 no-underline text-black text-[16px] font-bold bg-[#FFFFFF] 
                    border-[2px] rounded-[10px] cursor-pointer p-1 hover:shadow-lg hover:border-[#8B4513]" 
                    onClick={() => window.location.href = "/sobre"}>Saiba mais</button>
                </div>
              </div>
              <div className="w-[50%] order-1 md:order-2 mt-36">
                <div className="relative">
                  <div className="flex justify-between gap-4">
                    <div className="flex flex-1 flex-col gap-4">
                      <div className="h-60 w-46 shadow-xl transform rotate-3 -translate-y-2 bg-white p-2">
                        <img src={matematica.src} alt="Capa de livro" className="h-full w-full object-cover" />
                      </div>
                      <div className="h-60 w-46 shadow-xl transform -rotate-6 translate-y-2 bg-white p-2">
                        <img src={portugues.src} alt="Capa de livro" className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 mt-8">
                      <div className="h-60 w-46 shadow-xl transform -rotate-3 bg-white p-2">
                        <img src={historia.src} alt="Capa de livro" className="h-full w-full object-cover" />
                      </div>
                      <div className="h-60 w-46 shadow-xl transform rotate-6 -translate-y-2 bg-white p-2">
                        <img src={geografia.src} alt="Capa de livro" className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 mt-4">
                    <div className="h-60 w-46 shadow-xl transform rotate-2 -translate-y-1 bg-white p-2">
                      <img src={ingles.src} alt="Capa de livro" className="h-full w-full object-cover" />
                    </div>
                    <div className="h-60 w-46 shadow-xl transform -rotate-2 translate-y-1 bg-white p-2">
                      <img src={quimica.src} alt="Capa de livro" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
        </section>
        <section className="w-full h-full mt-16">
          <div className="w-full h-full flex flex-wrap items-center justify-center bg-white gap-14 p-12">
              <div className="w-[300px] h-[200px] bg-[#F5F5DC] rounded-md flex
               flex-col items-center justify-center p-4 text-center space-y-2 hover:scale-105 transition">
                <LuBookOpen color="#8B4513" size={35} />
                <h3 className="text-[20px] font-bold">Seleção com curadoria</h3>
                <p className="text-[15px]">Títulos cuidadosamente selecionados em todos os gêneros com excelentes condições</p>
              </div>
              <div className="w-[300px] h-[200px] bg-[#F5F5DC] rounded-md flex
               flex-col items-center justify-center p-4 text-center space-y-2 hover:scale-105 transition">
                <LuTruck color="#8B4513" size={35} />
                <h3 className="text-[20px] font-bold">Envio rápido</h3>
                <p className="text-[15px]">Entrega rápida e segura para todas as suas compras</p>
              </div>
              <div className="w-[300px] h-[200px] bg-[#F5F5DC] rounded-md flex
               flex-col items-center justify-center p-4 text-center space-y-2 hover:scale-105 transition">
                <LuBadgePercent color="#8B4513" size={35} />
                <h3 className="text-[20px] font-bold">Ótimo valor</h3>
                <p className="text-[15px]">Livros de qualidade a preços acessíveis, com descontos regulares</p>
              </div>
              <div className="w-[300px] h-[200px] bg-[#F5F5DC] rounded-md flex
               flex-col items-center justify-center p-4 text-center space-y-2 hover:scale-105 transition">
                <LuBookCheck color="#8B4513" size={35} />
                <h3 className="text-[20px] font-bold">Garantia de qualidade</h3>
                <p className="text-[15px]">Todos os livros são inspecionados para garantir que atendam aos nossos padrões de qualidade</p>
              </div>
          </div>
        </section>
        <section className="w-full h-full flex">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#F8F7E8] p-12 gap-8">
            <div className="w-full h-[10%] flex items-center">
              <h1 className="text-[35px] text-[#8B4513] font-bold">Explore os livros</h1>
            </div>
            <div className="w-full overflow-x-auto flex gap-6 snap-x snap-mandatory scroll-smooth px-4">
              <div className="flex gap-6 min-w-full sm:min-w-[600px] md:min-w-[700px]">
                <div className="snap-start shrink-0">
                  <CardLivro 
                    banner={harryPotter.src}
                    titulo="Harry Potter e a pedra filosofal"
                    estado="Bom"
                    autor="J. K. Rowling"
                    preco="R$ 20,00"
                    categoria="Fantasia"
                  />
                </div>
                <div className="snap-start shrink-0">
                  <CardLivro
                    banner={milnovecentoseoitentaequatro.src}
                    titulo="1984"
                    estado="Muito bom"
                    autor="George Orwell"
                    preco="R$ 25,00"
                    categoria="Ficção Científica"
                  />
                </div>
                <div className="snap-start shrink-0">
                  <CardLivro
                    banner={inglesCard.src}
                    titulo="Inglês para falar em qualquer situação"
                    estado="Ruim"
                    autor=" Chris Tunwell, Fernando Acuña"
                    preco="R$ 19,99"
                    categoria="Didático"
                  />
                </div>
                <div className="snap-start shrink-0">
                  <CardLivro
                    banner={quarentaEoitoLeisDoPoder.src}
                    titulo="As 48 leis do poder"
                    estado="Moderado"
                    autor="Robert Greene"
                    preco="R$ 23,99"
                    categoria="Autoajuda"
                  />
                </div>
                <div className="snap-start shrink-0">
                  <CardLivro
                    banner={javascript.src}
                    titulo="JavaScript: O Guia Definitivo"
                    estado="Bom"
                    autor="David Flanagan"
                    preco="R$ 9,99"
                    categoria="Didático"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-[10%] flex items-center justify-center">
              <button className="text-[20px] text-[#955527] bg-white border border-[#955527] px-6 py-3 
                rounded-xl cursor-pointer hover:bg-[#7a431e]/60 transition-colors duration-300"
                onClick={() => window.location.href = "/livros"}>
                  Veja todos os livros
              </button>
            </div>
          </div>
        </section>
        <section className="w-full h-full flex">
          <div className="w-full h-full flex flex-wrap items-center justify-center bg-white gap-14 p-12">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-full h-[50%] flex items-center justify-center">
                <h1 className="text-[30px] text-[#8B4513] font-bold">Procure por Categoria</h1>
              </div>
              <div className="w-full h-[50%] flex items-center justify-center mt-6">
                <div className="w-full h-full flex flex-wrap items-center justify-center gap-6">
                  {categorias.map((categ, index) => {
                    return (
                      <div key={index} className="w-[300px] h-[50px] bg-[#F5F5DC] rounded-md flex items-center justify-center
                      hover:bg-[#8B4513]/30 transition-colors cursor-pointer">
                          <button className="text-[20px] font-bold cursor-pointer">{categ}</button>
                      </div>
                    )
                  })}
                </div>  
              </div>
            </div>  
          </div>
        </section>
        <section className="w-full h-full flex">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#8B4513] gap-4 p-12">
            <div className="w-full flex items-center justify-center">
              <h1 className="text-[30px] font-bold text-white text-center">Junte-se à nossa comunidade de livros</h1>
            </div>
            <div className="w-full max-w-3xl flex items-center justify-center">
              <p className="text-[20px] text-white text-center">
                Assine nosso boletim informativo para receber descontos exclusivos, novidades e recomendações de leitura
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-full max-w-md flex items-center gap-2">
                <input type="email" placeholder="Seu endereço de e-mail" className="w-full px-4 py-2 bg-white rounded-md border
                 border-gray-300 focus:outline-none" />
                <button className="bg-[#f40d0d] text-white px-4 py-2 min-w-[130px] cursor-pointer
                 rounded-md hover:opacity-80 transition">Inscreva-se</button>
              </div>
            </div>
          </div>
        </section>
      </div>   
      </PageWrapper>
  )
}