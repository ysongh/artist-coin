import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Landing from './components/Landing';
import AdminProfile from './components/Admin/AdminProfile';
import ArtistProfile from './components/Artist/ArtistProfile';
import FanProfile from './components/Fan/FanProfile';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard/admin" component={AdminProfile} />
        <Route exact path="/dashboard/artist" component={ArtistProfile} />
        <Route exact path="/dashboard/fan" component={FanProfile} />
      </header>
    </Router>
  );
}

export default App;