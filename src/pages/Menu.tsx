import { useState } from 'react';
import { Star, Plus, Minus, ShoppingCart } from 'lucide-react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'hot-coffee', name: 'Hot Coffee' },
    { id: 'cold-coffee', name: 'Cold Coffee' },
    { id: 'espresso', name: 'Espresso' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'tea', name: 'Tea' }
  ];

  const menuItems = [
    {
      id: 'espresso',
      name: 'Classic Espresso',
      category: 'espresso',
      price: 3.50,
      description: 'Rich and bold single shot of espresso',
      rating: 4.8,
      image: '☕',
      popular: true
    },
    {
      id: 'americano',
      name: 'Americano',
      category: 'hot-coffee',
      price: 4.00,
      description: 'Espresso with hot water for a smooth taste',
      rating: 4.6,
      image: '☕',
      popular: false
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      category: 'hot-coffee',
      price: 4.50,
      description: 'Perfect blend of espresso, steamed milk, and foam',
      rating: 4.9,
      image: '☕',
      popular: true
    },
    {
      id: 'latte',
      name: 'Vanilla Latte',
      category: 'hot-coffee',
      price: 5.00,
      description: 'Smooth espresso with vanilla and steamed milk',
      rating: 4.7,
      image: '☕',
      popular: false
    },
    {
      id: 'mocha',
      name: 'Mocha',
      category: 'hot-coffee',
      price: 5.50,
      description: 'Rich chocolate and espresso with steamed milk',
      rating: 4.8,
      image: '☕',
      popular: true
    },
    {
              id: 'cold-casri',
        name: 'Cold Casri',
      category: 'cold-coffee',
      price: 4.50,
              description: 'Smooth and refreshing 18-hour cold casri',
      rating: 4.9,
      image: '🧊',
      popular: true
    },
    {
      id: 'iced-latte',
      name: 'Iced Latte',
      category: 'cold-coffee',
      price: 4.75,
      description: 'Espresso with cold milk over ice',
      rating: 4.5,
      image: '🧊',
      popular: false
    },
    {
      id: 'frappuccino',
      name: 'Caramel Frappuccino',
      category: 'cold-coffee',
      price: 6.00,
      description: 'Blended coffee with caramel and whipped cream',
      rating: 4.7,
      image: '🧊',
      popular: false
    },
    {
      id: 'croissant',
      name: 'Butter Croissant',
      category: 'pastries',
      price: 3.50,
      description: 'Flaky and buttery French croissant',
      rating: 4.6,
      image: '🥐',
      popular: false
    },
    {
      id: 'muffin',
      name: 'Blueberry Muffin',
      category: 'pastries',
      price: 3.00,
      description: 'Fresh baked muffin with real blueberries',
      rating: 4.4,
      image: '🧁',
      popular: false
    },
    {
      id: 'green-tea',
      name: 'Green Tea',
      category: 'tea',
      price: 3.50,
      description: 'Premium Japanese green tea',
      rating: 4.3,
      image: '🫖',
      popular: false
    },
    {
      id: 'chai-latte',
      name: 'Chai Latte',
      category: 'tea',
      price: 4.50,
      description: 'Spiced tea with steamed milk',
      rating: 4.6,
      image: '🫖',
      popular: false
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(item => item.id === itemId);
      return total + (item?.price || 0) * quantity;
    }, 0);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="text-gray-900 min-h-screen flex items-center">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully crafted selection of coffee, tea, and pastries. 
              Each item is made with the finest ingredients and served with passion.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-coffee-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-coffee-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

                     {/* Menu Items */}
           <div className="grid grid-cols-3 gap-8">
             {filteredItems.slice(0, 6).map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="bg-coffee-100 text-coffee-800 text-xs px-2 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">
                            {item.rating}
                          </span>
                        </div>
                        <span className="text-2xl">{item.image}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-coffee-600">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Cart Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {cart[item.id] ? (
                        <>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-coffee-100 text-coffee-600 p-2 rounded-full hover:bg-coffee-200 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="text-lg font-semibold text-gray-900 min-w-[2rem] text-center">
                            {cart[item.id]}
                          </span>
                          <button
                            onClick={() => addToCart(item.id)}
                            className="bg-coffee-100 text-coffee-600 p-2 rounded-full hover:bg-coffee-200 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => addToCart(item.id)}
                          className="btn-primary text-sm py-2 px-4"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {Object.keys(cart).length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">
                ${getCartTotal().toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">
                {Object.values(cart).reduce((a, b) => a + b, 0)} items
              </div>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Special Offers */}
      <section className="section-padding bg-coffee-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Special Offers
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss out on our limited-time deals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Happy Hour
                </h3>
                <p className="text-gray-600 mb-6">
                  All cold drinks 20% off from 2 PM to 5 PM
                </p>
                <div className="bg-coffee-100 text-coffee-800 px-4 py-2 rounded-full font-medium">
                  2 PM - 5 PM Daily
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Loyalty Program
                </h3>
                <p className="text-gray-600 mb-6">
                  Earn points with every purchase and get free drinks
                </p>
                <button className="btn-primary">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
