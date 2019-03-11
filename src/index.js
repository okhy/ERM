import React from 'react';
import ReactDOM from 'react-dom';
// components
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent'
import ClassComponent from './components/ClassComponent/ClassComponent'
import PureComponent from './components/PureComponent/PureComponent'
import MethodComponent from './components/MethodComponent/MethodComponent'

ReactDOM.render(
  <div className="component-wrapper">
    <FunctionalComponent/>
    <br/>
    <ClassComponent/>
    <br/>
    <PureComponent/>
    <br/>
    {MethodComponent}
  </div>,
  document.getElementById('app')
);
