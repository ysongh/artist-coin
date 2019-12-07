import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Landing from './components/Landing';
import ArtistProfile from './components/Artist/ArtistProfile';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard/artist" component={ArtistProfile} />
      </header>
    </Router>
  );
}

export default App;