import * as React from 'react'
import './style.scss'

interface DataVisualizationState {
  subject: number
}

class DataVisualization extends React.Component<any, DataVisualizationState> {

  private subjects = [
    'Data Visualization', 'Big Data', 'Artificial Intelligence'
  ]

  constructor(props: any) {
    super(props)

    this.state = {
      subject: 0
    }
  }

  public componentDidMount() {
    setInterval(() => {
      const { subject } = this.state
      const nextSubject = subject === this.subjects.length-1 ? 0 : subject + 1

      this.setState({
        subject: nextSubject
      })

    }, 2000)
  }

  public render(): JSX.Element {
    const { subject } = this.state

    return (
      <div className='data-visualization'>
        <h1><span className='highlight'>{ this.subjects[subject] }</span>. <br />Get to the <span className='highlight'>why</span> and <span className='highlight'>how</span> faster</h1><br />
      </div>
    )

  }

}

export default DataVisualization
