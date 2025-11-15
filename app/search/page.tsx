'use client'

import { Search as SearchIcon, Clock, TrendingUp, Stethoscope, TestTube, Building2, Pill } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'
import { useState } from 'react'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')

  const recentSearches = [
    'Cardiologist near me',
    'Blood test',
    'Dr. Sarah Johnson',
    'COVID-19 vaccine'
  ]

  const trendingSearches = [
    'Annual health checkup',
    'Dermatologist consultation',
    'X-ray imaging',
    'Diabetes screening'
  ]

  const quickCategories = [
    { icon: Stethoscope, label: 'Doctors', href: '/doctors', color: 'bg-primary' },
    { icon: TestTube, label: 'Lab Tests', href: '/labs', color: 'bg-secondary' },
    { icon: Building2, label: 'Hospitals', href: '/hospitals', color: 'bg-primary' },
    { icon: Pill, label: 'Pharmacy', href: '/pharmacy', color: 'bg-secondary' },
  ]

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header with Search */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <h1 className="text-heading-md text-text-primary mb-6">Search</h1>

        {/* Search Bar */}
        <div className="bg-background rounded-input px-4 py-3 flex items-center gap-3">
          <SearchIcon size={20} className="text-text-secondary" />
          <input
            type="text"
            placeholder="Search doctors, hospitals, tests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-text-primary placeholder-text-secondary outline-none flex-1 text-body"
          />
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Quick Categories */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link
                  key={index}
                  href={category.href}
                  className="bg-white rounded-card shadow-card p-5 flex flex-col items-center gap-3 hover:scale-105 transition-transform"
                >
                  <div className={`${category.color} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <span className="text-body font-medium text-text-primary">{category.label}</span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Recent Searches */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4 flex items-center gap-2">
            <Clock size={20} />
            Recent Searches
          </h2>
          <div className="bg-white rounded-card shadow-card p-4 space-y-3">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between py-2 group"
                onClick={() => setSearchQuery(search)}
              >
                <span className="text-body text-text-secondary group-hover:text-text-primary transition-colors">
                  {search}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-text-secondary"
                >
                  <path
                    d="M3 8h10M8 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Trending Searches */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4 flex items-center gap-2">
            <TrendingUp size={20} />
            Trending Searches
          </h2>
          <div className="bg-white rounded-card shadow-card p-4">
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="px-4 py-2 bg-background rounded-chip text-caption font-medium text-text-secondary hover:bg-primary hover:text-white transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Specialists */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4">Popular Specialists</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              'Cardiology',
              'Dermatology',
              'Pediatrics',
              'Orthopedics',
              'Neurology',
              'Dentistry'
            ].map((specialty, index) => (
              <Link
                key={index}
                href={`/doctors?specialty=${specialty}`}
                className="bg-white rounded-2xl p-4 text-center shadow-card hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <Stethoscope className="text-primary" size={20} />
                </div>
                <p className="text-caption font-medium text-text-primary">{specialty}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-card shadow-card p-6 text-white">
          <h3 className="text-heading-sm mb-2">Health Tip of the Day</h3>
          <p className="text-body opacity-90">
            Regular health checkups can help detect problems before they start. They also help find problems early when your chances for treatment are better.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-primary rounded-button text-button">
            Learn More
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
