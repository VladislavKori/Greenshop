import { Modal } from '@ui/components/atoms'
import './orderModal.css'

import { PrewiwIcon1, PrewiwIcon2, PrewiwIcon3, ThankYouIcon } from '@ui/assets/OrderImages/imports'
import { CloseIcon } from '@ui/assets/AuthImages/imports'
import { Link } from 'react-router-dom'

function OrderModal() {
  return (
    <Modal>
      <div className="modal__close">
        <img className="modal__close-img" src={CloseIcon} alt="close-btn" />
      </div>

      <div className="modal__order">

        <div className="modal-order__success">
          <img className="modal-order__success-img" src={ThankYouIcon} alt="thank-you" />
          <p className="modal-order__success-text">Your order has been received</p>
        </div>

        <div className="modal-order__info">
          <ul className="modal-order__info-list">
            <li className="modal-order__info-item">
              <p className="modal-order__info-name">Order Number</p>
              <p className="modal-order__info-data">19586687</p>
            </li>

            <li className="modal-order__info-item">
              <p className="modal-order__info-name">Date</p>
              <p className="modal-order__info-data">15 Sep, 2021</p>
            </li>

            <li className="modal-order__info-item">
              <p className="modal-order__info-name">Total</p>
              <p className="modal-order__info-data">2,699.00</p>
            </li>

            <li className="modal-order__info-item">
              <p className="modal-order__info-name">Payment Method</p>
              <p className="modal-order__info-data">Cash on delivery</p>
            </li>
          </ul>
        </div>

        <div className="order-details modal-order__details">
          <h1 className="order-details__title">Order Details</h1>
          <div className="order-details__columns">
            <h2 className="order-details__column-name order-details__column-products">Products</h2>
            <h2 className="order-details__column-name order-details__column-qty">Qty</h2>
            <h2 className="order-details__column-name order-details__column-subotal">Subotal</h2>
          </div>
          <div className="order-details__products">
            <ul className="order-details__products-list">

              <li className="order-details__product">
                <img className="order-details__product-img" src={PrewiwIcon1} alt="Какой то цветок" />
                <div className="order-details__product-info">
                  <h2 className="order-details__product-name">Barberton Daisy</h2>
                  <p className="order-details__product-number">SKU: 1995751877966</p>
                </div>
                <p className="order-details__product-quantity">(x 2)</p>
                <p className="order-details__product-price">$238.00</p>
              </li>

              <li className="order-details__product">
                <img className="order-details__product-img" src={PrewiwIcon2} alt="Какой то цветок" />
                <div className="order-details__product-info">
                  <h2 className="order-details__product-name">Barberton Daisy</h2>
                  <p className="order-details__product-number">SKU: 1995751877966</p>
                </div>
                <p className="order-details__product-quantity">(x 6)</p>
                <p className="order-details__product-price">$834.00</p>
              </li>

              <li className="order-details__product">
                <img className="order-details__product-img" src={PrewiwIcon3} alt="Какой то цветок" />
                <div className="order-details__product-info">
                  <h2 className="order-details__product-name">Barberton Daisy</h2>
                  <p className="order-details__product-number">SKU: 1995751877966</p>
                </div>
                <p className="order-details__product-quantity">(x 9)</p>
                <p className="order-details__product-price">$1,611.00</p>
              </li>

            </ul>

            <div className="order-details__result">
              <div className="order-details__result-shiping">
                <h2>Shiping</h2>
                <p>$16.00</p>
              </div>
              <div className="order-details__result-total">
                <h2>Total</h2>
                <p>$2,699.00</p>
              </div>
            </div>
          </div>
        </div>

        <p className="modal-order__message">Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>

        <Link className="modal-order__btn modal__btn" to="/">Track your order</Link>

      </div>
    </Modal>
  )
}

export default OrderModal