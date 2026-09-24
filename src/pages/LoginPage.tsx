import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/UseAuth'
import { Eye, EyeOff, Lock, Mail, Store, Loader2, ShieldCheck } from 'lucide-react'
import { toast } from 'sonner'

export function LoginPage() {
  const navigate = useNavigate()
  const { signIn, user, loading } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (loading) {
    return (
      <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-[#f2e9d9] z-50">
        <div className="h-9 w-9 border-3 border-[#b45309] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-xs font-bold uppercase tracking-widest text-[#51433a]/70 select-none">
          Verificando credenciais...
        </p>
      </div>
    )
  }

  if (user) {
    navigate('/dashboard')
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    if (password.length < 6) {
      toast.error('Senha deve ter 6 caracteres ou mais')
      return
    }

    setIsLoading(true)

    try {
      await signIn({
        email,
        password,
      })
      toast.success('Login realizado com sucesso!')
      navigate('/dashboard')
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Erro ao realizar login')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#f2e9d9] p-4 sm:p-6 overflow-x-hidden select-none">

      {/* Card Principal */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#f2e9d9]/85 backdrop-blur-xl p-7 sm:p-8 rounded-4xl shadow-2xl shadow-[#51433a]/15 border border-white/60">
        
        {/* Cabeçalho de Boas-vindas */}
        <div className="mb-6">
          <span className="text-3xl sm:text-3xl font-extrabold text-[#51433a] leading-tight">
            Fico feliz em vê-lo novamente! 😊👋
          </span>
          <p className="text-[#51433a]/70 mt-1.5 text-sm font-medium">
            Faça login para salvar seus lugares favoritos.
          </p>
        </div>

        {/* Formulário Principal */}
        <form onSubmit={handleLogin} className="space-y-4">
          
          {/* Input Email */}
          <div className="relative flex items-center">
            <Mail className="absolute left-4 text-[#51433a]/50 h-5 w-5 pointer-events-none" />
            <input 
              type="email"
              required
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3.5 pl-11 pr-4 bg-white/75 text-[#51433a] placeholder:text-[#51433a]/45 rounded-2xl border border-[#51433a]/10 outline-none text-sm font-medium focus:bg-white focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/15 transition-all"
            />
          </div>

          {/* Input Senha */}
          <div className="relative flex items-center">
            <Lock className="absolute left-4 text-[#51433a]/50 h-5 w-5 pointer-events-none" />
            <input 
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3.5 pl-11 pr-11 bg-white/75 text-[#51433a] placeholder:text-[#51433a]/45 rounded-2xl border border-[#51433a]/10 outline-none text-sm font-medium focus:bg-white focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/15 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-[#51433a]/50 hover:text-[#51433a] p-1 transition-colors"
              aria-label={showPassword ? 'Ocultar senha' : 'Exibir senha'}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          {/* Botão de Entrar */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#b45309] hover:bg-[#92400e] text-[#f2e9d9] py-3.5 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-[#b45309]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:pointer-events-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Autenticando...</span>
              </>
            ) : (
              'Acessar Centro'
            )}
          </button>

          {/* Divisor - Cadastro */}
          <div className="relative flex items-center pt-2">
            <div className="flex-1 border-t border-[#51433a]/15" />
            <span className="px-2 text-[10px] font-black uppercase tracking-wider text-[#51433a]/80 text-center">
              É novo por aqui? 🧐 Cadastre-se agora! 😊
            </span>
            <div className="flex-1 border-t border-[#51433a]/15" />
          </div>

          {/* Botão de Cadastro (Placeholder) */}
          <button 
            type="button"
            onClick={() => toast("🚧 Funcionalidade em desenvolvimento")}
            className="w-full bg-[#b45309] hover:bg-[#92400e] text-[#f2e9d9] py-3 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md shadow-[#b45309]/20 active:scale-[0.98] transition-all cursor-pointer"
          >
            Cadastre-se!
          </button>

          {/* Divisor - Alternativo */}
          <div className="relative flex items-center pt-1">
            <div className="flex-1 border-t border-[#51433a]/15" />
            <span className="px-3 text-[10px] font-black uppercase tracking-widest text-[#51433a]/60">
              ou
            </span>
            <div className="flex-1 border-t border-[#51433a]/15" />
          </div>

          {/* Botão Comerciante */}
          <button 
            type="button"
            onClick={() => navigate('/comerciante')}
            className="w-full bg-[#51433a] hover:bg-[#3d322d] text-[#f2e9d9] py-3.5 rounded-2xl font-bold text-sm shadow-md shadow-[#51433a]/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Store className="h-4 w-4" />
            <span>Entrar como Comerciante</span>
          </button>
        </form>
      </div>

      {/* Selo inferior */}
      <div className="relative z-10 mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#51433a]/70">
        <ShieldCheck className="h-4 w-4 text-[#b45309]" />
        <span>Ambiente seguro</span>
      </div>
    </div>
  )
}