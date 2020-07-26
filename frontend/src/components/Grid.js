import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import UploadCard from "./UploadCard";

const DisplayGrid = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        width: "90%",
        height: "80%",
      }}
    >
      <Paper style={{ width: "100%" }}>
        <Grid container spacing={3}>
          <UploadCard />
          <UploadCard />
          <UploadCard />
          <UploadCard />
          <UploadCard />
          <UploadCard />
          <UploadCard />
          <UploadCard />
          <UploadCard />
        </Grid>
      </Paper>
    </div>
  );
};

export default DisplayGrid;
