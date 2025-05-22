import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { toast } from 'react-toastify';

export default function Login() {

  const [user, setUser] = useState(""); 
  const [pass, setPass] = useState(""); 

  function clickLogin(event){

    event.preventDefault()
    
    if(!user || !pass){
      return toast.error("Preencha todos os campos");
    }

    if(user.length < 8 || pass.length < 8){
      return toast.error("Usuário ou senha inválidos");
    }

      console.log(user);
      console.log(pass);
      return toast.success("Login realizado com sucesso");
  }

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
          <label htmlFor="user" className="block text-sm font-bold text-gray-700">
            E-mail
          </label>
          <input
            onChange={
              (event) => {setUser(event.target.value)}
            }
            type="email"
            id="user"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#884211]"
            placeholder="seu@email.com"
            required
          />
          <label htmlFor="pass" className="block text-sm font-bold text-gray-700">Senha</label>
          <input
            onChange={
              (event) => {setPass(event.target.value)}
            }
            type="password"
            id="pass"
            placeholder="******"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#884211]"
            required
          />
          <div className="mt-6">
            <button
              onClick={clickLogin}
              type="submit"
              className="w-full bg-[#884211] text-white p-2 rounded hover:bg-[#6f350f] transition cursor-pointer"
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
