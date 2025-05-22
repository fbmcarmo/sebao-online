import PageWrapper from "@/components/PageWrapper";
import { FaBookReader } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { toast } from 'react-toastify';

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const [senhaFocada, setSenhaFocada] = useState(false);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState(""); 

  function clickLogin(event){

    event.preventDefault();

    if(!email || !pass){
      return toast.error("Preencha todos os campos");
    }

    if(email.length < 8 || pass.length < 8){
      return toast.error("Usuário ou senha inválidos");
    }

    if (pass.length > 8) {
    return toast.error("A senha deve conter no máximo 8 caracteres");
    }

      console.log(email);
      console.log(pass);
      return toast.success("Login realizado com sucesso");
  }

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
              onChange={
                (event) => {setEmail(event.target.value)}
              }
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
                onChange={
                  (event) => {setPass(event.target.value)}
                }
                onFocus={
                  () => setSenhaFocada(true)
                }
                id="senha"
                type={showPassword ? "text" : "password"}
                placeholder="********"
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
            {senhaFocada && (
            <small className="text-xs text-gray-500 mt-1">
              A senha deve conter até 8 caracteres
            </small>
            )}
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
              onClick={clickLogin}
              className="w-full bg-[#884211] text-white p-2 rounded hover:bg-[#6f350f] transition font-bold"
            >
              Entrar
            </button>
            <div className="w-full flex items-center justify-center text-black pt-4">
            <a href="/recuperar-senha" className="text-sm text-[#884211] hover:underline">
              Esqueceu a senha?
            </a>
            </div>
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
