import CartContext from "../../context/CartContext";

const CartSummary = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList } = value;
      let totalBill = 0;
      cartList.forEach(
        (eachItem) => (totalBill += eachItem.price * eachItem.quantity)
      );
      return (
        <div>
          <h1>Order Total:Rs{totalBill}</h1>
          <p>{cartList.length}Items in cart</p>
        </div>
      );
    }}
  </CartContext.Consumer>
);

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
