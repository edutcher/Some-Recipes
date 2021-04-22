import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import RecipeCard from "./components/RecipeCard";
import FlexContainer from "./components/FlexContainer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { sizing } from '@material-ui/system'

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
