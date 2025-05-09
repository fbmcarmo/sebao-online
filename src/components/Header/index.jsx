import { FaBookReader } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


export default function Header(){
    return (
        <header className="w-full h-[70px] flex bg-[#F5F5DC] justify-between pr-6 pl-2 items-center">
            <div className="w-[10%] h-[100%] flex items-center justify-center gap-1">
                <FaBookReader color="#8B4513" size={30}/>
                <p className="text-[20px] font-bold cursor-pointer whitespace-nowrap" 
                onClick={() => window.location.href = "/"}>Sebão Online</p>
            </div>
            <div className="w-[55%] h-[100%] flex items-center justify-between gap-[20px]">
                <nav className="flex gap-[30px] pl-[20px]">
                    <a className="no-underline text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]" 
                    onClick={() => window.location.href = "/"}>Início</a> 
                    <a className="no-underline text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]" 
                    onClick={() => window.location.href = "/livros"}>Procure livros</a>
                    <a className="no-underline text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]" 
                    onClick={() => window.location.href = "/sobre"}>Sobre</a>
                    <a className="no-underline text-[20px] text-black font-bold cursor-pointer hover:text-[#8B4513]" 
                    onClick={() => window.location.href = "/contatos"}>Contatos</a>
                </nav>
                <div className="w-[40%] h-[35px] flex items-center border-2 border-[#8B4513] rounded-[10px] px-3 pl-0.5 bg-white">
                    <input 
                        type="text" 
                        placeholder="Pesquise um livro..." 
                        className="w-full h-full border-none outline-none text-[16px] pl-2"
                    />
                    <button className="text-[#8B4513] text-[20px] cursor-pointer ml-2">
                        <FaMagnifyingGlass />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center pl-2">
                <button className="text-[#8B4513] text-[20px] cursor-pointer"
                onClick={() => window.location.href = "/carrinho"}>
                    <FaShoppingCart size={30} />
                </button>
            </div>
            <div className="w-[15%] h-[100%] flex items-center justify-center gap-[1px]">
                <div className="flex h-full gap-2 items-center justify-center pl-2">
                    <button 
                    className="flex items-center gap-1 no-underline text-black text-[16px] font-bold bg-[#FFFFFF] 
                    border-[2px] rounded-[10px] cursor-pointer p-1 hover:shadow-lg hover:border-[#8B4513]" 
                    onClick={() => window.location.href = "/login"}>
                        <CiLogin size={25} />
                        Entre
                    </button>
                </div>
                <div className="flex h-full gap-2 items-center justify-center pl-2">
                    <button 
                    className="flex items-center gap-1 border-0 bg-[#8B4513] text-white p-[5px] 
                    text-[16px] rounded-[10px] cursor-pointer whitespace-nowrap hover:shadow-lg hover:scale-105" 
                    onClick={() => window.location.href = "/cadastrar"}>
                        <FaRegUser color="white" size={25} />
                        Cadastre-se
                    </button>
                </div>
            </div>
        </header>
    )
}