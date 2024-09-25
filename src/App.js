import "./styles/App.css";
import "./styles/pages.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <fragment className="App">
      <Header />
      <Main />
      <Footer />
    </fragment>
  );
}

export default App;
