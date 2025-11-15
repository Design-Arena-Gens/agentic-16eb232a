'use client'

import { ChevronLeft, Star, MapPin, GraduationCap, Award, Users, Calendar, MessageCircle } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'
import { useState } from 'react'

export default function DoctorProfile() {
  const [selectedDate, setSelectedDate] = useState('Mar 15')

  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.8,
    reviews: 127,
    patients: '2,500+',
    experience: '15 years',
    education: 'Harvard Medical School',
    location: 'Manhattan Medical Center, New York',
    about: 'Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in preventive cardiology and heart failure management.',
    consultationFee: 80,
    avatar: 'SJ'
  }

  const dates = ['Mar 15', 'Mar 16', 'Mar 17', 'Mar 18', 'Mar 19']
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

  const reviews = [
    {
      id: 1,
      name: 'John Smith',
      rating: 5,
      date: '2 days ago',
      comment: 'Excellent doctor! Very thorough and takes time to explain everything.',
      avatar: 'JS'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      rating: 5,
      date: '1 week ago',
      comment: 'Dr. Johnson is professional and caring. Highly recommend!',
      avatar: 'MG'
    }
  ]

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/doctors">
            <ChevronLeft size={24} className="text-text-primary" />
          </Link>
          <h1 className="text-heading-md text-text-primary">Doctor Profile</h1>
        </div>

        {/* Doctor Info Card */}
        <div className="flex gap-4 mb-6">
          <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-heading-sm flex-shrink-0">
            {doctor.avatar}
          </div>
          <div className="flex-1">
            <h2 className="text-heading-sm text-text-primary">{doctor.name}</h2>
            <p className="text-body text-text-secondary mb-2">{doctor.specialty}</p>
            <div className="flex items-center gap-1">
              <Star size={16} className="text-warning fill-warning" />
              <span className="text-body font-medium text-text-primary">{doctor.rating}</span>
              <span className="text-caption text-text-secondary">({doctor.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-background rounded-2xl p-4 text-center">
            <Users className="text-primary mx-auto mb-2" size={24} />
            <p className="text-body font-semibold text-text-primary">{doctor.patients}</p>
            <p className="text-caption text-text-secondary">Patients</p>
          </div>
          <div className="bg-background rounded-2xl p-4 text-center">
            <Award className="text-primary mx-auto mb-2" size={24} />
            <p className="text-body font-semibold text-text-primary">{doctor.experience}</p>
            <p className="text-caption text-text-secondary">Experience</p>
          </div>
          <div className="bg-background rounded-2xl p-4 text-center">
            <Star className="text-primary mx-auto mb-2" size={24} />
            <p className="text-body font-semibold text-text-primary">{doctor.rating}</p>
            <p className="text-caption text-text-secondary">Rating</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="px-6 space-y-6 pb-6">
        {/* About */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-3">About</h3>
          <p className="text-body text-text-secondary leading-relaxed">{doctor.about}</p>
        </div>

        {/* Education & Location */}
        <div className="bg-white rounded-card shadow-card p-5 space-y-4">
          <div className="flex items-start gap-3">
            <GraduationCap className="text-primary mt-1" size={20} />
            <div>
              <p className="text-caption text-text-secondary">Education</p>
              <p className="text-body font-medium text-text-primary">{doctor.education}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-primary mt-1" size={20} />
            <div>
              <p className="text-caption text-text-secondary">Location</p>
              <p className="text-body font-medium text-text-primary">{doctor.location}</p>
            </div>
          </div>
        </div>

        {/* Book Appointment */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-4">Book Appointment</h3>

          {/* Date Selection */}
          <div className="mb-4">
            <p className="text-caption text-text-secondary mb-3">Select Date</p>
            <div className="flex gap-2 overflow-x-auto">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-3 rounded-xl min-w-[80px] text-center transition-colors ${
                    selectedDate === date
                      ? 'bg-primary text-white'
                      : 'bg-background text-text-primary border border-gray-200'
                  }`}
                >
                  <p className="text-button">{date.split(' ')[1]}</p>
                  <p className="text-caption">{date.split(' ')[0]}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          <div>
            <p className="text-caption text-text-secondary mb-3">Available Time Slots</p>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time, index) => (
                <button
                  key={time}
                  className={`py-2.5 rounded-xl text-caption font-medium transition-colors ${
                    index === 3
                      ? 'bg-primary text-white'
                      : 'bg-background text-text-primary border border-gray-200 hover:border-primary'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary">Reviews ({doctor.reviews})</h3>
            <Link href="#" className="text-primary text-caption font-semibold">See All</Link>
          </div>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex gap-3 mb-2">
                  <div className="w-10 h-10 bg-secondary text-primary rounded-xl flex items-center justify-center font-semibold text-caption">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-body font-medium text-text-primary">{review.name}</p>
                      <span className="text-caption text-text-secondary">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={12} className="text-warning fill-warning" />
                      ))}
                    </div>
                    <p className="text-body text-text-secondary">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-20 left-0 right-0 bg-white px-6 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-caption text-text-secondary">Consultation Fee</p>
            <p className="text-heading-sm text-primary">${doctor.consultationFee}</p>
          </div>
          <button className="flex-1 py-3 bg-primary text-white rounded-button text-button flex items-center justify-center gap-2">
            <Calendar size={20} />
            Book Appointment
          </button>
          <button className="w-12 h-12 border-2 border-primary text-primary rounded-button flex items-center justify-center">
            <MessageCircle size={20} />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
