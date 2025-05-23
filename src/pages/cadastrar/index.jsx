import PageWrapper from "@/components/PageWrapper";
import { FaBookReader, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from 'react-toastify';

export default function Cadastrar() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [senhaFocada, setSenhaFocada] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function clickLogin(event) {
    event.preventDefault();

    if (!nome || !email || !pass || !confirmPass) {
      return toast.error("Preencha todos os campos");
    }

    if (email.length < 8 || pass.length < 8) {
      return toast.error("E-mail ou senha inválidos");
    }

    if (pass.length > 8) {
      return toast.error("A senha deve conter no máximo 8 caracteres");
    }

    if (pass !== confirmPass) {
      return toast.error("As senhas não coincidem");
    }

    toast.success("Cadastro realizado com sucesso");
    console.log({ nome, email, pass });
  }

  return (
    <PageWrapper showHeader={false} showFooter={false} showLogo={true}>
      <div className="w-full min-h-screen flex items-center justify-center px-2 py-8 sm:py-0 bg-[#f8f7f3]">
        <div className="flex flex-wrap gap-8 justify-center items-center w-full">
          <form
            onSubmit={clickLogin}
            className="bg-white p-4 sm:p-6 rounded flex flex-col gap-2 shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md"
          >
            <h1 className="text-lg sm:text-xl font-bold mb-4 text-center text-[#884211]">
              Crie sua conta
            </h1>

            <label className="block text-sm font-bold text-gray-700">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#884211] text-sm"
              placeholder="Nome"
              required
              autoComplete="name"
            />

            <label className="block text-sm font-bold text-gray-700">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#884211] text-sm"
              placeholder="seu@email.com"
              required
              autoComplete="email"
            />

            <label className="block text-sm font-bold text-gray-700">Senha</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={pass}
                onFocus={() => setSenhaFocada(true)}
                onChange={(e) => setPass(e.target.value)}
                placeholder="******"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#884211] text-sm pr-10"
                required
                autoComplete="new-password"
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
            {senhaFocada && (
              <small className="text-xs text-gray-500 mt-1">
                A senha deve conter até 8 caracteres
              </small>
            )}

            <label className="block text-sm font-bold text-gray-700">
              Confirme sua Senha
            </label>
            <div className="relative flex items-center">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                placeholder="******"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#884211] text-sm pr-10"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-[#884211] font-bold"
                onClick={() => setShowConfirm((v) => !v)}
                tabIndex={-1}
                aria-label={showConfirm ? "Ocultar senha" : "Mostrar senha"}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="termos"
                required
                className="accent-[#884211]"
              />
              <label htmlFor="termos" className="text-xs text-gray-700">
                Aceito os{" "}
                <a
                  href="/termos"
                  className="underline text-[#884211] hover:text-[#6f350f]"
                >
                  Termos de Uso
                </a>
              </label>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#884211] text-white p-2 rounded hover:bg-[#6f350f] transition font-bold cursor-pointer"
              >
                Cadastrar
              </button>
            </div>

            <div className="mt-4">
              <p className="text-center text-[#976460] text-sm">
                Já tem uma conta?
                <button
                  className="text-[#976460] font-bold cursor-pointer pl-2 hover:underline"
                  type="button"
                  onClick={() => (window.location.href = "/login")}
                >
                  Entre
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}