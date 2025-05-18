import PageWrapper from "@/components/PageWrapper"
import livraria from "/public/livraria.jpg"
import bruno from "/public/bruno.jpg"
import davi from "/public/davi.jpg"
import jardheson from "/public/jardheson.jpg"
import alan from "/public/alan.jpg"
import michele from "/public/michele.jpg"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { FaRegClock } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"

const fotos = [{ src: bruno.src, nome: 'Bruno Moreira', cargo: 'Líder técnico' },
                { src: davi.src, nome: 'Davi Ribeiro', cargo: 'Fundador' },
                { src: jardheson.src, nome: 'Jardheson Fonseca', cargo: 'Gerente de remessa' },
                { src: michele.src, nome: 'Michele Araújo', cargo: 'Relações com o Cliente' },
                { src: alan.src, nome: 'Alan Cruz', cargo: 'Especialista em livros' }]

export default function Sobre(){
    return (
        <PageWrapper>
            <section className="w-full h-full flex">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="w-full h-full flex flex-col items-center justify-center p-10">
                        <h1 className="text-[50px] text-[#3E2723] font-bold">Sobre o Sebão Online</h1>
                        <p className="text-[20px] text-[#6C6460]">Sua fonte confiável de livros usados de 
                            qualidade a preços acessíveis
                        </p>
                    </div>
                    <div className="w-full h-full flex items-center">
                        <div className="w-[50%] h-full flex flex-col p-16">
                            <h2 className="text-[35px] text-[#8B4513] font-bold">Nossa história</h2>
                            <>
                                <p className="text-[20px] text-[#2A0A09]">
                                    O Sebão Online foi 
                                    fundado em 2025 por um grupo de apaixonados por livros que 
                                    acreditam que a boa literatura deve ser acessível a todos.
                                </p>
                                <p className="text-[20px] text-[#2A0A09] mt-2">
                                    O que começou como uma pequena 
                                    loja de esquina cresceu e se tornou uma adorada livraria comunitária, com uma seleção criteriosa
                                    de milhares de títulos.
                                </p> 
                                <p className="text-[20px] text-[#2A0A09] mt-2">
                                    Acreditamos na magia dos livros físicos e na importância de dar-lhes uma 
                                    segunda vida. Cada livro em nosso estoque foi cuidadosamente inspecionado para garantir que atenda 
                                    aos nossos padrões de qualidade.
                                </p> 
                                <p className="text-[20px] text-[#2A0A09] mt-2">
                                    Ao escolher livros usados, você não só economiza dinheiro, como 
                                    também faz uma escolha ecologicamente consciente. Nossa missão é conectar leitores com livros
                                    que eles apreciarão, promover a alfabetização em nossa comunidade e criar um espaço acolhedor
                                    para todos os apaixonados por livros.
                                </p>
                            </>
                        </div>
                        <div className="w-[50%] h-full flex items-center justify-center">
                            <img src={livraria.src} width={600} alt="dentro da nossa livraria" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full flex">
                <div className="w-full h-full flex flex-wrap items-center justify-center bg-[#F8F7E8] gap-6 p-6">
                    <div className="w-full h-full flex items-center justify-center">
                        <h1 className="text-[30px] text-[#8B4513] font-bold">O que nos diferencia</h1>
                    </div>
                    <div className="w-full h-full flex items-center justify-center gap-6">
                        <div className="w-[800px] h-[200px] flex flex-col justify-center bg-white rounded-md p-10">
                            <h1 className="text-[20px] text-[#0C0A09] font-bold mb-2">Inventário cuidadosamente selecionado</h1>
                            <p className="text-[15px]">Cada livro é cuidadosamente selecionado e inspecionado para 
                                garantir a qualidade. Vendemos apenas livros em bom estado ou superiores.
                            </p>
                        </div>
                        <div className="w-[800px] h-[200px] flex flex-col justify-center bg-white rounded-md p-10">
                            <h1 className="text-[20px] text-[#0C0A09] font-bold mb-2">Equipe experiente</h1>
                            <p className="text-[15px]">Nossa equipe é formada por leitores ávidos, apaixonados por livros e que 
                                podem fornecer recomendações personalizadas.
                            </p>
                        </div>
                        <div className="w-[800px] h-[200px] flex flex-col justify-center bg-white rounded-md p-10">
                            <h1 className="text-[20px] text-[#0C0A09] font-bold mb-2">Foco na Comunidade</h1>
                            <p className="text-[15px]">Organizamos regularmente clubes do livro, eventos com autores e 
                                programas de alfabetização para interagir com nossa comunidade local.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full flex">
                <div className="w-full h-full flex flex-wrap items-center justify-center bg-[#FAF8F5] gap-6 p-14">
                    <div className="w-full h-[30%] flex items-center justify-center">
                        <h1 className="text-[30px] text-[#8B4513] font-bold">Conheça nossa equipe</h1>
                    </div>
                    <div className="w-full h-[70%] flex flex-wrap items-center justify-center gap-10">
                    {fotos.map((membro, index) => (
                    <div key={index} className="w-60 flex flex-col items-center justify-center">
                        <h1 className="text-[20px]">Membro da equipe</h1>
                        <img
                            src={membro.src}
                            alt={membro.nome}
                            className="w-60 h-60 object-cover rounded-full"
                        />
                        <h2 className="text-[20px] font-bold">{membro.nome}</h2>
                        <p className="text-[20px] text-center">{membro.cargo}</p>
                    </div>
                ))}
                </div>
            </div>
            </section>
            <section className="w-full h-full flex p-10 bg-white">
                <div className="w-full h-full flex flex-wrap items-center justify-center bg-[#EFE6DE] gap-6 p-14">
                    <div className="w-full h-[30%] flex items-center justify-center">
                        <h1 className="text-[30px] text-[#8B4513] font-bold">Visite nossa loja</h1>
                    </div>
                    <div className="w-full h-[70%] flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-[50%] flex items-center justify-center">
                            <div className="w-[800px] h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15927.023353536233!2d-38.491012599999996!3d-3.7357129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74889fb9f1c69%3A0x1285fa3d4c8bb63d!2sDigital%20College%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1715956019051!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center p-14">
                            <div className="w-full h-full flex flex-col items-start justify-center">
                                <div className="flex items-center gap-2">
                                    <HiOutlineLocationMarker color="#8B4513" size={30} />
                                    <h1 className="text-[20px] font-bold">Localização</h1>
                                </div>
                                <p className="text-[20px]">Av. Santos Dumont, 1510 - 1° andar - Aldeota, Fortaleza - CE, Brasil, 60150-161</p>
                            </div>
                            <div className="w-full h-full flex flex-col items-start justify-center mt-4">
                                <div className="flex items-center gap-2">
                                    <FaRegClock color="#8B4513" size={25} />
                                    <h1 className="text-[20px] font-bold">Funcionamento</h1>
                                </div>
                                <>
                                    <p className="text-[20px]">Segunda - Sexta: 9:00 - 20:00</p>
                                    <p className="text-[20px]">Sábado: 10:00 - 18:00</p>
                                    <p className="text-[20px]">Domingo: 12:00 - 17:00</p>
                                </>
                            </div>
                            <div className="w-full h-full flex flex-col items-start justify-center mt-4">
                                <div className="flex items-center gap-2">
                                    <MdOutlineMail color="#8B4513" size={25} />
                                    <h1 className="text-[20px] font-bold">Contato</h1>
                                </div>
                                <>
                                    <p className="text-[20px]">Email: contato@sebaoonline.com</p>
                                    <p className="text-[20px]">Telefone: +55 (85) 99999-9999</p>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full flex">
                <div className="w-full h-full flex flex-wrap items-center justify-center bg-[#FAF8F5] gap-6 p-14">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <h1 className="text-[30px] text-[#0C0A09] font-bold">Pronto para explorar?</h1>
                        <p className="text-[20px] text-[#37416B]">Navegue pela nossa coleção de livros usados e 
                            encontre sua próxima aventura literária.
                        </p>
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        <button className="text-[20px] text-white bg-[#955527] px-6 py-3 
                        rounded-xl cursor-pointer hover:bg-[#7a431e] transition-colors duration-300"
                        onClick={() => window.location.href = "/livros"}>
                            Navegue pelos livros
                        </button>
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}