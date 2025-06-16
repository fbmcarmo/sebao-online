import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { FaShoppingCart, FaTrashAlt, FaTruck } from "react-icons/fa";
import instance from "@/api/instance";

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

export default function Carrinho() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [carrinho, setCarrinho] = useState([]);
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState(null);
  const [freteCalculado, setFreteCalculado] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const [quantidades, setQuantidades] = useState({});

  const [cupom, setCupom] = useState("");
  const [cupomAplicado, setCupomAplicado] = useState(false);
  const [desconto, setDesconto] = useState(0);

  useEffect(() => {
    setCarrinho(getCarrinhoStorage());
    const qts = localStorage.getItem("quantidades");
    setQuantidades(qts ? JSON.parse(qts) : {});
  }, []);

  useEffect(() => {
    setCarrinhoStorage(carrinho);
    localStorage.setItem("quantidades", JSON.stringify(quantidades));
  }, [carrinho, quantidades]);

  useEffect(() => {
    const livroTitulo = searchParams.get("livro");
    if (!livroTitulo) return;

    const fetchLivro = async () => {
      try {
        const response = await instance.get(`/livros?titulo=${encodeURIComponent(livroTitulo)}`);
        const livro = response.data;

        if (!livro || !livro.titulo) {
          setMensagem("Livro não encontrado na API.");
          setTimeout(() => setMensagem(""), 2500);
          return;
        }

        if (!carrinho.some((item) => item.titulo === livro.titulo)) {
          const novoCarrinho = [...carrinho, livro];
          setCarrinho(novoCarrinho);
          setQuantidades((prev) => ({
            ...prev,
            [livro.titulo]: 1,
          }));
          setMensagem(`"${livro.titulo}" adicionado ao carrinho!`);
          setTimeout(() => setMensagem(""), 2500);
        }
      } catch (error) {
        console.error("Erro ao buscar livro:", error);
        setMensagem("Erro ao buscar o livro na API.");
        setTimeout(() => setMensagem(""), 2500);
      }
    };

    fetchLivro();
  }, [searchParams, carrinho]);

  const removerDoCarrinho = (titulo) => {
    const novoCarrinho = carrinho.filter((item) => item.titulo !== titulo);
    setCarrinho(novoCarrinho);
    const novasQuantidades = { ...quantidades };
    delete novasQuantidades[titulo];
    setQuantidades(novasQuantidades);
    setCarrinhoStorage(novoCarrinho);
  };

  const limparCarrinho = () => {
    setCarrinho([]);
    setQuantidades({});
    setCarrinhoStorage([]);
    setFrete(null);
    setFreteCalculado(false);
    setCupom("");
    setCupomAplicado(false);
    setDesconto(0);
  };

  const alterarQuantidade = (titulo, valor) => {
    setQuantidades((prev) => {
      const novaQtd = Math.max(1, (prev[titulo] || 1) + valor);
      return { ...prev, [titulo]: novaQtd };
    });
  };

  const totalLivros = carrinho.reduce((acc, item) => {
    const preco =
      typeof item.preco === "string"
        ? parseFloat(item.preco.replace(/[^\d,]/g, "").replace(",", "."))
        : Number(item.preco);
    const qtd = quantidades[item.titulo] || 1;
    return acc + (isNaN(preco) ? 0 : preco * qtd);
  }, 0);

  const aplicarCupom = () => {
    if (cupom.toUpperCase() === "CUPOM10") {
      setDesconto(0.1);
      setCupomAplicado(true);
      setMensagem("Cupom de 10% aplicado!");
      setTimeout(() => setMensagem(""), 2000);
      return;
    }
    if (cupom.toUpperCase() === "CUPOM20") {
      setDesconto(0.2);
      setCupomAplicado(true);
      setMensagem("Cupom de 20% aplicado!");
      setTimeout(() => setMensagem(""), 2000);
      return;
    }
    setDesconto(0);
    setCupomAplicado(false);
    setMensagem("Cupom inválido.");
    setTimeout(() => setMensagem(""), 2000);
  };

  const calcularFrete = () => {
    if (!cep || cep.length < 8) {
      setFrete(null);
      setFreteCalculado(false);
      setMensagem("Digite um CEP válido.");
      setTimeout(() => setMensagem(""), 2000);
      return;
    }
    let valor = 0;
    let prazo = "";
    if (cep.startsWith("60")) {
      valor = 10.0;
      prazo = "2 a 4 dias úteis";
      setFrete({ valor, prazo });
      setFreteCalculado(true);
      setMensagem("");
      return;
    }
    valor = 22.9;
    prazo = "5 a 10 dias úteis";
    setFrete({ valor, prazo });
    setFreteCalculado(true);
    setMensagem("");
  };

  const totalComDesconto = totalLivros * (1 - desconto);

  const totalGeral = frete ? totalComDesconto + frete.valor : totalComDesconto;

  const isLogado =
    typeof window !== "undefined" &&
    localStorage.getItem("usuarioLogado") === "true";

  const finalizarCompra = () => {
    if (!isLogado) {
      setMensagem("Você precisa estar logado para finalizar a compra.");
      setTimeout(() => setMensagem(""), 3000);

      setTimeout(() => {
        router.push("/login");
      }, 1000);
      return;
    }
    setMensagem("Compra finalizada! Obrigado por comprar no Sebão Online.");
    limparCarrinho();
    setTimeout(() => setMensagem(""), 3000);
  };

  if (carrinho.length === 0) {
    return (
      <PageWrapper>
        <div className="min-h-screen bg-[#f8f7e8] flex flex-col items-center py-10 px-2">
          <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-[#e5e7eb]">
            <div className="flex items-center gap-3 mb-8">
              <FaShoppingCart size={32} className="text-[#8B4513]" />
              <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723]">
                Seu Carrinho
              </h1>
            </div>
            {mensagem && (
              <div className="mb-6 text-center text-green-700 bg-green-100 rounded-lg py-2 px-4 text-base font-semibold shadow">
                {mensagem}
              </div>
            )}
            <div className="flex flex-col items-center py-20">
              <p className="text-xl text-[#555] mb-6">
                Seu carrinho está vazio.
              </p>
              <button
                className="bg-[#8B4513] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a05a2c] transition text-lg shadow cursor-pointer"
                onClick={() => router.push("/livros")}
              >
                Procurar livros
              </button>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }

  
  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#f8f7e8] flex flex-col items-center py-10 px-2">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-[#e5e7eb]">
          <div className="flex items-center gap-3 mb-8">
            <FaShoppingCart size={32} className="text-[#8B4513]" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723]">
              Seu Carrinho
            </h1>
          </div>
          {mensagem && (
            <div className="mb-6 text-center text-green-700 bg-green-100 rounded-lg py-2 px-4 text-base font-semibold shadow">
              {mensagem}
            </div>
          )}
          <ul className="flex flex-col divide-y divide-[#eee] mb-8">
            {carrinho.map((livro, idx) => (
              <li
                key={livro.titulo}
                className="flex flex-col sm:flex-row items-center gap-6 py-6"
              >
                <img
                  src={livro.banner}
                  alt={livro.titulo}
                  className="w-28 h-36 object-cover rounded-xl border shadow"
                />
                <div className="flex-1 flex flex-col items-center sm:items-start gap-1">
                  <h2 className="text-xl font-bold text-[#3E2723]">
                    {livro.titulo}
                  </h2>
                  <span className="text-base text-[#374167]">
                    {livro.autor}
                  </span>
                  <span className="text-xs text-[#8B4513] font-semibold">
                    {livro.categoria}
                  </span>
                  <span className="text-xs text-gray-500">
                    Estado: {livro.estado}
                  </span>
                  <span className="text-2xl font-bold text-[#8B4513] mt-1">
                    {livro.preco}
                  </span>
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold text-lg transition"
                      onClick={() => alterarQuantidade(livro.titulo, -1)}
                      disabled={quantidades[livro.titulo] <= 1}
                      title="Diminuir quantidade"
                    >
                      -
                    </button>
                    <span className="min-w-[32px] text-center text-lg font-semibold">
                      {quantidades[livro.titulo] || 1}
                    </span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold text-lg transition"
                      onClick={() => alterarQuantidade(livro.titulo, 1)}
                      title="Aumentar quantidade"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold mt-4 sm:mt-0 text-base"
                  onClick={() => removerDoCarrinho(livro.titulo)}
                  title="Remover do carrinho"
                >
                  <FaTrashAlt />
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-end mb-6">
            <button
              className="text-base text-[#8B4513] underline hover:text-[#a05a2c] transition cursor-pointer"
              onClick={limparCarrinho}
            >
              Limpar carrinho
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 bg-[#f8f7e8] rounded-xl p-4 shadow">
            <input
              type="text"
              placeholder="Cupom de desconto"
              value={cupom}
              onChange={(e) => setCupom(e.target.value)}
              className="border border-[#ccc] rounded-lg px-4 py-2 w-full max-w-[220px] text-[#3E2723] text-base"
              disabled={cupomAplicado}
            />
            <button
              className={`bg-[#8B4513] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a05a2c] transition ${
                cupomAplicado ? "opacity-60 cursor-not-allowed" : ""
              }`}
              onClick={aplicarCupom}
              disabled={cupomAplicado}
            >
              {cupomAplicado ? "Cupom aplicado" : "Aplicar cupom"}
            </button>
            {cupomAplicado && desconto > 0 && (
              <span className="text-green-700 font-semibold">
                {desconto * 100}% de desconto!
              </span>
            )}
          </div>
         
          <div className="bg-[#f8f7e8] rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center gap-4 shadow">
            <FaTruck className="text-[#8B4513] text-2xl" />
            <input
              type="text"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) =>
                setCep(e.target.value.replace(/\D/g, "").slice(0, 8))
              }
              className="border border-[#ccc] rounded-lg px-4 py-2 w-full max-w-[180px] text-[#3E2723] text-base"
            />
            <button
              className="bg-[#8B4513] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a05a2c] transition"
              onClick={calcularFrete}
              disabled={cep.length < 8}
            >
              Calcular frete
            </button>
            {freteCalculado && (
              <div className="text-[#3E2723] text-sm mt-2 sm:mt-0">
                <span className="font-bold">Frete:</span> R${" "}
                {frete.valor.toFixed(2).replace(".", ",")}{" "}
                <span className="ml-2">({frete.prazo})</span>
              </div>
            )}
          </div>
         
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4 bg-[#f8f7e8] rounded-xl p-4 shadow">
            <span className="text-lg font-bold text-[#3E2723]">
              Total dos livros:{" "}
              <span className="text-[#8B4513]">
                R$ {totalLivros.toFixed(2).replace(".", ",")}
              </span>
              {desconto > 0 && (
                <span className="ml-2 text-green-700 font-semibold">
                  (-{(desconto * 100).toFixed(0)}%)
                </span>
              )}
            </span>
            <span className="text-lg font-bold text-[#3E2723]">
              Total geral:{" "}
              <span className="text-[#8B4513]">
                R$ {totalGeral.toFixed(2).replace(".", ",")}
              </span>
            </span>
          </div>
          <button
            className="bg-[#8B4513] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a05a2c] transition w-full mt-2 text-lg shadow cursor-pointer"
            onClick={finalizarCompra}
            disabled={carrinho.length === 0 || !frete}
          >
            Finalizar compra
          </button>
          <button
            className="bg-white border border-[#8B4513] text-[#8B4513] px-8 py-3 rounded-lg font-semibold hover:bg-[#f3e7d3] hover:text-[#a05a2c] transition w-full mt-3 text-lg shadow cursor-pointer"
            onClick={() => router.push("/livros")}
            type="button"
          >
            Voltar a comprar
          </button>
          {!frete && (
            <p className="text-xs text-red-600 text-center mt-2">
              Calcule o frete para finalizar a compra.
            </p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
