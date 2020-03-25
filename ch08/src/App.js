import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Content from './components/Children/Content'

function App() {
  return (
    <div className="App">
      <Button buttonName='test' />
      <Button />
      <Button />
      <Button />
      <Content>
        <h1>Hello</h1>
        <p>text text text text text text text text text</p>
        <p>text text text text text text text text text</p>
        <p>text text text text text text text text text</p>
      </Content>
    </div>
  );
}

export default App;
