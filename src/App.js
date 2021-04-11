import React, { useState } from 'react';
import { MainPage } from './MainPage';
import { FirstPage } from './FirstPage';
import { LastPage } from './LastPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
    <div className="flex bg-gray-200 h-screen w-screen items-center justify-center ">
      <div className="bg-white  h-3/4 w-96 ">
        <Router>
          <Switch>
            <Route path="/last" component={LastPage} />
            <Route path="/main" component={MainPage} />
            <Route path="/" component={FirstPage} />
          </Switch>
        </Router>
      </div>
    </div >
  );
}

//flex flex-row flex-wrap flex-none


export default App;

// // className="flex flex-wrap flex-row justify-between w-14 "










