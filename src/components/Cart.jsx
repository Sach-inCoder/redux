import { useSelector } from "react-redux";
export default function Cart() {
    const selecter = useSelector((state)=>state.cart.value)
  return (
    <span className=""><i className="fas fa-cart-shopping"></i> {selecter}</span>
  );
}
