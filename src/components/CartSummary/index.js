import { Component } from "react";

import CartContext from "../../context/CartContext";

import Popup from "reactjs-popup";

import PaymentOptions from "../PaymentOptions";

import "./index.css";

const listOfOptions = [
  { id: "UPI", value: "UPI", displayText: "UPI" },
  { id: "NetBanking", value: "NetBanking", displayText: "Net Banking" },
  { id: "Wallet", value: "Wallet", displayText: "Wallet" },
  { id: "Card", value: "Card", displayText: "Card" },
  { id: "COD", value: "COD", displayText: "Cash On Delivery" },
];

class CartSummary extends Component {
  state = { isPlaced: false };
  render() {
    const { isPlaced } = this.state;
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList, paymentOption } = value;
          let totalBill = 0;
          cartList.forEach(
            (eachItem) => (totalBill += eachItem.price * eachItem.quantity)
          );

          const UserPaymentOption = () => {
            if (paymentOption === "COD") {
              this.setState({ isPlaced: true });
            }
          };
          return (
            <div>
              <h1 className="order-total">Order Total: Rs{totalBill}</h1>
              <p className="item-in-cart">{cartList.length} Items in cart</p>
              <div>
                <Popup
                  modal
                  className="popup-overlay"
                  trigger={<button className="check-out">Check out</button>}
                  position="center center"
                >
                  <ul className="payment-list">
                    {listOfOptions.map((item) => (
                      <PaymentOptions
                        key={item.id}
                        details={item}
                        UserPaymentOption={UserPaymentOption}
                      />
                    ))}
                  </ul>
                  <p className="bill">Total Summary:</p>
                  <p className="bill">No.of items: {cartList.length}</p>
                  <p className="bill">Total Bill: {totalBill}</p>
                  <button
                    className="confirmBtn"
                    type="button"
                    onClick={UserPaymentOption}
                  >
                    Confirm Order
                  </button>
                  {isPlaced && (
                    <p className="success-message">
                      Your order has been placed successfully
                    </p>
                  )}
                </Popup>
              </div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default CartSummary;

//   addCartItem = product => {
//     const {cartList} = this.state
//     const productObject = cartList.find(
//       eachCartItem => eachCartItem.id === product.id,
//     )

//     if (productObject) {
//       this.setState(prevState => ({
//         cartList: prevState.cartList.map(eachCartItem => {
//           if (productObject.id === eachCartItem.id) {
//             const updatedQuantity = eachCartItem.quantity + product.quantity

//             return {...eachCartItem, quantity: updatedQuantity}
//           }

//           return eachCartItem
//         }),
//       }))
//     } else {
//       const updatedCartList = [...cartList, product]

//       this.setState({cartList: updatedCartList})
//     }
//   }
