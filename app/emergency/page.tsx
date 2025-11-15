'use client'

import { ChevronLeft, Phone, Truck, MapPin, AlertTriangle, Heart, User } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

export default function Emergency() {
  const emergencyContacts = [
    {
      id: 1,
      name: 'Emergency Services',
      number: '911',
      description: 'Police, Fire, Medical',
      icon: AlertTriangle,
      color: 'bg-error'
    },
    {
      id: 2,
      name: 'Ambulance',
      number: '911',
      description: 'Medical Emergency',
      icon: Truck,
      color: 'bg-error'
    },
    {
      id: 3,
      name: 'Poison Control',
      number: '1-800-222-1222',
      description: '24/7 Helpline',
      icon: AlertTriangle,
      color: 'bg-warning'
    }
  ]

  const personalContacts = [
    {
      id: 1,
      name: 'John Morgan',
      relationship: 'Spouse',
      number: '+1 (555) 234-5678',
      isPrimary: true
    },
    {
      id: 2,
      name: 'Dr. Sarah Johnson',
      relationship: 'Primary Doctor',
      number: '+1 (555) 345-6789',
      isPrimary: false
    }
  ]

  const medicalInfo = {
    bloodType: 'O+',
    allergies: 'Penicillin, Peanuts',
    conditions: 'Hypertension, Type 2 Diabetes',
    medications: 'Lisinopril, Metformin'
  }

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-error text-white px-6 pt-12 pb-8 rounded-b-[32px]">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/">
            <ChevronLeft size={24} className="text-white" />
          </Link>
          <h1 className="text-heading-md flex items-center gap-2">
            <AlertTriangle size={28} />
            Emergency
          </h1>
        </div>
        <p className="text-body opacity-90">Quick access to emergency services and contacts</p>
      </div>

      <div className="px-6 -mt-6 space-y-6 pb-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-4">Emergency Services</h3>
          <div className="space-y-3">
            {emergencyContacts.map((contact) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.id}
                  href={`tel:${contact.number}`}
                  className={`${contact.color} text-white rounded-2xl p-5 flex items-center gap-4 hover:opacity-90 transition-opacity`}
                >
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-body font-bold mb-1">{contact.name}</h4>
                    <p className="text-caption opacity-90 mb-2">{contact.description}</p>
                    <p className="text-heading-sm font-bold">{contact.number}</p>
                  </div>
                  <Phone size={24} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Nearest Hospital */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary">Nearest Hospital</h3>
            <button className="text-primary text-caption font-semibold">View All</button>
          </div>
          <div className="bg-primary/5 border-2 border-primary rounded-2xl p-4">
            <div className="flex gap-3 mb-3">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <MapPin className="text-primary" size={22} />
              </div>
              <div className="flex-1">
                <h4 className="text-body font-semibold text-text-primary mb-1">
                  Manhattan Medical Center
                </h4>
                <p className="text-caption text-text-secondary mb-2">
                  123 Park Avenue, New York
                </p>
                <div className="flex items-center gap-2 text-caption">
                  <span className="px-2 py-1 bg-error/10 rounded-chip text-error font-bold text-[10px]">
                    24/7 EMERGENCY
                  </span>
                  <span className="text-text-secondary">2.1 km away</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+1234567890"
                className="flex-1 py-2.5 border-2 border-primary text-primary rounded-button text-button flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call
              </a>
              <button className="flex-1 py-2.5 bg-primary text-white rounded-button text-button flex items-center justify-center gap-2">
                <MapPin size={18} />
                Directions
              </button>
            </div>
          </div>
        </div>

        {/* Personal Emergency Contacts */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary">Emergency Contacts</h3>
            <button className="text-primary text-caption font-semibold">+ Add</button>
          </div>
          <div className="space-y-3">
            {personalContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-background rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <User className="text-primary" size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-body font-semibold text-text-primary">
                      {contact.name}
                    </h4>
                    {contact.isPrimary && (
                      <span className="px-2 py-0.5 bg-primary/10 rounded-chip text-[10px] font-bold text-primary">
                        PRIMARY
                      </span>
                    )}
                  </div>
                  <p className="text-caption text-text-secondary mb-1">{contact.relationship}</p>
                  <p className="text-caption text-text-primary font-medium">{contact.number}</p>
                </div>
                <a
                  href={`tel:${contact.number}`}
                  className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
                >
                  <Phone size={18} className="text-white" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Information */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary">Medical Information</h3>
            <Link href="/medical-history" className="text-primary text-caption font-semibold">
              Edit
            </Link>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-background rounded-2xl">
              <Heart className="text-error" size={20} />
              <div className="flex-1">
                <p className="text-caption text-text-secondary">Blood Type</p>
                <p className="text-body font-semibold text-text-primary">{medicalInfo.bloodType}</p>
              </div>
            </div>
            <div className="p-3 bg-error/5 border-l-4 border-error rounded-xl">
              <p className="text-caption text-text-secondary mb-1">⚠️ Allergies</p>
              <p className="text-body font-semibold text-text-primary">{medicalInfo.allergies}</p>
            </div>
            <div className="p-3 bg-background rounded-2xl">
              <p className="text-caption text-text-secondary mb-1">Chronic Conditions</p>
              <p className="text-body text-text-primary">{medicalInfo.conditions}</p>
            </div>
            <div className="p-3 bg-background rounded-2xl">
              <p className="text-caption text-text-secondary mb-1">Current Medications</p>
              <p className="text-body text-text-primary">{medicalInfo.medications}</p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-warning/10 border-2 border-warning rounded-card p-5">
          <div className="flex gap-3">
            <AlertTriangle className="text-warning flex-shrink-0" size={24} />
            <div>
              <h4 className="text-body font-semibold text-text-primary mb-2">
                Important Note
              </h4>
              <p className="text-body text-text-secondary">
                In case of life-threatening emergency, always call 911 immediately. This app is for informational purposes and should not replace professional medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
