import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../navBar";
import Home from "../home";
import Dashboard from "../dashboard";
import Dictionary from "../dictionary";
import MyDictionary from "../myDictionary";
import Support from "../support";
import Allcourses from "../allcourses";
import Notifications from "../notifications";
import StartPage from "../startPage";

function App () {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/dictionary" component={Dictionary} />
      <Route path="/mydictionary" component={MyDictionary} />
      <Route path="/support" component={Support} />
      <Route path="/allcourses" component={Allcourses} />
      <Route path="/start" component={StartPage} />
    </div>
  );
};

export default App;