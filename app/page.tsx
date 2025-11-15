'use client'

import { Bell, Heart, Activity, Users, Stethoscope, TestTube, Building2, Pill, Calendar, Clock } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

export default function Home() {
  const upcomingAppointment = {
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: 'Today, 3:00 PM',
    type: 'Video Consultation'
  }

  const quickActions = [
    { icon: Stethoscope, label: 'Find Doctor', href: '/doctors', color: 'bg-primary' },
    { icon: TestTube, label: 'Book Lab Test', href: '/labs', color: 'bg-secondary' },
    { icon: Building2, label: 'Hospitals', href: '/hospitals', color: 'bg-primary' },
    { icon: Pill, label: 'Pharmacy', href: '/pharmacy', color: 'bg-secondary' },
  ]

  const healthMetrics = [
    { icon: Heart, label: 'Heart Rate', value: '72 bpm', status: 'normal' },
    { icon: Activity, label: 'Blood Pressure', value: '120/80', status: 'normal' },
    { icon: Users, label: 'Steps', value: '8,432', status: 'good' },
  ]

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-primary text-white px-6 pt-12 pb-8 rounded-b-[32px]">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-secondary text-caption">Good Morning</p>
            <h1 className="text-heading-md mt-1">Alex Morgan</h1>
          </div>
          <div className="relative">
            <Bell size={24} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white/10 backdrop-blur-sm rounded-input px-4 py-3 flex items-center gap-3">
          <div className="w-5 h-5 text-white/70">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search doctors, hospitals, labs..."
            className="bg-transparent text-white placeholder-white/60 outline-none flex-1 text-body"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 -mt-6">
        {/* Upcoming Appointment Card */}
        <div className="bg-white rounded-card shadow-card p-5 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary">Upcoming Appointment</h3>
            <Link href="/appointments" className="text-primary text-caption">View All</Link>
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Stethoscope className="text-primary" size={28} />
            </div>
            <div className="flex-1">
              <h4 className="text-body font-semibold text-text-primary">{upcomingAppointment.doctor}</h4>
              <p className="text-caption text-text-secondary mb-2">{upcomingAppointment.specialty}</p>
              <div className="flex items-center gap-3 text-caption text-text-secondary">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{upcomingAppointment.date}</span>
                </div>
              </div>
            </div>
            <button className="self-center px-4 py-2 bg-primary text-white rounded-button text-caption">
              Join
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Link
                  key={index}
                  href={action.href}
                  className="bg-white rounded-card shadow-card p-5 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform"
                >
                  <div className={`${action.color} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <span className="text-body font-medium text-text-primary text-center">{action.label}</span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Health Metrics */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-4">Health Metrics</h3>
          <div className="grid grid-cols-1 gap-3">
            {healthMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="bg-white rounded-card shadow-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-caption text-text-secondary">{metric.label}</p>
                    <p className="text-body font-semibold text-text-primary">{metric.value}</p>
                  </div>
                  <div className="px-3 py-1 bg-success/10 rounded-chip">
                    <span className="text-caption text-success capitalize">{metric.status}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-4">Recent Activity</h3>
          <div className="bg-white rounded-card shadow-card p-4">
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <TestTube className="text-primary" size={18} />
              </div>
              <div className="flex-1">
                <p className="text-body font-medium text-text-primary">Blood Test Results</p>
                <p className="text-caption text-text-secondary">2 hours ago</p>
              </div>
              <button className="text-primary text-caption font-semibold">View</button>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Pill className="text-primary" size={18} />
              </div>
              <div className="flex-1">
                <p className="text-body font-medium text-text-primary">Prescription Refilled</p>
                <p className="text-caption text-text-secondary">Yesterday</p>
              </div>
              <button className="text-primary text-caption font-semibold">View</button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
