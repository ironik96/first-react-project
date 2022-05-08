import "./App.css";
import products from "./products";

function Product(props) {
  return (
    <div className="product-list">
      <span>
        {" "}
        <img className="product-img" src={props.image} alt="product" />{" "}
      </span>
      <span> {props.name} </span>
      <span> {props.price} </span>
    </div>
  );
}

function App() {
  const productsUI = products.map((p) => (
    <Product key={p.id} name={p.name} price={p.price} image={p.image} />
  ));
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ahmad Bookstore</h1>
        <p>Quality books that you will not find elsewhere (not even here :D)</p>
        <img src={require("./images/empty-shelf.jpg")} alt="empty shelf" />
        {productsUI}
      </header>
    </div>
  );
}

export default App;
