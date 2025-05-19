import PageWrapper from "@/components/PageWrapper";
import { FaBookReader } from "react-icons/fa";

export default function Login() {
  return (
    <PageWrapper showHeader={false} showFooter={false} showLogo={true}>
      <div className="w-full h-[80vh] flex items-center justify-center">
        <form className="bg-white p-6 rounded flex flex-col gap-2 shadow-md w-full max-w-sm ">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaBookReader className="text-[#884211]" size={28} />
            <h1 className="text-xl font-bold text-center text-[#884211]">
              Entrar no Sebão Online
            </h1>
          </div>
          <label className="block text-sm font-bold text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#884211]"
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
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-[#884211] text-white p-2 rounded houver:bg-[#6f350f] transition"
            >
              Entrar
            </button>
          </div>
          <div className="mt-4">
            <p className="text-center text-[#976460]">
              Não tem uma conta?
              <button
                className="text-[#976460] font-bold cursor-pointer pl-2"
                onClick={() => (window.location.href = "/cadastrar")}
              >
                Cadastre-se
              </button>
            </p>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
}
