'use client'

import React, { useState } from 'react'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  Download,
  CreditCard,
  Star,
  BarChart3
} from 'lucide-react'
import { Earnings } from '@/types'

export default function IncomeDashboard() {
  const [earnings] = useState<Earnings>({
    today: 156.25,
    thisWeek: 892.50,
    thisMonth: 3247.80,
    total: 15420.65,
    pendingPayout: 1250.00
  })

  const [recentTransactions] = useState([
    {
      id: 1,
      type: 'order',
      amount: 24.50,
      description: 'Spicy Thai Curry - Mike Chen',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'payout',
      amount: -500.00,
      description: 'Weekly payout to bank account',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'order',
      amount: 18.75,
      description: 'Homemade Lasagna - Emma Wilson',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 4,
      type: 'order',
      amount: 22.00,
      description: 'Chicken Tikka Masala - David Kim',
      date: '2024-01-13',
      status: 'completed'
    }
  ])

  const [ratings] = useState([
    { month: 'Jan', rating: 4.8, orders: 45 },
    { month: 'Feb', rating: 4.9, orders: 52 },
    { month: 'Mar', rating: 4.7, orders: 48 },
    { month: 'Apr', rating: 4.8, orders: 55 },
    { month: 'May', rating: 4.9, orders: 61 },
    { month: 'Jun', rating: 4.8, orders: 58 }
  ])

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Income Dashboard</h1>
        <p className="text-gray-600">Track your earnings, payouts, and financial performance</p>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Today's Earnings</p>
              <p className="text-2xl font-bold text-gray-900">${earnings.today}</p>
              <p className="text-sm text-green-600 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12.5%
              </p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 text-green-600">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">This Week</p>
              <p className="text-2xl font-bold text-gray-900">${earnings.thisWeek}</p>
              <p className="text-sm text-green-600 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8.2%
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">This Month</p>
              <p className="text-2xl font-bold text-gray-900">${earnings.thisMonth}</p>
              <p className="text-sm text-green-600 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                +15.3%
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
              <BarChart3 className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending Payout</p>
              <p className="text-2xl font-bold text-gray-900">${earnings.pendingPayout}</p>
              <p className="text-sm text-blue-600 flex items-center">
                <CreditCard className="w-4 h-4 mr-1" />
                Available
              </p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50 text-yellow-600">
              <CreditCard className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Earnings Chart */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Earnings Trend</h3>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Download className="w-4 h-4" />
            </button>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Earnings chart will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Ratings Performance */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Rating Performance</h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">4.8</span>
            </div>
          </div>
          <div className="space-y-3">
            {ratings.map((rating, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{rating.month}</span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{rating.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({rating.orders} orders)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          <button className="btn-secondary text-sm">View All</button>
        </div>
        
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'order' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {transaction.type === 'order' ? <DollarSign className="w-4 h-4" /> : <CreditCard className="w-4 h-4" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                </p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  transaction.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payout Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Bank Account</span>
              <span className="font-medium">****1234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Payout Schedule</span>
              <span className="font-medium">Weekly</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Minimum Payout</span>
              <span className="font-medium">$50.00</span>
            </div>
            <button className="w-full btn-primary">Update Settings</button>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Information</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Earnings (YTD)</span>
              <span className="font-medium">${earnings.total}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Platform Fees</span>
              <span className="font-medium">$1,542.07</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Net Earnings</span>
              <span className="font-medium text-green-600">$13,878.58</span>
            </div>
            <button className="w-full btn-secondary">Download Tax Report</button>
          </div>
        </div>
      </div>
    </div>
  )
} 