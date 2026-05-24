import { useState, useEffect } from 'react';
import ProductGrid from "../components/shop/ProductGrid";


function ShopPage({ allProducts, filteredProducts }) { 
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ sortOption, setSortOption ] = useState("newest");
  const [ isSorted, setIsSorted ] = useState(false);


  // Sort products based on selected option
  const sortedProducts = [...allProducts].sort((a, b) => {
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
  }, [filteredProducts]);

  const productsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get products for current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
            onChange={(e) => { setSortOption(e.target.value); setIsSorted(true); }}
            >
              <option value="newest">Newest</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="shop-content">
          <ProductGrid products={isSorted ? sortedProducts : currentProducts} columns={4} />
        </div>

        {totalPages > 1 && (
          <div className="pagination-controls">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-btn prev-btn"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-btn next-btn"
            >
              Next
            </button>
          </div>
        )}
      </div>

    </section>
  )
}

export default ShopPage;