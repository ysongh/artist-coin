import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import About from './components/About';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AdminProfile from './components/Admin/AdminProfile';
import ArtistProfile from './components/Artist/ArtistProfile';
import FanProfile from './components/Fan/FanProfile';
import FanCheckout from './components/Fan/FanCheckout';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard/admin" component={AdminProfile} />
        <Route exact path="/dashboard/artist" component={ArtistProfile} />
        <Route exact path="/dashboard/fan" component={FanProfile} />
        <Route exact path="/dashboard/fan/checkout" component={FanCheckout} />
      </header>
    </Router>
  );
}

export default App;