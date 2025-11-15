'use client'

import { ChevronLeft, ChevronRight, User, Heart, CreditCard, Bell, Lock, HelpCircle, LogOut, Settings } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

export default function Profile() {
  const profileMenuItems = [
    { icon: User, label: 'Personal Information', href: '/profile/personal', badge: null },
    { icon: Heart, label: 'Health Records', href: '/profile/health', badge: null },
    { icon: CreditCard, label: 'Payment Methods', href: '/profile/payment', badge: null },
    { icon: Bell, label: 'Notifications', href: '/profile/notifications', badge: '3' },
    { icon: Lock, label: 'Privacy & Security', href: '/profile/security', badge: null },
    { icon: Settings, label: 'Settings', href: '/profile/settings', badge: null },
    { icon: HelpCircle, label: 'Help & Support', href: '/profile/help', badge: null },
  ]

  const user = {
    name: 'Alex Morgan',
    email: 'alex.morgan@email.com',
    phone: '+1 (555) 123-4567',
    avatar: 'AM'
  }

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-primary text-white px-6 pt-12 pb-8 rounded-b-[32px]">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <ChevronLeft size={24} className="text-white" />
          </Link>
          <h1 className="text-heading-md">Profile</h1>
        </div>

        {/* User Info Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-card p-5 flex items-center gap-4">
          <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center font-bold text-heading-sm flex-shrink-0">
            {user.avatar}
          </div>
          <div className="flex-1">
            <h2 className="text-heading-sm text-white mb-1">{user.name}</h2>
            <p className="text-caption text-white/80">{user.email}</p>
            <p className="text-caption text-white/80">{user.phone}</p>
          </div>
          <Link href="/profile/edit">
            <ChevronRight size={20} className="text-white" />
          </Link>
        </div>
      </div>

      {/* Health Stats */}
      <div className="px-6 -mt-6 mb-6">
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-4">Quick Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-heading-md text-primary font-bold">12</p>
              <p className="text-caption text-text-secondary">Appointments</p>
            </div>
            <div className="text-center border-x border-gray-200">
              <p className="text-heading-md text-primary font-bold">8</p>
              <p className="text-caption text-text-secondary">Reports</p>
            </div>
            <div className="text-center">
              <p className="text-heading-md text-primary font-bold">5</p>
              <p className="text-caption text-text-secondary">Prescriptions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 pb-6 space-y-3">
        {profileMenuItems.map((item, index) => {
          const Icon = item.icon
          return (
            <Link
              key={index}
              href={item.href}
              className="bg-white rounded-card shadow-card p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon className="text-primary" size={20} />
              </div>
              <span className="text-body font-medium text-text-primary flex-1">{item.label}</span>
              {item.badge && (
                <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">{item.badge}</span>
                </div>
              )}
              <ChevronRight size={20} className="text-text-secondary" />
            </Link>
          )
        })}

        {/* Logout Button */}
        <button className="w-full bg-white rounded-card shadow-card p-5 flex items-center gap-4 hover:bg-error/5 transition-colors">
          <div className="w-10 h-10 bg-error/10 rounded-xl flex items-center justify-center">
            <LogOut className="text-error" size={20} />
          </div>
          <span className="text-body font-medium text-error flex-1 text-left">Logout</span>
        </button>
      </div>

      {/* App Version */}
      <div className="px-6 pb-6 text-center">
        <p className="text-caption text-text-secondary">Avicure v1.0.0</p>
        <p className="text-caption text-text-secondary mt-1">© 2024 Avicure Healthcare</p>
      </div>

      <BottomNav />
    </div>
  )
}
