import { useRouter } from "next/navigation";
import livros from "@/data/livros";
import PageWrapper from "@/components/PageWrapper";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const getCarrinhoStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("carrinho");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
const setCarrinhoStorage = (carrinho) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }
};

const getFavoritosStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("favoritos");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
const setFavoritosStorage = (favoritos) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
};

export default function LivroInfo() {
  const router = useRouter();
  if (!router?.query?.id) {
    console.error("ID indefinido");
    return;
  }
  const { id } = router?.query

  const livro = livros.find((l) => String(l.id) === String(id));

  const [carrinho, setCarrinho] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [copiado, setCopiado] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const jaNoCarrinho = carrinho.some((item) => item.titulo === livro?.titulo);
  const jaFavorito = favoritos.some((item) => item.titulo === livro?.titulo);

  useEffect(() => {
    setCarrinho(getCarrinhoStorage());
    setFavoritos(getFavoritosStorage());
  }, []);

  const adicionarAoCarrinho = () => {
    if (!jaNoCarrinho && livro) {
      const novoCarrinho = [...carrinho, livro];
      setCarrinhoStorage(novoCarrinho);
      setCarrinho(novoCarrinho);
    } else if (jaNoCarrinho) {
      router.push("/carrinho");
    }
  };

  const toggleFavorito = () => {
    let novosFavoritos;
    if (jaFavorito) {
      novosFavoritos = favoritos.filter((item) => item.titulo !== livro.titulo);
    } else {
      novosFavoritos = [...favoritos, livro];
    }
    setFavoritosStorage(novosFavoritos);
    setFavoritos(novosFavoritos);
  };

  const compartilhar = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      setCopiado(false);
    }
  };

  if (!livro) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f7e8]">
          <h1 className="text-2xl font-bold text-[#8B4513] mb-4">
            Livro não encontrado
          </h1>
          <button
            className="flex items-center gap-2 bg-[#8B4513] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#a05a2c] transition cursor-pointer"
            onClick={() => router.push("/livros")}
          >
            <FaArrowLeft /> Voltar para a lista
          </button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col items-center bg-[#f8f7e8] py-10 px-2">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-[#e5e7eb] flex flex-col md:flex-row gap-10">
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-full md:w-1/3 gap-6">
            <img
              src={livro.banner}
              alt={livro.titulo}
              className="w-full max-w-[240px] h-[340px] object-cover rounded-2xl shadow-lg border-2 border-[#f3e7d3] bg-[#f8f7e8] cursor-zoom-in transition hover:scale-105"
              onClick={() => setShowModal(true)}
              title="Clique para ampliar"
            />
            <div className="flex gap-4 mt-2">
              <button
                className={`flex items-center gap-2 px-5 py-2 rounded-xl font-semibold transition text-lg ${
                  jaFavorito
                    ? "bg-[#8B4513] text-white"
                    : "bg-[#f8f7e8] text-[#8B4513] border border-[#8B4513]"
                } hover:brightness-110 cursor-pointer`}
                onClick={toggleFavorito}
                aria-label={
                  jaFavorito
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
              >
                <FaHeart className={jaFavorito ? "text-red-500" : ""} />
                {jaFavorito ? "Favorito" : "Favoritar"}
              </button>
              <button
                className="flex items-center gap-2 px-5 py-2 rounded-xl font-semibold bg-[#f8f7e8] text-[#8B4513] border border-[#8B4513] hover:bg-[#f3e7d3] transition text-lg cursor-pointer"
                onClick={compartilhar}
                aria-label="Compartilhar"
              >
                <FaShareAlt />
                {copiado ? "Link copiado!" : "Compartilhar"}
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6 justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#3E2723] mb-2 leading-tight drop-shadow">
              {livro.titulo}
            </h1>
            <p className="text-lg md:text-xl text-[#555] mb-1">
              <span className="font-semibold">Autor:</span> {livro.autor}
            </p>
            <div className="flex flex-wrap gap-3 mb-2">
              <span className="text-sm md:text-base text-[#8B4513] font-semibold bg-[#f3e7d3] px-3 py-1 rounded-full shadow-sm">
                {livro.categoria}
              </span>
              <span className="text-sm md:text-base text-gray-600 font-semibold bg-[#f3e7d3] px-3 py-1 rounded-full shadow-sm">
                {livro.estado}
              </span>
              {livro.editora && (
                <span className="text-sm md:text-base text-[#555] bg-[#f3e7d3] px-3 py-1 rounded-full shadow-sm">
                  Editora:{" "}
                  <span className="font-semibold">{livro.editora}</span>
                </span>
              )}
              {livro.ano && (
                <span className="text-sm md:text-base text-[#555] bg-[#f3e7d3] px-3 py-1 rounded-full shadow-sm">
                  Ano: <span className="font-semibold">{livro.ano}</span>
                </span>
              )}
              {livro.isbn && (
                <span className="text-sm md:text-base text-[#555] bg-[#f3e7d3] px-3 py-1 rounded-full shadow-sm">
                  ISBN: <span className="font-semibold">{livro.isbn}</span>
                </span>
              )}
              {livro.paginas && (
                <span className="text-sm md:text-base text-[#555] bg-[#f3e7d3] px-3 py-1 rounded-full shadow-sm">
                  Páginas:{" "}
                  <span className="font-semibold">{livro.paginas}</span>
                </span>
              )}
              {livro.idioma && (
                <span className="text-sm md:text-base text-[#555] bg-[#f3e7d3] px-3 py-1 rounded-full shadow-sm">
                  Idioma: <span className="font-semibold">{livro.idioma}</span>
                </span>
              )}
              {livro.formato && (
                <span className="text-sm md:text-base text-[#555] bg-[#f3e7d3] px-3 py-1 rounded-full shadow-sm">
                  Formato:{" "}
                  <span className="font-semibold">{livro.formato}</span>
                </span>
              )}
            </div>
            <span className="text-4xl font-extrabold text-[#8B4513] mb-2 drop-shadow-lg">
              {livro.preco}
            </span>
            {livro.descricao && (
              <div className="mt-2 mb-2 flex flex-col items-stretch bg-[#f8f7e8] rounded-2xl p-5 shadow">
                <h2 className="text-xl font-bold text-[#3E2723] mb-2 text-left w-full">
                  Descrição do livro
                </h2>
                <p className="text-base text-[#444] whitespace-pre-line text-justify w-full">
                  {livro.descricao}
                </p>
              </div>
            )}
            <div className="flex gap-4 mt-8 flex-wrap justify-start">
              <button
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg shadow-lg transition
                  ${
                    jaNoCarrinho
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#8B4513] to-[#a05a2c] text-white hover:scale-105 hover:brightness-110 cursor-pointer"
                  }
                `}
                onClick={adicionarAoCarrinho}
                disabled={jaNoCarrinho}
                type="button"
              >
                <FaShoppingCart />
                {jaNoCarrinho ? "Já no carrinho" : "Adicionar ao carrinho"}
              </button>
              <button
                className="flex items-center gap-2 border-2 border-[#8B4513] text-[#8B4513] px-8 py-3 rounded-xl font-bold text-lg bg-white hover:bg-[#f3e7d3] hover:scale-105 transition shadow cursor-pointer"
                onClick={() => router.push("/livros")}
                type="button"
              >
                <FaArrowLeft /> Voltar
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mt-12">
          <h2 className="text-2xl font-bold text-[#8B4513] mb-6">
            Veja também
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {livros
              .filter((l) => l.id !== livro.id)
              .slice(0, 3)
              .map((sug) => (
                <div
                  key={sug.id}
                  className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 w-[200px] border border-[#e5e7eb] hover:shadow-2xl transition cursor-pointer"
                  onClick={() => router.push(`/livros/${sug.id}`)}
                >
                  <img
                    src={sug.banner}
                    alt={sug.titulo}
                    className="w-full h-36 object-cover rounded-xl mb-2 border"
                  />
                  <span className="font-bold text-[#3E2723] text-center">
                    {sug.titulo}
                  </span>
                  <span className="text-xs text-[#8B4513]">{sug.autor}</span>
                </div>
              ))}
          </div>
        </div>

        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setShowModal(false)}
          >
            <img
              src={livro.banner}
              alt={livro.titulo}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-8 text-white text-3xl font-bold bg-black/50 rounded-full px-3 py-1 hover:bg-black/80 transition cursor-pointer"
              onClick={() => setShowModal(false)}
              aria-label="Fechar"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
