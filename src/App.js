import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import PageTV from "./containers/PageTV/PageTV";


function App() {
  return (
    <div className="App">
        <Layout>
            <Switch>
              <Route  path="/shows/:id" exact component={PageTV}/>
              <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
