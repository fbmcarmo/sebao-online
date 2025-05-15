import PageWrapper from "@/components/PageWrapper"
import matematica from "/public/matematica.jpg"
import portugues from "/public/portugues.jpg"
import historia from "/public/historia.jpg"
import geografia from "/public/geografia.jpg"
import ingles from "/public/ingles.jpg"
import quimica from "/public/quimica.jpg"
import { LuBookOpen } from "react-icons/lu";
import { LuTruck } from "react-icons/lu";
import { LuBadgePercent } from "react-icons/lu";
import { LuBookCheck } from "react-icons/lu";

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
              <div className="w-[300px] h-[200px] bg-[#F5F5DC] rounded-md flex justify-center">
                <LuBookOpen color="#8B4513" size={35} />
              </div>
              <div className="w-[300px] h-[200px] bg-[#F5F5DC] rounded-md flex justify-center">
                <LuTruck color="#8B4513" size={35} />
              </div>
              <div className="w-[300px] h-[200px] bg-[#F5F5DC] rounded-md flex justify-center">
                <LuBadgePercent color="#8B4513" size={35} />
              </div>
              <div className="w-[300px] h-[200px] bg-[#F5F5DC] rounded-md flex justify-center">
                <LuBookCheck color="#8B4513" size={35} />
              </div>
          </div>
        </section>
        <section>
          <div className="">

          </div>
        </section>
        <section>
          <div className="">

          </div>
        </section>
        <section>
          <div className="">

          </div>
        </section>
      </div>   
      </PageWrapper>
  )
}