import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Landing from './components/Landing';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Route exact path="/" component={Landing} />
      </header>
    </Router>
  );
}

export default App;