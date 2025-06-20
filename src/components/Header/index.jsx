import { FaBookReader } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import instance from "@/api/instance";

export default function Header() {
  const [busca, setBusca] = useState("");
  const [qtdCarrinho, setQtdCarrinho] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsLogged(!!token); 
    }

    async function getUserById() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        return;
      }

      try {
        const response = await instance.get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsuario(response.data.name);
      } catch (error) {
        toast.error('Erro ao carregar perfil');
        console.error(error);
      }
  }
    getUserById()

  }, []);

   

  useEffect(() => {
    if (typeof window !== "undefined") {
      const atualizarQtd = () => {
        try {
          const data = localStorage.getItem("carrinho");
          const carrinho = data ? JSON.parse(data) : [];
          setQtdCarrinho(carrinho.length);
        } catch {
          setQtdCarrinho(0);
        }
      };
      atualizarQtd();

      window.addEventListener("storage", atualizarQtd);
      window.addEventListener("focus", atualizarQtd);

      window.addEventListener("carrinhoAtualizado", atualizarQtd);

      const originalSetItem = localStorage.setItem;
      localStorage.setItem = function (...args) {
        originalSetItem.apply(this, args);
        window.dispatchEvent(new Event("carrinhoAtualizado"));
      };

      return () => {
        window.removeEventListener("storage", atualizarQtd);
        window.removeEventListener("focus", atualizarQtd);
        window.removeEventListener("carrinhoAtualizado", atualizarQtd);
        localStorage.setItem = originalSetItem;
      };
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!busca.trim()) return;

    router.push(`/livros?q=${encodeURIComponent(busca)}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setIsLogged(false);
    setShowDropdown(false);
    router.push("/login");
  };

  return (
    <header className="w-full flex flex-col md:flex-row bg-[#F5F5DC] items-center md:items-center justify-between px-2 sm:px-4 md:px-8 py-2 gap-4">
      <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
        <FaBookReader color="#8B4513" size={32} className="min-w-[32px]" />
        <p
          className="text-[18px] sm:text-[20px] font-bold cursor-pointer whitespace-nowrap"
          onClick={() => (window.location.href = "/")}
        >
          Sebão Online
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-auto items-center md:items-center justify-center md:justify-between gap-2 md:gap-6">
        <nav className="flex flex-wrap gap-2 sm:gap-4 md:gap-8 pl-0 md:pl-6 justify-center md:justify-start w-full md:w-auto">
          <a
            className="text-[16px] sm:text-[18px] md:text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]"
            onClick={() => (window.location.href = "/")}
          >
            Início
          </a>
          <a
            className="text-[16px] sm:text-[18px] md:text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]"
            onClick={() => (window.location.href = "/livros")}
          >
            Livros
          </a>
          <a
            className="text-[16px] sm:text-[18px] md:text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]"
            onClick={() => (window.location.href = "/sobre")}
          >
            Sobre nós
          </a>
          <a
            className="text-[16px] sm:text-[18px] md:text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]"
            onClick={() => (window.location.href = "/contato")}
          >
            Contato
          </a>
            {isLogged && (
          <a
            className="text-[16px] sm:text-[18px] md:text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]"
            onClick={() => (window.location.href = "/cadastrarLivro")}
          >
            Vender um Livro
          </a>
            )}
        </nav>
        <div className="w-full md:w-[250px] lg:w-[320px] h-[38px] flex items-center border-2 border-[#8B4513] rounded-[10px] px-2 bg-white mt-2 md:mt-0">
          <form onSubmit={handleSearch} className="flex items-center w-full">
            <input
              type="text"
              placeholder="Digite título, autor ou categoria..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="flex-grow px-2 bg-transparent focus:outline-none text-[#3E2723] text-[14px] sm:text-[16px]"
            />
            <button
              type="submit"
              className="text-[#8B4513] hover:text-[#A0522D] ml-2 transition-transform
                            duration-150 cursor-pointer ease-in-out hover:scale-110 active:scale-125"
            >
              <FaMagnifyingGlass size={18} />
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full md:w-auto justify-center md:justify-end py-2 md:py-0">
        <button
          className="text-[#8B4513] text-[18px] sm:text-[20px] cursor-pointer relative"
          onClick={() => (window.location.href = "/carrinho")}
        >
          <FaShoppingCart size={24} />
          {qtdCarrinho > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">
              {qtdCarrinho}
            </span>
          )}
        </button>
        {!isLogged && (
          <>
            <button
              className="flex items-center gap-1 text-black text-[14px] sm:text-[16px] font-bold bg-white border-2 rounded-[10px] cursor-pointer p-1 hover:shadow-lg hover:border-[#8B4513]"
              onClick={() => router.push("/login")}
            >
              <CiLogin size={20} />
              Entrar
            </button>
            <button
              className="flex items-center gap-1 border-0 bg-[#8B4513] text-white p-[5px] text-[14px] sm:text-[16px] rounded-[10px] cursor-pointer whitespace-nowrap hover:shadow-lg hover:scale-105"
              onClick={() => router.push("/cadastrar")}
            >
              <FaRegUser color="white" size={20} />
              Cadastre-se
            </button>
          </>
        )}
        {isLogged && (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 border-2 border-[#8B4513] text-[#8B4513] p-1 rounded-[10px] cursor-pointer hover:shadow-lg"
            >
              <FaRegUser size={20} />
              Minha Conta
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <div className="px-4 py-2 text-sm font-bold text-[#8B4513]">
                  Olá, {usuario || 'Usuário'}
                </div>
                <button
                  onClick={() => router.push("/perfil")}
                  className="block w-full text-left px-4 py-2 hover:bg-[#f1f1f1] text-sm"
                >
                  Perfil
                </button>
                <button
                  onClick={() => router.push("/meusLivros")}
                  className="block w-full text-left px-4 py-2 hover:bg-[#f1f1f1] text-sm"
                >
                  Meus Livros
                </button>
                <button
                  onClick={() => router.push("/cadastrarLivro")}
                  className="block w-full text-left px-4 py-2 hover:bg-[#f1f1f1] text-sm"
                >
                  Vender um Livro
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-[#f1f1f1] text-sm text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
      )}
      </div>
    </header>
  );
}


