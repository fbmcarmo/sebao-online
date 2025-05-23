import PageWrapper from "@/components/PageWrapper";
import livraria from "/public/livraria.jpg";
import bruno from "/public/Bruno.jpg";
import davi from "/public/davi.jpg";
import jardheson from "/public/jardheson.jpg";
import alan from "/public/alan.jpg";
import michele from "/public/michele.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const fotos = [
  { src: bruno.src, nome: "Bruno Moreira", cargo: "Líder técnico" },
  { src: davi.src, nome: "Davi Ribeiro", cargo: "Fundador" },
  {
    src: jardheson.src,
    nome: "Jardheson Fonseca",
    cargo: "Gerente de remessa",
  },
  { src: michele.src, nome: "Michele Araújo", cargo: "Relações com o Cliente" },
  { src: alan.src, nome: "Alan Cruz", cargo: "Especialista em livros" },
];

export default function Sobre() {
  return (
    <PageWrapper>
      <section className="w-full h-full flex">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 md:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#3E2723] font-bold text-center">
              Sobre o Sebão Online
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#6C6460] text-center mt-2">
              Sua fonte confiável de livros usados de qualidade a preços
              acessíveis
            </p>
          </div>
          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-1/2 h-full flex flex-col p-4 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#8B4513] font-bold">
                Nossa história
              </h2>
              <div className="mt-4 space-y-2">
                <p className="text-base sm:text-lg md:text-xl text-[#2A0A09]">
                  O Sebão Online foi fundado em 2025 por um grupo de apaixonados
                  por livros que acreditam que a boa literatura deve ser
                  acessível a todos.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#2A0A09]">
                  O que começou como uma pequena loja de esquina cresceu e se
                  tornou uma adorada livraria comunitária, com uma seleção
                  criteriosa de milhares de títulos.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#2A0A09]">
                  Acreditamos na magia dos livros físicos e na importância de
                  dar-lhes uma segunda vida. Cada livro em nosso estoque foi
                  cuidadosamente inspecionado para garantir que atenda aos
                  nossos padrões de qualidade.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#2A0A09]">
                  Ao escolher livros usados, você não só economiza dinheiro,
                  como também faz uma escolha ecologicamente consciente. Nossa
                  missão é conectar leitores com livros que eles apreciarão,
                  promover a alfabetização em nossa comunidade e criar um espaço
                  acolhedor para todos os apaixonados por livros.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-4">
              <img
                src={livraria.src}
                alt="dentro da nossa livraria"
                className="w-full max-w-lg rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full flex">
        <div className="w-full h-full flex flex-wrap items-center justify-center bg-[#F8F7E8] gap-6 p-4 sm:p-8 md:p-12">
          <div className="w-full flex items-center justify-center mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#8B4513] font-bold">
              O que nos diferencia
            </h1>
          </div>
          <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-6">
            <div className="w-full md:w-1/3 flex flex-col justify-start bg-white rounded-md p-6 sm:p-8 shadow flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl text-[#0C0A09] font-bold mb-2">
                Inventário cuidadosamente selecionado
              </h1>
              <p className="text-sm sm:text-base md:text-lg">
                Cada livro é cuidadosamente selecionado e inspecionado para
                garantir a qualidade. Vendemos apenas livros em bom estado ou
                superiores.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-start bg-white rounded-md p-6 sm:p-8 shadow flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl text-[#0C0A09] font-bold mb-2">
                Equipe experiente
              </h1>
              <p className="text-sm sm:text-base md:text-lg">
                Nossa equipe é formada por leitores ávidos, apaixonados por
                livros e que podem fornecer recomendações personalizadas.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-start bg-white rounded-md p-6 sm:p-8 shadow flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl text-[#0C0A09] font-bold mb-2">
                Foco na Comunidade
              </h1>
              <p className="text-sm sm:text-base md:text-lg">
                Organizamos regularmente clubes do livro, eventos com autores e
                programas de alfabetização para interagir com nossa comunidade
                local.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full flex">
        <div className="w-full h-full flex flex-wrap items-center justify-center bg-[#FAF8F5] gap-6 p-4 sm:p-8 md:p-12">
          <div className="w-full flex items-center justify-center mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#8B4513] font-bold">
              Conheça nossa equipe
            </h1>
          </div>
          <div className="w-full flex flex-wrap items-center justify-center gap-8">
            {fotos.map((membro, index) => (
              <div
                key={index}
                className="w-60 flex flex-col items-center justify-center"
              >
                <h1 className="text-base sm:text-lg">Membro da equipe</h1>
                <img
                  src={membro.src}
                  alt={membro.nome}
                  className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-full"
                />
                <h2 className="text-lg sm:text-xl font-bold">{membro.nome}</h2>
                <p className="text-base sm:text-lg text-center">
                  {membro.cargo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-full flex p-4 sm:p-8 md:p-12 bg-white">
        <div className="w-full h-full flex flex-col lg:flex-row flex-wrap items-center justify-center bg-[#EFE6DE] gap-6 p-4 sm:p-8 md:p-12">
          <div className="w-full flex items-center justify-center mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#8B4513] font-bold">
              Visite nossa loja
            </h1>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
              <div className="w-full max-w-xl h-[250px] sm:h-[300px] md:h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.3604176636477!2d-38.512982125266895!3d-3.7326780962412194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74991204f2b1d%3A0x38e3b25bd5d38768!2sDigital%20College%20Fortaleza!5e1!3m2!1spt-BR!2sbr!4v1747689846786!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8">
              <div className="w-full flex flex-col items-start justify-center">
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker color="#8B4513" size={30} />
                  <h1 className="text-lg sm:text-xl font-bold">Localização</h1>
                </div>
                <p className="text-base sm:text-lg">
                  Av. Santos Dumont, 1510 - 1° andar - Aldeota, Fortaleza - CE,
                  Brasil, 60150-161
                </p>
              </div>
              <div className="w-full flex flex-col items-start justify-center mt-4">
                <div className="flex items-center gap-2">
                  <FaRegClock color="#8B4513" size={25} />
                  <h1 className="text-lg sm:text-xl font-bold">
                    Funcionamento
                  </h1>
                </div>
                <p className="text-base sm:text-lg">
                  Segunda - Sexta: 9:00 - 20:00
                </p>
                <p className="text-base sm:text-lg">Sábado: 10:00 - 18:00</p>
                <p className="text-base sm:text-lg">Domingo: 12:00 - 17:00</p>
              </div>
              <div className="w-full flex flex-col items-start justify-center mt-4">
                <div className="flex items-center gap-2">
                  <MdOutlineMail color="#8B4513" size={25} />
                  <h1 className="text-lg sm:text-xl font-bold">Contato</h1>
                </div>
                <p className="text-base sm:text-lg">
                  Email: contato@sebaoonline.com
                </p>
                <p className="text-base sm:text-lg">
                  Telefone: +55 (85) 99999-9999
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full flex">
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#FAF8F5] gap-6 p-4 sm:p-8 md:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0C0A09] font-bold text-center">
            Pronto para explorar?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#37416B] text-center">
            Navegue pela nossa coleção de livros usados e encontre sua próxima
            aventura literária.
          </p>
          <div className="w-full flex items-center justify-center">
            <button
              className="text-base sm:text-lg md:text-xl text-white bg-[#955527] px-6 py-3 
                        rounded-xl cursor-pointer hover:bg-[#7a431e] transition-colors duration-300"
              onClick={() => (window.location.href = "/livros")}
            >
              Navegue pelos livros
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
