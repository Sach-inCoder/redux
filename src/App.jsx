import Header from "./components/Header";
import Product from "./components/Product";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 1500,
    },
  ];

  return (
    <>
      <Header cartCount={0} />
      <div className="container">
        <h1>Products</h1>
        <div className="row">
          {products.map((product,index) => (
            <div key={index} className="col-md-4 col-6 mb-2">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
