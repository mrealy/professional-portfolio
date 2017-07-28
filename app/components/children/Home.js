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
                    <div className="col-md-6">
                        <h3> Bio </h3>  
                        <div className="row">
                            <hr />
                            <h4>Work</h4>
                            <hr />
                            <div className="col-sm-2">
                                <img className="headshot" src="/img/headshot-100x140.jpg" alt="headshot" />
                            </div>
                            <div className="col-sm-10">
                                <p>Financial Assistant for Northwestern University in the Alumni Relations
                                and Development department. Contributions include identifying/improving onboarding 
                                inefficiences, creating travel calculator from compiled/analyzed travel data for 
                                zero based budgeting, providing ongoing financial reporting and support for over
                                30 teams, and System Support Respresentative for Finance.  Seeking role as developer
                                or systems analyst to utilize communication, analysis and problem solving skills.</p>
                            </div>
                        </div>

                        <div className="row">
                            <hr />
                            <h4 id="personal"> Personal </h4>
                            <hr />
                            <div className="col-sm-9">
                                
                                <p> Being a life-long musician with a BA in music composition from Columbia College 
                                '13, and as someone who has been continually giving lessons on the side, I've been 
                                getting increasingly frustrated at the lack of efficient resources available for 
                                pulling lesson materials together on a weekly basis. I'm seeking to become a 
                                full-stack developer in pursuits of making a website that will be a lesson planning 
                                powerhouse for myself and other music instructors. </p>
                            </div>
                            <div className="col-sm-3">
                                <img className="headshot" src="/img/cellist.jpg" alt="cellist" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" />
                </div>
            </div>
        );
    }
});

module.exports = Home;