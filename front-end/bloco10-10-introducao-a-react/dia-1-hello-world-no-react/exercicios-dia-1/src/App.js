import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['meditar', 'pilates', 'codar']
class App extends React.Component{
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa))}</ul>
    )
  }
  
}

export default App;
