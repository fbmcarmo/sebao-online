import instance from "@/api/instance";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CadastrarLivro(){
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [preco, setPreco] = useState(0);
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");
    const [descricao, setDescricao] = useState("");
    const [banner, setBanner] = useState("");

    async function handleSubmit(event){
        event.preventDefault();

        if(!titulo || !autor || !preco || !categoria || !estado || !descricao || !banner){
            toast.error("Preencha todos os campos!")
            return;
        }

        try {
            await instance.post("/livros", {
                titulo: titulo,
                autor: autor,
                preco: preco,
                categoria: categoria,
                estado: estado,
                descricao: descricao,
                banner: banner
            })

            toast.success("Livro cadastrado com sucesso!")
            setTitulo("");
            setAutor("");
            setPreco(0);
            setCategoria("");
            setEstado("");
            setDescricao("");
            setBanner("");
        } catch (error) {
            console.error(error)
            toast.error("Erro ao cadastrar livro!")
        }
    }

    return (
        <PageWrapper showButton = {false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[40px] font-bold text-[#9A86F4]">Adicione um novo livro</h1>
                <p className="text-[20px] text-gray-500">Preencha o formulário abaixo para adicionar um novo livro</p>
                <div className="w-full flex justify-center pt-[40px]">
                    <form 
                        onSubmit={handleSubmit}
                        className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#3a364c] flex flex-col p-6 gap-4">
                        <CustomInput 
                            label="Título"
                            value={titulo}
                            placeholder="Digite o título do filme"
                            type="text"
                            onChange={
                                (event) => setTitulo(event.target.value)
                            }
                        />
                        <CustomInput 
                            label="Autor"
                            value={autor}
                            placeholder="Digite o nome do autor"
                            type="text"
                            onChange={
                                (event) => setAutor(event.target.value)
                            }
                        />
                        <div className="w-full flex gap-4">
                            <div className="w-[50%]">
                                <CustomInput 
                                    label="Preço"
                                    value={preco}
                                    placeholder="Digite o preço"
                                    type="number"
                                    onChange={
                                        (event) => setPreco(event.target.value)
                                    }
                                />
                            </div>
                            <div className="w-[50%]">
                                <CustomSelect 
                                    value={categoria}
                                    onChange={
                                        (event) => setCategoria(event.target.value)
                                    }
                                    label="Categoria"
                                    options={[
                                        "Ação", 
                                        "Comédia", 
                                        "Drama",
                                        "Terror",
                                        "Ficção Científica",
                                        "Romance"
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="w-[30%] items-center flex gap-2">
                            <div className="w-[70%]">
                                <CustomInput
                                    value={estado}
                                    onChange={
                                        (event) => setEstado(event.target.value)
                                    }
                                    label="Estado"
                                    placeholder="0"
                                    type="number"
                                />
                            </div>
                            <p className="flex mt-8">0 / 10</p>    
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[17px] font-bold">Descricao</label>
                            <textarea 
                                value={descricao}
                                onChange={
                                    (event) => setDescricao(event.target.value)
                                }
                                className="w-full h-[150px] min-h-[150px] max-h-[150px] rounded-lg border border-[#ffffff1a]
                                 focus:border-purple-400 p-2 bg-[#141414] outline-none"
                            ></textarea>
                        </div>
                        <CustomInput 
                            value={banner}
                            onChange={
                                (event) => setBanner(event.target.value)
                            }
                            label="Banner"
                            placeholder="URL da imagem"
                            type="text"
                        />
                        <div className="w-full flex justify-end gap-4">
                            <button type="reset" className="w-[100px] h-[50px] rounded-md bg-[#141414] cursor-pointer 
                            hover:bg-white/10 border-[#3a364c]">
                                Cancelar
                            </button>
                            <button 
                                type="submit"
                                className="w-[130px] h-[50px] rounded-md bg-[#9A86F4] cursor-pointer font-bold
                                hover:bg-[#9A86F4]/80"
                            >
                                Salvar Livro
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}