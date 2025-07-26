'use client'

import React, { useState } from 'react'
import { Star, User } from 'lucide-react'

const mockReviews = [
  {
    id: 1,
    reviewer: 'Emma Wilson',
    rating: 5,
    comment: 'Delicious food and great service! Highly recommend.',
    date: '2024-06-01',
  },
  {
    id: 2,
    reviewer: 'Mike Chen',
    rating: 4,
    comment: 'Tasty curry, but delivery was a bit late.',
    date: '2024-05-28',
  },
  {
    id: 3,
    reviewer: 'Lisa Rodriguez',
    rating: 5,
    comment: 'Amazing lasagna! Will order again.',
    date: '2024-05-25',
  },
  {
    id: 4,
    reviewer: 'David Kim',
    rating: 3,
    comment: 'Good food, but portion size could be bigger.',
    date: '2024-05-20',
  },
]

export default function Ratings() {
  const [reviews] = useState(mockReviews)
  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1)
  const ratingCounts = [5, 4, 3, 2, 1].map(star =>
    reviews.filter(r => r.rating === star).length
  )

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Ratings & Reviews</h1>
      <p className="text-gray-600 mb-6">See your average rating and recent customer feedback.</p>

      {/* Average Rating */}
      <div className="flex items-center space-x-4 mb-8">
        <span className="text-5xl font-bold text-yellow-500 flex items-center">
          {averageRating}
          <Star className="w-10 h-10 ml-2 text-yellow-500" />
        </span>
        <span className="text-lg text-gray-600">({reviews.length} reviews)</span>
      </div>

      {/* Ratings Distribution */}
      <div className="mb-8">
        {([5, 4, 3, 2, 1] as const).map((star, idx) => (
          <div key={star} className="flex items-center mb-2">
            <span className="w-8 text-gray-700 font-medium">{star} <Star className="inline w-4 h-4 text-yellow-400" /></span>
            <div className="flex-1 mx-2 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-3 bg-yellow-400"
                style={{ width: `${(ratingCounts[idx] / reviews.length) * 100 || 2}%` }}
              ></div>
            </div>
            <span className="w-8 text-gray-600">{ratingCounts[idx]}</span>
          </div>
        ))}
      </div>

      {/* Recent Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="card">
            <div className="flex items-center mb-2">
              <User className="w-6 h-6 text-primary-600 mr-2" />
              <span className="font-medium text-gray-900">{review.reviewer}</span>
              <span className="ml-4 flex items-center text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" />
                ))}
              </span>
              <span className="ml-auto text-xs text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 