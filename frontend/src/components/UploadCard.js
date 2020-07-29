import React from "react";
import { GetApp, Share } from "@material-ui/icons";
import { Grid, Paper, Typography } from "@material-ui/core";

const UploadCard = ({ title, description, uploadDate }) => {
  return (
    <Grid item xs={3} style={{ padding: "2em" }}>
      <Paper style={{ padding: "1em" }}>
        <Typography variant="h4">{title}</Typography>
        <Typography>{description}</Typography>
        <Typography>Uploaded: {uploadDate}</Typography>
        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
          <Share style={{ cursor: "pointer" }} />
          <GetApp style={{ cursor: "pointer" }} />
        </div>
      </Paper>
    </Grid>
  );
};

export default UploadCard;
