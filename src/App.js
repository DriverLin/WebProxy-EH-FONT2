import React, { Component, useState, useEffect } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import GallaryCard from './components/GallaryCard'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListenScroll from './components/ListenScroll'
import LinearProgress from '@material-ui/core/LinearProgress';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MainPage from './components/MainPage'
import GallaryPage from './components/GallaryPage';



class App extends Component {
  render() {
    return (
      <HashRouter >
        <div className="App">
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/g/" exact component={GallaryPage}></Route>
        </div>
      </HashRouter>
    );
  }
}

export default App;
