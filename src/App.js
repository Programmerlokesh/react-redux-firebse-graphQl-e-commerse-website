import Header from "./components/Header/Header";
import "./default.scss";
import Homepage from "./pages/Home/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
