import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInputToStore } from '../actions';

class PersonalData extends Component {
  render() {
    const { add } = this.props;

    return (
      <div>
        <div className="container">
          Nome:
          <input
            type="name"
            name="name"
            maxLength="40"
            required
            // value={}
            onChange={(event) => add(event.target.name, event.target.value)}
          />
        </div>
        <div className="container">
          Email:
          <input
            type="email"
            name="email"
            maxLength="50"
            required
            // value={}
            onChange={(event) => add(event.target.name, event.target.value)}
          />
        </div>
        <div className="container">
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength="11"
            required
            // value={}
            onChange={(event) => add(event.target.name, event.target.value)}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  add: (name, value) => dispatch(addInputToStore(name, value))
})

export default connect(null, mapDispatchToProps)(PersonalData);