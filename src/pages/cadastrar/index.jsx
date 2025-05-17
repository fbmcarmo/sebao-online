import PageWrapper from "@/components/PageWrapper"
import { FaBookReader } from "react-icons/fa"

export default function Cadastrar() {
  return (
  <PageWrapper showHeader = {false} showFooter = {false}>
    <div className="w-full h-[10vh] flex items-center p-4">
      <FaBookReader color="#8B4513" size={30} />
        <p
          className="text-[20px] font-bold cursor-pointer whitespace-nowrap"
          onClick={() => window.location.href = "/"}
        >
          Sebão Online
        </p>
    </div>
    <div className="w-full h-[80vh] flex items-center justify-center">
      <form className="bg-white p-6 rounded flex flex-col gap-2 shadow-md w-full max-w-sm ">
        <h1 className="text-xl font-bold mb-4 text-center text-[#884211]">
          Crie sua conta
        </h1>
        <label className="block te xt-sm font-bold text-gray-700">Nome</label>
        <input
          type="email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#884211]"
          placeholder="Nome"
          required
        />
        <label className="block text-sm font-bold text-gray-700">E-mail</label>
        <input
          type="email"
          className="w-full p-2 border rounded  focus:outline-none focus:ring-2 focus:ring-[#884211]"
          placeholder="seu@email.com"
          required
        />
        <label className="block text-sm font-bold text-gray-700">Senha</label>
        <input
          type="password"
          placeholder="******"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#884211]"
          required
        />
        <label className="block text-sm font-bold text-gray-700">Confirme sua Senha</label>
        <input
          type="password"
          placeholder="******"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#884211]"
          required
        />
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[#884211] text-white p-2 rounded houver:bg-[#6f350f] transition"
          >
            Cadastrar
          </button>
        </div>
        <div className="mt-4">
          <p className="text-center text-[#976460]">Já tem uma conta?
            <button className="text-[#976460] font-bold cursor-pointer pl-2" 
            onClick={() => window.location.href = "/login"}>
              Entre
            </button>
          </p>
        </div>
      </form>
    </div>
  </PageWrapper>
  );
}
