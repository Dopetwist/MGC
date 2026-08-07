import { MoveRight } from "lucide-react";

function PlaceOrder({ total, handleSubmit, formatPrice }) {

    return (
        <form onSubmit={handleSubmit}>
            <button 
            type="submit"
            className="place-order"
            >
                Place Order - {formatPrice(total)} <MoveRight />
            </button>
        </form>
    )
}

export default PlaceOrder;