import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInputToStore } from '../actions';

class Adress extends Component {
  render() {
    const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    const { add } = this.props;

    return (
      <div>
        <div className="container">
          Endereço:
          <input
            type="text"
            name="address"
            maxLength="200"
            required
            // value={}
            onChange={(event) => add(event.target.name, event.target.value)}
          />
        </div>
        <div className="container">
          Cidade:
          <input
            type="text"
            name="city"
            maxLength="28"
            required
            // value={}
            // onBlur={this.onBlurHandler}
            onChange={(event) => add(event.target.name, event.target.value)}
          />
        </div>
        <div className="container">
          Estado:
          <select
            name="countryState"
            required
            // value={}
            onChange={(event) => add(event.target.name, event.target.value)}
          >
              {states.map((value, key) =>
                <option key={key}>{value}</option>
                )
              }
          </select>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  add: (name, value) => dispatch(addInputToStore(name, value))
})

export default connect(null, mapDispatchToProps)(Adress);