'use client'

import React, { useState } from 'react'
import { User, Lock, Bell } from 'lucide-react'

export default function Settings() {
  const [profile, setProfile] = useState({
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+1 555-123-4567',
  })
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  })
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    community: true,
    tips: false,
  })

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
      <p className="text-gray-600 mb-6">Update your profile, password, and notification preferences.</p>

      {/* Profile Section */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center"><User className="w-5 h-5 mr-2" />Profile Info</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              className="input-field mt-1"
              value={profile.name}
              onChange={e => setProfile({ ...profile, name: e.target.value })}
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              className="input-field mt-1"
              value={profile.email}
              onChange={e => setProfile({ ...profile, email: e.target.value })}
              type="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              className="input-field mt-1"
              value={profile.phone}
              onChange={e => setProfile({ ...profile, phone: e.target.value })}
              type="tel"
            />
          </div>
          <button type="button" className="btn-primary mt-2">Save Profile</button>
        </form>
      </div>

      {/* Password Section */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center"><Lock className="w-5 h-5 mr-2" />Change Password</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <input
              className="input-field mt-1"
              value={password.current}
              onChange={e => setPassword({ ...password, current: e.target.value })}
              type="password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              className="input-field mt-1"
              value={password.new}
              onChange={e => setPassword({ ...password, new: e.target.value })}
              type="password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              className="input-field mt-1"
              value={password.confirm}
              onChange={e => setPassword({ ...password, confirm: e.target.value })}
              type="password"
            />
          </div>
          <button type="button" className="btn-primary mt-2">Update Password</button>
        </form>
      </div>

      {/* Notification Preferences */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center"><Bell className="w-5 h-5 mr-2" />Notifications</h2>
        <form className="space-y-4">
          <div className="flex items-center">
            <input
              id="orderUpdates"
              type="checkbox"
              checked={notifications.orderUpdates}
              onChange={e => setNotifications({ ...notifications, orderUpdates: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="orderUpdates" className="text-gray-700">Order updates</label>
          </div>
          <div className="flex items-center">
            <input
              id="community"
              type="checkbox"
              checked={notifications.community}
              onChange={e => setNotifications({ ...notifications, community: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="community" className="text-gray-700">Community activity</label>
          </div>
          <div className="flex items-center">
            <input
              id="tips"
              type="checkbox"
              checked={notifications.tips}
              onChange={e => setNotifications({ ...notifications, tips: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="tips" className="text-gray-700">Tips & resources</label>
          </div>
          <button type="button" className="btn-primary mt-2">Save Preferences</button>
        </form>
      </div>
    </div>
  )
} 