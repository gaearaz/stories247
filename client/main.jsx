import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '/imports/ui/pages/User';
import App from '/imports/ui/App'


Bert.defaults.style = 'growl-top-right';

const routing = (
  <Router>
    <div>
      
        <Route path="/" component={App} />
        <Route path="/user" component={User} />
      
    </div>
  </Router>
)

Meteor.startup(() => {
  render(routing, document.getElementById('react-target'));
});
