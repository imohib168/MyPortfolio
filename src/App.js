import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './Components/index';

import HtmlAndCssProjectPage from './ProjectPages/Html&Css/HtmlAndCss';
import HtmlCssAndJsProjectPage from './ProjectPages/HtmlCss&Js/HtmlCssAndJs';
import ReactProjectPage from './ProjectPages/ReactProjects/ReactProjects';
import Home from './Home';
import AutoScrollToTop from './Components/AutoScrollToTop';

import { GlobalStyle } from './globalStyle';

const App = () => {
    return (
        <Router>
            <AutoScrollToTop />
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/htmlAndCssProjects" component={HtmlAndCssProjectPage} />
                <Route exact path="/htmlCssAndJsProjects" component={HtmlCssAndJsProjectPage} />
                <Route exact path="/reactProjects" component={ReactProjectPage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

