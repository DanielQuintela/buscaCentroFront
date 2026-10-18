import { NavLink } from 'react-router-dom' 
import { Map, Compass, Bookmark, User } from 'lucide-react'

// A interface foi mantida vazia se precisar no MainLayout, 
// mas não utilizamos o isOpen/onClose pois a barra inferior está sempre visível
export function Sidebar() {
  
  // Container super compacto: larguras e alturas menores, padding reduzido
  const linkContainerClass = (isActive: boolean) => `
    relative flex flex-col items-center justify-center w-[90px] h-[60px] rounded-[16px] transition-all duration-300
    ${isActive ? 'bg-[#f4eaed]/60' : 'bg-transparent hover:bg-[#443329]/5'}
  `

  // Cores exatas do protótipo e ícones menores
  const textIconClass = (isActive: boolean) => `
    flex flex-col items-center gap-[3px] transition-colors duration-300
    ${isActive ? 'text-[#b45309]' : 'text-[#443329]/40'}
  `

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md shadow-[0_8px_24px_rgba(81,67,58,0.12)] border border-[#51433a]/5 rounded-full px-1.5 py-1.5 flex items-center gap-1 select-none">
      
      {/* 1. MAPA */}
      <NavLink to="/mapa" className={({ isActive }) => linkContainerClass(isActive)}>
        {({ isActive }) => (
          <div className={textIconClass(isActive)}>
            <Map strokeWidth={isActive ? 2.5 : 2} size={18} />
            <span className={`text-[9px] font-extrabold uppercase tracking-widest ${isActive ? 'text-[#b45309]' : 'text-[#51433a]/50'}`}>
              Mapa
            </span>
          </div>
        )}
      </NavLink>

      {/* 2. DESCOBRIR (Aba Inicial) */}
      <NavLink to="/descobrir" className={({ isActive }) => linkContainerClass(isActive)}>
        {({ isActive }) => (
          <div className={textIconClass(isActive)}>
            <Compass strokeWidth={isActive ? 2.5 : 2} size={18} />
            <span className={`text-[9px] font-extrabold uppercase tracking-widest ${isActive ? 'text-[#b45309]' : 'text-[#443329]/50'}`}>
              Descobrir
            </span>
            {/* Ponto Laranja do Protótipo */}
            {isActive && <div className="absolute 1 w-1 h-1 bg-[#b45309] rounded-full bottom-1" />}
          </div>
        )}
      </NavLink>

      {/* 3. SALVOS */}
      <NavLink to="/salvos" className={({ isActive }) => linkContainerClass(isActive)}>
        {({ isActive }) => (
          <div className={textIconClass(isActive)}>
            <Bookmark strokeWidth={isActive ? 2.5 : 2} size={18} />
            <span className={`text-[9px] font-extrabold uppercase tracking-widest ${isActive ? 'text-[#b45309]' : 'text-[#443329]/50'}`}>
              Salvos
            </span>
          </div>
        )}
      </NavLink>

      {/* 4. PERFIL */}
      <NavLink to="/perfil" className={({ isActive }) => linkContainerClass(isActive)}>
        {({ isActive }) => (
          <div className={textIconClass(isActive)}>
            <User strokeWidth={isActive ? 2.5 : 2} size={18} />
            <span className={`text-[9px] font-extrabold uppercase tracking-widest ${isActive ? 'text-[#b45309]' : 'text-[#443329]/50'}`}>
              Perfil
            </span>
          </div>
        )}
      </NavLink>

    </nav>
  )
}