import { useState, useEffect } from 'react';
import ProductGrid from "../components/shop/ProductGrid";
import Toast from '../components/ui/Toast';


function ShopPage({ filteredProducts, cart, addToCart }) { 
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ sortOption, setSortOption ] = useState("newest");

  const [ toast, setToast ] = useState(null);

  const handleToast = () => {
      setToast({
          message: "✔ Cart updated successfully!",
          type: "success"
      })
  }


  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low-high") {
      return a.price - b.price;
    }

    if (sortOption === "high-low") {
      return b.price - a.price;
    }

    if (sortOption === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    return 0;
  });

  // Reset to page 1 when filtered products change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts, sortOption]);

  const productsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Get products for current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    handleScrollToTop();
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    
  return (

    <section id="shop-page">
      <div className="shop-container">
        <div className="shop-header">
          <p className="shop-results">
            Showing <strong>{currentProducts.length}</strong> of <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? "result" : "results"}
          </p>
          <div className="sort">
            <p>Sort by:</p>
            <select 
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="shop-content">
          <ProductGrid 
            cart={cart} 
            addToCart={addToCart} 
            handleToast={handleToast}
            products={currentProducts}
            />
        </div>

        {totalPages > 1 && (
          <div className="pagination-controls">
            <button 
              onClick={() => {handlePageChange(currentPage - 1); handleScrollToTop();}}
              disabled={currentPage === 1}
              className="pagination-btn prev-btn"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => {handlePageChange(index + 1); handleScrollToTop();}}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              onClick={() => {handlePageChange(currentPage + 1); handleScrollToTop();}}
              disabled={currentPage === totalPages}
              className="pagination-btn next-btn"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Render Toast */}
      {toast && (
        <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
        />
      )}
    </section>
  )
}

export default ShopPage;