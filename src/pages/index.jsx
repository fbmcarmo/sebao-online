import PageWrapper from "@/components/PageWrapper";
import matematica from "/public/matematica.jpg";
import portugues from "/public/portugues.jpg";
import historia from "/public/historia.jpg";
import geografia from "/public/geografia.jpg";
import ingles from "/public/ingles.jpg";
import quimica from "/public/quimica.jpg";
import { LuBookOpen, LuTruck, LuBadgePercent, LuBookCheck } from "react-icons/lu";
import CardLivro from "@/components/CardLivro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import instance from "@/api/instance";

const categorias = [
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
];

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

export default function Home() {
  const router = useRouter();
  const [mensagem, setMensagem] = useState("");
  const [livrosCarrossel, setLivrosCarrossel] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [showResumo, setShowResumo] = useState(false);
  const resumoRef = useRef(null);

  useEffect(() => {
    setCarrinho(getCarrinhoStorage());
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (resumoRef.current && !resumoRef.current.contains(event.target)) {
        setShowResumo(false);
      }
    }
    if (showResumo) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showResumo]);

  useEffect(() => {
    async function getLivros(){
      try {
        const response = await instance.get("/livros")
        setLivrosCarrossel(response.data)
    } catch(error) {
      console.error("Erro ao buscar livros:", error)
    }
  }  
    getLivros()
  }, []);

  const handleCategoriaClick = (categoria) => {
    router.push(`/livros?q=${encodeURIComponent(categoria)}`);
  };

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

  const [email, setEmail] = useState("");
  function handleSubscribe(e) {
    e.preventDefault();
    toast.success("Email enviado com sucesso!");
    setEmail("");
  }

  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col items-center w-full bg-[#f8f7e8]">
        <section className="w-full flex flex-col md:flex-row items-center justify-center py-10 md:py-20 bg-gradient-to-b from-[#fff] to-[#f8f7e8]">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-4 md:pl-16 text-center md:text-left gap-4">
            <h1 className="text-3xl md:text-5xl lg:text-[60px] text-[#3E2723] font-bold leading-tight">
              Descubra seu próximo livro favorito
            </h1>
            <p className="text-base md:text-lg lg:text-[20px] text-[#374167]">
              Navegue por nossa coleção selecionada de livros usados de
              qualidade a preços acessíveis. Dos clássicos da literatura aos
              best-sellers modernos, encontre a leitura perfeita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full justify-center md:justify-start">
              <button
                className="flex items-center gap-1 border-0 bg-[#8B4513] text-white px-6 py-2 text-base md:text-[16px] rounded-[10px] cursor-pointer whitespace-nowrap hover:shadow-lg hover:scale-105 transition"
                onClick={() => router.push("/livros")}
              >
                Procure livros
              </button>
              <button
                className="flex items-center gap-1 no-underline text-black text-base md:text-[16px] font-bold bg-[#FFFFFF] border-[2px] rounded-[10px] cursor-pointer px-6 py-2 hover:shadow-lg hover:border-[#8B4513] transition"
                onClick={() => router.push("/sobre")}
              >
                Saiba mais
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="relative flex flex-row gap-4">
              <div className="flex flex-col gap-4 items-center">
                <div className="h-44 md:h-60 w-28 md:w-40 shadow-xl rotate-3 -translate-y-2 bg-white p-2 flex items-center justify-center">
                  <img
                    src={matematica.src}
                    alt="Capa de livro"
                    className="h-full w-full object-cover rounded"
                  />
                </div>
                <div className="h-44 md:h-60 w-28 md:w-40 shadow-xl -rotate-6 translate-y-2 bg-white p-2 flex items-center justify-center">
                  <img
                    src={portugues.src}
                    alt="Capa de livro"
                    className="h-full w-full object-cover rounded"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center mt-8">
                <div className="h-44 md:h-60 w-28 md:w-40 shadow-xl -rotate-3 bg-white p-2 flex items-center justify-center">
                  <img
                    src={historia.src}
                    alt="Capa de livro"
                    className="h-full w-full object-cover rounded"
                  />
                </div>
                <div className="h-44 md:h-60 w-28 md:w-40 shadow-xl rotate-6 -translate-y-2 bg-white p-2 flex items-center justify-center">
                  <img
                    src={geografia.src}
                    alt="Capa de livro"
                    className="h-full w-full object-cover rounded"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center mt-4">
                <div className="h-44 md:h-60 w-28 md:w-40 shadow-xl rotate-2 -translate-y-1 bg-white p-2 flex items-center justify-center">
                  <img
                    src={ingles.src}
                    alt="Capa de livro"
                    className="h-full w-full object-cover rounded"
                  />
                </div>
                <div className="h-44 md:h-60 w-28 md:w-40 shadow-xl -rotate-2 translate-y-1 bg-white p-2 flex items-center justify-center">
                  <img
                    src={quimica.src}
                    alt="Capa de livro"
                    className="h-full w-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-wrap items-center justify-center bg-white gap-6 md:gap-10 py-12 px-4">
          {[
            {
              icon: <LuBookOpen color="#8B4513" size={38} />,
              title: "Seleção com curadoria",
              desc: "Títulos cuidadosamente selecionados em todos os gêneros com excelentes condições",
            },
            {
              icon: <LuTruck color="#8B4513" size={38} />,
              title: "Envio rápido",
              desc: "Entrega rápida e segura para todas as suas compras",
            },
            {
              icon: <LuBadgePercent color="#8B4513" size={38} />,
              title: "Ótimo valor",
              desc: "Livros de qualidade a preços acessíveis, com descontos regulares",
            },
            {
              icon: <LuBookCheck color="#8B4513" size={38} />,
              title: "Garantia de qualidade",
              desc: "Todos os livros são inspecionados para garantir que atendam aos nossos padrões de qualidade",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-[#F5F5DC] rounded-xl p-6 h-[220px] w-full max-w-xs sm:w-[260px] md:w-[220px] lg:w-[240px] xl:w-[260px] text-center space-y-2 shadow hover:scale-105 hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-[19px] font-bold">{item.title}</h3>
              <p className="text-[15px]">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="w-full flex flex-col items-center justify-center bg-[#F8F7E8] py-12 gap-8">
          <h1 className="text-[28px] md:text-[32px] lg:text-[35px] text-[#8B4513] font-bold text-center mb-2">
            Explore os livros
          </h1>
          <div className="w-full flex items-center justify-center relative z-20">
            <div className="w-full max-w-6xl">
              <Swiper
                modules={[Navigation]}
                spaceBetween={32}
                slidesPerView={1}
                navigation
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                className="w-full px-2 sm:px-4"
                style={{ paddingBottom: 40 }}
              >
                {livrosCarrossel.map((livro, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex items-center justify-center h-full">
                      <div
                        className="mt-4 w-[320px] h-[500px] flex flex-col items-center justify-between bg-white rounded-2xl 
                        shadow-2xl z-30 overflow-visible border border-[#e5e7eb]
                          transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(139,69,19,0.25)]
                           hover:border-[#8B4513] group cursor-pointer"
                        style={{
                          boxShadow:
                            "0 4px 24px 0 rgba(139,69,19,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.06)",
                        }}
                        onClick={() => router.push(`/livros/${livro.id}`)}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-between p-4">
                          <img
                            src={livro.banner}
                            alt={`Capa do livro ${livro.titulo}`}
                            className="w-full h-2/4 object-cover rounded-lg mb-2"
                            style={{ minHeight: 180, maxHeight: 220 }}
                          />
                          <div className="w-full flex flex-col items-center gap-1">
                            <h2 className="text-lg font-bold text-[#3E2723] text-center">
                              {livro.titulo}
                            </h2>
                            <span className="text-sm text-[#374167]">
                              {livro.autor}
                            </span>
                            <span className="text-xs text-[#8B4513] font-semibold">
                              {livro.categoria}
                            </span>
                            <span className="text-xs text-gray-500">
                              Estado: {livro.estado}
                            </span>
                            <span className="text-xl font-bold text-[#8B4513] mt-1">
                              {livro.preco}
                            </span>
                          </div>
                          <button
                            className={`mt-3 w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                              carrinho.some(
                                (item) => item.titulo === livro.titulo
                              )
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-[#8B4513] text-white hover:bg-[#a05a2c] cursor-pointer"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (
                                !carrinho.some(
                                  (item) => item.titulo === livro.titulo
                                )
                              ) {
                                adicionarAoCarrinho(livro);
                              } else {
                                router.push("/carrinho");
                              }
                            }}
                            disabled={carrinho.some(
                              (item) => item.titulo === livro.titulo
                            )}
                          >
                            <FaShoppingCart size={18} />
                            {carrinho.some(
                              (item) => item.titulo === livro.titulo
                            )
                              ? "Já no carrinho"
                              : "Adicionar ao carrinho"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <button
            className="mt-4 text-[18px] md:text-[20px] text-[#955527] bg-white border border-[#955527] 
            px-6 py-3 rounded-xl cursor-pointer hover:bg-[#7a431e]/60 hover:text-white hover:border-[#7a431e] 
            transition-colors duration-300"
            onClick={() => router.push("/livros")}
          >
            Veja todos os livros
          </button>
        </section>

        <section className="w-full flex flex-col items-center justify-center bg-white py-12 px-4">
          <h1 className="text-[24px] md:text-[28px] lg:text-[30px] text-[#8B4513] font-bold text-center mb-4">
            Procure por Categoria
          </h1>
          <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {categorias.map((categ, index) => (
              <div
                key={index}
                className="xs:w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[44px] sm:h-[50px] bg-[#F5F5DC] rounded-md flex items-center justify-center
                hover:bg-[#8B4513]/30 transition-colors cursor-pointer"
              >
                <button
                  onClick={() => handleCategoriaClick(categ)}
                  className="text-[16px] md:text-[18px] font-bold cursor-pointer w-full h-full"
                >
                  {categ}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-center bg-[#8B4513] gap-4 py-12 px-4">
          <h1 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold text-white text-center">
            Junte-se à nossa comunidade de livros
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white text-center max-w-2xl">
            Assine nosso boletim informativo para receber descontos exclusivos,
            novidades e recomendações de leitura
          </p>
          <div className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2 mt-2">
            <form
              onSubmit={handleSubscribe}
              className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2 mt-2"
            >
              <input
                type="email"
                placeholder="Seu endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white rounded-md border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#f40d0d] text-white px-4 py-2 min-w-[130px] rounded-md hover:opacity-80 transition mt-2 sm:mt-0 cursor-pointer"
              >
                Inscreva-se
              </button>
            </form>
          </div>
        </section>

        <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-2">
          {showResumo && (
            <div
              ref={resumoRef}
              className="mb-3 w-80 max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-[#e5e7eb] p-4 animate-fade-in"
            >
              <h3 className="font-bold text-[#8B4513] text-lg mb-2 flex items-center gap-2">
                <FaShoppingCart /> Seu carrinho
              </h3>
              {carrinho.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  Seu carrinho está vazio.
                </p>
              ) : (
                <ul className="max-h-48 overflow-y-auto mb-2">
                  {carrinho.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between py-1 border-b border-[#f3e7d3] last:border-0"
                    >
                      <span className="truncate max-w-[140px] text-[#3E2723]">
                        {item.titulo}
                      </span>
                      <span className="text-[#8B4513] font-bold">
                        {item.preco}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex gap-2 mt-2">
                <button
                  className="flex-1 bg-[#8B4513] text-white rounded-lg px-4 py-2 font-bold
                   hover:bg-[#a05a2c] transition cursor-pointer"
                  onClick={() => router.push("/carrinho")}
                >
                  Ver carrinho
                </button>
                <button
                  className="flex-1 bg-gray-200 text-[#8B4513] rounded-lg px-4 py-2 
                  font-bold hover:bg-gray-300 transition cursor-pointer"
                  onClick={() => setShowResumo(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
