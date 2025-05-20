'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import livros from '@/data/livros';
import CardLivro from '@/components/CardLivro';
import PageWrapper from '@/components/PageWrapper';
import { useEffect, useState } from 'react';

export default function Livros() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const q = searchParams.get('q')?.toLowerCase() || '';
    setTermo(q);

    const filtrados = livros.filter((livro) =>
        livro.titulo.toLowerCase().includes(q) ||
        livro.autor.toLowerCase().includes(q) ||
        livro.categoria.toLowerCase().includes(q)
    );

    setResultados(filtrados);
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termo.trim()) {
      router.push(`/livros?q=${encodeURIComponent(termo.trim())}`);
    }
  };

  return (
    <PageWrapper>
      <section className="p-8 bg-[#F8F7E8] min-h-screen">
        <div className="w-full h-full flex items-center mb-4">
            <h1 className="text-[40px] font-bold text-[#3E2723]">Procure livros</h1>
        </div>
        <form onSubmit={handleSubmit} className="mb-8">
          <input
            type="text"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            placeholder="Busque por título, autor ou categoria..."
            className="w-full md:w-1/2 p-3 rounded-lg border bg-white border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />
          <button
            type="submit"
            className="mt-2 md:mt-0 md:ml-4 px-5 py-3 bg-[#8B4513]
             text-white rounded-lg hover:bg-[#A0522D] transition cursor-pointer"
          >
            Buscar
          </button>
        </form>
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#8B4513]">
                Resultados para: "{termo}"
            </h2>
            <p className="text-[#555555] text-sm mt-1 text-[20px]">
                {resultados.length} {resultados.length === 1 ? 'livro encontrado' : 'livros encontrados'}
            </p>
        </div>
        {resultados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {resultados.map((livro) => (
              <CardLivro key={livro.id} {...livro} />
            ))}
          </div>
        ) : (
          <p className="text-[#555555]">Nenhum livro encontrado.</p>
        )}
      </section>
    </PageWrapper>
  );
}

