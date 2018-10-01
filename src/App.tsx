import * as React from 'react'
import './App.scss'
import DataVisualization from './Components/DataVisualization/DataVisualization';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <DataVisualization />
      </div>
    )
  }
}

export default App
