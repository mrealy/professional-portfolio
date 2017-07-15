var React = require("react");
var Link = require("react-router").Link;

var projects = require("../../projects");
var Show = require("./Show");

console.log(projects);

var Projects = React.createClass({
    componentDidMount: function() {
        console.log("Projects component mounted");
        console.log(this);
    },
    getInitialState: function() {
        return {
            projects: projects,
            toShow: ""
        }
    },
    handleClick: function(project) {
        console.log("clicked", project);
        console.log(project.title);
        this.setState({ toShow: project });
    },
    renderProject: function() {
        return this.state.projects.map(function(project, index) {
            return (
                <div key={index}>
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="project-image" src={project.screenshots[0]} />
                            </div>
                            <div className="row col-sm-8">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <h3> {project.title} </h3>
                                    </div>
                                    <div className="col-sm-10">
                                        <p onClick={() => this.handleClick(project)} className="proj-details-btn"> Details...</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <p> {project.short} </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            );
        }.bind(this));
    },
    render: function() {
        if (this.state.toShow !== "") {
            return (
                <Show project={this.state.toShow} />
            );
        } else {
            return (
                <div className="main-container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <div className="row">
                                <h3> Projects </h3>
                            </div>
                            <div className="row">
                                {this.renderProject()}
                            </div>
                        </div>
                        <div className="col-md-2" />
                    </div>
                    {this.props.children}
                    {/*{this.state.toShow !== "" && 
                    <Show project={this.state.toShow} />} */}
                </div>
            );
        }
    }
});

module.exports = Projects;