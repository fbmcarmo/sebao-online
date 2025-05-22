'use client';

import { useRouter } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaBookReader } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

  const router = useRouter();

  const handleCategoriaClick = (categoria) => {
    router.push(`/livros?q=${encodeURIComponent(categoria)}`);
  };

  const categorias = [
    "Romance", "Ficção", "Não-Ficção", "Ficção Científica", "Mistério", "Fantasia",
    "Autoajuda", "Biografia", "História", "Infantil", "Didático", "Ciência"
  ];

  return (
    <footer className="bg-[#3E2723] text-white font-sans">
      <div className="flex flex-wrap justify-between px-6 py-8 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <FaBookReader color="#8B4513" size={30} />
            <h3 className="text-xl font-bold cursor-pointer" onClick={() => window.location.href = "/"}>Sebão Online</h3>
          </div>
          <p className="mb-1">Siga-nos:</p>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook" className="hover:text-gray-300 cursor-pointer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="hover:text-gray-300 cursor-pointer">
              <FaInstagram />
            </a>
            <a href="https://www.x.com" aria-label="X (Twitter)" target="_blank" className="hover:text-gray-300 cursor-pointer">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Navegação</h4>
          <ul className="space-y-1">
            <li><a onClick={() => window.location.href = "/"} className="hover:underline cursor-pointer">Início</a></li>
            <li><a onClick={() => window.location.href = "/livros"} className="hover:underline cursor-pointer">Livros</a></li>
            <li><a onClick={() => window.location.href = "/sobre"} className="hover:underline cursor-pointer">Sobre</a></li>
            <li><a onClick={() => window.location.href = "/contato"} className="hover:underline cursor-pointer">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Categorias</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
              {categorias.map((categ, index) => (
                <li key={index}>
                  <a
                    className="hover:underline cursor-pointer"
                    onClick={() => handleCategoriaClick(categ)}
                  >
                    {categ}
                  </a>
                </li>
              ))}
            </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contato</h4>
          <p>Email: contato@sebaoonline.com</p>
          <p>Telefone: (85) 99999-9999</p>
          <p>Endereço: Av. Santos Dumont, 1510,</p>
          <p>1° andar - Aldeota, Fortaleza - CE,</p>
          <p>Brasil, 60150-161</p>
        </div>
      </div>
      <div className="border-t border-[#795548] flex justify-between items-center px-6 py-4 text-sm flex-wrap gap-2">
        <div className="text-left">
          &copy; Sebão Online - 2025. Todos os direitos reservados.
        </div>
        <div className="text-right">
          <a onClick={() => window.location.href = "/"} className="mr-4 hover:underline cursor-pointer">Política de Privacidade</a>
          <a onClick={() => window.location.href = "/"} className="hover:underline cursor-pointer">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
}