function OrderItems({ total, orderItems, formatPrice }) {
    return (
        <div className="order-items">
            {orderItems.map((product) => (
                <div key={product.id} className="order-box">
                <div className="product-image">
                    <img src={product.image} width={50} height={50} alt={product.name} loading="lazy" />
                    <div className="item-quantity">{product.quantity}</div>
                </div>

                <div className="product-contents">
                    <div className="product-name">
                    <h2 className="heading-text">{product.name}</h2>

                    <p className="cart-purity-text">{product.purity}</p>
                    </div>

                    <p className="body-text order-price">{formatPrice(product.price)}</p>
                </div>
                </div>
            ))}

            <div className="summary-stats">
                <div className="subtotal cart-flex">
                <p className="order-left-text">Subtotal</p>
                <p className="subtotal-amount">{formatPrice(total)}</p>
                </div>
                <div className="shipping cart-flex">
                <p className="order-left-text">Shipping</p>
                <p className="free">Free</p>
                </div>
            </div>

            <div className="total cart-flex">
                <p>Total:</p>
                <p className="total-amount">{formatPrice(total)}</p>
            </div>
        </div>
    )
}

export default OrderItems;