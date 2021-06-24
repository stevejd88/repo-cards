import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form/form.component";
import FormInput from "./components/form-input/form-input.component";
import Button from "./components/button/button.component";
import CardList from "./components/card-list/card-list.component";

function App() {
  const [userName, setUserName] = useState("");
  const [githubUser, setGithubUser] = useState("");
  const [repos, setRepos] = useState({});

  useEffect(() => {
    getGitHubUser(githubUser);
  }, [githubUser]);

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  const getGitHubUser = async (user) => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    // const response = await fetch(
    //   `https://jsonplaceholder.typicode.com/${user}`
    // );
    const data = await response.json();
    setRepos(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setGithubUser(userName);
  };

  return (
    <div className='App'>
      {repos.length > 0 ? (
        <CardList data={repos} />
      ) : (
        <Form onSubmit={(e) => onSubmit(e)}>
          <FormInput onChange={onChange} name='username' value={userName} />
          <Button type='submit' label='Search User' />
        </Form>
      )}
    </div>
  );
}

export default App;
