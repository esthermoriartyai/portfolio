export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-5 md:px-[120px] py-7 text-[11px] font-light leading-[1.65]"
      style={{
        backgroundColor: '#fcfbf4',
        borderTop: '0.5px solid rgba(43,92,230,0.13)',
        color: 'rgba(43,92,230,0.6)',
      }}
    >
      <p>© Esther Moriarty 2026</p>
      <nav aria-label="Footer links">
        <ul className="flex items-center gap-4" role="list">
          <li>
            <a
              href="https://linkedin.com/in/esthermoriarty"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-[0.06em] hover:opacity-70 active:opacity-40 transition-opacity select-none"
              style={{ color: 'rgba(43,92,230,0.6)' }}
            >
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-[0.06em] hover:opacity-70 active:opacity-40 transition-opacity select-none"
              style={{ color: 'rgba(43,92,230,0.6)' }}
            >
              CV ↗
            </a>
          </li>
          <li>
            <a
              href="mailto:moriarty.esther@gmail.com"
              className="uppercase tracking-[0.06em] hover:opacity-70 active:opacity-40 transition-opacity select-none"
              style={{ color: 'rgba(43,92,230,0.6)' }}
            >
              Email ↗
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
