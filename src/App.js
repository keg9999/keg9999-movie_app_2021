//App.js: 리액트 앱을 실행하면 가장 먼저 나타날 화면을 구성해주는 파일.

import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
    </HashRouter>
  )
}

export default App;