import React from "react";
import { useSelector } from "react-redux";
// import Header from "./components/Header";
// import Layout from "./components/Layout";

function Home() {
  const selectedTags = useSelector((state) => state.reducer.selectedTags);
  console.log("selectedTags", selectedTags);
  return (
    <div className="App">
      taha
      {/* <Header />
      <Layout /> */}
    </div>
  );
}

export default Home;
