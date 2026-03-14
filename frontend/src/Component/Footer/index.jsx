import React from 'react'
import { LuBriefcase, LuTruck, LuGift, LuClock } from 'react-icons/lu'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500&display=swap');

  .coupon-card {
    background: white;
    transform: rotate(12deg);
    box-shadow: 0 20px 60px rgba(0,0,0,0.25);
  }
  .coupon-card::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: #1e3a8a;
    border-radius: 50%;
  }
  .coupon-card::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: #1e3a8a;
    border-radius: 50%;
  }
  .dashed-border {
    border-left: 2px dashed #cbd5e1;
  }
  .newsletter-bg {
    background: linear-gradient(135deg, #1e2d6b 0%, #1e3a8a 50%, #2d4fc2 100%);
  }
  .floating-gift {
    animation: float 3s ease-in-out infinite;
  }
  .floating-gift:nth-child(2) { animation-delay: 0.5s; }
  .floating-gift:nth-child(3) { animation-delay: 1s; }
  .floating-gift:nth-child(4) { animation-delay: 1.5s; }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  .subscribe-btn {
    background: linear-gradient(135deg, #1e3a8a, #2d4fc2);
    transition: all 0.3s ease;
  }
  .subscribe-btn:hover {
    background: linear-gradient(135deg, #2d4fc2, #3b63e0);
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(30,58,138,0.4);
  }
  .feature-item {
    transition: all 0.2s ease;
  }
  .feature-item:hover {
    transform: translateY(-2px);
  }
  .footer-link {
    transition: color 0.2s ease;
    position: relative;
  }
  .footer-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: #1e3a8a;
    transition: width 0.2s ease;
  }
  .footer-link:hover::after { width: 100%; }
  .footer-link:hover { color: #1e3a8a; }
  .font-sora { font-family: 'Sora', sans-serif; }
  .font-inter { font-family: 'Inter', sans-serif; }
`

export default function Footer() {
  return (
    <div className="font-inter bg-white">
      <style>{styles}</style>

      {/* Newsletter Banner */}
      <section className="newsletter-bg relative overflow-hidden py-14 px-6">

        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-5 translate-y-1/2 -translate-x-1/3"></div>

        {/* Floating gift icons */}
        <div className="absolute right-8 top-6 opacity-20 floating-gift">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <rect x="3" y="8" width="18" height="13" rx="2"/>
            <path d="M12 8v13M3 12h18"/>
            <path d="M8 8c0-2 2-4 4-4s4 2 4 4"/>
          </svg>
        </div>
        <div className="absolute right-32 top-4 opacity-20 floating-gift">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M12 2l3 7H22l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7z"/>
          </svg>
        </div>
        <div className="absolute right-16 bottom-8 opacity-20 floating-gift">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <rect x="3" y="8" width="18" height="13" rx="2"/>
            <path d="M12 8v13M3 12h18"/>
          </svg>
        </div>
        <div className="absolute right-48 bottom-4 opacity-10 floating-gift">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 8v8M8 12h8"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

          {/* Left: text + form */}
          <div className="flex-1 z-10">
            <p className="text-blue-200 text-sm font-medium tracking-widest uppercase mb-2 font-sora">
              $20 discount for your first order
            </p>
            <h2 className="text-white text-4xl font-extrabold leading-tight mb-3 font-sora">
              Join our newsletter<br />and get...
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-xs">
              Join our email subscription now to get updates on promotions and coupons.
            </p>

            {/* Email form */}
            <div className="flex items-center max-w-md">
              <div className="flex items-center flex-1 bg-white rounded-l-lg px-4 py-3.5 shadow-lg">
                <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                />
              </div>
              <button className="subscribe-btn text-white font-semibold text-sm px-6 py-3.5 rounded-r-lg font-sora">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right: Coupon card */}
          <div className="relative flex-shrink-0 w-64 h-40 z-10">
            <div className="coupon-card relative w-full h-full rounded-xl flex overflow-hidden border border-gray-100">
              {/* Left strip */}
              <div className="w-1/3 bg-gradient-to-b from-blue-700 to-blue-900 flex items-center justify-center">
                <span
                  className="text-white text-xs font-bold uppercase tracking-widest"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  CAMPAIGN
                </span>
              </div>
              {/* Dashed separator */}
              <div className="w-px self-stretch dashed-border"></div>
              {/* Right content */}
              <div className="flex-1 flex flex-col items-center justify-center px-4">
                <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">DISCOUNT</span>
                <span className="text-5xl font-extrabold text-green-500 font-sora leading-none">
                  50<span className="text-2xl text-red-500">%</span>
                </span>
                <span className="text-gray-300 text-xs mt-2 text-center">Valid on first purchase</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Bar */}
      <section className="border-b border-gray-100 py-5 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="feature-item flex items-center gap-3 justify-center md:justify-start border-r border-gray-100 pr-4">
            <div className="w-10 h-10 flex items-center justify-center">
            <LuBriefcase size={32} />
            </div>
            <span className="text-sm font-medium text-gray-700">Everyday fresh products</span>
          </div>

          <div className="feature-item flex items-center gap-3 justify-center md:justify-start border-r border-gray-100 pr-4">
            <div className="w-10 h-10 flex items-center justify-center">
            <LuTruck size={32} />
            </div>
            <span className="text-sm font-medium text-gray-700">Free delivery for order over $70</span>
          </div>
          <div className="feature-item flex items-center gap-3 justify-center md:justify-start border-r border-gray-100 pr-4">
            <div className="w-10 h-10 flex items-center justify-center">
            <LuGift size={32} />
            </div>
            <span className="text-sm font-medium text-gray-700">Daily Mega Discounts</span>
          </div>
          <div className="feature-item flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 flex items-center justify-center">
            <LuClock size={32} />
            </div>
            <span className="text-sm font-medium text-gray-700">Best price on the market</span>
        </div>
        </div>
        </section>
      {/* Footer Categories */}
      <footer className="bg-gray-50 pt-14 pb-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Fruit & Vegetables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-4 font-sora">Fruit & Vegetables</h4>
            <ul className="space-y-2">
              {['Fresh Vegetables','Herbs & Seasonings','Fresh Fruits','Cuts & Sprouts','Exotic Fruits & Veggies','Packaged Produce','Party Trays'].map(item => (
                <li key={item}><a href="#" className="footer-link text-sm text-gray-500">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Breakfast & Dairy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-4 font-sora">Breakfast & Dairy</h4>
            <ul className="space-y-2">
              {['Milk & Flavoured Milk','Butter and Margarine','Cheese','Eggs Substitutes','Honey','Marmalades','Sour Cream and Dips','Yogurt'].map(item => (
                <li key={item}><a href="#" className="footer-link text-sm text-gray-500">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Meat & Seafood */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-4 font-sora">Meat & Seafood</h4>
            <ul className="space-y-2">
              {['Breakfast Sausage','Dinner Sausage','Beef','Chicken','Sliced Deli Meat','Shrimp','Wild Caught Fillets','Crab and Shellfish','Farm Raised Fillets'].map(item => (
                <li key={item}><a href="#" className="footer-link text-sm text-gray-500">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Beverages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-4 font-sora">Beverages</h4>
            <ul className="space-y-2">
              {['Water','Sparkling Water','Soda & Pop','Coffee','Milk & Plant-Based Milk','Tea & Kombucha','Drink Boxes & Pouches','Craft Beer','Wine'].map(item => (
                <li key={item}><a href="#" className="footer-link text-sm text-gray-500">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Breads & Bakery */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-4 font-sora">Breads & Bakery</h4>
            <ul className="space-y-2">
              {['Bread Loaves','Bagels & Buns','Cakes & Pastries','Cookies','Muffins','Tortillas & Flatbreads','Croissants','Donuts'].map(item => (
                <li key={item}><a href="#" className="footer-link text-sm text-gray-500">{item}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2026 FreshMart. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

    </div>
  )
}