import "./index.css";
import CartContext from "../../context/CartContext";

const PaymentOptions = (props) => {
  const { details } = props;
  const { id, displayText } = details;

  //   const disabled = id !== "COD" ? "disabled" : "";

  return (
    <CartContext.Consumer>
      {(value) => {
        const { confirmOrder } = value;
        const onChangePayment = (event) => {
          confirmOrder(event.target.value);
        };
        return (
          <li className="payment-container">
            <input
              id={id}
              name="payment"
              value={id}
              type="radio"
              onChange={onChangePayment}
              disabled={id !== "COD"}
            />
            <lable htmlFor={id} className="payment-label">
              {displayText}
            </lable>
          </li>
        );
      }}
    </CartContext.Consumer>
  );
};
export default PaymentOptions;
