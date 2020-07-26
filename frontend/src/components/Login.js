import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";

const Login = () => {
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
    <div style={{ display: "flex", marginLeft: "auto", marginRight: "1rem" }}>
      <Button onClick={handleOpen}>Login</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="upload-form-title" aria-labelledby="upload-form-title">
          Login
        </DialogTitle>
        <DialogContent>
          <TextField
            id="username"
            required
            label="Username"
            style={{ width: "100%", marginBottom: "1rem" }}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="password"
            required
            label="Password"
            style={{ width: "100%", marginBottom: "1rem" }}
            onChange={handleChange}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ marginRight: "auto" }}
            onClick={handleClose}
            color="secondary"
          >
            Forgot Password
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
