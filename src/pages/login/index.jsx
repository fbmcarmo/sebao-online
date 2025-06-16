import PageWrapper from "@/components/PageWrapper";
import { FaBookReader } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import instance from "@/api/instance";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [senhaFocada, setSenhaFocada] = useState(false);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token){
      window.location.href = '/'
    }
  }, [])

  async function clickLogin(event) {
    event.preventDefault();

    if (!email && !pass) {
      toast.error("Preencha todos os campos");
      return;
    }

    if (!email) {
      return toast.error("Preencha o campo de e-mail");
    }

    if (!pass) {
      return toast.error("Preencha o campo de senha");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return toast.error("E-mail inválido");
    }

    if (pass.length < 8) {
      return toast.error("Senha curta (igual ou superor a 8 digitos");
    }

    if (pass.length > 8) {
      return toast.error("A senha deve conter no máximo 8 caracteres");
    }

    try {
      const response = await instance.post('/login', {
        email: email,
        password: pass
      })

    await localStorage.setItem('token', response.data.token)

    toast.success("Login realizado com sucesso")
    window.location.href = '/'
    } catch (error) {
      console.log("Erro ao fazer login:", error)
      toast.error("Erro ao fazer login")
    }
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
              onChange={(event) => {
                setEmail(event.target.value);
              }}
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
                onChange={(event) => {
                  setPass(event.target.value);
                }}
                onFocus={() => setSenhaFocada(true)}
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
                className="text-xs text-[#884211] font-semibold mt-1 ml-auto hover:underline cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                Esqueceu a senha?
              </button>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              onClick={clickLogin}
              className="w-full bg-[#884211] text-white p-2 rounded hover:bg-[#6f350f] transition font-bold cursor-pointer"
            >
              Entrar
            </button>
          </div>
          <div className="mt-4">
            <p className="text-center text-[#884211] text-sm">
              Não tem uma conta?
              <button
                className="text-[#884211] font-bold cursor-pointer pl-2 hover:underline"
                type="button"
                onClick={() => (window.location.href = "/cadastrar")}
              >
                Cadastre-se
              </button>
            </p>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-4 rounded w-72 shadow relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl text-gray-500"
            ></button>
            <h2 className="text-center text-[#884211] font-semibold mb-3">
              Recupera senha
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                className="w-full border rounded p-2 mb-3 text-sm"
              />
            </h2>
            <button
              onClick={() => {
                if (!recoveryEmail) return toast.error("Digite seu e-mail");
                if (!/\S+@\S+\.\S+/.test(recoveryEmail))
                  return toast.error("e-mail inválido");
                toast.success("E-mail de recuperação enviado");
                setShowModal(false);
              }}
              className="w-full bg-[#884211] text-white rounded p-2 text-sm hover:bg-[#6f358f]"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
