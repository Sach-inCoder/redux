import { useSelector } from "react-redux";
export default function Cart({ cart }) {
    const selecter = useSelector((state)=>state.cart.value)
  return (
    <span className=""><i className="fas fa-cart-shopping"></i> {selecter}</span>
  );
}
