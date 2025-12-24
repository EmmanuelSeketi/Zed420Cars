# CarHub - Premium Car E-Commerce Platform

A modern React-based e-commerce application for buying and selling premium cars. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🚗 **Product Listing**: Browse a curated collection of premium cars
- 🏷️ **Category Filtering**: Filter cars by type (Electric, Luxury, SUV, Sports, etc.)
- ❤️ **Favorites**: Save your favorite cars for later
- 🛒 **Shopping Cart**: Add cars to cart with quantity management
- ⭐ **Ratings & Reviews**: View customer ratings and review counts
- 💰 **Discounts**: Display original and discounted prices
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI**: Clean and intuitive interface with Tailwind CSS

## Tech Stack

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Tailwind CSS (if not already done):
```bash
npm install -D tailwindcss postcss autoprefixer
```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building

Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Navigation header with cart
│   ├── Hero.tsx          # Hero section with search
│   ├── ProductGrid.tsx   # Product listing and filtering
│   ├── Cart.tsx          # Shopping cart view
│   └── Footer.tsx        # Footer with links
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Features Breakdown

### Product Grid
- Display cars in responsive grid layout
- Category-based filtering
- Favorite/wishlist functionality
- Star rating display
- Discount badge display

### Shopping Cart
- Add/remove items
- Quantity adjustment
- Real-time total calculation
- Tax calculation (10%)
- Free shipping
- Order summary

### Responsive Design
- Mobile-first approach
- Adaptive layout for all screen sizes
- Touch-friendly controls

## Future Enhancements

- User authentication
- Wishlist persistence
- Advanced search and filters
- Product details page
- Payment integration
- Order tracking
- Customer reviews and ratings
