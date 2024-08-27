import { React, useState } from "react";
import * as Engine from "@mui/styled-engine"
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import List from "./List"

function Teste() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase =e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default Teste;