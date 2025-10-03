"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Zap, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" }, 
    { 
      name: "About Us", 
      href: "#",
      subMenu: [
        { name: "Company Profile", href: "/about-us/company-profile" },
        { name: "Standing Partners", href: "/about-us/standing-partners" }, 
        { name: "Corporate Partners", href: "/about-us/corporate-partners" },
      ]
    },
    { name: "Services", href: "/#services" },
    { 
      name: "Case Studies & Op-Ed",
      href: "#",
      subMenu: [
        { name: "Case Studies", href: "/case-studies&op-ed/case-studies" },
        { name: "Op-ed", href: "/case-studies&op-ed/op-ed" },
      ]
    },
    { name: "Resources", href: "/#resources" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center glow-effect">
                <Zap className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold shimmer-text">TalentSource</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              item.subMenu ? (
                <div key={item.name} className="relative group">
                  <span
                    className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-effect cursor-default"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                    <div className="py-1">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-accent/10 hover:text-accent">
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="btn-futuristic neon-border bg-transparent hover:bg-accent/10"
            >
              Free Consultation
            </Button>
            <Button
              size="sm"
              className="btn-futuristic bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent glow-effect"
            >
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
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