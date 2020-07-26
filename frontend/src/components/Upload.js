import React, { useState } from "react";
import { Add } from "@material-ui/icons";
import {
  Button,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Input,
} from "@material-ui/core";

const Upload = () => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "absolute",
          top: "calc(100vh - 75px)",
          right: "35px",
        }}
        onClick={handleOpen}
      >
        <Add />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="upload-form-title" aria-labelledby="upload-form-title">
          Upload a file
        </DialogTitle>
        <DialogContent>
          <TextField
            id="title"
            required
            label="Title"
            style={{ width: "100%", marginBottom: "1rem" }}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="desc"
            required
            label="Description"
            variant="filled"
            multiline
            rows={3}
            size={"medium"}
            style={{ width: "100%", marginBottom: "1rem" }}
            onChange={handleChange}
          ></TextField>
          <Input type="file" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Upload;
