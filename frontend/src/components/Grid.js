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
        <Grid container>
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
          <UploadCard
            title="Hello there"
            description="This is the description."
            uploadDate="01/21/20"
          />
        </Grid>
      </Paper>
    </div>
  );
};

export default DisplayGrid;
