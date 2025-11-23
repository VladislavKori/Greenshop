import './style.css'

function CartTotals() {
  return(
    <div className="cartTotals">
      <header className="cartTotals__header">
        <h1 className="cartTotals__title">Cart Totals</h1>
      </header>
      <p className="cartTotals__coupon-title">Coupon Apply</p>
      <div className="cartTotals__coupon-input">
        <input className="cartTotals__input" type='text' placeholder='Enter coupon code here...' />
        <button className="cartTotals__coupon-input-btn" type="button">
          Apply
        </button>
      </div>

      <div className="cartTotals__key-val">
        <h2 className="cartTotals__key-val-title">Subtotal</h2>
        <h2 className="cartTotals__val">$2,683.00</h2>
      </div>

      <div className="cartTotals__key-val">
        <h2 className="cartTotals__key-val-title">Coupon Discount</h2>
        <h2 className="cartTotals__val-unic">(-) 00.00</h2>
      </div>

      <div className="cartTotals__key-val">
        <h2 className="cartTotals__key-val-title">Shiping</h2>
        <h2 className="cartTotals__val">$16.00</h2>
      </div>

      <a className="cartTotals__view-shipping-charge" href="/">
        View shipping charge
      </a>

      <div className="cartTotals__key-val cartTotals__key-val-total">
        <h2 className="cartTotals__total">Total</h2>
        <h2 className="cartTotals__price">$2,699.00</h2>
      </div>

      <button
        className="cartTotals__chekout"
        type="button"
      >
        Proceed To Checkout
      </button>

      <a className="cartTotals__continue-shopping">Continue Shopping</a>

    </div>
  )
}

export default CartTotals;
