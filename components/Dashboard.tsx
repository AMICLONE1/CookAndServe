'use client'

import React, { useState } from 'react'
import { 
  TrendingUp, 
  Clock, 
  Star, 
  DollarSign, 
  Package, 
  Users,
  Plus,
  Eye
} from 'lucide-react'
import { Order } from '@/types'

export default function Dashboard() {
  const [recentOrders] = useState<Order[]>([
    {
      id: 1,
      customer: "Mike Chen",
      dish: "Spicy Thai Curry",
      amount: 24.50,
      status: "pending",
      time: "2 hours ago"
    },
    {
      id: 2,
      customer: "Emma Wilson",
      dish: "Homemade Lasagna",
      amount: 18.75,
      status: "accepted",
      time: "4 hours ago"
    },
    {
      id: 3,
      customer: "David Kim",
      dish: "Chicken Tikka Masala",
      amount: 22.00,
      status: "completed",
      time: "1 day ago"
    }
  ])

  const stats = [
    {
      title: "Today's Earnings",
      value: "$156.25",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Orders",
      value: "8",
      change: "+2",
      icon: Package,
      color: "text-blue-600"
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.2",
      icon: Star,
      color: "text-yellow-600"
    },
    {
      title: "Prep Time",
      value: "45 min",
      change: "-5 min",
      icon: Clock,
      color: "text-purple-600"
    }
  ]

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Sarah! Here's your cooking business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <Plus className="w-5 h-5 text-primary-600" />
                <span className="font-medium">Add New Dish</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-600" />
                <span className="font-medium">Update Schedule</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="font-medium">View Community</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{order.customer}</p>
                  <p className="text-sm text-gray-600">{order.dish}</p>
                  <p className="text-xs text-gray-500">{order.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">${order.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'accepted' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
            <button className="w-full flex items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Eye className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">View All Orders</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Food Safety Reminder</h4>
            <p className="text-sm text-blue-700">Remember to maintain proper temperature control for all prepared foods. Keep hot foods above 140°F and cold foods below 40°F.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900 mb-2">Customer Satisfaction</h4>
            <p className="text-sm text-green-700">Your customers love your presentation! Consider adding garnishes to elevate your dishes and improve ratings.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 