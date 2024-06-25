/* eslint-disable @typescript-eslint/no-unused-vars */

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menus from "./components/Menus";

import Footer from "./components/Footer";
import KfcMobileLinks from "./components/KfcMobileLink";
import CardInformationCont from "./components/CardInformationCont";
import CommentVideo from "./components/CommentVideo";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Menus />
      <section className="bg-orange-100 main-container">
        <CardInformationCont />
        <KfcMobileLinks />
        <CommentVideo />
      </section>
      <Footer />
    </div>
  );
}

export default App;
