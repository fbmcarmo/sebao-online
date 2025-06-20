import PageWrapper from "@/components/PageWrapper";
import CardLivro from "@/components/CardLivro";
import { useEffect, useState } from "react";
import instance from "@/api/instance";
import { useRouter } from "next/router";
import { PiNotePencil } from "react-icons/pi";
import { FiTrash2 } from "react-icons/fi";
import { LuRefreshCcw } from "react-icons/lu";
import { toast } from "react-toastify";

export default function MeusLivros() {
  const router = useRouter();
  const [livros, setLivros] = useState([]);
  const [usuarioId, setUsuarioId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const idUser = localStorage.getItem("userId");

    if (!token || !idUser) {
      router.push("/login");
      return;
    }

    setUsuarioId(idUser);
    buscarLivros();
  }, []);

  async function buscarLivros() {
    setLoading(true);
    const idUser = localStorage.getItem("userId");

    try {
      const response = await instance.get(`/livros`);
      setLivros(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
      toast.error("Erro ao carregar seus livros.");
    } finally {
      setLoading(false);
    }
  }

  async function deletarLivro(idLivro) {
    try {
      await instance.delete(`/livros/${idLivro}`);
      toast.success("Livro excluído com sucesso!");
      buscarLivros();
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      toast.error("Erro ao excluir o livro.");
    }
  }

  return (
    <PageWrapper>
      <div className="w-full min-h-screen py-10 px-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-[#8B4513]">Meus Livros</h1>

        <button
          onClick={() => buscarLivros(usuarioId)}
          disabled={loading}
          className="mb-6 flex items-center gap-2 px-6 py-3 bg-[#8B4513] text-white rounded-lg hover:bg-[#6f3913] transition disabled:opacity-50 text-lg"
        >
          <LuRefreshCcw size={20} />
          Atualizar Lista
        </button>

        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {livros.length === 0 ? (
            <p className="text-gray-500">Você ainda não cadastrou nenhum livro.</p>
          ) : (
            livros.map((livro) => (
              <div
                key={livro.id}
                className="flex flex-col border border-gray-300 rounded-xl shadow-sm p-4 bg-white"
              >
                <div className="flex justify-center gap-3 mb-4">
                  <button
                    onClick={() => router.push(`/editarLivro/${livro.id}`)}
                    className="flex items-center justify-center gap-1 px-3 py-1 cursor-pointer
                    bg-[#9B87F5] text-white rounded hover:bg-[#7c67e0] text-sm font-medium transition"
                  >
                    <PiNotePencil size={16} />
                    Editar
                  </button>
                  <button
                    onClick={() => deletarLivro(livro.id)}
                    className="flex items-center justify-center gap-1 px-3 py-1 cursor-pointer
                    bg-[#ef4444] text-white rounded hover:bg-[#dc2626] text-sm font-medium transition"
                  >
                    <FiTrash2 size={16} />
                    Excluir
                  </button>
                </div>
                <CardLivro
                  banner={livro.banner}
                  titulo={livro.titulo}
                  estado={livro.estado}
                  autor={livro.autor}
                  preco={livro.preco}
                  categoria={livro.categoria}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </PageWrapper>
  );
}

