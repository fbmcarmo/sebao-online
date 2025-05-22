import PageWrapper from "@/components/PageWrapper";
import { FaBookReader } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageWrapper showHeader={false} showFooter={false} showLogo={true}>
      <div className="w-full min-h-screen flex items-center justify-center px-2 py-8 sm:py-0 bg-[#f8f7f3]">
        <form
          className="bg-white p-6 sm:p-8 rounded-xl flex flex-col gap-3 shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md mt-10 md:mt-20"
          autoComplete="on"
        >
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <FaBookReader className="text-[#884211]" size={36} />
            <h1 className="text-2xl font-bold text-center text-[#884211]">
              Entrar no Sebão Online
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#884211] text-sm"
              placeholder="seu@email.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="block text-sm font-bold text-gray-700"
              htmlFor="senha"
            >
              Senha
            </label>
            <div className="relative flex items-center">
              <input
                id="senha"
                type={showPassword ? "text" : "password"}
                placeholder="******"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#884211] text-sm pr-10"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-[#884211] font-bold"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="flex">
              <button
                type="button"
                className="text-xs text-[#884211] font-semibold mt-1 ml-auto hover:underline"
                onClick={() => (window.location.href = "/esqueci-senha")}
              >
                Esqueci a senha
              </button>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-[#884211] text-white p-2 rounded hover:bg-[#6f350f] transition font-bold"
            >
              Entrar
            </button>
          </div>
          <div className="mt-4">
            <p className="text-center text-[#976460] text-sm">
              Não tem uma conta?
              <button
                className="text-[#976460] font-bold cursor-pointer pl-2 hover:underline"
                type="button"
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
