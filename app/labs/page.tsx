'use client'

import { ChevronLeft, TestTube, Clock, MapPin, Star, Filter } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'
import { useState } from 'react'

export default function Labs() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Blood Test', 'Radiology', 'Pathology', 'Cardiology']

  const popularTests = [
    { name: 'Complete Blood Count', price: 15, duration: '2 hours' },
    { name: 'Lipid Profile', price: 25, duration: '3 hours' },
    { name: 'Thyroid Function', price: 35, duration: '4 hours' },
    { name: 'HbA1c (Diabetes)', price: 20, duration: '2 hours' },
  ]

  const labs = [
    {
      id: 1,
      name: 'Quest Diagnostics',
      rating: 4.8,
      reviews: 245,
      distance: '1.2 km',
      tests: '150+ tests',
      timing: 'Open 24/7',
      homeCollection: true
    },
    {
      id: 2,
      name: 'LabCorp Medical Lab',
      rating: 4.7,
      reviews: 189,
      distance: '2.5 km',
      tests: '200+ tests',
      timing: '8:00 AM - 8:00 PM',
      homeCollection: true
    },
    {
      id: 3,
      name: 'City Diagnostics Center',
      rating: 4.6,
      reviews: 156,
      distance: '3.1 km',
      tests: '120+ tests',
      timing: '7:00 AM - 9:00 PM',
      homeCollection: false
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
          <h1 className="text-heading-md text-text-primary flex-1">Lab Tests</h1>
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
            placeholder="Search lab tests..."
            className="bg-transparent text-text-primary placeholder-text-secondary outline-none flex-1 text-body"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-chip text-caption font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-text-secondary border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6 space-y-6">
        {/* Popular Tests */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4">Popular Tests</h2>
          <div className="grid grid-cols-2 gap-3">
            {popularTests.map((test, index) => (
              <div
                key={index}
                className="bg-white rounded-card shadow-card p-4 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <TestTube className="text-primary" size={20} />
                </div>
                <h3 className="text-body font-semibold text-text-primary mb-2">{test.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-heading-sm text-primary font-bold">${test.price}</span>
                  <div className="flex items-center gap-1 text-caption text-text-secondary">
                    <Clock size={12} />
                    <span>{test.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnostic Centers */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4">Diagnostic Centers Near You</h2>
          <div className="space-y-4">
            {labs.map((lab) => (
              <Link
                key={lab.id}
                href={`/labs/${lab.id}`}
                className="block bg-white rounded-card shadow-card p-5 hover:scale-[1.02] transition-transform"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <TestTube className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-text-primary mb-1">{lab.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star size={14} className="text-warning fill-warning" />
                      <span className="text-caption font-medium text-text-primary">{lab.rating}</span>
                      <span className="text-caption text-text-secondary">({lab.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-caption text-text-secondary">
                      <MapPin size={14} />
                      <span>{lab.distance} away</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-caption text-text-secondary">Available Tests</p>
                    <p className="text-body font-medium text-text-primary">{lab.tests}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-caption text-text-secondary">Timing</p>
                    <p className="text-body font-medium text-text-primary">{lab.timing}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {lab.homeCollection && (
                    <div className="px-3 py-1 bg-success/10 rounded-chip">
                      <span className="text-caption text-success font-medium">Home Collection</span>
                    </div>
                  )}
                  <button className="ml-auto px-6 py-2 bg-primary text-white rounded-button text-button">
                    Book Test
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Health Packages */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4">Health Packages</h2>
          <div className="space-y-3">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-card shadow-card p-5 text-white">
              <h3 className="text-heading-sm mb-2">Annual Health Checkup</h3>
              <p className="text-body opacity-90 mb-4">Complete body checkup with 50+ tests</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-caption line-through opacity-75">$299</span>
                  <span className="text-heading-md font-bold ml-2">$199</span>
                </div>
                <button className="px-6 py-2 bg-white text-primary rounded-button text-button">
                  Book Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-card shadow-card p-5 border-2 border-secondary">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-body font-semibold text-text-primary mb-1">Diabetes Screening</h3>
                  <p className="text-caption text-text-secondary">HbA1c, Fasting & PP Sugar</p>
                </div>
                <span className="text-heading-sm text-primary font-bold">$45</span>
              </div>
              <button className="w-full py-2 border-2 border-primary text-primary rounded-button text-button">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
