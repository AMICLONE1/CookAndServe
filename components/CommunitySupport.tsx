'use client'

import React, { useState } from 'react'
import { 
  MessageSquare, 
  Heart, 
  Share2, 
  BookOpen, 
  Shield, 
  HelpCircle,
  Users,
  TrendingUp,
  Plus,
  Search
} from 'lucide-react'
import { CommunityPost } from '@/types'

export default function CommunitySupport() {
  const [posts] = useState<CommunityPost[]>([
    {
      id: 1,
      author: "Maria Garcia",
      title: "Best practices for food safety at home",
      content: "I've been cooking for 2 years now and wanted to share some important food safety tips that have helped me maintain a 5-star rating. Always use separate cutting boards for raw meat and vegetables, and make sure to wash your hands frequently...",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      tags: ["food-safety", "tips", "best-practices"]
    },
    {
      id: 2,
      author: "James Wilson",
      title: "How to price your dishes competitively",
      content: "Pricing can be tricky when you're starting out. I've found that looking at similar dishes in your area and considering your ingredients cost plus 30-40% markup works well. Don't undervalue your time and skills!",
      timestamp: "1 day ago",
      likes: 18,
      comments: 12,
      tags: ["pricing", "business", "advice"]
    },
    {
      id: 3,
      author: "Lisa Chen",
      title: "Weekend meal prep ideas",
      content: "I love preparing meals in advance for the weekend rush. Here are my go-to recipes that can be made ahead and reheated perfectly: lasagna, curry, and hearty soups. What are your favorites?",
      timestamp: "3 days ago",
      likes: 31,
      comments: 15,
      tags: ["meal-prep", "weekend", "recipes"]
    }
  ])

  const [resources] = useState([
    {
      title: "Food Safety Guidelines",
      description: "Complete guide to maintaining food safety standards in your home kitchen",
      icon: Shield,
      category: "Safety"
    },
    {
      title: "Pricing Strategy Guide",
      description: "Learn how to price your dishes competitively while maintaining profitability",
      icon: TrendingUp,
      category: "Business"
    },
    {
      title: "Kitchen Setup Checklist",
      description: "Essential equipment and setup for a professional home kitchen",
      icon: BookOpen,
      category: "Setup"
    },
    {
      title: "Customer Service Tips",
      description: "Best practices for providing excellent customer service and building repeat business",
      icon: Users,
      category: "Service"
    }
  ])

  const [activeTab, setActiveTab] = useState<'community' | 'resources' | 'support'>('community')

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Community & Support</h1>
        <p className="text-gray-600">Connect with fellow home cooks, share tips, and access helpful resources</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('community')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'community'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Community
        </button>
        <button
          onClick={() => setActiveTab('resources')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'resources'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Resources
        </button>
        <button
          onClick={() => setActiveTab('support')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'support'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Support
        </button>
      </div>

      {/* Community Tab */}
      {activeTab === 'community' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Community Forum</h2>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>New Post</span>
            </button>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-medium">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{post.title}</h3>
                      <span className="text-sm text-gray-500">by {post.author}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{post.content}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <button className="flex items-center space-x-1 hover:text-red-500">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-blue-500">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-green-500">
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === 'resources' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Helpful Resources</h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div key={index} className="card hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-50 rounded-lg">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {resource.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                      <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Support Tab */}
      {activeTab === 'support' && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Get Help & Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">FAQ</h3>
                  <p className="text-sm text-gray-600">Find answers to common questions</p>
                </div>
              </div>
              <button className="w-full btn-primary">Browse FAQ</button>
            </div>

            <div className="card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Live Chat</h3>
                  <p className="text-sm text-gray-600">Chat with our support team</p>
                </div>
              </div>
              <button className="w-full btn-primary">Start Chat</button>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Email Support</span>
                <span className="font-medium">support@cookconnect.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Phone Support</span>
                <span className="font-medium">1-800-COOK-HELP</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Response Time</span>
                <span className="font-medium">Within 24 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Business Hours</span>
                <span className="font-medium">Mon-Fri 9AM-6PM EST</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 