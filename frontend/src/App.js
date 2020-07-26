import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import "./App.css";

import Upload from "./components/Upload";
import Grid from "./components/Grid";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <AppBar style={{ flexDirection: "row" }}>
        <Typography
          position="static"
          style={{ width: "10%", margin: "1rem 0 1rem 2rem" }}
        >
          uStore
        </Typography>
        <Login />
      </AppBar>
      <Grid />
      <Upload />
    </div>
  );
}

export default App;
