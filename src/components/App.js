import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import LearnMore from './LearnMore';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import WorkCited from './WorkCited';

const App = () => (
  <HashRouter>
    <div className="container rounded bg-transparent">
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/learnmore" component={LearnMore} />
        <Route path="/workcited" component={WorkCited} />
        <Route component={Home} />
      </Switch>
    </div>
    <Footer />
  </HashRouter>
);

export default App;
