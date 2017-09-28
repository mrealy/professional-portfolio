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
                    <div className="col-md-6 frame">
                        
                        <h3>About me</h3>  
                        <div className="row">
                            <hr />
                            <h4>Work</h4>
                            <hr />
                            <div id="img-frame" className="col-sm-2 spaceless">
                                <img className="headshot addmargin" src="/img/headshot-100x140.jpg" alt="headshot" />
                            </div>
                            <div id="text-frame" className="col-sm-10 addmargin">
                                <p id="work-text">Financial Assistant for Northwestern University in the Alumni Relations
                                and Development (ARD) department. Contributions include identifying/improving onboarding 
                                inefficiences, creating a travel calculator from compiled/analyzed travel data for 
                                zero based budgeting, providing ongoing financial reporting and support for over
                                30 teams, and a technical Systems Support Respresentative for ARD.  Seeking technical, project-oriented role to utilize communication, analysis and problem solving skills.</p>
                            </div>
                        </div>

                        <div className="row">
                            <hr />
                            <h4 id="personal"> Personal </h4>
                            <hr />
                            <div id="bot-text-frame" className="col-sm-9 addmargin">
                                <p id="personal-text"> Multi-instrumentalist, <a href="https://soundcloud.com/mike-realy">composer</a>, 
                                songwriter, and private instructor with a BA in music composition from Columbia College 
                                '13.   Sought out the Northwestern University Coding Bootcamp in order to learn skills 
                                for the development of a website for private instrumental lesson planning and sharing. </p>
                            </div>
                            <div id="bot-img-frame" className="col-sm-3 addmargin">
                                <img className="headshot pull-right" src="/img/cellist.jpg" alt="cellist" />
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