# CookConnect - Home Cook Platform

A comprehensive platform for home cooks to sell their delicious meals, manage orders, track earnings, and connect with their community.

## Features

### 🏠 Registration & Profile Creation
- Household registration with identity verification
- Profile setup with kitchen certification status
- Menu creation with descriptions and pricing
- Food safety training integration

### 📋 Menu Management
- Easy tools to upload and update daily/weekly dishes
- Cuisine type categorization
- Preparation time tracking
- Available quantities management
- Allergen and dietary information
- Photo uploads for dishes

### 📦 Order Management
- Real-time order viewing and tracking
- Accept/reject order functionality
- Order status updates (pending, accepted, completed, rejected)
- Special instructions handling
- Customer communication tools

### 💰 Income Dashboard
- Track earnings (daily, weekly, monthly, total)
- Payout management and settings
- Transaction history
- Tax reporting tools
- Rating performance tracking

### 👥 Community & Support
- Forum for sharing tips and experiences
- Food safety resources and guidelines
- Business and pricing strategy guides
- Customer support with live chat
- FAQ and help documentation

## Technology Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cookconnect-seller-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/             # React components
│   ├── Dashboard.tsx      # Main dashboard
│   ├── MenuManagement.tsx # Menu management
│   ├── OrderManagement.tsx # Order tracking
│   ├── IncomeDashboard.tsx # Earnings tracking
│   ├── CommunitySupport.tsx # Community features
│   ├── OnboardingScreen.tsx # Welcome flow
│   └── Sidebar.tsx        # Navigation
├── types/                 # TypeScript type definitions
│   └── index.d.ts         # Main types
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
└── README.md             # This file
```

## Key Components

### OnboardingScreen
- 4-step welcome process
- Progress tracking
- Feature introduction
- Benefits explanation

### Dashboard
- Key metrics overview
- Quick actions
- Recent orders
- Daily tips

### MenuManagement
- Dish creation and editing
- Availability toggles
- Pricing management
- Inventory tracking

### OrderManagement
- Real-time order status
- Accept/reject functionality
- Customer communication
- Order filtering

### IncomeDashboard
- Earnings tracking
- Payout management
- Transaction history
- Tax reporting

### CommunitySupport
- Forum discussions
- Resource library
- Support channels
- FAQ access

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. Create new components in the `components/` directory
2. Add TypeScript types in `types/index.d.ts`
3. Update the sidebar navigation in `components/Sidebar.tsx`
4. Add routing logic in `app/page.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@cookconnect.com or visit our community forum.

---

Built with ❤️ for home cooks everywhere 