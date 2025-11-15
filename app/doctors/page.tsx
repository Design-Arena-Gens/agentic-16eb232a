'use client'

import { ChevronLeft, Star, MapPin, Clock, Filter } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'
import { useState } from 'react'

export default function Doctors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')

  const specialties = ['All', 'Cardiologist', 'Dermatologist', 'Pediatrician', 'Dentist', 'Orthopedic']

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.8,
      reviews: 127,
      experience: '15 years',
      location: 'Manhattan Medical Center',
      distance: '2.5 km',
      consultationFee: 80,
      nextAvailable: 'Today, 3:00 PM',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      rating: 4.9,
      reviews: 203,
      experience: '12 years',
      location: 'City Skin Clinic',
      distance: '1.8 km',
      consultationFee: 70,
      nextAvailable: 'Tomorrow, 10:00 AM',
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      rating: 4.7,
      reviews: 156,
      experience: '10 years',
      location: 'Children\'s Health Center',
      distance: '3.2 km',
      consultationFee: 60,
      nextAvailable: 'Today, 5:30 PM',
      avatar: 'ER'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic',
      rating: 4.8,
      reviews: 189,
      experience: '18 years',
      location: 'Sports Medicine Institute',
      distance: '4.1 km',
      consultationFee: 90,
      nextAvailable: 'Mar 18, 2:00 PM',
      avatar: 'JW'
    }
  ]

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <ChevronLeft size={24} className="text-text-primary" />
          </Link>
          <h1 className="text-heading-md text-text-primary flex-1">Find Doctors</h1>
          <button className="w-10 h-10 bg-background rounded-xl flex items-center justify-center">
            <Filter size={20} className="text-text-primary" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-background rounded-input px-4 py-3 flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="Search doctors by name or specialty"
            className="bg-transparent text-text-primary placeholder-text-secondary outline-none flex-1 text-body"
          />
        </div>
      </div>

      {/* Specialties Filter */}
      <div className="px-6 py-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-4 py-2 rounded-chip text-caption font-medium whitespace-nowrap transition-colors ${
                selectedSpecialty === specialty
                  ? 'bg-primary text-white'
                  : 'bg-white text-text-secondary border border-gray-200'
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors List */}
      <div className="px-6 pb-6 space-y-4">
        {doctors.map((doctor) => (
          <Link
            key={doctor.id}
            href={`/doctors/${doctor.id}`}
            className="block bg-white rounded-card shadow-card p-5 hover:scale-[1.02] transition-transform"
          >
            <div className="flex gap-4 mb-4">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-semibold text-body flex-shrink-0">
                {doctor.avatar}
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-text-primary">{doctor.name}</h3>
                <p className="text-caption text-text-secondary mb-1">{doctor.specialty}</p>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-warning fill-warning" />
                  <span className="text-caption font-medium text-text-primary">{doctor.rating}</span>
                  <span className="text-caption text-text-secondary">({doctor.reviews} reviews)</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-body font-semibold text-primary">${doctor.consultationFee}</p>
                <p className="text-caption text-text-secondary">per visit</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-caption text-text-secondary">
                <MapPin size={14} />
                <span>{doctor.location}</span>
                <span className="ml-auto">{doctor.distance} away</span>
              </div>
              <div className="flex items-center gap-2 text-caption text-text-secondary">
                <Clock size={14} />
                <span>Next available: {doctor.nextAvailable}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className="flex-1 py-2.5 border-2 border-primary text-primary rounded-button text-button"
                onClick={(e) => {
                  e.preventDefault()
                  // Handle chat
                }}
              >
                Chat
              </button>
              <button className="flex-1 py-2.5 bg-primary text-white rounded-button text-button">
                Book Now
              </button>
            </div>
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
