var React = require("react");

var Home = React.createClass({
    componentDidMount: function() {
        console.log("home component has mounted");
    },
    render: function() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-5">
                        <h3> Bio </h3>
                        <img className="headshot" src="/img/headshot-100x140.jpg" alt="headshot" />
		                <p> Being a life-long musician with a BA in music composition from Columbia College '13, and as someone who has been continually giving lessons on the side, I've been getting increasingly frustrated at the lack of efficient resources available for pulling lesson materials together on a weekly basis. I'm seeking to become a full-stack developer in pursuits of making a website that will be a lesson planning powerhouse for myself and other music instructors. </p>
                    </div>
                    <div className="col-md-5" />
                </div>
            </div>
        );
    }
});

module.exports = Home;