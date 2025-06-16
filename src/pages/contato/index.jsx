import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import faq from "/public/faq-animate.svg";
import { toast } from "react-toastify";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [faqAberto, setFaqAberto] = useState(null);

  const faqs = [
    {
      pergunta: "Você compra livros usados?",
      resposta: "Sim! Estamos sempre buscando expandir nossa coleção. Visite nossa loja ou entre em contato conosco para obter mais informações sobre como vender seus livros",
    },
    {
      pergunta: "Quanto tempo demora o envio?",
      resposta: "O envio padrão normalmente leva de 3 a 5 dias úteis. Opções de envio expresso estão disponíveis na finalização da compra",
    },
    {
      pergunta: "Em que condições estão seus livros?",
      resposta: "Todos nossos livros são cuidadosamente inspecionados e classificados de acordo com sua condição: Bom, Muito bom, Moderado ou Aceitável",
    },
    {
      pergunta: "Qual é sua politica de devolução?",
      resposta: "Aceitamos devolução em até 30 dias após a compra. Os livros devem estar nas mesmas condições em que foram enviados",
    }
  ];

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Mensagem enviada!");
  }

  return (
    <PageWrapper>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold font-serif p-10 text-neutral-800">Contate-nos</h1>
        <p className="text-gray-600 ">
          Tem alguma dúvida ou precisa de ajuda? Estamos aqui para te ajudar!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-4 md:px-16">
        <div className="bg-yellow-50 rounded-lg p-6 text-center shadow">
          <div className="flex justify-center mb-4 text-3xl text-yellow-600">
            <MdOutlineMail />
          </div>
          <h3 className="font-semibold mb-1">Envie-nos um email</h3>
          <p className="text-sm text-gray-700">
            Para consultas gerais e suporte ao cliente:
            <br />
            <span className="text-yellow-800 font-medium">contato@sebaoonline.com</span>
          </p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-6 text-center shadow">
          <div className="flex justify-center mb-4 text-3xl text-yellow-600">
            <PiPhoneCallFill />
          </div>
          <h3 className="font-semibold mb-1">Ligue para a gente</h3>
          <p className="text-sm text-gray-700">
            Segunda a sexta: 09h - 20h
            <br />
            <span className="text-yellow-800 font-medium">+55 (85) 99999-9999</span>
          </p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-6 text-center shadow">
          <div className="flex justify-center mb-4 text-3xl text-yellow-600">
            <IoLocationSharp />
          </div>
          <h3 className="font-semibold mb-1">Visite-nos</h3>
          <p className="text-sm text-gray-700">
            Endereço: Av. Santos Dumont, 1510,
            <br />
            1° andar - Aldeota, Fortaleza - CE,
            Brasil, 60150-161
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white rounded-lg shadow p-8 "
      >
        <h2 className="text-xl font-serif font-semibold text-center">
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
              placeholder="Seu Nome"
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
              placeholder="seu@email.com"
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
            ]
            .map((item) => (
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
          className="bg-amber-800 hover:bg-amber-700 text-white px-6 py-2 rounded font-medium mx-auto block cursor-pointer"
        >
          Enviar mensagem
        </button>
      </form>
      <div className="bg-[#FAF8F5] max-w-4xl mx-auto px-4 mb-12">
        <img
              src={faq.src}
              alt="Animação de contato"
              className="mx-auto mt-6 w-60 h-auto animate-pulse"
            />
        <div className="mt-12 flex items-center justify-center flex-col">
          <h2 className="text-xl font-semibold text-center mb-4">Perguntas Frequentes</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 w-full max-w-md flex flex-col items-center">
              <button
                type="button"
                onClick={() => setFaqAberto(faqAberto === index ? null : index)}
                className="w-84 text-center bg-amber-800 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded"
              >
                {faq.pergunta}
              </button>
              {faqAberto === index && (
                <div className="mt-2 w-full bg-blue-50 text-gray-800 p-4 rounded shadow">
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>  
    </PageWrapper>
  );
}
