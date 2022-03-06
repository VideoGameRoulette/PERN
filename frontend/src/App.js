import React, { Fragment } from 'react';

import './App.css';

import AddUser from "./components/addUser";
import ListUsers from "./components/listUsers";

function App() {
  return (
    <Fragment>
      <div className="container">
        <AddUser />
        <ListUsers />
      </div>
    </Fragment>
  );
}

export default App;
