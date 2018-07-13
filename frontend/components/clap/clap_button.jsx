import React from 'react'
import { createClap } from '../../actions/clap_actions'
import { connect } from 'react-redux'

class ClapButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clapable_type: this.props.type,
      clapable_id: this.props.content.id,
      quantity: this.props.content.currentUserClaps
    }
    this.addToQuantity = this.addToQuantity.bind(this)
  }

  addToQuantity() {
    this.setState({ quantity: this.state.quantity + 1 })
  }

  render () {
    const totalClaps = this.props.content.totalClaps
    const currentUserClaps = this.props.content.currentUserClaps

    return (
      <div className="clap-container">
        <p className="clap-quantity">
          {this.state.quantity}
        </p>

        <button onClick={this.addToQuantity}>
          Clap
        </button>

        <p className="clap-total">
          {totalClaps}
        </p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createClap: (data) => dispatch(createClap(data))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ClapButton)