import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Youridea from './components/yourideas/Yourideas';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <div className="wrapper">
        <Header />
        
        <Route path='/index' component={Main}/>
        <Route path='/profile' component={Youridea}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
