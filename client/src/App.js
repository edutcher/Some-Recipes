import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import RecipeCard from "./components/RecipeCard";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Container style={{display:"flex", flexWrap:"wrap"}}>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />

        </Container>
    </div>
  );
}

export default App;
