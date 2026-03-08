import React, { useState, useMemo } from "react";
import FilterBar from "../components/ui/FilterBar";
import ProductGrid from "../components/ui/ProductGrid";
import { products } from "../data/products";

const Shop = ({ cartActions }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filters, setFilters] = useState({
    colors: [],
    styles: [],
    priceRange: [0, 1000],
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Color filter
      if (
        filters.colors.length > 0 &&
        !filters.colors.includes(product.color)
      ) {
        return false;
      }

      // Style filter
      if (
        filters.styles.length > 0 &&
        !filters.styles.includes(product.style)
      ) {
        return false;
      }

      // Price filter: ranges stored in thousands, convert for comparison
      const fullPrice = product.price;
      if (
        fullPrice < filters.priceRange[0] * 1000 ||
        fullPrice > filters.priceRange[1] * 1000
      ) {
        return false;
      }

      return true;
    });
  }, [selectedCategory, filters]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Shop <span className="text-yellow-500">El Chapo</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore our complete collection of exclusive streetwear and premium
            caps
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <FilterBar
              filters={filters}
              onFilterChange={setFilters}
              onCategoryChange={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </div>

          {/* Products */}
          <div className="lg:col-span-4">
            {filteredProducts.length > 0 ? (
              <>
                <div className="mb-6 text-gray-600 text-sm font-medium">
                  Showing {filteredProducts.length} products
                </div>
                <ProductGrid
                  products={filteredProducts}
                  cartActions={cartActions}
                />
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-gray-600 mb-6">
                  No products found matching your filters
                </p>
                <button
                  onClick={() => {
                    setFilters({
                      colors: [],
                      styles: [],
                      priceRange: [0, 1000],
                    });
                    setSelectedCategory("all");
                  }}
                  className="mt-4 text-yellow-400 hover:underline font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
