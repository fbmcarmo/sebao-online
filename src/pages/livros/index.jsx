import { useSearchParams, useRouter } from "next/navigation";
import livros from "@/data/livros";
import CardLivro from "@/components/CardLivro";
import PageWrapper from "@/components/PageWrapper";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const ordenar = (arr) =>
  [...arr].filter(Boolean).sort((a, b) => a.localeCompare(b));

const categoriasUnicas = ordenar([
  ...new Set(livros.map((livro) => livro.categoria)),
]);
const estadosUnicos = ordenar([
  ...new Set(livros.map((livro) => livro.estado)),
]);
const autoresUnicos = ordenar([...new Set(livros.map((livro) => livro.autor))]);
const precosUnicos = ordenar([...new Set(livros.map((livro) => livro.preco))]);

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

export default function Livros() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [termo, setTermo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [autor, setAutor] = useState("");
  const [preco, setPreco] = useState("");
  const [ordem, setOrdem] = useState("");
  const [resultados, setResultados] = useState([]);

  const [carrinho, setCarrinho] = useState([]);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    setCarrinho(getCarrinhoStorage());
  }, []);

  useEffect(() => {
    setCarrinhoStorage(carrinho);
  }, [carrinho]);

  const adicionarAoCarrinho = (livro) => {
    let novoCarrinho = getCarrinhoStorage();
    if (novoCarrinho.some((item) => item.titulo === livro.titulo)) {
      setMensagem("Este livro já está no carrinho.");
      setTimeout(() => setMensagem(""), 2000);
      return;
    }
    novoCarrinho.push(livro);
    setCarrinhoStorage(novoCarrinho);
    setCarrinho(novoCarrinho);
    setMensagem(`"${livro.titulo}" adicionado ao carrinho!`);
    setTimeout(() => setMensagem(""), 2000);
  };

  useEffect(() => {
    const q = searchParams.get("q")?.toLowerCase() || "";
    const cat = searchParams.get("categoria") || "";
    const est = searchParams.get("estado") || "";
    const aut = searchParams.get("autor") || "";
    const prc = searchParams.get("preco") || "";
    const ord = searchParams.get("ordem") || "";

    setTermo(q);
    setCategoria(cat);
    setEstado(est);
    setAutor(aut);
    setPreco(prc);
    setOrdem(ord);

    let filtrados = livros.filter((livro) => {
      const busca = q.trim();
      const matchBusca =
        !busca ||
        livro.titulo.toLowerCase().includes(busca) ||
        livro.autor.toLowerCase().includes(busca) ||
        livro.categoria.toLowerCase().includes(busca);

      const matchCategoria = !cat || livro.categoria === cat;
      const matchEstado = !est || livro.estado === est;
      const matchAutor = !aut || livro.autor === aut;
      const matchPreco = !prc || livro.preco === prc;

      return (
        matchBusca && matchCategoria && matchEstado && matchAutor && matchPreco
      );
    });

    if (ord === "preco-asc") {
      filtrados = filtrados
        .slice()
        .sort(
          (a, b) =>
            parseFloat(a.preco.replace(/[^\d,]/g, "").replace(",", ".")) -
            parseFloat(b.preco.replace(/[^\d,]/g, "").replace(",", "."))
        );
    }
    if (ord === "preco-desc") {
      filtrados = filtrados
        .slice()
        .sort(
          (a, b) =>
            parseFloat(b.preco.replace(/[^\d,]/g, "").replace(",", ".")) -
            parseFloat(a.preco.replace(/[^\d,]/g, "").replace(",", "."))
        );
    }
    if (ord === "titulo-asc") {
      filtrados = filtrados
        .slice()
        .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
    if (ord === "titulo-desc") {
      filtrados = filtrados
        .slice()
        .sort((a, b) => b.titulo.localeCompare(a.titulo));
    }

    setResultados(filtrados);
  }, [searchParams]);

  const montarQuery = () => {
    const params = [];
    if (termo.trim()) params.push(`q=${encodeURIComponent(termo.trim())}`);
    if (categoria) params.push(`categoria=${encodeURIComponent(categoria)}`);
    if (estado) params.push(`estado=${encodeURIComponent(estado)}`);
    if (autor) params.push(`autor=${encodeURIComponent(autor)}`);
    if (preco) params.push(`preco=${encodeURIComponent(preco)}`);
    if (ordem) params.push(`ordem=${encodeURIComponent(ordem)}`);
    return params.length ? "?" + params.join("&") : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/livros${montarQuery()}`);
  };

  const limparFiltros = () => {
    setTermo("");
    setCategoria("");
    setEstado("");
    setAutor("");
    setPreco("");
    setOrdem("");
    router.push("/livros");
  };

  return (
    <PageWrapper>
      <section className="p-2 sm:p-4 md:p-8 bg-[#F8F7E8] min-h-screen">
        <div className="w-full flex flex-col sm:flex-row items-center mb-4 gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3E2723] text-center w-full sm:w-auto">
            Livros
          </h1>
        </div>
        {mensagem && (
          <div className="mb-4 text-center text-green-700 bg-green-100 rounded-lg py-2 px-4 text-base font-semibold">
            {mensagem}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row flex-wrap items-center gap-2 mb-8 w-full max-w-4xl mx-auto"
        >
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              placeholder="Busque por título, autor ou categoria..."
              className="w-full p-3 pr-10 rounded-lg border bg-white border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#8B4513] text-base"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B4513] text-lg pointer-events-none" />
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="min-w-[150px] p-3 rounded-lg border bg-white border-[#ccc] text-base"
            >
              <option value="">Todas as categorias</option>
              {categoriasUnicas.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="min-w-[130px] p-3 rounded-lg border bg-white border-[#ccc] text-base"
            >
              <option value="">Todos os estados</option>
              {estadosUnicos.map((est) => (
                <option key={est} value={est}>
                  {est}
                </option>
              ))}
            </select>
            <select
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              className="min-w-[150px] p-3 rounded-lg border bg-white border-[#ccc] text-base"
            >
              <option value="">Todos os autores</option>
              {autoresUnicos.map((aut) => (
                <option key={aut} value={aut}>
                  {aut}
                </option>
              ))}
            </select>
            <select
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              className="min-w-[120px] p-3 rounded-lg border bg-white border-[#ccc] text-base"
            >
              <option value="">Todos os preços</option>
              {precosUnicos.map((prc) => (
                <option key={prc} value={prc}>
                  {prc}
                </option>
              ))}
            </select>
            <select
              value={ordem}
              onChange={(e) => setOrdem(e.target.value)}
              className="min-w-[140px] p-3 rounded-lg border bg-white border-[#ccc] text-base"
            >
              <option value="">Ordenar por</option>
              <option value="preco-asc">Menor preço</option>
              <option value="preco-desc">Maior preço</option>
              <option value="titulo-asc">Título (A-Z)</option>
              <option value="titulo-desc">Título (Z-A)</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-5 py-3 bg-[#8B4513] text-white rounded-lg hover:bg-[#A0522D] transition cursor-pointer"
          >
            Buscar
          </button>
          <button
            type="button"
            onClick={limparFiltros}
            className="w-full md:w-auto px-5 py-3 bg-gray-200 text-[#8B4513] rounded-lg hover:bg-gray-300 transition cursor-pointer"
          >
            Limpar filtros
          </button>
        </form>
        <div className="mb-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#8B4513]">
            {termo || categoria || estado || autor || preco ? (
              <>
                Resultados para:{" "}
                <span className="text-[#3E2723]">
                  {termo && `"${termo}"`}
                  {categoria && ` | ${categoria}`}
                  {estado && ` | ${estado}`}
                  {autor && ` | ${autor}`}
                  {preco && ` | ${preco}`}
                  {ordem &&
                    (ordem === "preco-asc"
                      ? " | Menor preço"
                      : ordem === "preco-desc"
                      ? " | Maior preço"
                      : ordem === "titulo-asc"
                      ? " | Título (A-Z)"
                      : ordem === "titulo-desc"
                      ? " | Título (Z-A)"
                      : "")}
                </span>
              </>
            ) : (
              "Todos os livros disponíveis"
            )}
          </h2>
          <p className="text-[#555555] text-base sm:text-lg mt-1">
            {resultados.length}{" "}
            {resultados.length === 1
              ? "livro encontrado"
              : "livros encontrados"}
          </p>
        </div>
        {resultados.length > 0 ? (
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {resultados.map((livro) => {
              const jaNoCarrinho = carrinho.some(
                (item) => item.titulo === livro.titulo
              );
              return (
                <div
                  key={livro.id}
                  className="flex flex-col items-center justify-between w-full xs:w-[260px] sm:w-[300px] md:w-[320px] bg-white rounded-2xl shadow-xl p-5 transition hover:scale-105 hover:shadow-2xl border border-[#e9e3d7] duration-200 cursor-pointer"
                  onClick={() => router.push(`/livros/${livro.id}`)}
                >
                  <div className="flex flex-col items-center w-full pointer-events-none">
                    <img
                      src={livro.banner}
                      alt={livro.titulo}
                      className="w-full h-48 object-cover rounded-xl mb-4 shadow-md border border-[#f3e7d3]"
                    />
                    <h3 className="text-xl font-extrabold text-[#3E2723] text-center mb-1">
                      {livro.titulo}
                    </h3>
                    <p className="text-base text-[#555] text-center mb-1">
                      {livro.autor}
                    </p>
                    <span className="text-xs text-[#8B4513] font-semibold mb-1">
                      {livro.categoria}
                    </span>
                    <span className="text-xs text-gray-500 mb-2">
                      Estado: {livro.estado}
                    </span>
                    <span className="text-2xl font-bold text-[#8B4513] mb-2">
                      {livro.preco}
                    </span>
                  </div>
                  <button
                    className={`mt-3 px-5 py-2 rounded-xl font-bold transition-all duration-200 w-full shadow ${
                      jaNoCarrinho
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#8B4513] to-[#a05a2c] text-white hover:brightness-110 cursor-pointer"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!jaNoCarrinho) adicionarAoCarrinho(livro);
                    }}
                    type="button"
                    disabled={jaNoCarrinho}
                  >
                    {jaNoCarrinho ? "Já no carrinho" : "Adicionar ao carrinho"}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-[#555555] text-center">Nenhum livro encontrado.</p>
        )}
      </section>
    </PageWrapper>
  );
}

