import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './components/AppRoot.jsx';

$(function() {
  let notes = document.getElementById('note-interface');
  if (notes) {
    ReactDOM.render(
      <AppRoot
      />,
      notes
    );
  }
});
