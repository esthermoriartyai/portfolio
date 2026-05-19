import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

interface CaseStudyLayoutProps {
  children: React.ReactNode
}

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <>
      <NavBar />
      <main className="pt-12 md:pt-[60px]">
        {children}
      </main>
      <Footer />
    </>
  )
}
