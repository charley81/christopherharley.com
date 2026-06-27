'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/navigation'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Trap focus inside sidebar
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !sidebarRef.current) return
    const focusable = sidebarRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }, [])

  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      {/* Hamburger button — visible below md */}
      <button
        ref={toggleRef}
        type="button"
        className="md:hidden flex items-center justify-center w-10 h-10 text-text-primary hover:text-text-secondary transition-colors"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-sidebar"
      >
        <span className="material-symbols-outlined text-body-md">
          {open ? 'close' : 'menu'}
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={close}
      />

      {/* Sidebar */}
      <div
        id="mobile-nav-sidebar"
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        onKeyDown={handleKeyDown}
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[80vw] bg-surface border-l border-border-muted shadow-xl transform transition-transform duration-300 ease-out md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-gutter">
          {/* Close button */}
          <button
            type="button"
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            onClick={close}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-body-md">close</span>
          </button>

          {/* Navigation links */}
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-text-primary hover:bg-surface-container-high transition-colors font-label-mono text-label-mono uppercase tracking-widest"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Footer in sidebar */}
          <div className="mt-auto pb-gutter pt-8 border-t border-border-muted">
            <a
              href="mailto:hello@christopherharley.com"
              className="block text-caption text-text-secondary hover:text-text-primary transition-colors"
            >
              hello@christopherharley.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
