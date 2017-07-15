var React = require("react");

var Show = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1> {this.props.project.title} </h1>
                <h3> Project Links </h3>
                <a href={this.props.project.github}> Github link </a>

                <h3> Goals </h3>
                <p> {this.props.project.goals} </p>

                <h3> Screen shots </h3>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="project-image" src={this.props.project.screenshots[0]} />
                    </div>
                    <div className="col-sm-3">
                        <img className="project-image" src={this.props.project.screenshots[1]} />
                    </div>
                    <div className="col-sm-3">
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