
function ShopPage() {
    
  return (

    <section id="shop-page">
      <div className="shop-container">
        <div className="shop-header">
          <p className="shop-results">Showing <strong>48</strong> results</p>
          <div className="sort">
            <p>Sort by:</p>
            <select>
              <option value="newest">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="shop-content">
          {/* Shop content goes here */}
        </div>
      </div>

    </section>
  )
}

export default ShopPage;