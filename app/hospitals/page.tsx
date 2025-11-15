'use client'

import { ChevronLeft, Building2, Star, MapPin, Phone, Truck, Filter, Navigation } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

export default function Hospitals() {
  const hospitals = [
    {
      id: 1,
      name: 'Manhattan Medical Center',
      rating: 4.8,
      reviews: 342,
      distance: '2.1 km',
      specialties: ['Cardiology', 'Neurology', 'Orthopedics'],
      emergency: true,
      beds: '250+',
      address: '123 Park Avenue, New York'
    },
    {
      id: 2,
      name: 'City General Hospital',
      rating: 4.7,
      reviews: 289,
      distance: '3.5 km',
      specialties: ['Emergency', 'Pediatrics', 'Surgery'],
      emergency: true,
      beds: '400+',
      address: '456 Main Street, New York'
    },
    {
      id: 3,
      name: 'Sunrise Healthcare',
      rating: 4.6,
      reviews: 198,
      distance: '4.2 km',
      specialties: ['Maternity', 'Gynecology', 'Neonatal'],
      emergency: false,
      beds: '150+',
      address: '789 Oak Boulevard, New York'
    },
    {
      id: 4,
      name: 'Metro Heart Institute',
      rating: 4.9,
      reviews: 412,
      distance: '5.8 km',
      specialties: ['Cardiology', 'Cardiac Surgery', 'Vascular'],
      emergency: true,
      beds: '180+',
      address: '321 Medical Plaza, New York'
    }
  ]

  const emergencyServices = [
    { icon: Truck, label: 'Ambulance', number: '911' },
    { icon: Phone, label: 'Emergency', number: '911' },
  ]

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <ChevronLeft size={24} className="text-text-primary" />
          </Link>
          <h1 className="text-heading-md text-text-primary flex-1">Hospitals</h1>
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
            placeholder="Search hospitals..."
            className="bg-transparent text-text-primary placeholder-text-secondary outline-none flex-1 text-body"
          />
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Emergency Services */}
        <div className="bg-error rounded-card shadow-card p-5">
          <h2 className="text-heading-sm text-white mb-4 flex items-center gap-2">
            <Truck size={24} />
            Emergency Services
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {emergencyServices.map((service, index) => {
              const Icon = service.icon
              return (
                <a
                  key={index}
                  href={`tel:${service.number}`}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 transition-colors"
                >
                  <Icon className="text-white mx-auto mb-2" size={28} />
                  <p className="text-body font-semibold text-white">{service.label}</p>
                  <p className="text-heading-sm font-bold text-white">{service.number}</p>
                </a>
              )
            })}
          </div>
        </div>

        {/* Hospitals Near You */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-heading-sm text-text-primary">Hospitals Near You</h2>
            <button className="flex items-center gap-1 text-primary text-caption font-semibold">
              <Navigation size={14} />
              View Map
            </button>
          </div>

          <div className="space-y-4">
            {hospitals.map((hospital) => (
              <Link
                key={hospital.id}
                href={`/hospitals/${hospital.id}`}
                className="block bg-white rounded-card shadow-card p-5 hover:scale-[1.02] transition-transform"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-body font-semibold text-text-primary">{hospital.name}</h3>
                      {hospital.emergency && (
                        <div className="px-2 py-1 bg-error/10 rounded-chip">
                          <span className="text-[10px] font-bold text-error">24/7</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <Star size={14} className="text-warning fill-warning" />
                      <span className="text-caption font-medium text-text-primary">{hospital.rating}</span>
                      <span className="text-caption text-text-secondary">({hospital.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-caption text-text-secondary">
                      <MapPin size={14} />
                      <span>{hospital.distance} away</span>
                      <span className="ml-auto">{hospital.beds} beds</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-caption text-text-secondary mb-2">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/20 text-primary rounded-chip text-caption font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-caption text-text-secondary mb-4">
                  <MapPin size={14} />
                  <span>{hospital.address}</span>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`tel:+1234567890`}
                    className="flex-1 py-2.5 border-2 border-primary text-primary rounded-button text-button flex items-center justify-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone size={18} />
                    Call
                  </a>
                  <button className="flex-1 py-2.5 bg-primary text-white rounded-button text-button flex items-center justify-center gap-2">
                    <Navigation size={18} />
                    Directions
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-4 p-3 bg-background rounded-xl hover:bg-secondary/20 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Truck className="text-primary" size={20} />
              </div>
              <span className="text-body font-medium text-text-primary flex-1 text-left">Book Ambulance</span>
            </button>
            <button className="w-full flex items-center gap-4 p-3 bg-background rounded-xl hover:bg-secondary/20 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="text-primary" size={20} />
              </div>
              <span className="text-body font-medium text-text-primary flex-1 text-left">Find ICU Beds</span>
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
