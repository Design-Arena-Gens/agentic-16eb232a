'use client'

import { ChevronLeft, Calendar, Clock, Video, MapPin, CreditCard } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState('Mar 15')
  const [selectedTime, setSelectedTime] = useState('2:00 PM')
  const [consultationType, setConsultationType] = useState<'video' | 'clinic'>('video')

  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    consultationFee: 80,
    avatar: 'SJ'
  }

  const dates = ['Mar 15', 'Mar 16', 'Mar 17', 'Mar 18', 'Mar 19']
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/doctors/1">
            <ChevronLeft size={24} className="text-text-primary" />
          </Link>
          <h1 className="text-heading-md text-text-primary">Book Appointment</h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Doctor Info */}
        <div className="bg-white rounded-card shadow-card p-5 flex gap-4">
          <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-body flex-shrink-0">
            {doctor.avatar}
          </div>
          <div className="flex-1">
            <h2 className="text-body font-semibold text-text-primary">{doctor.name}</h2>
            <p className="text-caption text-text-secondary mb-2">{doctor.specialty}</p>
            <p className="text-heading-sm text-primary font-bold">${doctor.consultationFee}</p>
          </div>
        </div>

        {/* Consultation Type */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-4">Consultation Type</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setConsultationType('video')}
              className={`p-4 rounded-2xl border-2 transition-all ${
                consultationType === 'video'
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200'
              }`}
            >
              <Video className={`mx-auto mb-2 ${consultationType === 'video' ? 'text-primary' : 'text-text-secondary'}`} size={28} />
              <p className={`text-button ${consultationType === 'video' ? 'text-primary' : 'text-text-secondary'}`}>
                Video Call
              </p>
            </button>
            <button
              onClick={() => setConsultationType('clinic')}
              className={`p-4 rounded-2xl border-2 transition-all ${
                consultationType === 'clinic'
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200'
              }`}
            >
              <MapPin className={`mx-auto mb-2 ${consultationType === 'clinic' ? 'text-primary' : 'text-text-secondary'}`} size={28} />
              <p className={`text-button ${consultationType === 'clinic' ? 'text-primary' : 'text-text-secondary'}`}>
                In Clinic
              </p>
            </button>
          </div>
        </div>

        {/* Select Date */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-4 flex items-center gap-2">
            <Calendar size={20} />
            Select Date
          </h3>
          <div className="flex gap-2 overflow-x-auto">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-5 py-4 rounded-2xl min-w-[85px] text-center transition-all ${
                  selectedDate === date
                    ? 'bg-primary text-white'
                    : 'bg-background text-text-primary border border-gray-200'
                }`}
              >
                <p className="text-button font-bold">{date.split(' ')[1]}</p>
                <p className="text-caption mt-1">{date.split(' ')[0]}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Select Time */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-4 flex items-center gap-2">
            <Clock size={20} />
            Select Time
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-xl text-caption font-medium transition-all ${
                  selectedTime === time
                    ? 'bg-primary text-white'
                    : 'bg-background text-text-primary border border-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Patient Details */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-4">Patient Details</h3>
          <div className="space-y-4">
            <div>
              <label className="text-caption text-text-secondary mb-2 block">Full Name</label>
              <input
                type="text"
                placeholder="Enter patient name"
                defaultValue="Alex Morgan"
                className="w-full px-4 py-3 bg-background rounded-input text-body text-text-primary outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-caption text-text-secondary mb-2 block">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                defaultValue="+1 (555) 123-4567"
                className="w-full px-4 py-3 bg-background rounded-input text-body text-text-primary outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-caption text-text-secondary mb-2 block">Reason for Visit</label>
              <textarea
                placeholder="Describe your symptoms..."
                rows={3}
                className="w-full px-4 py-3 bg-background rounded-input text-body text-text-primary outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-4 flex items-center gap-2">
            <CreditCard size={20} />
            Payment Summary
          </h3>
          <div className="space-y-3 pb-4 border-b border-gray-100">
            <div className="flex justify-between">
              <span className="text-body text-text-secondary">Consultation Fee</span>
              <span className="text-body font-medium text-text-primary">${doctor.consultationFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-body text-text-secondary">Platform Fee</span>
              <span className="text-body font-medium text-text-primary">$5</span>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-heading-sm text-text-primary">Total</span>
            <span className="text-heading-sm text-primary font-bold">${doctor.consultationFee + 5}</span>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-6 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <button className="w-full py-4 bg-primary text-white rounded-button text-button">
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}
