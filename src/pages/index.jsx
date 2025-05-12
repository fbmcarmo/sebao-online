import PageWrapper from "@/components/PageWrapper";

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
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4">
                      <div className="h-60 w-46 shadow-xl transform rotate-3 -translate-y-2 bg-white p-2">
                        <img src="https://ecommerce.konekta.com.br/storage/covers/o-grande-livro-de-matematica-do-manual-do-mundo-anotacoes-incriveis-e-divertidas-para-voce-aprende-173736.jpg" 
                        alt="Capa de livro" className="h-full w-full object-cover" />
                      </div>
                      <div className="h-60 w-46 shadow-xl transform -rotate-6 translate-y-2 bg-white p-2">
                        <img src="https://a-static.mlcdn.com.br/800x560/livro-portugues-linguagens-volume-1/meiereldoradodistribuidora/1f5ca9a4822311ee87544201ac185040/502eebb3fc5726ec8b6ee8e408799313.jpg" 
                        alt="Capa de livro" className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-8">
                      <div className="h-60 w-46 shadow-xl transform -rotate-3 bg-white p-2">
                        <img src="https://aventurasnahistoria.uol.com.br/media/uploads/amazon/historia_do_mundo_pra_quem_tem_pressa_amazon.jpg" 
                        alt="Capa de livro" className="h-full w-full object-cover" />
                      </div>
                      <div className="h-60 w-46 shadow-xl transform rotate-6 -translate-y-2 bg-white p-2">
                        <img src="https://image.isu.pub/230628184051-ee58994565472ee5a15ca627e82419ef/jpg/page_1.jpg" 
                        alt="Capa de livro" className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                    <div className="h-60 w-46 shadow-xl transform rotate-2 -translate-y-1 bg-white p-2">
                      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeUSz84cu525WZxLtlfWHsILy5D7dNkxu191yMHspflFexncHGkl-pplS18PRUr--qco3fruYqOLhKnDG7F4fSYle2An_M5b705Sb4AKAyIxRkD3GzTynBS5A7n6ZPtHYZrnVoJaXwwrLLttn029u-oPEFa2j1UPNJRhuSvrPZY6AjGvCgnOQ9uDKe/s16000/livro-ingles-em-viagens.jpg" 
                      alt="Capa de livro" className="h-full w-full object-cover" />
                    </div>
                    <div className="h-60 w-46 shadow-xl transform -rotate-2 translate-y-1 bg-white p-2">
                      <img src="https://images-na.ssl-images-amazon.com/images/I/710dng7xRWL.jpg" 
                      alt="Capa de livro" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  </div>
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
        <section>
          <div className="">

          </div>
        </section>
      </div>   
      </PageWrapper>
  )
}