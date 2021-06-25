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
  const [error, setUserError] = useState("");

  useEffect(() => {
    if (githubUser !== "") {
      getGitHubUser(githubUser);
    }
  }, [githubUser]);

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  const getGitHubUser = async (user) => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    // const response = await fetch(
    //   `https://jsonplaceholder.typicode.com/${user}`
    // );
    if (response.status === 404) {
      setUserError("User not found");
    }
    const data = await response.json();
    setRepos(data);
    // console.log("fetch", data.status);
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
          <FormInput
            onChange={onChange}
            name='username'
            value={userName}
            error={error}
          />
          <Button type='submit' label='Search User' />
        </Form>
      )}
    </div>
  );
}

export default App;
