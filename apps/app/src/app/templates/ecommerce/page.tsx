'use client';

import { useState } from 'react';
import { MotionDiv } from '@/components/motion/MotionDiv';
import { 
  ShoppingCartIcon, 
  HeartIcon, 
  StarIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function EcommerceTemplate() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const products = [
    {
      id: 1,
      name: "Arctic Wireless Headphones",
      price: 299.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      category: "Electronics"
    },
    {
        id: 5,
        name: "Snow White Laptop",
        price: 1299.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
        category: "Electronics"
      },
    {
      id: 2,
      name: "Frost Gaming Mouse",
      price: 79.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
      category: "Gaming"
    },
    {
      id: 3,
      name: "Crystal Clear Monitor",
      price: 499.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
      category: "Electronics"
    },
    {
      id: 4,
      name: "Ice Blue Keyboard",
      price: 159.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1595225476474-87563907198a?w=500&q=80",
      category: "Gaming"
    },
   
    {
      id: 6,
      name: "Glacier Gaming Chair",
      price: 399.99,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1610297625602-46063b7a4918?w=500&q=80",
      category: "Gaming"
    }
  ];

  const categories = ['All', 'Electronics', 'Gaming', 'Accessories'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header with Search */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 whitespace-nowrap">
              Arctic Store
            </h1>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
              <div className="relative flex items-center">
                <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                />
              </div>
            </div>

            {/* Cart Icons */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
                <HeartIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-blue-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="relative p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-blue-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Categories */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap
                ${activeCategory === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'}`}
            >
              {category}
            </button>
          ))}
          <button className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <MotionDiv
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 group-hover:opacity-75 transition-opacity z-10" />
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${product.price}</span>
                    <button className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
                      <ShoppingCartIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <HeartIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </main>
    </div>
  );
} 