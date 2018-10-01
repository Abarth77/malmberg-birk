import * as React from 'react'
import './style.scss'

interface DataVisualizationProps {
  name: string
  age: number
}

interface DataVisualizationState {
  inputText: string
  keyCode: number
}

class DataVisualization extends React.Component<DataVisualizationProps, DataVisualizationState> {

  constructor(props: DataVisualizationProps) {
    super(props)

    this.state = {
      inputText: '',
      keyCode: 0
    }

    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  public render(): JSX.Element {

    const { name, age } = this.props
    const realAge = age / 2

    return (

      <div>
        <p>{name}</p>
        <p>{realAge}</p>
        <p>{this.state.inputText} (keycode: {this.state.keyCode})</p>
        <input type='text' onKeyUp={ this.handleKeyUp } />
      </div>

    )

  }

  private handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    this.setState({
      inputText: event.currentTarget.value,
      keyCode: event.keyCode
    })
  }

}

export default DataVisualization
