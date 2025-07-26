'use client'

import React, { useState } from 'react'
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Package, 
  User, 
  Phone,
  MapPin,
  MessageSquare,
  Eye
} from 'lucide-react'
import { Order } from '@/types'

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      customer: "Mike Chen",
      dish: "Spicy Thai Curry",
      amount: 24.50,
      status: "pending",
      time: "2 hours ago",
      quantity: 2,
      specialInstructions: "Extra spicy, no peanuts"
    },
    {
      id: 2,
      customer: "Emma Wilson",
      dish: "Homemade Lasagna",
      amount: 18.75,
      status: "accepted",
      time: "4 hours ago",
      quantity: 1
    },
    {
      id: 3,
      customer: "David Kim",
      dish: "Chicken Tikka Masala",
      amount: 22.00,
      status: "completed",
      time: "1 day ago",
      quantity: 1
    },
    {
      id: 4,
      customer: "Lisa Rodriguez",
      dish: "Spicy Thai Curry",
      amount: 24.50,
      status: "pending",
      time: "30 minutes ago",
      quantity: 1,
      specialInstructions: "Mild spice level"
    }
  ])

  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const handleAcceptOrder = (id: number) => {
    setOrders(orders =>
      orders.map(order =>
        order.id === id ? { ...order, status: 'accepted' as const } : order
      )
    )
  }

  const handleRejectOrder = (id: number) => {
    setOrders(orders =>
      orders.map(order =>
        order.id === id ? { ...order, status: 'rejected' as const } : order
      )
    )
  }

  const handleCompleteOrder = (id: number) => {
    setOrders(orders =>
      orders.map(order =>
        order.id === id ? { ...order, status: 'completed' as const } : order
      )
    )
  }

  const filteredOrders = selectedStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedStatus)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'accepted': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />
      case 'accepted': return <Package className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'rejected': return <XCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Management</h1>
        <p className="text-gray-600">View, accept, and track your orders in real-time</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="card text-center">
          <p className="text-2xl font-bold text-yellow-600">
            {orders.filter(o => o.status === 'pending').length}
          </p>
          <p className="text-sm text-gray-600">Pending</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold text-blue-600">
            {orders.filter(o => o.status === 'accepted').length}
          </p>
          <p className="text-sm text-gray-600">In Progress</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold text-green-600">
            {orders.filter(o => o.status === 'completed').length}
          </p>
          <p className="text-sm text-gray-600">Completed</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold text-primary-600">
            ${orders.reduce((sum, order) => sum + order.amount, 0).toFixed(2)}
          </p>
          <p className="text-sm text-gray-600">Total Revenue</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-6">
        {['all', 'pending', 'accepted', 'completed', 'rejected'].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedStatus === status
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="card">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-full ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{order.customer}</h3>
                    <p className="text-sm text-gray-600">{order.dish}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Amount:</span>
                    <p className="font-medium text-gray-900">${order.amount}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Quantity:</span>
                    <p className="font-medium text-gray-900">{order.quantity}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Time:</span>
                    <p className="font-medium text-gray-900">{order.time}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                {order.specialInstructions && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <span className="font-medium">Special Instructions:</span> {order.specialInstructions}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col space-y-2 ml-4">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <User className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MapPin className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Eye className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-500">View Details</span>
              </div>

              <div className="flex space-x-2">
                {order.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleAcceptOrder(order.id)}
                      className="btn-primary text-sm px-3 py-1"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleRejectOrder(order.id)}
                      className="btn-secondary text-sm px-3 py-1"
                    >
                      Reject
                    </button>
                  </>
                )}
                {order.status === 'accepted' && (
                  <button
                    onClick={() => handleCompleteOrder(order.id)}
                    className="btn-primary text-sm px-3 py-1"
                  >
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 