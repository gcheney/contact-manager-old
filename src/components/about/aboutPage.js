'use strict';

var React = require('react');

var AboutPage = React.createClass({
    render: function() {
        return (
          <div>
            <h1>This is a demo app created on the MERN stack</h1>
            <p>
                This app uses the following technologies:
                <ul>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
            </p>
          </div>  
        );
    }
});

module.exports = AboutPage;