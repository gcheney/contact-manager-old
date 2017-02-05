$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/home/homePage');
var AboutPage = require('./components/about/aboutPage');
var ContactPage = require('./components/contacts/contactPage');
var Header = require('./common/header');

(function(win) {
    'use strict';

    var App = React.createClass({
        render: function() {
            var Child; 

            switch (this.props.route) {
                case 'about':
                    Child = AboutPage;
                    break;
                case 'contacts':
                    Child = ContactPage;
                    break;
                default:
                    Child = Home;
            }

            return (
                <div>
                    <Header />
                    <Child />
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();
})(window);
