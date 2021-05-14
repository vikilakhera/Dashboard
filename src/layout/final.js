import './final.css';
import Sidebar from './sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
    AboutUs,
    Services,
    Events,
    Contact,
    Support
} from '../content/about';

function Final() {
    return(
        <Router>
            <Sidebar/>
            <Switch>
                <Route path="/about" exact component={AboutUs} />
                <Route path="/services" exact component={Services} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/events" exact component={Events} />
                <Route path="/support" exact component={Support} />
            </Switch>
        </Router>
    );
}

export default Final;