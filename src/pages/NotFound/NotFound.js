import React from "react";
import { Paper } from "@material-ui/core";

export default function NotFound() {
  return (
    <div className="container p-5">
      <Paper elevation={10}>
        <div className="d-flex align-items-center flex-column p-5">
          <h3>Sorry, this URL doesn't exist</h3>
          <a href="/">
            <button className="mt-2 mb-2 btn btn-warning">
              Back to home page
            </button>
          </a>
          <a href="/login">
            <button className="mt-2 mb-2 btn btn-secondary">Login</button>
          </a>
          <a href="/register">
            <button className="mt-2 mb-2 btn btn-secondary">Register</button>
          </a>
        </div>
      </Paper>
    </div>
  );
}
