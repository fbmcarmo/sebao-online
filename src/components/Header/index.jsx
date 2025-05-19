'use client';

import { FaBookReader } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Header() {

    const [busca, setBusca] = useState('');
    const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (busca.trim()) {
      router.push(`/procurar?q=${encodeURIComponent(busca.trim())}`);
    }
  };

    return (
        <header className="w-full h-[70px] flex bg-[#F5F5DC] justify-between px-6 items-center">
            <div className="w-[10%] h-full flex items-center justify-center gap-1">
                <FaBookReader color="#8B4513" size={40} />
                <p
                    className="text-[20px] font-bold cursor-pointer whitespace-nowrap"
                    onClick={() => window.location.href = "/"}
                >
                    Sebão Online
                </p>
            </div>
            <div className="w-[70%] h-full flex items-center justify-between gap-[20px]">
                <nav className="flex gap-[30px] pl-[20px]">
                    <a className="text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]" 
                    onClick={() => window.location.href = "/"}>Início</a>
                    <a className="text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]" 
                    onClick={() => window.location.href = "/livros"}>Procure livros</a>
                    <a className="text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]" 
                    onClick={() => window.location.href = "/sobre"}>Sobre nós</a>
                    <a className="text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]" 
                    onClick={() => window.location.href = "/contatos"}>Contato</a>
                </nav>
                <div className="w-[50%] h-[35px] flex items-center border-2 border-[#8B4513] rounded-[10px] px-3 bg-white">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Digite título, autor ou categoria..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className="px-4 py-2 rounded-md border border-[#ccc] focus:outline-none"
                        />
                        <button 
                            type="submit"
                            className="text-[#8B4513] text-[20px] cursor-pointer ml-2 transform active:scale-110 
                            transition-all duration-150"
                            onClick={() => window.location.href = "/procurar"}>
                            <FaMagnifyingGlass size={20} />
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="text-[#8B4513] text-[20px] cursor-pointer"
                    onClick={() => window.location.href = "/carrinho"}
                >
                    <FaShoppingCart size={30} />
                </button>
                <button
                    className="flex items-center gap-1 text-black text-[16px] font-bold bg-[#FFFFFF] 
                    border-[2px] rounded-[10px] cursor-pointer p-1 hover:shadow-lg hover:border-[#8B4513]"
                    onClick={() => window.location.href = "/login"}
                >
                    <CiLogin size={25} />
                    Entre
                </button>
                <button
                    className="flex items-center gap-1 border-0 bg-[#8B4513] text-white p-[5px] 
                    text-[16px] rounded-[10px] cursor-pointer whitespace-nowrap hover:shadow-lg hover:scale-105"
                    onClick={() => window.location.href = "/cadastrar"}
                >
                    <FaRegUser color="white" size={25} />
                    Cadastre-se
                </button>
            </div>
        </header>
    );
}



