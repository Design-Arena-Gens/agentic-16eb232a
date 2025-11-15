'use client'

import { ChevronLeft, Calendar, TestTube, Pill, FileText, Bell } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'
import { useState } from 'react'

export default function Notifications() {
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all')

  const notifications = [
    {
      id: 1,
      type: 'appointment',
      icon: Calendar,
      title: 'Appointment Reminder',
      message: 'Your appointment with Dr. Sarah Johnson is in 2 hours',
      time: '1 hour ago',
      read: false
    },
    {
      id: 2,
      type: 'report',
      icon: TestTube,
      title: 'Lab Results Ready',
      message: 'Your Complete Blood Count results are now available',
      time: '3 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'prescription',
      icon: Pill,
      title: 'Prescription Refill',
      message: 'Time to refill your Lisinopril prescription',
      time: '5 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'report',
      icon: FileText,
      title: 'Medical Report Uploaded',
      message: 'Dr. Michael Chen has uploaded your X-ray report',
      time: '1 day ago',
      read: true
    },
    {
      id: 5,
      type: 'appointment',
      icon: Calendar,
      title: 'Appointment Confirmed',
      message: 'Your appointment with Dr. Emily Rodriguez is confirmed',
      time: '2 days ago',
      read: true
    },
    {
      id: 6,
      type: 'general',
      icon: Bell,
      title: 'Health Checkup Reminder',
      message: "It's time for your annual health checkup",
      time: '3 days ago',
      read: true
    }
  ]

  const filteredNotifications = notifications.filter(notif =>
    activeTab === 'all' ? true : !notif.read
  )

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'appointment': return 'bg-primary/10 text-primary'
      case 'report': return 'bg-secondary/20 text-primary'
      case 'prescription': return 'bg-warning/10 text-warning'
      default: return 'bg-text-secondary/10 text-text-secondary'
    }
  }

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <ChevronLeft size={24} className="text-text-primary" />
          </Link>
          <h1 className="text-heading-md text-text-primary flex-1">Notifications</h1>
          <button className="text-primary text-caption font-semibold">
            Mark all read
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-background rounded-button p-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-2 rounded-button text-button transition-colors ${
              activeTab === 'all'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            All Notifications
          </button>
          <button
            onClick={() => setActiveTab('unread')}
            className={`flex-1 py-2 rounded-button text-button transition-colors relative ${
              activeTab === 'unread'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            Unread
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-error rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-6 space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-card shadow-card p-10 text-center">
            <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell size={32} className="text-text-secondary" />
            </div>
            <h3 className="text-heading-sm text-text-primary mb-2">No Notifications</h3>
            <p className="text-body text-text-secondary">You're all caught up!</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const Icon = notification.icon
            return (
              <div
                key={notification.id}
                className={`bg-white rounded-card shadow-card p-5 hover:scale-[1.02] transition-transform cursor-pointer ${
                  !notification.read ? 'border-l-4 border-primary' : ''
                }`}
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${getTypeColor(notification.type)}`}>
                    <Icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-body font-semibold text-text-primary">
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                    <p className="text-body text-text-secondary mb-2 line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-caption text-text-secondary">{notification.time}</p>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Settings Button */}
      <div className="px-6 pb-6">
        <Link
          href="/profile/notifications"
          className="w-full bg-white rounded-card shadow-card p-5 flex items-center justify-between hover:bg-background transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Bell size={20} className="text-primary" />
            </div>
            <span className="text-body font-medium text-text-primary">
              Notification Settings
            </span>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      <BottomNav />
    </div>
  )
}
