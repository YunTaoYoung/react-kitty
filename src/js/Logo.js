import React from 'react'
import CatPad from '../resources/cat-pad.svg'
import CatPadClose from '../resources/cat-pad-close.svg'

export default class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      background: CatPad
    }
  }

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          background: this.state.background === CatPad ? CatPadClose : CatPad
        }),
      1000
    )
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: 200,
          backgroundImage: `url(${this.state.background})`
        }}
      >
        Mew~
      </div>
    )
  }
}
