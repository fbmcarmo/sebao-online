import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import instance from '@/api/instance';
import { toast } from 'react-toastify';
import PageWrapper from '@/components/PageWrapper';

export default function Perfil() {
  const [usuario, setUsuario] = useState({ nome: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [novoNome, setNovoNome] = useState('');
  const [novoEmail, setNovoEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (!token || !userId) {
      toast.error('Faça login para acessar seu perfil');
      router.push('/login');
      return;
    }

    async function getUserById() {
      try {
        const response = await instance.get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsuario(response.data);
        setNovoNome(response.data.name);
        setNovoEmail(response.data.email);
        setLoading(false);
      } catch (error) {
        toast.error('Erro ao carregar perfil');
        console.error(error);
        router.push('/login');
      }
    }

    getUserById();
  }, []);

  const handleAtualizar = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
      await instance.put(
        `/users/${userId}`,
        { nome: novoNome, email: novoEmail },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Perfil atualizado com sucesso!');
      setUsuario({ ...usuario, nome: novoNome, email: novoEmail });
      localStorage.setItem('usuario', novoNome);
    } catch (error) {
      toast.error('Erro ao atualizar perfil');
      console.error(error);
    }
  };

  const handleDeletar = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
      await instance.delete(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Conta excluída com sucesso!');
      localStorage.clear();
      router.push('/');
    } catch (error) {
      toast.error('Erro ao excluir conta');
      console.error(error);
    }
  };

  const confirmarExclusao = () => {
    toast.info(
      ({ closeToast }) => (
        <div>
          <p>Tem certeza que deseja excluir sua conta?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => {
                handleDeletar();
                closeToast();
              }}
              className="bg-red-600 text-white px-2 py-1 rounded"
            >
              Sim
            </button>
            <button
              onClick={() => closeToast()}
              className="bg-gray-400 text-white px-2 py-1 rounded"
            >
              Não
            </button>
          </div>
        </div>
      ),
      { autoClose: false }
    );
  };

  return (
    <PageWrapper>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full p-6 bg-white rounded shadow">
          <h1 className="text-2xl font-bold mb-4 text-[#8B4513]">Meu Perfil</h1>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Nome:</label>
            <input
              type="text"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Email:</label>
            <input
              type="email"
              value={novoEmail}
              onChange={(e) => setNovoEmail(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <button
            onClick={handleAtualizar}
            className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#A0522D] mr-2"
          >
            Atualizar Perfil
          </button>

          <button
            onClick={confirmarExclusao}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Excluir Conta
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
