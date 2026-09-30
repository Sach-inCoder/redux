import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice";

export default function Product({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>Price: ₹{product.price}</p>
        <button
          onClick={() => dispatch(addItem(1))}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
