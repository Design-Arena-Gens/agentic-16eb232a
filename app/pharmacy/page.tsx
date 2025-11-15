'use client'

import { ChevronLeft, Pill, MapPin, Clock, ShoppingCart, Upload, Star, Filter } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'
import { useState } from 'react'

export default function Pharmacy() {
  const [cartItems, setCartItems] = useState(2)

  const categories = ['All', 'Prescription', 'OTC', 'Supplements', 'Personal Care', 'Devices']

  const medicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      brand: 'Generic',
      price: 5.99,
      originalPrice: 8.99,
      rating: 4.5,
      inStock: true,
      requiresPrescription: false
    },
    {
      id: 2,
      name: 'Lisinopril 10mg',
      brand: 'Prinivil',
      price: 12.99,
      originalPrice: null,
      rating: 4.7,
      inStock: true,
      requiresPrescription: true
    },
    {
      id: 3,
      name: 'Vitamin D3 1000 IU',
      brand: 'Nature Made',
      price: 15.99,
      originalPrice: 19.99,
      rating: 4.6,
      inStock: true,
      requiresPrescription: false
    },
    {
      id: 4,
      name: 'Metformin 500mg',
      brand: 'Glucophage',
      price: 18.99,
      originalPrice: null,
      rating: 4.8,
      inStock: true,
      requiresPrescription: true
    }
  ]

  const nearbyPharmacies = [
    {
      id: 1,
      name: 'CVS Pharmacy',
      distance: '0.8 km',
      timing: 'Open 24/7',
      delivery: true
    },
    {
      id: 2,
      name: 'Walgreens',
      distance: '1.2 km',
      timing: 'Open till 10 PM',
      delivery: true
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
          <h1 className="text-heading-md text-text-primary flex-1">Pharmacy</h1>
          <Link href="/pharmacy/cart" className="relative">
            <ShoppingCart size={24} className="text-text-primary" />
            {cartItems > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-error rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">{cartItems}</span>
              </div>
            )}
          </Link>
        </div>

        {/* Search Bar */}
        <div className="bg-background rounded-input px-4 py-3 flex items-center gap-3 mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="Search medicines..."
            className="bg-transparent text-text-primary placeholder-text-secondary outline-none flex-1 text-body"
          />
          <button className="text-primary">
            <Filter size={20} />
          </button>
        </div>

        {/* Upload Prescription */}
        <button className="w-full bg-primary text-white rounded-button p-4 flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors">
          <Upload size={20} />
          <span className="text-button">Upload Prescription</span>
        </button>
      </div>

      {/* Categories */}
      <div className="px-6 py-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-chip text-caption font-medium whitespace-nowrap bg-white text-text-secondary border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6 space-y-6">
        {/* Special Offers */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-card shadow-card p-5 text-white">
          <h3 className="text-heading-sm mb-2">Special Offer</h3>
          <p className="text-body opacity-90 mb-3">Get 20% off on your first order</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <code className="text-button">FIRST20</code>
            </div>
            <button className="px-6 py-2 bg-white text-primary rounded-button text-button font-semibold">
              Copy
            </button>
          </div>
        </div>

        {/* Nearby Pharmacies */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4">Nearby Pharmacies</h2>
          <div className="flex gap-3 overflow-x-auto">
            {nearbyPharmacies.map((pharmacy) => (
              <div
                key={pharmacy.id}
                className="bg-white rounded-card shadow-card p-4 min-w-[280px] flex-shrink-0"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Pill className="text-primary" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-text-primary mb-1">{pharmacy.name}</h3>
                    <div className="flex items-center gap-2 text-caption text-text-secondary">
                      <MapPin size={12} />
                      <span>{pharmacy.distance}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-caption text-text-secondary mb-3">
                  <Clock size={12} />
                  <span>{pharmacy.timing}</span>
                </div>
                {pharmacy.delivery && (
                  <div className="px-3 py-1 bg-success/10 rounded-chip inline-block">
                    <span className="text-caption text-success font-medium">Home Delivery</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Popular Medicines */}
        <div>
          <h2 className="text-heading-sm text-text-primary mb-4">Popular Medicines</h2>
          <div className="grid grid-cols-1 gap-4">
            {medicines.map((medicine) => (
              <div
                key={medicine.id}
                className="bg-white rounded-card shadow-card p-5 hover:scale-[1.02] transition-transform"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Pill className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="text-body font-semibold text-text-primary">{medicine.name}</h3>
                        <p className="text-caption text-text-secondary">{medicine.brand}</p>
                      </div>
                      {medicine.requiresPrescription && (
                        <div className="px-2 py-1 bg-warning/10 rounded-chip">
                          <span className="text-[10px] font-bold text-warning">Rx</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      <Star size={14} className="text-warning fill-warning" />
                      <span className="text-caption font-medium text-text-primary">{medicine.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        {medicine.originalPrice && (
                          <span className="text-caption text-text-secondary line-through mr-2">
                            ${medicine.originalPrice}
                          </span>
                        )}
                        <span className="text-heading-sm text-primary font-bold">
                          ${medicine.price}
                        </span>
                      </div>
                      <button className="px-6 py-2 bg-primary text-white rounded-button text-button">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h3 className="text-heading-sm text-text-primary mb-3">💊 Medicine Reminder</h3>
          <p className="text-body text-text-secondary mb-4">
            Never miss your medication. Set up reminders for your prescriptions.
          </p>
          <button className="w-full py-3 border-2 border-primary text-primary rounded-button text-button">
            Set Reminder
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
