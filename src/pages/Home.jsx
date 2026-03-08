import React from "react";
import Hero from "../components/ui/Hero";
import ProductGrid from "../components/ui/ProductGrid";
import Newsletter from "../components/ui/Newsletter";
import { latestDrops } from "../data/products";

const Home = ({ cartActions }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Latest Drops Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-yellow-500">Latest</span> Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Fresh drops every week. Limited quantities. Exclusive designs that
            define street culture.
          </p>
        </div>

        <ProductGrid products={latestDrops} cartActions={cartActions} />
      </section>

      {/* Featured Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center py-4">
              <div className="text-5xl sm:text-6xl font-bold text-yellow-500 mb-3">
                2K+
              </div>
              <p className="text-gray-600 text-base sm:text-lg">Happy Customers</p>
            </div>
            <div className="text-center py-4">
              <div className="text-5xl sm:text-6xl font-bold text-yellow-500 mb-3">
                50+
              </div>
              <p className="text-gray-600 text-base sm:text-lg">Exclusive Designs</p>
            </div>
            <div className="text-center py-4">
              <div className="text-5xl sm:text-6xl font-bold text-yellow-500 mb-3">12</div>
              <p className="text-gray-600 text-base sm:text-lg">Drops Per Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
