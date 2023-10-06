import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  OnAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => {
        console.log(`speed is ${prevState.speed}`)
        return {speed: prevState.speed + 10}
      })
    }
  }

  OnBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        console.log(`speed is ${prevState.speed}`)
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading2">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button" type="button" onClick={this.OnAccelerate}>
            Accelerate
          </button>
          <button className="button2" type="button" onClick={this.OnBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
