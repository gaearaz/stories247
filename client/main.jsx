import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '/imports/ui/App'

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
