import { Navbar } from '../navbar'
import { Header } from '../header'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  /* ATENÇÃO: pb-24 garante que a bottom nav bar flutuante não vai sobrepor/esconder o conteúdo do final da página */
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 pb-24">
      <Header />

      <main className="flex-1 p-4 sm:p-8 w-full max-w-7xl mx-auto">
        {children}
      </main>

      <Navbar />
    </div>
  )
}