var React = require("react");

var Show = React.createClass({
    render: function() {
        return (
            <div className="container frame">
                <div className="row">
                    <h1 className="pull-left addmargin"> {this.props.project.title} </h1>
                    <p className="proj-details-btn pull-right addmargin" onClick={this.props.buttonClick}> Back to Projects </p>
                </div>
                <h3> Project Links </h3>
                <a href={this.props.project.github} target="blank"> Github link </a>
                <a className="addpadding" href={this.props.project.heroku} target="blank"> Open App </a>

                <h3> Goals </h3>
                <p> {this.props.project.goals} </p>

                <h3> Screen shots </h3>
                <div className="row">
                    <div className="col-sm-3 project-img-border rmv-padding">
                        <img className="project-image" src={this.props.project.screenshots[0]} />
                    </div>
                    <div className="col-sm-3 project-img-border rmv-padding">
                        <img className="project-image" src={this.props.project.screenshots[1]} />
                    </div>
                    <div className="col-sm-3 project-img-border rmv-padding">
                        <img className="project-image" src={this.props.project.screenshots[2]} />
                    </div>
                </div>

                <h3> Tools used </h3>
                <p> {this.props.project.tools} </p>
                
            </div>
            
        );
    }
});

module.exports = Show;