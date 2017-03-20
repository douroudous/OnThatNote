import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

$(function() {
  let notes = document.getElementById('note-interface');
  if (notes) {
    ReactDOM.render(
      <App />,
      notes
    );
  }
});
