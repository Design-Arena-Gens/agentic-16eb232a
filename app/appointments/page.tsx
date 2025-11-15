'use client'

import { ChevronLeft, Calendar, Clock, Video, MapPin, Plus } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'
import { useState } from 'react'

export default function Appointments() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: 'Today',
      time: '3:00 PM',
      type: 'video',
      avatar: 'SJ',
      location: undefined
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      date: 'Tomorrow',
      time: '10:30 AM',
      type: 'clinic',
      location: 'City Medical Center',
      avatar: 'MC'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'General Physician',
      date: 'Mar 20',
      time: '2:00 PM',
      type: 'video',
      avatar: 'ER',
      location: undefined
    }
  ]

  const pastAppointments = [
    {
      id: 4,
      doctor: 'Dr. James Wilson',
      specialty: 'Orthopedic',
      date: 'Mar 10',
      time: '11:00 AM',
      type: 'clinic',
      avatar: 'JW',
      location: 'Sports Medical Center'
    },
    {
      id: 5,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: 'Feb 28',
      time: '3:00 PM',
      type: 'video',
      avatar: 'SJ',
      location: undefined
    }
  ]

  const appointments = activeTab === 'upcoming' ? upcomingAppointments : pastAppointments

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <ChevronLeft size={24} className="text-text-primary" />
          </Link>
          <h1 className="text-heading-md text-text-primary">Appointments</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-background rounded-button p-1">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2 rounded-button text-button transition-colors ${
              activeTab === 'upcoming'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-2 rounded-button text-button transition-colors ${
              activeTab === 'past'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            Past
          </button>
        </div>
      </div>

      {/* Appointments List */}
      <div className="px-6 py-6 space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="bg-white rounded-card shadow-card p-5">
            <div className="flex gap-4 mb-4">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center font-semibold text-body flex-shrink-0">
                {appointment.avatar}
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-text-primary">{appointment.doctor}</h3>
                <p className="text-caption text-text-secondary">{appointment.specialty}</p>
              </div>
              {activeTab === 'upcoming' && (
                <button className="text-text-secondary">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="4" r="1.5" fill="currentColor"/>
                    <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
                    <circle cx="10" cy="16" r="1.5" fill="currentColor"/>
                  </svg>
                </button>
              )}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-caption text-text-secondary">
                <Calendar size={16} />
                <span>{appointment.date}</span>
                <Clock size={16} className="ml-2" />
                <span>{appointment.time}</span>
              </div>

              {appointment.type === 'video' ? (
                <div className="flex items-center gap-2 text-caption text-text-secondary">
                  <Video size={16} />
                  <span>Video Consultation</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-caption text-text-secondary">
                  <MapPin size={16} />
                  <span>{appointment.location}</span>
                </div>
              )}
            </div>

            {activeTab === 'upcoming' && (
              <div className="flex gap-3">
                <button className="flex-1 py-2.5 border-2 border-primary text-primary rounded-button text-button">
                  Reschedule
                </button>
                <button className="flex-1 py-2.5 bg-primary text-white rounded-button text-button">
                  {appointment.type === 'video' ? 'Join Call' : 'Get Directions'}
                </button>
              </div>
            )}

            {activeTab === 'past' && (
              <div className="flex gap-3">
                <button className="flex-1 py-2.5 border-2 border-primary text-primary rounded-button text-button">
                  View Details
                </button>
                <button className="flex-1 py-2.5 bg-primary text-white rounded-button text-button">
                  Book Again
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <Link
        href="/doctors"
        className="fixed bottom-28 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Plus size={24} />
      </Link>

      <BottomNav />
    </div>
  )
}
