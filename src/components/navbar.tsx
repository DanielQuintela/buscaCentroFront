import { NavLink } from 'react-router-dom' 
import { Map, Compass, Bookmark, User } from 'lucide-react'
import { motion } from 'framer-motion'

// Array com as configurações das abas para evitar código repetido
const navItems = [
  { id: 'mapa', path: '/mapa', label: 'Mapa', Icon: Map },
  { id: 'descobrir', path: '/dashboard', label: 'Descobrir', Icon: Compass },
  { id: 'salvos', path: '/salvos', label: 'Salvos', Icon: Bookmark },
  { id: 'perfil', path: '/profile', label: 'Perfil', Icon: User },
]

export function Navbar() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 bg-white/95 backdrop-blur-md shadow-[0_8px_32px_rgba(81,67,58,0.12)] border border-[#51433a]/5 rounded-[28px] px-3 py-3 flex items-center justify-between gap-1 select-none">
      
      {navItems.map(({ id, path, label, Icon }) => (
        <NavLink 
          key={id} 
          to={path} 
          // O fundo estático 'bg-[#f4eaed]/60' foi removido daqui e passado para a animação
          className="relative flex flex-col items-center justify-center flex-1 py-2.5 h-[64px] rounded-[20px] transition-all duration-300 hover:bg-[#443329]/5 outline-none"
        >
          {({ isActive }) => (
            <>
              {/* 🌟 ANIMAÇÃO: Fundo estilo "Bolha" */}
              {isActive && (
                <motion.div
                  layoutId="navBubble"
                  className="absolute inset-0 bg-[#f4eaed]/60 rounded-[20px] z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Conteúdo: Ícone e Texto */}
              <div className={`relative z-10 flex flex-col items-center gap-1 transition-colors duration-300 ${isActive ? 'text-[#b45309]' : 'text-[#443329]/40'}`}>
                <Icon strokeWidth={isActive ? 2.5 : 2} size={22} />
                
                <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isActive ? 'text-[#b45309]' : 'text-[#443329]/50'}`}>
                  {label}
                </span>

                {/* 🌟 ANIMAÇÃO: Ponto indicador abaixo do texto */}
                {isActive && (
                  <motion.div 
                    layoutId="navActiveDot"
                    className="absolute w-1 h-1 bg-[#b45309] rounded-full -bottom-1.5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
            </>
          )}
        </NavLink>
      ))}

    </nav>
  )
}