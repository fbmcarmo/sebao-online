import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Mensagem enviada!");
  }

  return (
    <PageWrapper>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold font-serif text-neutral-800">Contate-nos</h1>
        <p className="text-gray-600 mt-2">
          Tem alguma dúvida ou precisa de ajuda? Estamos aqui para te ajudar!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-yellow-50 rounded-lg p-6 text-center shadow">
          <div className="flex justify-center mb-4 text-3xl text-yellow-600">
            <MdOutlineMail />
          </div>
          <h3 className="font-semibold mb-1">Envie-nos um email</h3>
          <p className="text-sm text-gray-700">
            Para consultas gerais e suporte ao cliente:
            <br />
            <span className="text-yellow-800 font-medium">info@livroamigo.com</span>
          </p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 text-center shadow">
          <div className="flex justify-center mb-4 text-3xl text-yellow-600">
            <PiPhoneCallFill />
          </div>
          <h3 className="font-semibold mb-1">Ligue para a gente</h3>
          <p className="text-sm text-gray-700">
            Segunda a sexta: 09h - 17h
            <br />
            <span className="text-yellow-800 font-medium">+55 85 4002-8922</span>
          </p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 text-center shadow">
          <div className="flex justify-center mb-4 text-3xl text-yellow-600">
            <IoLocationSharp />
          </div>
          <h3 className="font-semibold mb-1">Visite-nos</h3>
          <p className="text-sm text-gray-700">
            P. Sherman 42
            <br />
            Wallaby Way, Sydney
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white rounded-lg shadow p-8"
      >
        <h2 className="text-xl font-serif font-semibold text-center mb-6">
          Envie-nos uma mensagem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Seu nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              placeholder="Silvio Santos"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="gatinhodo@gmail.com"
              className="w-full border rounded p-2"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Assunto
          </label>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            {[
              "consulta geral",
              "status do pedido",
              "devoluções & reembolso",
              "outro",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="assunto"
                  value={item}
                  checked={form.assunto === item}
                  onChange={handleChange}
                  required
                />
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
            Sua mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            placeholder="Como posso te ajudar?"
            className="w-full border rounded p-2 min-h-[100px]"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-amber-800 hover:bg-amber-700 text-white px-6 py-2 rounded font-medium mx-auto block"
        >
          Enviar mensagem
        </button>
      </form>

    
    </PageWrapper>
  );
 
}
