import { useState } from 'react'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import ProductGrid from './components/ProductGrid.tsx'
import Footer from './components/Footer.tsx'
import Cart from './components/Cart.tsx'
import './index.css'

function App() {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])

  const cars = [
    {
      id: 1,
      make: 'Tesla',
      name: 'Tesla Model S',
      image: '/images/1.png',
      price: 85000,
      rating: 4.8,
      reviews: 256,
      discount: 10,
      category: 'Electric',
      badge: null,
      mileage: '15,000',
      engine: 'Electric',
      location: 'Lusaka City Center',
      style: 'Sedan'
    },
    {
      id: 2,
      make: 'BMW',
      name: 'BMW M440i',
      image: '/images/2.png',
      price: 72000,
      rating: 4.6,
      reviews: 189,
      discount: 15,
      category: 'Luxury',
      badge: null,
      mileage: '8,500',
      engine: '3.0L I6 Turbo',
      location: 'Kabulonga',
      style: 'Sedan'
    },
    {
      id: 3,
      make: 'Toyota',
      name: '2024 Toyota Corolla',
      image: '/images/3.png',
      price: 28000,
      rating: 4.7,
      reviews: 512,
      discount: 0,
      category: 'Sedan',
      badge: 'NEW',
      mileage: '5,200',
      engine: '2.0L I4',
      location: 'Northend',
      style: 'Sedan'
    },
    {
      id: 4,
      make: 'Mercedes-Benz',
      name: 'Mercedes-Benz GLE',
      image: '/images/4.png',
      price: 95000,
      rating: 4.9,
      reviews: 324,
      discount: 8,
      category: 'SUV',
      badge: null,
      mileage: '12,000',
      engine: '3.0L I6 Turbo',
      location: 'Ridgeway',
      style: 'SUV'
    },
    {
      id: 5,
      make: 'Audi',
      name: 'Audi RS6 Avant',
      image: '/images/5.png',
      price: 110000,
      rating: 4.7,
      reviews: 145,
      discount: 12,
      category: 'Performance',
      badge: null,
      mileage: '18,000',
      engine: '4.0L V8 Turbo',
      location: 'Avondale',
      style: 'Wagon'
    },
    {
      id: 6,
      make: 'Honda',
      name: 'Honda Civic',
      image: '/images/6.png',
      price: 32000,
      rating: 4.5,
      reviews: 678,
      discount: 5,
      category: 'Sedan',
      badge: null,
      mileage: '22,000',
      engine: '1.5L I4',
      location: 'Chelston',
      style: 'Sedan'
    },
    {
      id: 7,
      make: 'Ford',
      name: 'Ford Mustang GT',
      image: '/images/7.png',
      price: 55000,
      rating: 4.8,
      reviews: 420,
      discount: 20,
      category: 'Muscle',
      badge: null,
      mileage: '10,000',
      engine: '5.0L V8',
      location: 'Woodlands',
      style: 'Coupe'
    },
    {
      id: 8,
      make: 'Porsche',
      name: 'Porsche 911 Turbo',
      image: '/images/8.png',
      price: 180000,
      rating: 5,
      reviews: 98,
      discount: 0,
      category: 'Sports',
      badge: null,
      mileage: '3,500',
      engine: '3.8L H6 Turbo',
      location: 'Silverest',
      style: 'Coupe'
    }
  ]

  const addToCart = (car: any) => {
    const existingItem = cartItems.find(item => item.id === car.id)
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCartItems([...cartItems, { ...car, quantity: 1 }])
    }
  }

  const removeFromCart = (carId: number) => {
    setCartItems(cartItems.filter(item => item.id !== carId))
  }

  const updateQuantity = (carId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(carId)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === carId ? { ...item, quantity } : item
      ))
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
      
      {showCart ? (
        <Cart items={cartItems} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} />
      ) : (
        <>
          <Hero />

          <div className="py-8">
            <ProductGrid cars={cars} onAddToCart={addToCart} />
          </div>
        </>
      )}
      
      <Footer />
    </div>
  )
}

export default App
