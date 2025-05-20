'use client';

import { FaBookReader } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function Header() {

    const [busca, setBusca] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault(); 
        if (!busca.trim()) return; 

        
        router.push(`/livros?q=${encodeURIComponent(busca)}`);
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
                    onClick={() => window.location.href = "/contato"}>Contato</a>
                </nav>
                <div className="w-[50%] h-[40px] flex items-center border-2 border-[#8B4513] rounded-[10px] px-3 bg-white">
                    <form onSubmit={handleSearch} className="flex items-center w-full">
                        <input
                            type="text"
                            placeholder="Digite título, autor ou categoria..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className="flex-grow px-2 bg-transparent focus:outline-none text-[#3E2723]"
                        />
                        <button
                            type="submit"
                            className="text-[#8B4513] hover:text-[#A0522D] ml-2 transition-transform
                             duration-150 cursor-pointer ease-in-out hover:scale-110 active:scale-125">
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



