import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ahmad Bookstore</h1>
        <p>Quality books that you will not find elsewhere (not even here :D)</p>
        <img src={require("./empty-shelf.jpg")} alt="empty shelf" />
      </header>
    </div>
  );
}

export default App;
