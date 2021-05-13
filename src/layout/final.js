import './final.css';
import Sidebar from './sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
    AboutUs,
    OurAim,
    OurVision,
    Services,
    ServicesOne,
    ServicesTwo,
    ServicesThree,
    Events,
    EventsOne,
    EventsTwo,
    Contact,
    Support
} from '../content/about';

function Final() {
    return(
        <Router>
            <Sidebar/>
            <Switch>
                <Route path="/about" exact component={AboutUs} />
                <Route path="/about/aim" exact component={OurAim} />
                <Route path="/about/vision" exact component={OurVision} />
                <Route path="/services" exact component={Services} />
                <Route path="/services/services1" exact component={ServicesOne} />
                <Route path="/services/services2" exact component={ServicesTwo} />
                <Route path="/services/services3" exact component={ServicesThree} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/events" exact component={Events} />
                <Route path="/events/events1" exact component={EventsOne} />
                <Route path="/events/events2" exact component={EventsTwo} />
                <Route path="/support" exact component={Support} />
            </Switch>
        </Router>
    );
}

export default Final;