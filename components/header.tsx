"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Zap, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem =
  | { name: string; href: string; subMenu?: undefined }
  | { name: string; href?: string; subMenu: { name: string; href: string }[] }

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Unified navigation (joan + main), using a single `subMenu` API
  const navigation: NavItem[] = [
    { name: "Home", href: "/" },

    // From main
    {
      name: "About Us",
      subMenu: [
        { name: "Company Profile", href: "/about-us/company-profile" },
        { name: "Standing Partners", href: "/about-us/standing-partners" },
        { name: "Corporate Partners", href: "/about-us/corporate-partners" },
      ],
    },

    { name: "Services", href: "/#services" },

    // Merge of “Case Studies & Op-Ed”
    {
      name: "Case Studies & Op-Ed",
      subMenu: [
        // joan paths feel cleaner; adjust to your routing
        { name: "Case Studies", href: "/#case-studies" },
        { name: "Op-Ed", href: "/op-ed" },
      ],
    },

    // From joan
    {
      name: "Free Webinar & Live Consultation",
      subMenu: [
        { name: "Free Webinar", href: "/webinar-live/free-webinar" },
        { name: "Live Stream Consultation", href: "/webinar-live/live-stream-consultation" },
      ],
    },

    // From joan
    { name: "Free Internship", href: "/free-internship" },
    { name: "Education Support", href: "/education-support" },

    // From main
    { name: "Resources", href: "/#resources" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center glow-effect">
                <Zap className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold shimmer-text">TalentSource</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) =>
              item.subMenu ? (
                <div key={item.name} className="relative group">
                  <span className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-effect cursor-default">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-background/80 backdrop-blur-md ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-10">
                    <div className="py-2">
                      {item.subMenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent/10 hover:text-primary transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-effect relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-accent/10 hover:text-accent">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="btn-futuristic neon-border bg-transparent hover:bg-accent/10">
              Free Consultation
            </Button>
            <Button size="sm" className="btn-futuristic bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent glow-effect">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-accent/20 glass-effect">
              {navigation.map((item) =>
                item.subMenu ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-all duration-300"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn("h-5 w-5 transition-transform", {
                          "rotate-180": openDropdown === item.name,
                        })}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.subMenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full btn-futuristic neon-border bg-transparent">
                  Free Consultation
                </Button>
                <Button className="w-full btn-futuristic bg-gradient-to-r from-accent to-primary glow-effect">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}