'use client'

import { ChevronLeft, Plus, FileText, AlertCircle, Pill, Syringe } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

export default function MedicalHistory() {
  const conditions = [
    {
      id: 1,
      name: 'Hypertension',
      diagnosedDate: 'Jan 2020',
      status: 'Ongoing',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      name: 'Type 2 Diabetes',
      diagnosedDate: 'Mar 2021',
      status: 'Managed',
      doctor: 'Dr. Emily Rodriguez'
    }
  ]

  const allergies = [
    { id: 1, name: 'Penicillin', severity: 'Severe', reaction: 'Anaphylaxis' },
    { id: 2, name: 'Peanuts', severity: 'Moderate', reaction: 'Hives' }
  ]

  const medications = [
    {
      id: 1,
      name: 'Lisinopril 10mg',
      dosage: 'Once daily',
      startDate: 'Jan 2020',
      prescribedBy: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      name: 'Metformin 500mg',
      dosage: 'Twice daily',
      startDate: 'Mar 2021',
      prescribedBy: 'Dr. Emily Rodriguez'
    }
  ]

  const vaccinations = [
    { id: 1, name: 'COVID-19 Booster', date: 'Dec 2023', nextDue: 'Dec 2024' },
    { id: 2, name: 'Influenza', date: 'Oct 2023', nextDue: 'Oct 2024' },
    { id: 3, name: 'Tetanus', date: 'May 2020', nextDue: 'May 2030' }
  ]

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-primary text-white px-6 pt-12 pb-8 rounded-b-[32px]">
        <div className="flex items-center gap-4">
          <Link href="/profile">
            <ChevronLeft size={24} className="text-white" />
          </Link>
          <h1 className="text-heading-md">Medical History</h1>
        </div>
      </div>

      <div className="px-6 -mt-6 space-y-6 pb-6">
        {/* Chronic Conditions */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary flex items-center gap-2">
              <FileText size={20} />
              Chronic Conditions
            </h3>
            <button className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
              <Plus size={18} className="text-white" />
            </button>
          </div>
          <div className="space-y-3">
            {conditions.map((condition) => (
              <div
                key={condition.id}
                className="bg-background rounded-2xl p-4 hover:bg-secondary/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-body font-semibold text-text-primary">{condition.name}</h4>
                  <div className="px-3 py-1 bg-primary/10 rounded-chip">
                    <span className="text-caption text-primary font-medium">{condition.status}</span>
                  </div>
                </div>
                <p className="text-caption text-text-secondary mb-1">
                  Diagnosed: {condition.diagnosedDate}
                </p>
                <p className="text-caption text-text-secondary">
                  Doctor: {condition.doctor}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Allergies */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary flex items-center gap-2">
              <AlertCircle size={20} />
              Allergies
            </h3>
            <button className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
              <Plus size={18} className="text-white" />
            </button>
          </div>
          <div className="space-y-3">
            {allergies.map((allergy) => (
              <div
                key={allergy.id}
                className="bg-error/5 border-l-4 border-error rounded-xl p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-body font-semibold text-text-primary">{allergy.name}</h4>
                  <div className={`px-3 py-1 rounded-chip ${
                    allergy.severity === 'Severe' ? 'bg-error/10' : 'bg-warning/10'
                  }`}>
                    <span className={`text-caption font-medium ${
                      allergy.severity === 'Severe' ? 'text-error' : 'text-warning'
                    }`}>
                      {allergy.severity}
                    </span>
                  </div>
                </div>
                <p className="text-caption text-text-secondary">
                  Reaction: {allergy.reaction}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Medications */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary flex items-center gap-2">
              <Pill size={20} />
              Current Medications
            </h3>
            <button className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
              <Plus size={18} className="text-white" />
            </button>
          </div>
          <div className="space-y-3">
            {medications.map((medication) => (
              <div
                key={medication.id}
                className="bg-background rounded-2xl p-4 hover:bg-secondary/10 transition-colors"
              >
                <h4 className="text-body font-semibold text-text-primary mb-1">
                  {medication.name}
                </h4>
                <p className="text-caption text-text-secondary mb-2">
                  {medication.dosage}
                </p>
                <div className="flex justify-between items-center text-caption text-text-secondary">
                  <span>Started: {medication.startDate}</span>
                  <span>{medication.prescribedBy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vaccinations */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary flex items-center gap-2">
              <Syringe size={20} />
              Vaccinations
            </h3>
            <button className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
              <Plus size={18} className="text-white" />
            </button>
          </div>
          <div className="space-y-3">
            {vaccinations.map((vaccination) => (
              <div
                key={vaccination.id}
                className="bg-background rounded-2xl p-4 hover:bg-secondary/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-body font-semibold text-text-primary">
                    {vaccination.name}
                  </h4>
                  <div className="px-3 py-1 bg-success/10 rounded-chip">
                    <span className="text-caption text-success font-medium">Completed</span>
                  </div>
                </div>
                <div className="flex justify-between text-caption text-text-secondary">
                  <span>Date: {vaccination.date}</span>
                  <span>Next Due: {vaccination.nextDue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Family History */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-heading-sm text-text-primary">Family History</h3>
            <button className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
              <Plus size={18} className="text-white" />
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-background rounded-2xl p-4">
              <p className="text-body font-semibold text-text-primary mb-1">Heart Disease</p>
              <p className="text-caption text-text-secondary">Father - Diagnosed at age 55</p>
            </div>
            <div className="bg-background rounded-2xl p-4">
              <p className="text-body font-semibold text-text-primary mb-1">Type 2 Diabetes</p>
              <p className="text-caption text-text-secondary">Mother - Diagnosed at age 48</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
