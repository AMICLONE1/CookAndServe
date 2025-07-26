'use client'

import React, { useState } from 'react'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Camera, 
  Clock, 
  DollarSign,
  CheckCircle,
  XCircle
} from 'lucide-react'
import { MenuItem } from '@/types'
import { Dialog } from '@headlessui/react'

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Spicy Thai Curry",
      description: "Authentic Thai red curry with coconut milk, vegetables, and your choice of protein",
      price: 24.50,
      cuisineType: "Thai",
      preparationTime: 45,
      availableQuantity: 10,
      isAvailable: true,
      allergens: ["Coconut", "Peanuts"],
      dietaryInfo: ["Vegetarian option available"]
    },
    {
      id: 2,
      name: "Homemade Lasagna",
      description: "Classic Italian lasagna with layers of pasta, ricotta, mozzarella, and rich tomato sauce",
      price: 18.75,
      cuisineType: "Italian",
      preparationTime: 60,
      availableQuantity: 8,
      isAvailable: true,
      allergens: ["Dairy", "Gluten"],
      dietaryInfo: ["Contains meat"]
    },
    {
      id: 3,
      name: "Chicken Tikka Masala",
      description: "Tender chicken in creamy tomato-based curry sauce with aromatic spices",
      price: 22.00,
      cuisineType: "Indian",
      preparationTime: 50,
      availableQuantity: 12,
      isAvailable: true,
      allergens: ["Dairy"],
      dietaryInfo: ["Gluten-free option available"]
    }
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const [newDish, setNewDish] = useState({
    name: '',
    description: '',
    price: '',
    cuisineType: '',
    preparationTime: '',
    availableQuantity: '',
    allergens: '',
    dietaryInfo: '',
    imageUrl: '',
  })

  const handleToggleAvailability = (id: number) => {
    setMenuItems(items =>
      items.map(item =>
        item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
      )
    )
  }

  const handleDeleteItem = (id: number) => {
    setMenuItems(items => items.filter(item => item.id !== id))
  }

  const handleAddDish = () => {
    setMenuItems(items => [
      ...items,
      {
        id: Date.now(),
        name: newDish.name,
        description: newDish.description,
        price: parseFloat(newDish.price),
        cuisineType: newDish.cuisineType,
        preparationTime: parseInt(newDish.preparationTime),
        availableQuantity: parseInt(newDish.availableQuantity),
        isAvailable: true,
        allergens: newDish.allergens ? newDish.allergens.split(',').map(a => a.trim()) : [],
        dietaryInfo: newDish.dietaryInfo ? newDish.dietaryInfo.split(',').map(d => d.trim()) : [],
        imageUrl: newDish.imageUrl,
      }
    ])
    setShowAddForm(false)
    setNewDish({
      name: '', description: '', price: '', cuisineType: '', preparationTime: '', availableQuantity: '', allergens: '', dietaryInfo: '', imageUrl: ''
    })
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Menu Management</h1>
          <p className="text-gray-600">Manage your dishes, pricing, and availability</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Dish</span>
        </button>
      </div>

      {/* Add New Dish Modal */}
      <Dialog open={showAddForm} onClose={() => setShowAddForm(false)} className="relative z-50">
        <div className="fixed inset-0 flex items-center justify-center min-h-screen px-4">
          {/* Overlay/Backdrop */}
          <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
          <Dialog.Panel className="relative bg-white rounded-lg shadow-xl p-8 w-full max-w-lg z-10">
            <Dialog.Title className="text-xl font-bold mb-4">Add New Dish</Dialog.Title>
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); handleAddDish(); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input className="input-field mt-1" value={newDish.name} onChange={e => setNewDish(d => ({ ...d, name: e.target.value }))} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea className="input-field mt-1" value={newDish.description} onChange={e => setNewDish(d => ({ ...d, description: e.target.value }))} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                  <input className="input-field mt-1" type="number" min="0" step="0.01" value={newDish.price} onChange={e => setNewDish(d => ({ ...d, price: e.target.value }))} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cuisine Type</label>
                  <input className="input-field mt-1" value={newDish.cuisineType} onChange={e => setNewDish(d => ({ ...d, cuisineType: e.target.value }))} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preparation Time (min)</label>
                  <input className="input-field mt-1" type="number" min="1" value={newDish.preparationTime} onChange={e => setNewDish(d => ({ ...d, preparationTime: e.target.value }))} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Available Quantity</label>
                  <input className="input-field mt-1" type="number" min="1" value={newDish.availableQuantity} onChange={e => setNewDish(d => ({ ...d, availableQuantity: e.target.value }))} required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Allergens (comma separated)</label>
                <input className="input-field mt-1" value={newDish.allergens} onChange={e => setNewDish(d => ({ ...d, allergens: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Dietary Info (comma separated)</label>
                <input className="input-field mt-1" value={newDish.dietaryInfo} onChange={e => setNewDish(d => ({ ...d, dietaryInfo: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL (optional)</label>
                <input className="input-field mt-1" value={newDish.imageUrl} onChange={e => setNewDish(d => ({ ...d, imageUrl: e.target.value }))} />
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button type="button" className="btn-secondary" onClick={() => setShowAddForm(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Add Dish</button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="card">
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <Camera className="w-8 h-8 text-gray-400" />
            </div>

            {/* Item Info */}
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="p-1 text-red-400 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 text-sm">{item.description}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{item.cuisineType}</span>
                <span className="font-medium text-primary-600">${item.price}</span>
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.preparationTime} min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>Qty: {item.availableQuantity}</span>
                </div>
              </div>

              {/* Allergens & Dietary Info */}
              {item.allergens && item.allergens.length > 0 && (
                <div className="text-xs">
                  <span className="text-red-600 font-medium">Allergens: </span>
                  <span className="text-gray-600">{item.allergens.join(', ')}</span>
                </div>
              )}

              {/* Availability Toggle */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="text-sm text-gray-600">Available</span>
                <button
                  onClick={() => handleToggleAvailability(item.id)}
                  className={`p-2 rounded-full ${
                    item.isAvailable 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {item.isAvailable ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <XCircle className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <p className="text-2xl font-bold text-gray-900">{menuItems.length}</p>
          <p className="text-sm text-gray-600">Total Dishes</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold text-green-600">
            {menuItems.filter(item => item.isAvailable).length}
          </p>
          <p className="text-sm text-gray-600">Available</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold text-primary-600">
            ${menuItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </p>
          <p className="text-sm text-gray-600">Average Price</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold text-blue-600">
            {menuItems.reduce((sum, item) => sum + item.availableQuantity, 0)}
          </p>
          <p className="text-sm text-gray-600">Total Quantity</p>
        </div>
      </div>
    </div>
  )
} 