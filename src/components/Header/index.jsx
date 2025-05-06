import { FaBookReader } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

export default function Header(){
    return (
        <header className="w-full h-[70px] flex bg-[#F5F5DC] justify-between pr-2 items-center">
            <div className="w-[10%] h-[100%] flex items-center justify-center gap-1">
                <FaBookReader color="#8B4513" size={20}/>
                <p className="text-[20px] font-bold cursor-pointer" onClick={() => window.location.href = "/"}>Sebão Online</p>
            </div>
            <div className="w-[75%] h-[100%] flex items-center">
                <nav className="flex gap-[30px] pl-[20px]">
                    <a className="no-underline text-[20px] text-black font-bold cursor-pointer hover:underline" onClick={() => window.location.href = "/"}>Home</a> 
                    <a className="no-underline text-[20px] text-black font-bold cursor-pointer hover:underline" onClick={() => window.location.href = "/livros"}>Livros</a>
                    <a className="no-underline text-[20px] text-black font-bold cursor-pointer hover:underline" onClick={() => window.location.href = "/sobre"}>Sobre</a>
                    <a className="no-underline text-[20px] text-black font-bold cursor-pointer hover:underline" onClick={() => window.location.href = "/contatos"}>Contatos</a>
                </nav>
            </div>
            <div className="w-[15%] h-[100%] flex items-center justify-center gap-[20px]">
                <div className="flex h-full gap-2 items-center justify-center pl-2">
                    <CiLogin size={20} />
                    <button className="no-underline text-black text-[20px] font-bold bg-[#FFFFFF] border-0 rounded-[10px] cursor-pointer" onClick={() => window.location.href = "/login"}>Entrar</button>
                </div>
                <div className="flex h-full gap-2 items-center justify-center pl-2">
                    <FaRegUser color="white" size={20} />
                    <button className="border-0 bg-[#8B4513] text-white p-[10px] text-[20px] rounded-[10px] cursor-pointer" onClick={() => window.location.href = "/cadastrar"}>Cadastrar</button>
                </div>
            </div>
        </header>
    )
}