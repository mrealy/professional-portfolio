var React = require("react");
var Link = require("react-router").Link;

var Main = React.createClass({
    render: function() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                        <div>
                            <div className="navbar-header">
                                <a className="navbar-brand nav-links" href="/">Michael's Portfolio</a>
                            </div>
                            <ul className="nav navbar-nav" id="nav-items">
                                <li><Link className="nav-links" to="/home"> About </Link></li>
                                <li><Link className="nav-links" to="/projects"> Projects </Link></li>
                                <li><Link className="nav-links" to="/resume"> Resume </Link></li>
                            </ul>
                        </div>
                        <div className="pull-right">
                            <a href="https://github.com/mrealy">
                                {/* github img icon */}
                                <img className="github thumbnail" src="/img/github-128.png" alt="github" />
                            </a>
                            <a href="https://www.linkedin.com/in/michael-realy-97421149">
                                {/* linkedin img icon */}
                                <img className="linkedin thumbnail" src="/img/linkedin-128.png" alt="linkedin" />
                            </a>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;