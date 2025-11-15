'use client'

import { Video, Mic, MicOff, VideoOff, Phone, MessageCircle, Maximize } from 'lucide-react'
import { useState } from 'react'

export default function VideoCall() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)

  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    avatar: 'SJ'
  }

  return (
    <div className="min-h-screen bg-text-primary flex flex-col">
      {/* Video Area */}
      <div className="flex-1 relative">
        {/* Doctor Video (Main) */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-heading-lg font-bold">{doctor.avatar}</span>
            </div>
            <h2 className="text-heading-md mb-2">{doctor.name}</h2>
            <p className="text-body opacity-90">{doctor.specialty}</p>
          </div>
        </div>

        {/* User Video (PIP) */}
        <div className="absolute top-6 right-6 w-32 h-40 bg-text-primary rounded-2xl overflow-hidden shadow-lg border-2 border-white">
          {isVideoOff ? (
            <div className="w-full h-full bg-gradient-to-br from-accent to-text-secondary flex items-center justify-center">
              <VideoOff className="text-white" size={32} />
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
              <span className="text-white text-heading-md font-bold">You</span>
            </div>
          )}
        </div>

        {/* Call Duration */}
        <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-button">
          <p className="text-white text-button font-semibold">15:32</p>
        </div>

        {/* Connection Status */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-button flex items-center gap-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <p className="text-white text-caption">Connected</p>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white px-6 py-6 rounded-t-[32px] shadow-[0_-4px_24px_rgba(0,0,0,0.1)]">
        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-6 mb-6">
          {/* Mute */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              isMuted ? 'bg-error text-white' : 'bg-background text-text-primary'
            }`}
          >
            {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
          </button>

          {/* Video Toggle */}
          <button
            onClick={() => setIsVideoOff(!isVideoOff)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              isVideoOff ? 'bg-error text-white' : 'bg-background text-text-primary'
            }`}
          >
            {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
          </button>

          {/* End Call */}
          <button className="w-16 h-16 bg-error rounded-full flex items-center justify-center hover:bg-error/90 transition-colors shadow-lg">
            <Phone size={28} className="text-white rotate-[135deg]" />
          </button>

          {/* Chat */}
          <button className="w-14 h-14 bg-background rounded-full flex items-center justify-center relative">
            <MessageCircle size={24} className="text-text-primary" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">2</span>
            </div>
          </button>

          {/* Maximize */}
          <button className="w-14 h-14 bg-background rounded-full flex items-center justify-center">
            <Maximize size={24} className="text-text-primary" />
          </button>
        </div>

        {/* Info */}
        <div className="bg-background rounded-2xl p-4 text-center">
          <p className="text-caption text-text-secondary mb-1">Consultation with</p>
          <p className="text-body font-semibold text-text-primary">{doctor.name}</p>
        </div>
      </div>
    </div>
  )
}
