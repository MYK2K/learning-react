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
import Product from './views/Product';

function App() {
  return (
    <div className="position-relative">
      <Router>

        <Header />
        
        <div className="container-fluid p-3 pb-5">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>
        
        <Footer />

      </Router>
    </div>
  );
}

export default App;
