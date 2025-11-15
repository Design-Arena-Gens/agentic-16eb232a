'use client'

import { Home, Calendar, Search, FileText, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Calendar, label: 'Appointments', href: '/appointments' },
    { icon: Search, label: 'Search', href: '/search' },
    { icon: FileText, label: 'Reports', href: '/reports' },
    { icon: User, label: 'Profile', href: '/profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white h-20 flex items-center justify-around px-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center gap-1 min-w-[60px]"
          >
            <Icon
              size={20}
              className={isActive ? 'text-accent' : 'text-text-secondary'}
              strokeWidth={2}
            />
            <span
              className={`text-[12px] font-medium ${
                isActive ? 'text-accent' : 'text-text-secondary'
              }`}
            >
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
