import { useNavigate } from "react-router";
import { MoveRight } from "lucide-react";

function PlaceOrder({ total, clearCart, formatPrice }) {

    const navigate = useNavigate();

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <button 
            type="submit"
            className="place-order"
            onClick={() => {
                navigate("/confirmation");
                clearCart();
            }}
            >
                Place Order - {formatPrice(total)} <MoveRight />
            </button>
        </form>
    )
}

export default PlaceOrder;