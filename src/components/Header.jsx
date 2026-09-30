
import Cart from "./Cart";
export default function Header() {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between">
        <h2 className="mb-0">My Shop</h2>
        <Cart/>
      </div>
    </header>
  );
}
