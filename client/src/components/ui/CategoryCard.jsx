function CategoryCard({ category }) {
    return (
        <div key={category.id} className="category-card">
            <figure>
                <img src={category.image} alt={`${category.name} Image`} loading="lazy" />
            </figure>

            <div className="category-details">
                <h3>{category.name}</h3>
                <p>{category.pieces} Pieces</p>
            </div>
        </div>
    )
}

export default CategoryCard;