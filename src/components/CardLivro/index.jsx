import { FaShoppingCart } from "react-icons/fa";

export default function CardLivro({ banner, titulo, estado, autor, preco, categoria }) {
  return (
    <div className="w-[310px] h-[640px] flex flex-col rounded-lg bg-white cursor-pointer
      border border-transparent hover:border-[#8F7BD8] transition-all duration-300 ease-in-out overflow-hidden">
      <div className="w-full h-[400px] rounded-t-lg relative">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={banner}
          alt={titulo}
        />
        <div
          style={{
            backgroundColor:
              estado === "Bom" ? "#3CE64AFF" :
              estado === "Muito bom" ? "#CCCCCC" :
              estado === "Aceitável" ? "#E0142CFF" :
              "#EB6D13FF",
          }}
          className="absolute top-2 left-2 px-2 py-0.5 rounded-xl"
        >
          <p
            style={{
              color:
                estado === "Bom" ? "#06380AFF" :
                estado === "Muito bom" ? "#3C3B3BFF" :
                estado === "Aceitável" ? "#BD878EFF" :
                "#9F4A0DFF",
            }}
            className="text-sm font-semibold"
          >
            {estado}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-between px-4 py-3 gap-2">
        <div>
          <p className="text-base text-[20px] font-bold line-clamp-2">{titulo}</p>
          <p className="text-sm text-[#8a898c] text-[20px]">{autor}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#8a898c] text-[20px] font-bold">{preco}</p>
          <span className="px-2 py-0.5 bg-[#8F7BD8]/10 text-[#8F7BD8] text-xs text-[20px] rounded-lg">
            {categoria}
          </span>
        </div>
      </div>
      <div className="px-4 pb-4">
        <button
          className="w-full flex items-center justify-center gap-2 cursor-pointer
           text-white text-sm font-medium bg-[#955527] py-3 rounded-xl 
          hover:bg-[#7a431e] transition-colors duration-300"
          onClick={() => window.location.href = "/carrinho"}>
            <FaShoppingCart color="white" size={20} />
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}