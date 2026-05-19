'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  label: string
  href: string
  sectionId?: string
}

const homeLinks: NavLink[] = [
  { label: 'Work', href: '/#work', sectionId: 'work' },
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
]

function NavItem({
  link,
  isActive,
  onClick,
}: {
  link: NavLink
  isActive: boolean
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className="text-[12px] tracking-[0.01em] select-none"
      style={{
        color: isActive || hovered ? '#2b5ce6' : 'rgba(43,92,230,0.6)',
        fontWeight: isActive ? 500 : 300,
        transition: 'color 0.18s ease, opacity 0.1s ease, transform 0.1s ease',
        display: 'inline-block',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={(e) => {
        setHovered(false)
        ;(e.currentTarget as HTMLElement).style.opacity = '1'
        ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
      }}
      onMouseDown={(e) => {
        ;(e.currentTarget as HTMLElement).style.opacity = '0.5'
        ;(e.currentTarget as HTMLElement).style.transform = 'scale(0.97)'
      }}
      onMouseUp={(e) => {
        ;(e.currentTarget as HTMLElement).style.opacity = '1'
        ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
      }}
    >
      {link.label}
    </Link>
  )
}

export default function NavBar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
      if (!isHome) return
      // If within 120px of the page bottom, Contact is active
      const nearBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 120
      if (nearBottom) {
        setActiveSection('contact')
        return
      }
      const sections = ['work', 'about', 'skills', 'experience', 'contact']
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 80) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
      if (!isHome || !link.sectionId) return
      e.preventDefault()
      const el = document.getElementById(link.sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    },
    [isHome]
  )

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'rgba(252,251,244,0.92)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        borderBottom: '0.5px solid rgba(43,92,230,0.13)',
        boxShadow: scrolled ? '0 1px 12px rgba(43,92,230,0.06)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Mobile nav: 48px, Desktop nav: 60px */}
      <nav
        className="flex items-center justify-between px-5 md:px-[120px] h-12 md:h-[60px]"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-[13px] font-medium tracking-[-0.01em] hover:opacity-70 active:opacity-40 transition-opacity select-none"
          style={{ color: '#2b5ce6' }}
        >
          Esther Moriarty
        </Link>

        <ul className="flex items-center gap-7" role="list">
          {homeLinks.map((link) => (
            <li key={link.label}>
              <NavItem
                link={link}
                isActive={isHome && activeSection === link.sectionId}
                onClick={(e) => handleNavClick(e, link)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
