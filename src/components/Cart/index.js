import Header from "../Header";
import CartListView from "../CartListView";

import CartContext from "../../context/CartContext";
import EmptyCartView from "../EmptyCartView";

import "./index.css";
import CartSummary from "../CartSummary";

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList, removeAllCartItems } = value;
      const showEmptyView = cartList.length === 0;
      // TODO: Update the functionality to remove all the items in the cart
      const onClickRemoveAllItems = () => {
        removeAllCartItems();
      };

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
                <button type="button" onClick={onClickRemoveAllItems}>
                  Remove All
                </button>
                <CartSummary />
              </div>
            )}
          </div>
        </>
      );
    }}
  </CartContext.Consumer>
);
export default Cart;
