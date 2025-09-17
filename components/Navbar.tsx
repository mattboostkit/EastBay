"use client"

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics'
import { urlForImage } from '@/lib/sanity.client'

// Updated navigation structure grouped by category
const navigationGroups = [
  {
    title: "Explore",
    href: "/explore",
    items: [
      { title: 'Digital Museum', href: '/digital-museum' },
      { title: 'Field School', href: '/field-school' },
      { title: 'News', href: '/news' },
      { title: 'Project Timeline', href: '/timeline' },
    ]
  },
  {
    title: "Learn",
    href: "/learn",
    items: [
      { title: 'Education Resources', href: '/education' },
      { title: 'Research, Reports and Publications', href: '/research/publications' },
    ]
  },
  {
    title: "About",
    href: "/about",
    items: [
      { title: 'About the Project', href: '/about/project' },
      { title: 'Community & Outreach', href: '/community' },
      { title: 'Volunteer', href: '/volunteer' },
      { title: 'Partners', href: '/partners' },
      { title: 'Contact & Sponsors', href: '/contact' },
    ]
  }
];

// Flatten the menu items for mobile view
const flatMenuItems = navigationGroups.flatMap(group => group.items);

interface NavbarProps {
  siteSettings?: any;
}

export default function Navbar({ siteSettings }: NavbarProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { trackSearch } = useGoogleAnalytics()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  const toggleSearch = () => {
    const newState = !isSearchOpen
    setIsSearchOpen(newState)
    if (newState) {
      setTimeout(() => searchInputRef.current?.focus(), 100)
    }
  }
  
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchInputRef.current?.value
    if (query) {
      trackSearch(query, 0) // Results count will be updated after search
      window.location.href = `/search?q=${encodeURIComponent(query)}`
    }
  }

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  // Close overlays when path changes
  useEffect(() => {
    setIsMenuOpen(false)
    setIsSearchOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Mobile Menu Toggle */}
            <button
              className="mr-2 block md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Site Logo and Title */}
            <Link href="/" className="flex items-center gap-3" aria-label="East Wear Bay Project - Home">
              {siteSettings?.logo ? (
                <Image
                  src={urlForImage(siteSettings.logo)?.url() || ''}
                  alt={siteSettings.logo.alt || 'East Wear Bay Archaeological Project Logo'}
                  width={48}
                  height={48}
                  className="h-12 w-12"
                  priority
                />
              ) : (
                <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-xs">Logo</span>
                </div>
              )}
              <span className="hidden sm:inline-block text-xl font-semibold text-primary">
                {siteSettings?.title || 'East Wear Bay Project'}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-6" aria-label="Main navigation">
            {navigationGroups.map((group) => (
              <div key={group.title} className="relative" onMouseEnter={() => setOpenDropdown(group.title)} onMouseLeave={() => setOpenDropdown(null)}>
                <Link
                  href={group.href}
                  onClick={() => setOpenDropdown(null)}
                  className={cn(
                    'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    pathname === group.href
                      ? 'bg-accent text-foreground'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
                  )}
                >
                  {group.title}
                </Link>
                <div
                  className={cn(
                    'absolute left-0 top-full z-10 w-56 pt-2 transition-opacity duration-150',
                    openDropdown === group.title ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  )}
                  aria-hidden={openDropdown !== group.title}
                >
                  <div className="overflow-hidden rounded-md bg-card shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            'block px-4 py-2 text-sm',
                            pathname === item.href
                              ? 'bg-accent text-foreground'
                              : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                          )}
                          aria-current={pathname === item.href ? 'page' : undefined}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right-side Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSearch}
              className="rounded-full p-2 hover:bg-accent"
              aria-label="Search"
              aria-expanded={isSearchOpen}
              aria-controls="search-panel"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-accent"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <SunMoon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Moved outside header */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 border-t border-border bg-card md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav className="container grid gap-2 py-6" aria-label="Mobile navigation">
            {flatMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex w-full items-center py-3 text-lg font-medium',
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground',
                )}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Search Overlay - Moved outside header */}
      {isSearchOpen && (
        <div
          id="search-panel"
          className="fixed inset-x-0 top-16 z-40 border-b border-border bg-card p-4 shadow-lg md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <form onSubmit={handleSearchSubmit} className="container">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search the project..."
                className="w-full rounded-md border bg-background py-2 pl-10 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </form>
        </div>
      )}
    </>
  )
}
