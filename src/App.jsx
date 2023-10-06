import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <h1>Homepage</h1>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
