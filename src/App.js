import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="fs-main">
        <Container />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
