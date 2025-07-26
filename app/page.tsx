'use client'

import { useState } from 'react'
import OnboardingScreen from '@/components/OnboardingScreen'
import Dashboard from '@/components/Dashboard'
import Sidebar from '@/components/Sidebar'
import MenuManagement from '@/components/MenuManagement'
import OrderManagement from '@/components/OrderManagement'
import IncomeDashboard from '@/components/IncomeDashboard'
import CommunitySupport from '@/components/CommunitySupport'
import Ratings from '@/components/Ratings'
import Settings from '@/components/Settings'

function Schedule() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule</h1>
      <p className="text-gray-600">Manage your cooking schedule and availability here.</p>
      <div className="mt-8 text-gray-400">(Schedule feature coming soon!)</div>
    </div>
  )
}

export default function Home() {
  const [isOnboarded, setIsOnboarded] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [activeTab, setActiveTab] = useState('dashboard')

  if (!isOnboarded) {
    return (
      <OnboardingScreen 
        currentStep={currentStep}
        onNext={() => {
          if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
          } else {
            setIsOnboarded(true)
          }
        }}
      />
    )
  }

  let MainComponent = null
  if (activeTab === 'dashboard') MainComponent = <Dashboard />
  else if (activeTab === 'menu') MainComponent = <MenuManagement />
  else if (activeTab === 'orders') MainComponent = <OrderManagement />
  else if (activeTab === 'earnings') MainComponent = <IncomeDashboard />
  else if (activeTab === 'community') MainComponent = <CommunitySupport />
  else if (activeTab === 'schedule') MainComponent = <Schedule />
  else if (activeTab === 'ratings') MainComponent = <Ratings />
  else if (activeTab === 'settings') MainComponent = <Settings />

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {MainComponent}
      </main>
    </div>
  )
} 