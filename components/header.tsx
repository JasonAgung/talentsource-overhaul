"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

type NavItem =
  | { name: string; href: string; subMenu?: undefined }
  | { name: string; href?: string; subMenu: { name: string; href: string }[] }

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const lastScrollY = useRef(0)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      subMenu: [
        { name: "Company Profile", href: "/about-us/company-profile" },
        { name: "Standing Partners", href: "/about-us/standing-partners" },
        { name: "Corporate Partners", href: "/about-us/corporate-partners" },
      ],
    },
    { name: "Services", href: "/services" },
    {
      name: "Case Studies & Op-Ed",
      subMenu: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Op-Ed", href: "/op-ed" },
      ],
    },
    {
      name: "Resources",
      subMenu: [
        { name: "Free Webinar", href: "/webinar-live/free-webinar" },
        { name: "Live Consultation", href: "/webinar-live/live-stream-consultation" },
      ],
    },
    { name: "Free Internship", href: "/free-internship" },
    { name: "Education Support", href: "/education-support" },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true)
    }, 100)

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY
        if (currentScrollY > 50) {
          if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
            setIsVisible(false)
          } else if (lastScrollY.current - currentScrollY > 5) {
            setIsVisible(true)
          }
        } else {
          setIsVisible(true)
        }
        lastScrollY.current = currentScrollY
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true })
      return () => {
        window.removeEventListener("scroll", controlNavbar)
        clearTimeout(timer)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      return
    }
    const element = document.querySelector(href)
    if (element) {
      const rect = element.getBoundingClientRect()
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      const elementAbsoluteTop = rect.top + currentScrollY
      const navbarHeight = 100
      const targetPosition = Math.max(0, elementAbsoluteTop - navbarHeight)
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        } ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{
          transition: hasLoaded ? "all 0.5s ease-out" : "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <div className="w-[90vw] max-w-xs md:max-w-7xl mx-auto">
          <div className="bg-background/70 dark:bg-slate-900/80 backdrop-blur-xl border border-primary/10 dark:border-primary/30 shadow-xl rounded-2xl px-4 py-3 md:px-8 md:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer mr-6">
                <div className="flex items-center space-x-3">
                  <img src="/ts-logo.png" alt="TalentSource Logo" className="h-10 w-auto" />
                  <span className="hidden md:inline text-lg font-bold text-foreground">TalentSource</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navigation.map((item) =>
                  item.subMenu ? (
                    <div key={item.name} className="relative group">
                      <button className="flex items-center text-sm font-medium text-foreground hover:text-primary px-3 py-2 rounded-lg transition-all duration-300 group-hover:bg-primary/10">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 rounded-xl shadow-2xl bg-card dark:bg-slate-800 backdrop-blur-md ring-1 ring-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 pointer-events-none group-hover:pointer-events-auto z-10">
                        <div className="py-2">
                          {item.subMenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
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
                      className="text-sm font-medium text-foreground hover:text-primary px-3 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  )
                )}
              </div>

              {/* Right Actions */}
              <div className="hidden md:flex items-center space-x-3">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-foreground hover:scale-110 transition-transform duration-200 cursor-pointer p-2 hover:bg-primary/5 rounded-lg"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          {/* Backdrop */}
          <div
            className={`fixed inset-0 transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
            style={{ top: "0", left: "0", right: "0", bottom: "0", zIndex: -1 }}
          />

          {/* Mobile Menu Content */}
          <div
            className={`mt-3 w-[90vw] max-w-xs mx-auto transition-opacity transition-transform duration-500 ease-out ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
            }`}
          >
            <div className="bg-card/90 dark:bg-slate-800/90 backdrop-blur-xl border border-primary/10 dark:border-primary/30 rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col space-y-1">
                {navigation.map((item, index) =>
                  item.subMenu ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className={`w-full flex justify-between items-center text-foreground hover:text-primary hover:bg-primary/10 rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn("h-5 w-5 transition-transform duration-300", {
                            "rotate-180": openDropdown === item.name,
                          })}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 mt-1 space-y-1 animate-fade-in">
                          {item.subMenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block text-foreground hover:text-primary hover:bg-primary/10 rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer"
                              onClick={() => setIsOpen(false)}
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
                      className={`text-foreground hover:text-primary hover:bg-primary/10 rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer`}
                      onClick={() => {
                        if (item.href.startsWith("#")) {
                          scrollToSection(item.href)
                        }
                        setIsOpen(false)
                      }}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
              <div className="mt-6 pt-6 border-t border-primary/10 flex items-center gap-3">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
