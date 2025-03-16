"use client"

import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics'

// Updated navigation structure grouped by category
const navigationGroups = [
  {
    title: "Explore",
    items: [
      { title: 'Home', href: '/' },
      { title: 'Digital Museum', href: '/digital-museum' },
      { title: 'Field School', href: '/field-school' },
      { title: 'News & Updates', href: '/news' },
    ]
  },
  {
    title: "Learn",
    items: [
      { title: 'Education Resources', href: '/education' },
      { title: 'Research & Publications', href: '/research' },
    ]
  },
  {
    title: "About",
    items: [
      { title: 'About the Project', href: '/about' },
      { title: 'Outreach & Community', href: '/community' },
      { title: 'Contact & Sponsors', href: '/contact' },
    ]
  }
];

// Flatten the menu items for mobile view
const flatMenuItems = navigationGroups.flatMap(group => group.items);

export default function Navbar() {
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
    
    // Focus the search input when opening
    if (newState && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }
  }
  
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const query = searchInputRef.current?.value
    
    if (query) {
      // Track search query
      trackSearch(query, 0) // Results count will be updated after search
      
      // Navigate to search page
      window.location.href = `/search?q=${encodeURIComponent(query)}`
    }
  }

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            className="mr-2 block md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? 
              <X className="h-6 w-6" aria-hidden="true" /> : 
              <Menu className="h-6 w-6" aria-hidden="true" />
            }
          </button>
          
          <Link href="/" className="flex items-center gap-2" aria-label="East Wear Bay Project - Home">
            <span className="text-xl font-semibold text-primary">East Wear Bay Project</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:gap-6" aria-label="Main navigation">
          {navigationGroups.map((group) => (
            <div key={group.title} className="relative group">
              <button
                onClick={() => handleDropdownToggle(group.title)}
                onMouseEnter={() => setOpenDropdown(group.title)}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  openDropdown === group.title ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
                aria-expanded={openDropdown === group.title}
                aria-haspopup="true"
              >
                {group.title}
              </button>
              {openDropdown === group.title && (
                <div 
                  className="absolute left-0 z-10 mt-1 w-56 origin-top-left rounded-md bg-card shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="py-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block px-4 py-2 text-sm",
                          pathname === item.href ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        )}
                        aria-current={pathname === item.href ? "page" : undefined}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleSearch}
            className="rounded-full p-2 hover:bg-accent"
            aria-label="Search"
            aria-expanded={isSearchOpen}
            aria-controls="search-panel"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-accent"
            aria-label={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}
          >
            <SunMoon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 top-16 z-50 bg-background md:hidden"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <nav className="container grid gap-2 py-6" aria-label="Mobile navigation">
            {flatMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex w-full items-center py-3 text-lg font-medium",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
      
      {/* Search overlay */}
      {isSearchOpen && (
        <div 
          id="search-panel"
          className="absolute inset-x-0 top-16 z-50 bg-background p-4 md:p-6"
          role="search"
          aria-label="Site search"
        >
          <div className="container">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label="Search the site"
                />
              </div>
              <button type="submit" className="sr-only">
                Search
              </button>
            </form>
            <button
              onClick={toggleSearch}
              className="absolute right-5 top-5 rounded-full p-2 hover:bg-accent md:right-7 md:top-7"
              aria-label="Close search"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}