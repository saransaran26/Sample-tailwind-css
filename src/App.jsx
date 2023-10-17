import React from "react";
import "./App.css";
import Appbar from "./components/Appbar";
import Filter from "./components/Filter";
import Items from "./components/Items";
import SeasonSpecial from "./components/SeasonSpecial";
import Footer from "./components/Footer";

function App() {
  return (
   <>
   <Appbar></Appbar>
   <Filter></Filter>
   <Items></Items>
   <SeasonSpecial></SeasonSpecial>
   <Footer></Footer>
   </>
  );
}

export default App;
