import { CreditCard, Landmark } from "lucide-react";

function PaymentForm({ total, setType, type, formatPrice }) {

  return (

    <div className="payment-info top">
      <p className="payment-method box-header">Payment Method</p>

      <div className="payment-options">
        <button
        className="pay-card payment-choice"
        onClick={() => setType("card")}
        >
            <CreditCard size={24} />
            Pay with Card
        </button>

        <button 
        className="bank-transfer payment-choice"
        onClick={() => setType("transfer")}
        >
            <Landmark size={24} />
            Bank Transfer
        </button>
      </div>

      {type === "card" && (
        <form className="card-form">
          <div className="input-box">
              <label htmlFor="card-num">Card Number</label>
              <input type="number" id="card-num" placeholder="5191 2312 3456 7890" required />
          </div>
          <div className="expiry input-box">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" placeholder="00/00" required />
          </div>

          <div className="cvv input-box">
              <label htmlFor="cvv-number">CVV</label>
              <input type="number" id="cvv-number" placeholder="345" maxLength={3} required />
          </div>
        </form>
      )}

      {type === "transfer" && (
        <div className="transfer-container">
          <p>Please transfer the total amount of <span><strong>{formatPrice(total)}</strong></span> to the below account!</p>

          <div className="company-account">
              <p><strong>Account Number:</strong> 0284954839</p>
              <p><strong>Bank:</strong> Polaris Bank</p>
              <p><strong>Account Name:</strong> Mylux Gold Collection </p>
          </div>

          <p className="paid-paragraph">After a successful transfer, click the <strong>"Place Order"</strong> button.</p>
        </div>
      )}
    </div>
  )
}

export default PaymentForm;