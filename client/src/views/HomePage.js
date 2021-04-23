import React from "react";
import NavBar from "./components/NavBar";
import RecipeCard from "./components/RecipeCard";
import Container from "@material-ui/core/Container";

function HomePage() {
  return (
    <div className="homePage">
      <NavBar />
      <Container style={{ display: "flex", flexWrap: "wrap" }}>
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

export default HomePage;
