var React = require("react");
var router = require("react-router");

var Route = router.Route;
var Router = router.Router;

var IndexRoute = router.IndexRoute;
var browserHistory = router.browserHistory;

// components
var Main = require("../components/Main");
var Home = require("../components/children/Home");
var Projects = require("../components/children/Projects");
var Resume = require("../components/children/Resume");
var Show = require("../components/children/Show");

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            {/* put child components here */}
            <Route path="Home" component={Home} />
            <Route path="Projects" component={Projects} />
            <Route path="Resume" component={Resume} />
            {/* <Route path="Show" component={Show} /> */}

            {/* Index route here */}
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

