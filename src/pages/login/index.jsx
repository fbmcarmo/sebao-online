import PageWrapper from "@/components/PageWrapper";

export default function Login() {
  return (
    <PageWrapper>
    <div className="w-full h-[80vh] flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center text-[#884211]">
          Login:
        </h2>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          placeholder="Email cadastrado"
          required
        />
        <label className="block text-sm font-medium text-gray-700">Senha</label>
        <input
          type="password"
          placeholder="******"
          className="w-full p-2 border rounded focus:outline-nome focus:ring-2 focus:ring-[#884211]"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#884211] text-white p-2 rounded houver:bg-[#6f350f] transition"
        >
          Logar
        </button>
      </form>
    </div>
    </PageWrapper>
  );
}
