import { useState } from "react";
import { colors, styles } from "../../data/products";
// import { FiChevronDown } from "react-icons/fi";

const FilterBar = ({
  filters,
  onFilterChange,
  onCategoryChange,
  selectedCategory,
}) => {
  const [expandedFilter, setExpandedFilter] = useState(null);

  const toggleFilter = (filter) => {
    setExpandedFilter(expandedFilter === filter ? null : filter);
  };

  const handleColorChange = (color) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    onFilterChange({ ...filters, colors: newColors });
  };

  const handleStyleChange = (style) => {
    const newStyles = filters.styles.includes(style)
      ? filters.styles.filter((s) => s !== style)
      : [...filters.styles, style];
    onFilterChange({ ...filters, styles: newStyles });
  };

  const handlePriceChange = (range) => {
    onFilterChange({ ...filters, priceRange: range });
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h2 className="text-lg font-bold mb-6 text-gray-900">FILTERS</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleFilter("category")}
          className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:text-yellow-500 transition"
        >
          <span className="font-semibold text-gray-900">Category</span>
          <span className={`transition ${expandedFilter === "category" ? "rotate-180" : ""}`}>▼</span>
        </button>
        {expandedFilter === "category" && (
          <div className="py-3 space-y-2">
            <label className="flex items-center gap-2 cursor-pointer hover:text-yellow-500">
              <input
                type="radio"
                name="category"
                value="caps"
                checked={selectedCategory === "caps"}
                onChange={() => onCategoryChange("caps")}
                className="accent-yellow-500"
              />
              <span className="text-gray-700">Caps</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-yellow-500">
              <input
                type="radio"
                name="category"
                value="apparel"
                checked={selectedCategory === "apparel"}
                onChange={() => onCategoryChange("apparel")}
                className="accent-yellow-500"
              />
              <span className="text-gray-700">Apparel</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-yellow-500">
              <input
                type="radio"
                name="category"
                value="all"
                checked={selectedCategory === "all"}
                onChange={() => onCategoryChange("all")}
                className="accent-yellow-500"
              />
              <span className="text-gray-700">All Products</span>
            </label>
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleFilter("color")}
          className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:text-yellow-500 transition"
        >
          <span className="font-semibold text-gray-900">Color</span>
          <span className={`transition ${expandedFilter === "color" ? "rotate-180" : ""}`}>▼</span>
        </button>
        {expandedFilter === "color" && (
          <div className="py-3 space-y-2">
            {colors.map((color) => (
              <label
                key={color}
                className="flex items-center gap-2 cursor-pointer hover:text-yellow-500"
              >
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={() => handleColorChange(color)}
                  className="accent-yellow-500"
                />
                <span className="text-gray-700">{color}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Style Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleFilter("style")}
          className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:text-yellow-500 transition"
        >
          <span className="font-semibold text-gray-900">Style</span>
          <span className={`transition ${expandedFilter === "style" ? "rotate-180" : ""}`}>▼</span>
        </button>
        {expandedFilter === "style" && (
          <div className="py-3 space-y-2">
            {styles.map((style) => (
              <label
                key={style}
                className="flex items-center gap-2 cursor-pointer hover:text-yellow-500"
              >
                <input
                  type="checkbox"
                  checked={filters.styles.includes(style)}
                  onChange={() => handleStyleChange(style)}
                  className="accent-yellow-500"
                />
                <span className="capitalize text-gray-700">{style.replace("-", " ")}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <button
          onClick={() => toggleFilter("price")}
          className="w-full flex justify-between items-center py-3 border-b border-gray-200 hover:text-yellow-500 transition"
        >
          <span className="font-semibold text-gray-900">Price</span>
          <span className={`transition ${expandedFilter === "price" ? "rotate-180" : ""}`}>▼</span>
        </button>
        {expandedFilter === "price" && (
          <div className="py-3 space-y-2">
            {[
              [0, 50],
              [50, 75],
              [75, 100],
              [100, 1000],
            ].map((range) => (
              <label
                key={range.join("-")}
                className="flex items-center gap-2 cursor-pointer hover:text-yellow-500"
              >
                <input
                  type="radio"
                  name="price"
                  checked={filters.priceRange.join("-") === range.join("-")}
                  onChange={() => handlePriceChange(range)}
                  className="accent-yellow-500"
                />
                <span className="text-gray-700">
                  ₦{(range[0]*1000).toLocaleString()} - ₦{(range[1]*1000).toLocaleString()}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
