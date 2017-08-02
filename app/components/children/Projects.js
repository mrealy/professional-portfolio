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
    childClick: function(event) {
        this.setState({ toShow: "" });
    },
    renderProject: function() {
        return this.state.projects.map(function(project, index) {
            return (
                <div key={index}>
                    <hr />
                    <div className="wrapper addmargin">
                        <div className="row row-eq-height">
                            <div className="col-md-4">
                                <div className="project-img-border">
                                    <img className="project-image" src={project.screenshots[0]} />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-sm-10 spaceless">
                                        <h3 className="spaceless"> {project.title} </h3>
                                    </div>
                                    <div className="col-sm-2 spaceless">
                                        <p onClick={() => this.handleClick(project)} className="proj-details-btn"> More...</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col-sm-12 spaceless"> {project.short} </p>
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
                <Show project={this.state.toShow} buttonClick={this.childClick.bind(this)} />
            );
        } else {
            return (
                <div className="main-container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8 frame">
                            
                                <div className="row">
                                    <h3> Projects </h3>
                                    <hr />
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