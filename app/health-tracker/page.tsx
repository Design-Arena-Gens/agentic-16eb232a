'use client'

import { ChevronLeft, Heart, Activity, Droplet, TrendingUp, Plus } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

export default function HealthTracker() {
  const metrics = [
    {
      id: 1,
      icon: Heart,
      label: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      trend: '+2',
      color: 'text-error',
      bgColor: 'bg-error/10',
      data: [65, 68, 70, 72, 71, 73, 72]
    },
    {
      id: 2,
      icon: Activity,
      label: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      trend: 'normal',
      color: 'text-success',
      bgColor: 'bg-success/10',
      data: [118, 120, 122, 119, 121, 120, 120]
    },
    {
      id: 3,
      icon: Droplet,
      label: 'Blood Sugar',
      value: '95',
      unit: 'mg/dL',
      trend: '-3',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      data: [98, 96, 97, 95, 96, 94, 95]
    },
    {
      id: 4,
      icon: Activity,
      label: 'Steps',
      value: '8,432',
      unit: 'steps',
      trend: '+1,234',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      data: [6000, 7200, 8500, 7800, 8200, 9000, 8432]
    }
  ]

  const recentReadings = [
    {
      id: 1,
      type: 'Blood Pressure',
      value: '120/80 mmHg',
      date: 'Today, 9:00 AM',
      status: 'normal'
    },
    {
      id: 2,
      type: 'Heart Rate',
      value: '72 bpm',
      date: 'Today, 9:00 AM',
      status: 'normal'
    },
    {
      id: 3,
      type: 'Blood Sugar',
      value: '95 mg/dL',
      date: 'Yesterday, 8:00 AM',
      status: 'normal'
    }
  ]

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-primary text-white px-6 pt-12 pb-8 rounded-b-[32px]">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <ChevronLeft size={24} className="text-white" />
          </Link>
          <h1 className="text-heading-md">Health Tracker</h1>
        </div>

        {/* Summary Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-card p-5">
          <h3 className="text-body font-semibold text-white mb-4">Today's Summary</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-caption text-white/70 mb-1">Average HR</p>
              <p className="text-heading-sm text-white font-bold">72 bpm</p>
            </div>
            <div>
              <p className="text-caption text-white/70 mb-1">Total Steps</p>
              <p className="text-heading-sm text-white font-bold">8,432</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-6 space-y-6 pb-6">
        {/* Health Metrics */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4">Health Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric) => {
              const Icon = metric.icon
              return (
                <Link
                  key={metric.id}
                  href={`/health-tracker/${metric.id}`}
                  className="bg-white rounded-card shadow-card p-5 hover:scale-105 transition-transform"
                >
                  <div className={`w-12 h-12 ${metric.bgColor} rounded-2xl flex items-center justify-center mb-3`}>
                    <Icon className={metric.color} size={22} />
                  </div>
                  <p className="text-caption text-text-secondary mb-1">{metric.label}</p>
                  <div className="flex items-end gap-2 mb-2">
                    <p className="text-heading-sm font-bold text-text-primary">{metric.value}</p>
                    <p className="text-caption text-text-secondary pb-0.5">{metric.unit}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={12} className="text-success" />
                    <span className="text-caption text-success font-medium">{metric.trend}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary">Weekly Progress</h3>
            <button className="text-primary text-caption font-semibold">View All</button>
          </div>

          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between gap-2 h-32 mb-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-background rounded-t-lg flex-1 relative overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all"
                    style={{ height: `${60 + Math.random() * 40}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-text-secondary">{day}</span>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-2xl p-4 text-center">
            <p className="text-body font-semibold text-text-primary mb-1">Weekly Average</p>
            <p className="text-heading-md text-primary font-bold">7,845 steps/day</p>
          </div>
        </div>

        {/* Recent Readings */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4">Recent Readings</h2>
          <div className="bg-white rounded-card shadow-card divide-y divide-gray-100">
            {recentReadings.map((reading) => (
              <div key={reading.id} className="p-5 flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-body font-semibold text-text-primary mb-1">{reading.type}</p>
                  <p className="text-caption text-text-secondary">{reading.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-body font-semibold text-text-primary mb-1">{reading.value}</p>
                  <div className="px-3 py-1 bg-success/10 rounded-chip inline-block">
                    <span className="text-caption text-success font-medium capitalize">{reading.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-card shadow-card p-6 text-white">
          <h3 className="text-heading-sm mb-2">💡 Health Tip</h3>
          <p className="text-body opacity-90 mb-4">
            Aim for at least 10,000 steps per day to maintain good cardiovascular health and overall wellness.
          </p>
          <button className="px-6 py-2 bg-white text-primary rounded-button text-button">
            Learn More
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
        <Plus size={24} />
      </button>

      <BottomNav />
    </div>
  )
}
