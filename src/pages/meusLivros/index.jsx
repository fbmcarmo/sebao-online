import PageWrapper from "@/components/PageWrapper"
import { useRouter } from "next/router"
import { LuArrowLeft } from "react-icons/lu"
import { PiNotePencil } from "react-icons/pi"
import { FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import instance from "@/api/instance";

export default function MeusLivros(){
    const router = useRouter()
    const { id } = router.query || "0"

    const [livro, setLivro] = useState({})

  useEffect(() => {
    async function getLivrosById(){
      const response = await instance.get(`/livros/${id}`)
      setLivro(response.data)
      console.log(livro)
    }

    if(id){
        getLivrosById()
    }

  }, []);

    return (
        <PageWrapper>
            <div className="w-full h-full min-h-sreen flex flex-col px-[350px] pt-12 items-start">
                <button 
                    onClick={() => router.back()}
                    className="px-5 py-2 text-[#8a898c] gap-2 flex items-center
                 justify-center rounded-lg hover:bg-[#27282B] hover:text-[#8F7BD8]">
                    <LuArrowLeft />
                    <p>Voltar para a lista de livros</p>
                </button>
                <div className="w-full min-h-[90vh] flex">
                    <div className="w-[40%] h-full flex flex-col">
                        <div className="w-full h-[90%]">
                            <img
                                className="w-full h-full rounded-lg object-cover"
                                src={livro.banner}
                                alt={livro.titulo}
                            />
                        </div>
                        <div className="w-full flex h-[10%] pt-4 justify-between">
                            <button className="w-[46%] h-full border border-[#9b87f533]
                             rounded-md text-[#9b87f5] hover:bg-[#9b87f5]/20 flex items-center justify-center gap-2 py-2">
                                <PiNotePencil size={20} /> Editar livro</button>
                            <button className="w-[46%] h-full border border-[#ef444433]
                             text-[#ef4444] hover:bg-[#ef4444]/20 rounded-md flex items-center justify-center gap-2 py-2">
                              <FiTrash2 size={20} />  Excluir livro
                            </button>
                        </div>
                    </div>
                     <div className="w-[60%] pl-4 h-full flex flex-col">
                        <div className="w-full flex gap-2 items-baseline">
                            <h1 className="text-[35px] text-[#9B87F5] font-bold">{livro.titulo}</h1>
                            <p className="text-[#8a898c] font-semibold text-[17px]">{livro.preco}</p>
                        </div>
                        <div className="w-full gap-4 flex">
                            <div className="py-1 px-4 rounded-2xl bg-[#4ade80]/20 text-[#4ade80]">
                                <p className="text-[17px]">{livro.estado}/10</p>
                            </div>
                            <div className="py-1 px-4 rounded-2xl bg-[#9b87f5]/20 text-[#9b87f5]">
                                <p className="text-[17px]">{livro.categoria}</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px]">Autor</h4>
                            <p className="text-[#8a898c]">{livro.autor}</p>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px]">Descrição</h4>
                            <p className="text-[#8a898c]">{livro.descricao}</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}