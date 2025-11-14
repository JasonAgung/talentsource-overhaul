"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem =
  | { name: string; href: string; subMenu?: undefined }
  | { name: string; href?: string; subMenu: { name: string; href: string }[] }

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
    { name: "Resources", href: "/#resources" },
    { name: "Contact", href: "/#contact" },
]

const MotionLink = motion(Link)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
  }

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  }
  
  const dropdownVariants = {
    initial: { opacity: 0, y: 10, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15, ease: "easeIn" } },
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full glass-effect"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <MotionLink href="/" className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="flex items-center space-x-3">
              <motion.div 
                className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center"
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }}
              >
                <Zap className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <span className="text-2xl font-bold shimmer-text">TalentSource</span>
            </div>
          </MotionLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) =>
              item.subMenu ? (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <span className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {item.name}
                    <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", { "rotate-180": hoveredMenu === item.name })} />
                  </span>
                  <AnimatePresence>
                    {hoveredMenu === item.name && (
                      <motion.div 
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56"
                        variants={dropdownVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <div className="rounded-md shadow-lg bg-card/80 backdrop-blur-md ring-1 ring-border py-2">
                          {item.subMenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent/20 hover:text-foreground transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <MotionLink
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </MotionLink>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="sm" className="hover:bg-accent/20 text-muted-foreground hover:text-foreground">
                Log In
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-muted-foreground">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isMenuOpen ? "x" : "menu"}
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navigation.map((item, i) =>
                item.subMenu ? (
                  <motion.div key={item.name} custom={i} variants={mobileLinkVariants} initial="hidden" animate="visible">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn("h-5 w-5 transition-transform", {
                          "rotate-180": openDropdown === item.name,
                        })}
                      />
                    </button>
                    <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div 
                        className="pl-4 mt-1 space-y-1"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        {item.subMenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <MotionLink
                    key={item.name}
                    href={item.href}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </MotionLink>
                )
              )}
              <motion.div className="pt-4 space-y-2" custom={navigation.length} variants={mobileLinkVariants} initial="hidden" animate="visible">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Log In
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
