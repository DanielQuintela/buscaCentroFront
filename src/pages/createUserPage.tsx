import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/UseAuth'
import { Eye, EyeOff, Lock, Mail, User, Loader2, ArrowLeft, ShieldCheck, Store } from 'lucide-react'
import { toast } from 'sonner'
import type { CreateUserFormData } from '../types/User.types'

export function CreateUserPage() {
  const navigate = useNavigate()
  const { signUp, loading } = useAuth()

  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const [formData, setFormData] = useState<CreateUserFormData>({
    name: '',
    email: '',
    password: '',
    role: 'USER',
    status: 'ACTIVE',
  })

  // Função genérica para atualizar os campos de texto do formulário
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Função específica para alternar o tipo de conta (Checkbox)
  function handleRoleToggle(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      role: e.target.checked ? 'MERCHANT' : 'USER'
    }))
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()

    if (formData.password.length < 6) {
      toast.error('A senha deve ter 6 caracteres ou mais')
      return
    }

    if (formData.password !== confirmPassword) {
      toast.error('As senhas não coincidem')
      return
    }

    setIsLoading(true)

    try {
      if (signUp) {
        await signUp({ 
          name: formData.name, 
          email: formData.email, 
          password: formData.password,
          role: formData.role,
          status: formData.status
        })
      } else {
        throw new Error('Função de registo não disponível')
      }
      
      toast.success('Conta criada com sucesso! 🎉')
      navigate('/dashboard')
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Erro ao criar conta. Tente novamente.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#f2e9d9] p-4 sm:p-6 overflow-hidden select-none">
      
      {/* Luzes orgânicas de fundo */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#b45309]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#51433a]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card Principal */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#f2e9d9]/85 backdrop-blur-xl p-7 sm:p-8 rounded-4xl shadow-2xl shadow-[#51433a]/15 border border-white/60">
        
        {/* Cabeçalho */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#51433a] leading-tight">
            Crie a sua conta 🚀
          </h2>
          <p className="text-[#51433a]/70 mt-1.5 text-sm font-medium">
            Preencha os dados abaixo para começar.
          </p>
        </div>

        {/* Formulário Principal */}
        <form onSubmit={handleRegister} className="space-y-4">
          
          {/* Input Nome */}
          <div className="relative flex items-center">
            <User className="absolute left-4 text-[#51433a]/50 h-5 w-5 pointer-events-none" />
            <input 
              type="text"
              name="name"
              required
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-3.5 pl-11 pr-4 bg-white/75 text-[#51433a] placeholder:text-[#51433a]/45 rounded-2xl border border-[#51433a]/10 outline-none text-sm font-medium focus:bg-white focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/15 transition-all"
            />
          </div>

          {/* Input Email */}
          <div className="relative flex items-center">
            <Mail className="absolute left-4 text-[#51433a]/50 h-5 w-5 pointer-events-none" />
            <input 
              type="email"
              name="email"
              required
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-3.5 pl-11 pr-4 bg-white/75 text-[#51433a] placeholder:text-[#51433a]/45 rounded-2xl border border-[#51433a]/10 outline-none text-sm font-medium focus:bg-white focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/15 transition-all"
            />
          </div>

          {/* Input Senha */}
          <div className="relative flex items-center">
            <Lock className="absolute left-4 text-[#51433a]/50 h-5 w-5 pointer-events-none" />
            <input 
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              placeholder="Crie uma senha"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-3.5 pl-11 pr-11 bg-white/75 text-[#51433a] placeholder:text-[#51433a]/45 rounded-2xl border border-[#51433a]/10 outline-none text-sm font-medium focus:bg-white focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/15 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-[#51433a]/50 hover:text-[#51433a] p-1 transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          {/* Input Confirmar Senha */}
          <div className="relative flex items-center">
            <Lock className="absolute left-4 text-[#51433a]/50 h-5 w-5 pointer-events-none" />
            <input 
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="Confirme a sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-3.5 pl-11 pr-4 bg-white/75 text-[#51433a] placeholder:text-[#51433a]/45 rounded-2xl border border-[#51433a]/10 outline-none text-sm font-medium focus:bg-white focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/15 transition-all"
            />
          </div>

          {/* Checkbox Tipo de Conta (Comerciante) */}
          <label className="relative flex items-center gap-3 p-3.5 bg-white/40 hover:bg-white/60 border border-[#51433a]/10 rounded-2xl cursor-pointer transition-all group">
            <input 
              type="checkbox"
              checked={formData.role === 'MERCHANT'}
              onChange={handleRoleToggle}
              className="w-5 h-5 rounded border-[#51433a]/30 text-[#b45309] focus:ring-[#b45309] focus:ring-2 accent-[#b45309] cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-[#51433a]/70 group-hover:text-[#b45309] transition-colors" />
              <span className="text-sm font-medium text-[#51433a]">Criar conta de Comerciante</span>
            </div>
          </label>

          {/* Botão de Cadastrar */}
          <button
            type="submit"
            disabled={isLoading || loading}
            className="w-full bg-[#b45309] hover:bg-[#92400e] text-[#f2e9d9] py-3.5 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-[#b45309]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:pointer-events-none mt-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>A criar conta...</span>
              </>
            ) : (
              'Cadastrar'
            )}
          </button>

          {/* Divisor */}
          <div className="relative flex items-center pt-2">
            <div className="flex-1 border-t border-[#51433a]/15" />
            <span className="px-3 text-[10px] font-black uppercase tracking-widest text-[#51433a]/60">
              ou
            </span>
            <div className="flex-1 border-t border-[#51433a]/15" />
          </div>

          {/* Botão Voltar para Login */}
          <button 
            type="button"
            onClick={() => navigate('/')}
            className="w-full bg-transparent border-2 border-[#51433a]/10 hover:border-[#51433a]/30 hover:bg-white/40 text-[#51433a] py-3.5 rounded-2xl font-bold text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Já tenho uma conta</span>
          </button>
        </form>
      </div>

      {/* Selo inferior */}
      <div className="relative z-10 mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#51433a]/70">
        <ShieldCheck className="h-4 w-4 text-[#b45309]" />
        <span>Os seus dados estão protegidos</span>
      </div>
    </div>
  )
}