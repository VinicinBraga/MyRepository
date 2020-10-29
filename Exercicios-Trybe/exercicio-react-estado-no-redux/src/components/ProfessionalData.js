import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInputToStore } from '../actions';

class ProfessionalData extends Component {
  render() {
    const { add } = this.props;

    return (
      <div>
        <div className="container">
          Resumo do currículo:
          <textarea
            name="resume"
            maxLength="1000"
            required
            // value={this.state.resume}
            onChange={(event) => add(event.target.name, event.target.value)}
          />
        </div>
        <div className="container">
          Cargo:
          <input
            type="text"
            name="role"
            maxLength="40"
            required
            // value={this.state.role}
            onChange={(event) => add(event.target.name, event.target.value)}
          />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name="roleDescription"
            maxLength="500"
            // value={this.state.roleDescription}
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

export default connect(null, mapDispatchToProps)(ProfessionalData);