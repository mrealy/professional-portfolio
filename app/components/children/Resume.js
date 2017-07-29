var React = require("react");

var Resume = React.createClass({
    componentDidMount: function() {
        console.log("Resume component has mounted");
    },
    render: function() {
        return (
            <div className="main-container">
                <div className='embed-responsive'>
                    <object data='Resume.pdf' type='application/pdf' width='100%' height='100%'></object>
                </div>
            </div>
        );
    }
});

module.exports = Resume;