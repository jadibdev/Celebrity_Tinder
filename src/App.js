import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import Chats from './Chats'
import ChatScreen from './ChatScreen'

function App() {
  return (
    <div className="app">
      
      <Router>
        
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            {/* this renders a header but with a twist */}
            <Header backButton="/"/>
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{/* Header */}
        {/*<Header />*/}
        {/* Tinder cards */}
        {/* Buttons below tinder cards */}

        {/* Chats screen */}
        {/* Individual chat screen */}