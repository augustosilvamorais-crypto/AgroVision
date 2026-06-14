export default function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative bg-black overflow-hidden">

      {/* Fundo */}
      <div className="absolute inset-0 bg-[url('/farm.jpg')] bg-cover bg-center opacity-60"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Caixa */}
      <div className="relative z-10 backdrop-blur-xl bg-white/10 p-10 rounded-2xl border border-white/20 w-[360px]">

        <h1 className="text-3xl text-center text-white font-bold mb-6">
          AgroVision
        </h1>

        <input
          placeholder="Email"
          className="w-full p-2 mb-3 rounded bg-black/40 text-white border border-white/20"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 mb-5 rounded bg-black/40 text-white border border-white/20"
        />

        <button className="w-full p-2 bg-green-400 hover:bg-green-300 text-black font-bold rounded">
          Entrar
        </button>

      </div>
    </div>
  );
}
