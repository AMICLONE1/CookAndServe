'use client'

import { ChefHat } from 'lucide-react'

interface OnboardingScreenProps {
  currentStep: number
  onNext: () => void
}

export default function OnboardingScreen({ currentStep, onNext }: OnboardingScreenProps) {
  const steps = [
    {
      title: "Welcome to CookConnect",
      description: "Start your journey as a home cook and share your delicious meals with your community.",
      benefits: [
        "Earn money from your cooking passion",
        "Flexible working hours",
        "Build your culinary reputation",
        "Connect with food lovers"
      ]
    },
    {
      title: "Create Your Profile",
      description: "Set up your profile and verify your identity to start selling.",
      benefits: [
        "Secure identity verification",
        "Professional profile setup",
        "Kitchen safety certification",
        "Food handling training"
      ]
    },
    {
      title: "Set Up Your Menu",
      description: "Create your menu with descriptions, pricing, and availability.",
      benefits: [
        "Easy menu management",
        "Photo uploads for dishes",
        "Flexible pricing options",
        "Inventory tracking"
      ]
    },
    {
      title: "Start Earning",
      description: "You're all set! Start accepting orders and earning money.",
      benefits: [
        "Real-time order notifications",
        "Secure payment processing",
        "Customer ratings system",
        "24/7 support"
      ]
    }
  ]

  const currentStepData = steps[currentStep - 1]
  const progressPercentage = (currentStep / 4) * 100

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep} of 4</span>
            <span>{Math.round(progressPercentage)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Main Card */}
        <div className="card">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
            {currentStepData.title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-center mb-6">
            {currentStepData.description}
          </p>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">What you'll get:</h3>
            <ul className="space-y-2">
              {currentStepData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-600 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <button
            onClick={onNext}
            className="w-full btn-primary"
          >
            {currentStep === 4 ? "Get Started" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  )
} 