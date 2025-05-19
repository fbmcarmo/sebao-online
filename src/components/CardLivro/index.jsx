export default function CardLivro( {banner, titulo, estado, autor, preco, categoria} ){
    return (
        <div className="w-[310px] h-[640px] flex flex-col rounded-lg bg-white relative 
         cursor-pointer border border-transparent hover:border hover:border-[#8F7BD8] transition-all duration-300 ease-in-out">
            <div className="w-full h-[70%] rounded-t-lg relative">
                <img 
                    className="w-full min-h-[400px] rounded-t-lg object-cover"
                    src={banner}
                    alt={titulo}  
                />
                <div
                    style={{
                        
                        backgroundColor: estado === "Bom" ? "#3CE64AFF" : estado === "Muito bom" ? "#CCcccc" : 
                        estado === "Ruim" ? "#E0142CFF" : "#EB6D13FF"
                        
                    }}
                    className="absolute top-1 left-2 flex px-2 py-0 rounded-xl">
                    <p style={{
                        
                        color: estado === "Bom" ? "#06380AFF" : estado === "Muito bom" ? "#3C3B3BFF" : 
                        estado === "Ruim" ? "#BD878EFF" : "#9F4A0DFF"
                        
                    }} className="text-[17px] font-semibold">{estado}</p>
                </div>
            </div>
            <div className="w-full h-[30%] flex flex-col pt-0.5 px-4">
                <p className="text-[15px] font-bold">{titulo}</p>
                <p className="text-[15px] text-[#8a898c]">{autor}</p>
                <div className="w-full flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">{preco}</p>
                    <div className="px-1 py-0 bg-[#8F7BD8]/10 text-[#8F7BD8] rounded-lg">{categoria}</div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <button className="text-[20px] text-white bg-[#955527] px-6 py-3 absolute bottom-4
                rounded-xl cursor-pointer hover:bg-[#7a431e] transition-colors duration-300"
                onClick={() => window.location.href = "/carrinho"}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}