import React, { useState } from 'react';
import { Box, Star, ShoppingCart, Gift, Rocket, ArrowRight, Filter, Search, Tag, School, Award, Clock } from 'lucide-react';
import { ROBOT_KITS, CATEGORIES, SPECIAL_OFFERS } from '../constants';
import type { RobotKit } from '../types';

export function RobotKitsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKit, setSelectedKit] = useState<RobotKit | null>(null);
  const [showCart, setShowCart] = useState(false);

  const filteredKits = ROBOT_KITS.filter(kit => {
    const matchesCategory = !selectedCategory || kit.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = !searchQuery || 
      kit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      kit.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E2761] via-[#192657] to-[#7C162E] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-[#FF4D00]/20 rounded-full mb-6">
              <Rocket className="w-8 h-8 text-[#FF4D00]" />
            </div>
            <h1 className="text-6xl font-black mb-6 text-white" style={{ textShadow: '4px 4px 0px #FF4D00' }}>
              Build Amazing Robots
            </h1>
            <p className="text-xl text-[#FFC857] mb-8">
              Discover our collection of STEM-focused robot kits for all skill levels
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              {[
                { icon: <Award className="w-6 h-6" />, text: "Award-Winning Kits" },
                { icon: <School className="w-6 h-6" />, text: "STEM Certified" },
                { icon: <Gift className="w-6 h-6" />, text: "Free Shipping" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-[#5D9FFF]">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('kits-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-black text-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
              >
                Explore Kits <ArrowRight className="w-6 h-6" />
              </button>
              <button
                onClick={() => setShowCart(true)}
                className="px-8 py-4 bg-[#5D9FFF] hover:bg-[#4A8FFF] rounded-lg font-black text-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
              >
                View Cart <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offers Banner */}
      <div className="bg-[#FF4D00] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {SPECIAL_OFFERS.map((offer, index) => (
              <div key={index} className="flex items-center gap-3">
                <Tag className="w-5 h-5" />
                <div>
                  <p className="font-bold">{offer.title}</p>
                  <p className="text-sm">Use code: <span className="font-mono font-bold">{offer.code}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search robot kits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-black font-bold placeholder-gray-500 border-4 border-[#FF4D00] focus:border-[#5D9FFF] focus:ring-2 focus:ring-[#5D9FFF] outline-none"
            />
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-bold transition-all duration-200 ${
                !selectedCategory ? 'bg-[#FF4D00] text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              All Kits
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-bold transition-all duration-200 ${
                  selectedCategory === category.id ? 'bg-[#FF4D00] text-white' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Robot Kits Grid */}
      <div id="kits-section" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredKits.map((kit) => (
            <div key={kit.id} className="bg-[#1E2761] rounded-xl overflow-hidden border-4 border-[#FF4D00] transform hover:scale-105 transition-all duration-200">
              {kit.salePrice && (
                <div className="absolute top-4 right-4 bg-[#FF4D00] text-white px-3 py-1 rounded-full text-sm font-bold">
                  SALE
                </div>
              )}
              <div className="aspect-video">
                <img src={kit.image} alt={kit.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#5D9FFF]">{kit.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(kit.rating)
                                ? 'text-[#FF4D00] fill-current'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({kit.reviewCount})</span>
                    </div>
                  </div>
                  <span className="bg-[#FF4D00] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {kit.level}
                  </span>
                </div>
                <p className="text-[#FFC857] mb-4">{kit.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-white">
                    <School className="w-4 h-4 text-[#5D9FFF]" />
                    <span>Age: {kit.ageRange}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-4 h-4 text-[#5D9FFF]" />
                    <span>Build Time: {kit.buildTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#FF4D00]/30 pt-4">
                  <div>
                    {kit.salePrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black text-white">${kit.salePrice}</span>
                        <span className="text-lg text-gray-400 line-through">${kit.price}</span>
                      </div>
                    ) : (
                      <span className="text-2xl font-black text-white">${kit.price}</span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedKit(kit)}
                    className="px-6 py-2 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-bold transition-all duration-200 flex items-center gap-2"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kit Details Modal */}
      {selectedKit && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#1E2761] rounded-xl p-8 border-4 border-[#FF4D00] max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-black text-[#5D9FFF]">{selectedKit.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(selectedKit.rating)
                            ? 'text-[#FF4D00] fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400">({selectedKit.reviewCount} reviews)</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedKit(null)}
                className="p-2 text-white hover:text-[#FF4D00] transition-colors"
              >
                <Box className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedKit.image}
                  alt={selectedKit.name}
                  className="w-full rounded-lg mb-6"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#FFC857] mb-3">What's Included</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedKit.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-white">
                          <Gift className="w-4 h-4 text-[#FF4D00]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFC857] mb-3">Skills You'll Learn</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedKit.skills.map((skill, index) => (
                        <li key={index} className="flex items-center gap-2 text-white">
                          <Award className="w-4 h-4 text-[#FF4D00]" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#FFC857] mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedKit.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-white">
                        <Rocket className="w-4 h-4 text-[#FF4D00]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-[#FFC857] mb-3">Technical Specs</h3>
                  <div className="space-y-2 text-white">
                    <p className="flex justify-between">
                      <span className="text-gray-400">Dimensions:</span>
                      <span>{selectedKit.specifications.dimensions}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Weight:</span>
                      <span>{selectedKit.specifications.weight}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Battery Life:</span>
                      <span>{selectedKit.specifications.batteryLife}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Programming:</span>
                      <span>{selectedKit.specifications.programmingMethods.join(', ')}</span>
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-[#FF4D00]/30">
                  <div className="flex items-center justify-between mb-4">
                    {selectedKit.salePrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-black text-white">${selectedKit.salePrice}</span>
                        <span className="text-xl text-gray-400 line-through">${selectedKit.price}</span>
                      </div>
                    ) : (
                      <span className="text-3xl font-black text-white">${selectedKit.price}</span>
                    )}
                    <span className="text-[#FFC857]">Free Shipping</span>
                  </div>
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setSelectedKit(null);
                        setShowCart(true);
                      }}
                      className="w-full py-4 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-black text-xl transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Add to Cart <ShoppingCart className="w-6 h-6" />
                    </button>
                    <p className="text-center text-sm text-gray-400">
                      30-day money-back guarantee • Free shipping • Lifetime support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#1E2761] rounded-xl p-8 border-4 border-[#FF4D00] max-w-2xl w-full">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-black text-[#5D9FFF]">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 text-white hover:text-[#FF4D00] transition-colors"
              >
                <Box className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-[#1E2761]/50 rounded-lg border-2 border-[#FF4D00]">
                <div className="flex items-center gap-4">
                  <img
                    src={ROBOT_KITS[0].image}
                    alt={ROBOT_KITS[0].name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-[#FFC857]">{ROBOT_KITS[0].name}</h3>
                    <p className="text-white/70">Quantity: 1</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-white">${ROBOT_KITS[0].price}</span>
              </div>
              
              <div className="border-t border-[#FF4D00]/30 pt-6">
                <div className="flex justify-between mb-4">
                  <span className="text-[#FFC857]">Subtotal:</span>
                  <span className="text-white font-bold">${ROBOT_KITS[0].price}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-[#FFC857]">Shipping:</span>
                  <span className="text-white font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-black">
                  <span className="text-[#FFC857]">Total:</span>
                  <span className="text-white">${ROBOT_KITS[0].price}</span>
                </div>
              </div>
              
              <button
                className="w-full py-4 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-black text-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                Checkout Now <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trust Badges Section */}
      <div className="bg-[#1E2761]/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Gift className="w-12 h-12 text-[#FF4D00] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#5D9FFF] mb-2">Free Shipping</h3>
              <p className="text-[#FFC857]">On all orders worldwide</p>
            </div>
            <div>
              <Award className="w-12 h-12 text-[#FF4D00] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#5D9FFF] mb-2">Quality Guarantee</h3>
              <p className="text-[#FFC857]">30-day money back</p>
            </div>
            <div>
              <School className="w-12 h-12 text-[#FF4D00] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#5D9FFF] mb-2">STEM Certified</h3>
              <p className="text-[#FFC857]">Educational standards</p>
            </div>
            <div>
              <Rocket className="w-12 h-12 text-[#FF4D00] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#5D9FFF] mb-2">Lifetime Support</h3>
              <p className="text-[#FFC857]">Expert help anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
            Start Your STEM Journey Today
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of young engineers already building amazing robots with our kits
          </p>
          <button
            onClick={() => document.getElementById('kits-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-6 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-black text-2xl transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-3"
            style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
          >
            Explore Kits Now <Rocket className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}