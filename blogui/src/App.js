import React from 'react';
import logo from './logo.svg';
import './App.css';

from
'react-router-dom';

function ShortArticle({article}) {
  return <div style={{display: "inline-block", width: '50%', verticalAlign: "top", boxSizing: "border-box" >;
    <h1> {article.title} </h1>;
    <p> {article.body.substr(0, 100).replace(/\s\S*$/)} ...</p>;
    <Link to={"/article/" + article.id}>Read more ... </Link>;
    </div>
    }

    function App({{articles}){
      return <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to my Blog</h2>
      </div>

      <div>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
      </Router>
      }

      export default App;
