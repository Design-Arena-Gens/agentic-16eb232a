'use client'

import { ChevronLeft, Send, Paperclip, Mic, Video, Phone } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Chat() {
  const [message, setMessage] = useState('')

  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    avatar: 'SJ',
    online: true
  }

  const messages = [
    {
      id: 1,
      sender: 'doctor',
      text: 'Hello! How can I help you today?',
      time: '10:30 AM'
    },
    {
      id: 2,
      sender: 'user',
      text: 'Hi Doctor, I have been experiencing chest discomfort for the past few days.',
      time: '10:32 AM'
    },
    {
      id: 3,
      sender: 'doctor',
      text: 'I understand your concern. Can you describe the type of discomfort? Is it sharp, dull, or pressure-like?',
      time: '10:33 AM'
    },
    {
      id: 4,
      sender: 'user',
      text: 'It feels like pressure, especially after physical activity.',
      time: '10:35 AM'
    },
    {
      id: 5,
      sender: 'doctor',
      text: 'Thank you for sharing that. I recommend scheduling an in-person consultation for a thorough examination. Would you like to book an appointment?',
      time: '10:37 AM'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/doctors/1">
            <ChevronLeft size={24} className="text-text-primary" />
          </Link>
          <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-caption flex-shrink-0 relative">
            {doctor.avatar}
            {doctor.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white"></div>
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-body font-semibold text-text-primary">{doctor.name}</h2>
            <p className="text-caption text-text-secondary">{doctor.specialty}</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-background rounded-xl flex items-center justify-center">
              <Phone size={20} className="text-primary" />
            </button>
            <button className="w-10 h-10 bg-background rounded-xl flex items-center justify-center">
              <Video size={20} className="text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] ${
                msg.sender === 'user'
                  ? 'bg-primary text-white rounded-[20px] rounded-tr-sm'
                  : 'bg-white text-text-primary rounded-[20px] rounded-tl-sm shadow-card'
              } px-5 py-3`}
            >
              <p className="text-body leading-relaxed">{msg.text}</p>
              <p
                className={`text-[12px] mt-2 ${
                  msg.sender === 'user' ? 'text-white/70' : 'text-text-secondary'
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Replies */}
      <div className="px-6 pb-4 flex-shrink-0">
        <div className="flex gap-2 overflow-x-auto">
          <button className="px-4 py-2 bg-white rounded-chip text-caption font-medium text-text-primary border border-gray-200 whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary transition-colors">
            Book Appointment
          </button>
          <button className="px-4 py-2 bg-white rounded-chip text-caption font-medium text-text-primary border border-gray-200 whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary transition-colors">
            Share Report
          </button>
          <button className="px-4 py-2 bg-white rounded-chip text-caption font-medium text-text-primary border border-gray-200 whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary transition-colors">
            Request Prescription
          </button>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white px-6 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] flex-shrink-0">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center text-text-secondary">
            <Paperclip size={22} />
          </button>
          <div className="flex-1 bg-background rounded-input px-4 py-3 flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-transparent text-body text-text-primary outline-none flex-1"
            />
            <button className="text-text-secondary">
              <Mic size={20} />
            </button>
          </div>
          <button className="w-12 h-12 bg-primary rounded-button flex items-center justify-center hover:bg-primary/90 transition-colors">
            <Send size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
