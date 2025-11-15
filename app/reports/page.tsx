'use client'

import { ChevronLeft, Download, Share2, FileText, TestTube, Activity, Filter } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'
import { useState } from 'react'

export default function Reports() {
  const [activeTab, setActiveTab] = useState<'all' | 'lab' | 'prescription'>('all')

  const reports = [
    {
      id: 1,
      title: 'Complete Blood Count',
      type: 'lab',
      date: 'Mar 12, 2024',
      doctor: 'Dr. Sarah Johnson',
      status: 'normal',
      icon: TestTube
    },
    {
      id: 2,
      title: 'Lipid Profile',
      type: 'lab',
      date: 'Mar 10, 2024',
      doctor: 'Dr. Sarah Johnson',
      status: 'normal',
      icon: TestTube
    },
    {
      id: 3,
      title: 'Prescription - Lisinopril',
      type: 'prescription',
      date: 'Mar 8, 2024',
      doctor: 'Dr. Sarah Johnson',
      status: 'active',
      icon: FileText
    },
    {
      id: 4,
      title: 'ECG Report',
      type: 'lab',
      date: 'Feb 28, 2024',
      doctor: 'Dr. Michael Chen',
      status: 'normal',
      icon: Activity
    },
    {
      id: 5,
      title: 'Prescription - Metformin',
      type: 'prescription',
      date: 'Feb 25, 2024',
      doctor: 'Dr. Emily Rodriguez',
      status: 'completed',
      icon: FileText
    }
  ]

  const filteredReports = reports.filter(report => {
    if (activeTab === 'all') return true
    return report.type === activeTab
  })

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <ChevronLeft size={24} className="text-text-primary" />
          </Link>
          <h1 className="text-heading-md text-text-primary flex-1">Medical Reports</h1>
          <button className="w-10 h-10 bg-background rounded-xl flex items-center justify-center">
            <Filter size={20} className="text-text-primary" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-background rounded-button p-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-2 rounded-button text-button transition-colors ${
              activeTab === 'all'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            All Reports
          </button>
          <button
            onClick={() => setActiveTab('lab')}
            className={`flex-1 py-2 rounded-button text-button transition-colors ${
              activeTab === 'lab'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            Lab Tests
          </button>
          <button
            onClick={() => setActiveTab('prescription')}
            className={`flex-1 py-2 rounded-button text-button transition-colors ${
              activeTab === 'prescription'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            Prescriptions
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="px-6 py-6 space-y-4">
        {filteredReports.map((report) => {
          const Icon = report.icon
          return (
            <div key={report.id} className="bg-white rounded-card shadow-card p-5">
              <div className="flex gap-4 mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  report.type === 'lab' ? 'bg-primary/10' : 'bg-secondary/20'
                }`}>
                  <Icon className="text-primary" size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-text-primary mb-1">{report.title}</h3>
                  <p className="text-caption text-text-secondary mb-1">{report.doctor}</p>
                  <p className="text-caption text-text-secondary">{report.date}</p>
                </div>
                <div className={`px-3 py-1 rounded-chip h-fit ${
                  report.status === 'normal' ? 'bg-success/10' :
                  report.status === 'active' ? 'bg-primary/10' :
                  'bg-text-secondary/10'
                }`}>
                  <span className={`text-caption font-medium capitalize ${
                    report.status === 'normal' ? 'text-success' :
                    report.status === 'active' ? 'text-primary' :
                    'text-text-secondary'
                  }`}>
                    {report.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-2.5 border-2 border-primary text-primary rounded-button text-button flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download
                </button>
                <button className="flex-1 py-2.5 bg-primary text-white rounded-button text-button flex items-center justify-center gap-2">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Upload Button */}
      <Link
        href="/reports/upload"
        className="fixed bottom-28 right-6 px-6 py-3 bg-primary text-white rounded-button shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="text-button">Upload Report</span>
      </Link>

      <BottomNav />
    </div>
  )
}
