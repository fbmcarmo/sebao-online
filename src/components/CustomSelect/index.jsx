export default function CustomSelect({label, options, onChange, value}){
    return (
        <div className="w-full flex flex-col gap-2">
            <label className="text-[17px] font-bold">{label}</label>
            <select 
                value={value}
                onChange={onChange}
                className="w-full h-[45px] rounded-lg bg-[#141414] border border-[#ffffff1a]
                 focus:border-purple-400 outline-none px-2">
                <option value="">Selecione...</option>
                {options.map((opcao) => {
                    return (
                        <option 
                            key={opcao} 
                            value={opcao}
                        >{opcao}</option>
                    )
                })}
            </select>
        </div>
    )
}