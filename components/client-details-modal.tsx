"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface Client {
  name: string
  logo: string
  description: string
}

interface ClientDetailsModalProps {
  client: Client | null
  onClose: () => void
}

export function ClientDetailsModal({ client, onClose }: ClientDetailsModalProps) {
  return (
    <AnimatePresence>
      {client && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
          >
            <div className="bg-card border border-primary/20 rounded-2xl shadow-2xl p-8 relative max-w-lg w-full">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Content */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-white/80 flex items-center justify-center border-4 border-primary/20 shadow-lg mb-6">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full h-16 object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{client.name}</h2>
                <p className="text-muted-foreground text-pretty">{client.description}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
