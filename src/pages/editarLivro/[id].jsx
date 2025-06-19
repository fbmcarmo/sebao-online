import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import instance from "@/api/instance";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import PageWrapper from "@/components/PageWrapper";
import { toast } from "react-toastify";

export default function EditarLivro() {
  const router = useRouter();
  const { id } = router.query;

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [preco, setPreco] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [descricao, setDescricao] = useState("");
  const [banner, setBanner] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchLivro() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Faça login para editar um livro");
          router.push("/login");
          return;
        }

        const response = await instance.get(`/livros/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const livro = response.data;
        setTitulo(livro.titulo || "");
        setAutor(livro.autor || "");
        setPreco(livro.preco || 0);
        setCategoria(livro.categoria || "");
        setEstado(livro.estado || "");
        setDescricao(livro.descricao || "");
        setBanner(livro.banner || "");
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast.error("Erro ao carregar dados do livro");
        router.push("/meusLivros");
      }
    }

    fetchLivro();
  }, [id, router]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!titulo || !autor || !preco || !categoria || !estado || !descricao || !banner) {
      toast.error("Preencha todos os campos!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Faça login para editar um livro");
        router.push("/login");
        return;
      }

      await instance.put(
        `/livros/${id}`,
        { titulo, autor, preco, categoria, estado, descricao, banner },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Livro atualizado com sucesso!");
      router.push("/meusLivros");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao atualizar livro!");
    }
  }

  if (loading) {
    return (
      <PageWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <p>Carregando dados do livro...</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="w-full min-h-screen py-8 px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B4513] text-center">
          Editar Livro
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-black text-center mt-2">
          Atualize os campos abaixo para editar seu livro
        </p>

        <div className="w-full flex justify-center pt-6">
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-w-[700px] bg-white rounded-2xl
            border border-[#3a364c] flex flex-col p-4 sm:p-6 md:p-8 gap-4 shadow-md"
          >
            <CustomInput
              label="Título"
              value={titulo}
              placeholder="Digite o título do livro"
              type="text"
              onChange={(event) => setTitulo(event.target.value)}
            />

            <CustomInput
              label="Autor"
              value={autor}
              placeholder="Digite o nome do autor"
              type="text"
              onChange={(event) => setAutor(event.target.value)}
            />

            <div className="w-full flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <CustomInput
                  label="Preço"
                  value={preco}
                  placeholder="Digite o preço"
                  type="number"
                  onChange={(event) => setPreco(event.target.value)}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <CustomSelect
                  value={categoria}
                  onChange={(event) => setCategoria(event.target.value)}
                  label="Categoria"
                  options={[
                    "Romance",
                    "Ficção",
                    "Não-Ficção",
                    "Ficção Científica",
                    "Mistério",
                    "Fantasia",
                    "Autoajuda",
                    "Biografia",
                    "História",
                    "Infantil",
                    "Didático",
                    "Ciência",
                  ]}
                />
              </div>
            </div>

            <CustomSelect
              value={estado}
              onChange={(event) => setEstado(event.target.value)}
              label="Estado de Conservação"
              options={["Bom", "Muito Bom", "Aceitável", "Moderado"]}
            />

            <div className="w-full flex flex-col gap-2">
              <label className="text-base font-bold">Descrição</label>
              <textarea
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                className="w-full h-[150px] rounded-lg border border-[#ffffff1a]
                focus:border-[#A26A42] p-2 bg-[#FAF8F5] outline-none resize-none"
              ></textarea>
            </div>

            <CustomInput
              value={banner}
              onChange={(event) => setBanner(event.target.value)}
              label="Banner"
              placeholder="URL da imagem"
              type="text"
            />

            <div className="w-full flex flex-col sm:flex-row justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={() => router.push("/meusLivros")}
                className="w-full sm:w-auto h-[45px] rounded-md bg-[#FAF8F5]
                hover:bg-[#8B4513]/20 border border-[#3a364c] text-black px-4"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto h-[45px] text-white rounded-md
                bg-[#8B4513] cursor-pointer font-bold hover:bg-[#8B4513]/80 px-6"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
