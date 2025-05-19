'use client';

import { useSearchParams } from 'next/navigation';
import livros from '@/data/livros';
import CardLivro from '@/components/CardLivro';
import PageWrapper from '@/components/PageWrapper';
import { useEffect, useState } from 'react';

export default function Procurar() {
  const searchParams = useSearchParams();
  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const q = searchParams.get('q')?.toLowerCase() || '';
    setTermo(q);

    const filtrados = livros.filter((livro) =>
      livro.titulo.toLowerCase().includes(q)
    );

    setResultados(filtrados);
  }, [searchParams]);

  return (
    <PageWrapper>
        <section className="p-8 bg-[#F8F7E8] min-h-screen">
        <h2 className="text-2xl font-bold text-[#8B4513] mb-6">
            Resultados para: "{termo}"
        </h2>
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