"use client"

import type { ReactNode } from "react"

interface GlowingCardProps {
  children: ReactNode
  className?: string
}

export default function GlowingCard({ children, className = "" }: GlowingCardProps) {
  return (
    <div
      className={`relative bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 p-6 overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
