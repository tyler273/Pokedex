// import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PokemonCardList from "./components/PokemonCardList";

function App() {
  return (
    <>
      <Header />
      <PokemonCardList />
      <Footer />
    </>
  );
}

export default App;
