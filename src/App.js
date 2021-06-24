import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/form-input/form-input.component";
import Button from "./components/button/button.component";

function App() {
  const [userName, setUserName] = useState("");

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className='App'>
      <FormInput onChange={onChange} name='username' value={userName} />
      <Button type='button' label='Search User' />
    </div>
  );
}

export default App;
