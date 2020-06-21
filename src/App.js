import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import Views
import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <div>
      <Router>

        <Header />
        
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        
        <Footer />

      </Router>
    </div>
  );
}

export default App;
