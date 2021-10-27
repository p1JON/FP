import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav//Nav";
// import Content from "./components/Content//Content";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Content/ProfileContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <div className="wrapper__content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};
export default App;
