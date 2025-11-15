"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Zap, ChevronDown } from "lucide-react"
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
    { name: "Services", href: "/#services" },
    {
      name: "Case Studies & Op-Ed",
      subMenu: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Op-Ed", href: "/op-ed" },
      ],
    },
    {
      name: "Free Webinar & Live Consultation",
      subMenu: [
        { name: "Free Webinar", href: "/webinar-live/free-webinar" },
        { name: "Live Stream Consultation", href: "/webinar-live/live-stream-consultation" },
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
        className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 md:-translate-y-24 opacity-0"
        } ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{
          transition: hasLoaded ? "all 0.5s ease-out" : "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <div className="w-[90vw] max-w-xs md:max-w-6xl mx-auto">
          <div className="bg-background/30 backdrop-blur-md border border-border rounded-full px-4 py-3 md:px-6 md:py-2">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center glow-effect">
                    <Zap className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="text-2xl font-bold shimmer-text">TalentSource</span>
                </div>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) =>
                  item.subMenu ? (
                    <div key={item.name} className="relative group">
                      <span className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 rounded-md shadow-lg bg-popover backdrop-blur-md ring-1 ring-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 pointer-events-none group-hover:pointer-events-auto z-10">
                        <div className="py-2">
                          {item.subMenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary transition-colors"
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
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="hover:bg-accent text-muted-foreground hover:text-foreground">
                  <Search className="h-4 w-4" />
                </Button>
                <ThemeToggle />
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-foreground hover:scale-110 transition-transform duration-200 cursor-pointer"
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
.
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden relative">
          <div
            className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
            style={{ top: "0", left: "0", right: "0", bottom: "0", zIndex: -1 }}
          />
          <div
            className={`mt-2 w-[90vw] max-w-xs mx-auto transition-all duration-500 ease-out transform-gpu ${
              isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
            }`}
          >
            <div className="bg-background/30 backdrop-blur-md border border-border rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col space-y-1">
                {navigation.map((item, index) =>
                  item.subMenu ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className={`w-full flex justify-between items-center text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer transform hover:scale-[1.02] hover:translate-x-1 ${
                          isOpen ? "animate-mobile-menu-item" : ""
                        }`}
                        style={{
                          animationDelay: isOpen ? `${index * 80 + 100}ms` : "0ms",
                        }}
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
                          {item.subMenu.map((sub, subIndex) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer transform hover:scale-[1.02] hover:translate-x-1 ${
                                isOpen ? "animate-mobile-menu-item" : ""
                              }`}
                              style={{
                                animationDelay: isOpen ? `${(index + subIndex + 1) * 80 + 100}ms` : "0ms",
                              }}
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
                      className={`text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer transform hover:scale-[1.02] hover:translate-x-1 ${
                        isOpen ? "animate-mobile-menu-item" : ""
                      }`}
                      style={{
                        animationDelay: isOpen ? `${index * 80 + 100}ms` : "0ms",
                      }}
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
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}